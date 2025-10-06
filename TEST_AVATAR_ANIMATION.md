# Avatar Animation Testing Guide

This document describes how to test the new animated avatar movement feature along the journey route.

## Testing Prerequisites

1. Open the application in a modern web browser (Chrome, Firefox, Safari, or Edge)
2. Ensure JavaScript is enabled
3. The map should load correctly (Leaflet library should not be blocked)

## Test Scenarios

### Test 1: Flag Display (Desktop UI)
**Expected Result**: Language buttons should show proper flag emojis, not just "GB" and "VI" text

**Steps**:
1. Open the application in desktop view (screen width > 1024px)
2. Look at the top navigation bar
3. Verify the language selector buttons show:
   - UK flag (🇬🇧) for English
   - Vietnamese flag (🇻🇳) for Vietnamese

**Pass Criteria**: Flags appear as colorful emoji icons, not plain text letters

---

### Test 2: Short Distance Animation (Timeline Click)
**Expected Result**: Avatar animates smoothly from one location to an adjacent location

**Steps**:
1. Open the application
2. Observe the monk avatar on the map (should be at Chang'an/Xi'an initially)
3. Click on the second location in the timeline (Wuwei)
4. Watch the avatar animation

**Expected Behavior**:
- Avatar should animate from Xi'an to Wuwei (~2-3 second duration)
- Walking animation should play during movement
- Avatar should stop at Wuwei when animation completes
- Side panel should update to show Wuwei details

**Pass Criteria**: 
- Avatar moves smoothly (not instant jump)
- Walking animation visible during travel
- Avatar stops at correct location

---

### Test 3: Long Distance Animation (Multiple Locations)
**Expected Result**: Avatar animates along the entire route through all intermediate locations

**Steps**:
1. Start at Chang'an (location 0)
2. Click on Bodh Gaya (location 19) in the timeline
3. Watch the avatar animation carefully

**Expected Behavior**:
- Avatar should travel through ALL locations between Xi'an and Bodh Gaya:
  - Xi'an → Wuwei → Dunhuang → Hami → Turpan → Kuqa → Aksu → Tokmok → Tashkent → Samarkand → Balkh → Bamiyan → Kabul → Peshawar → Taxila → Srinagar → Mathura → Kannauj → Varanasi → Bodh Gaya
- Animation should take approximately 6-8 seconds (capped at 8s max)
- Walking animation should play continuously
- Avatar should follow the actual journey route on the map

**Pass Criteria**:
- Avatar moves along the path (not straight line)
- Intermediate locations are traversed
- Animation completes at Bodh Gaya
- Duration feels reasonable (5-8 seconds)

---

### Test 4: Backward Journey Animation
**Expected Result**: Avatar can animate backward along the return journey

**Steps**:
1. Navigate to Nalanda (location 20)
2. Click on Dunhuang (location 2) in the timeline
3. Watch the avatar animation

**Expected Behavior**:
- Avatar should travel backward through the route
- Should pass through all intermediate locations in reverse order
- Animation duration should be appropriate for the distance (~6-8 seconds)

**Pass Criteria**:
- Avatar moves backward along historical route
- Animation is smooth
- Stops at correct destination

---

### Test 5: Map Marker Click
**Expected Result**: Clicking a map marker also triggers animated movement

**Steps**:
1. Start at any location
2. Click directly on a map marker (not timeline) that is several locations away
3. Watch the avatar animation

**Expected Behavior**:
- Avatar should animate to clicked location
- Should follow the route (not teleport)
- Walking animation should play
- Duration should scale with distance

**Pass Criteria**:
- Click on map marker triggers animation
- Animation follows route properly
- UI updates correctly

---

### Test 6: Multiple Rapid Clicks
**Expected Result**: New animation should cancel previous animation

**Steps**:
1. Click on a distant location in timeline
2. While animation is in progress, click on a different location
3. Observe behavior

**Expected Behavior**:
- Previous animation should stop immediately
- New animation should start from current position
- No glitches or frozen states
- Avatar should end at the most recently clicked location

**Pass Criteria**:
- Only one animation runs at a time
- No animation artifacts
- Avatar position is correct

---

### Test 7: Language Switching During Animation
**Expected Result**: Language switch doesn't break animation

**Steps**:
1. Start an animation to a distant location
2. While animating, click the Vietnamese flag button
3. Observe behavior

**Expected Behavior**:
- Animation continues smoothly
- UI text updates to Vietnamese
- Avatar continues to destination
- No JavaScript errors in console

**Pass Criteria**:
- Animation completes successfully
- Language changes correctly
- No console errors

---

## Animation Timing Reference

| Distance (steps) | Expected Duration |
|-----------------|-------------------|
| 1 location      | ~2.3 seconds      |
| 2 locations     | ~2.6 seconds      |
| 5 locations     | ~3.5 seconds      |
| 10 locations    | ~5.0 seconds      |
| 15 locations    | ~6.5 seconds      |
| 20+ locations   | ~8.0 seconds (max)|

Formula: `duration = min(2000 + (steps × 300), 8000)` milliseconds

---

## Known Limitations

1. **Map not visible**: If external CDN libraries (Bootstrap, Leaflet) are blocked by ad blockers or network restrictions, the map won't display. This is an environment issue, not a code issue.

2. **Emoji rendering**: Flag emojis may still appear as "GB" and "VI" on very old systems or browsers without emoji font support. Modern browsers should display them correctly.

3. **Animation smoothness**: On very slow devices, animation may appear less smooth due to hardware limitations.

---

## Debugging

If animations don't work as expected, check browser console for errors:

1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for JavaScript errors
4. Common issues:
   - "L is not defined" → Leaflet library didn't load
   - "journeyData is not defined" → Data file not loaded
   - "Cannot read property 'coordinates'" → Data structure issue

---

## Success Criteria Summary

✅ All tests pass:
- Flags display as emojis
- Short distance animations work smoothly
- Long distance animations follow the route
- Backward animations work
- Map marker clicks trigger animations
- Multiple clicks handled correctly
- Language switching doesn't break animations

✅ Visual quality:
- Animations are smooth (60fps)
- Walking animation plays during travel
- Avatar position is always correct
- No visual glitches or jumps

✅ User experience:
- Animation duration feels natural
- Long distances don't take too long (8s max)
- Short distances aren't too slow (2s min)
- UI remains responsive during animations
