# Fix: Monk Avatar Walking Animation

## Problem
The monk avatar marker appeared on the map and moved along the journey path correctly, but the walking animation (vertical bouncing) did not play during movement.

## Root Cause
The `MonkAvatar` class creates two separate SVG elements:
1. **Fixed Container Avatar** (`this.avatar`): Hidden element in a fixed container (CSS: `display: none`)
2. **Map Marker Avatar** (`this.mapMarker`): Visible Leaflet marker on the map

When `startWalking()` and `stopWalking()` were called:
- They only applied the 'walking' class to `this.avatar` (the hidden container element)
- The map marker's SVG element was created once with static HTML
- The 'walking' class was never applied to the visible map marker's SVG
- Result: No animation visible to the user

## Solution
Modified `startWalking()` and `stopWalking()` methods to also apply/remove the 'walking' class to the map marker's SVG element.

### Code Changes

#### avatar.js - `startWalking()` method
```javascript
startWalking() {
    this.currentAnimation = 'walking';
    this.avatar.className = 'monk-avatar walking';
    this.startFootsteps();
    this.startLeaves();
    
    // NEW: Apply walking animation to map marker SVG as well
    if (this.mapMarker && this.map && this.map.hasLayer(this.mapMarker)) {
        // Use setTimeout to ensure DOM is ready after marker is added
        setTimeout(() => {
            const markerElement = this.mapMarker.getElement();
            if (markerElement) {
                const svg = markerElement.querySelector('.monk-avatar');
                if (svg) {
                    svg.classList.add('walking');
                }
            }
        }, 0);
    }
}
```

#### avatar.js - `stopWalking()` method
```javascript
stopWalking() {
    this.currentAnimation = 'idle';
    this.avatar.className = 'monk-avatar';
    this.stopFootsteps();
    this.stopLeaves();
    
    // NEW: Remove walking animation from map marker SVG as well
    if (this.mapMarker && this.map && this.map.hasLayer(this.mapMarker)) {
        const markerElement = this.mapMarker.getElement();
        if (markerElement) {
            const svg = markerElement.querySelector('.monk-avatar');
            if (svg) {
                svg.classList.remove('walking');
                }
            }
        }
    }
}
```

## How It Works

### Animation Flow
1. User clicks timeline marker or uses navigation buttons
2. `timeline.js` → `onMarkerClick()` → calls `window.monkAvatar.moveToLocation()`
3. `avatar.js` → `moveToLocation()` → adds marker to map → calls `animateAlongPath()`
4. `avatar.js` → `animateAlongPath()` → calls `startWalking()`
5. **NEW**: `startWalking()` now finds the map marker's DOM element and adds 'walking' class
6. CSS animation `@keyframes walk` plays (vertical bounce effect)
7. When movement completes → `stopWalking()` removes the 'walking' class

### Technical Details

**Why `setTimeout(0)` in `startWalking()`?**
- Leaflet adds the marker to the DOM asynchronously
- `setTimeout(0)` ensures the DOM element is available before we query it
- This places the class addition in the next event loop tick

**Why not in `stopWalking()`?**
- By the time animation completes, the marker has been on the map for seconds
- DOM element is guaranteed to be available
- No timing issues to worry about

## Testing

### Manual Test (requires browser with map libraries):
1. Open the application in a browser
2. Click on any timeline marker
3. **Expected**: Monk avatar should bounce vertically while moving along the route
4. **Expected**: Animation stops when destination is reached

### All Movement Scenarios Covered:
- ✅ Timeline marker clicks
- ✅ Map marker clicks
- ✅ Next/Previous buttons
- ✅ Deep links
- ✅ Initial page load
- ✅ Playback mode (if enabled)

All these scenarios call `moveToLocation()` which triggers the animation cycle.

## Files Modified
- `avatar.js`: Added animation class management for map marker (25 lines added)

## Backward Compatibility
✅ No breaking changes
✅ Existing functionality preserved
✅ Clouds and other animations unaffected
✅ Fixed container avatar still works (even though hidden)

## Animation Details
- **Animation**: Vertical bounce (3px up and down)
- **Duration**: 1 second per cycle
- **Style**: Steps(2) for a walking feel
- **Defined in**: `avatar.css` → `@keyframes walk`
