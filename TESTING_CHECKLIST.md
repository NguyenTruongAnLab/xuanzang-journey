# Testing Checklist for UI/UX Updates

## Before Deployment - Testing Guide

### 1. Language Switching (EN/VI)
- [ ] Click EN button - verify all labels show English
- [ ] Click VI button - verify all labels show Vietnamese
- [ ] Switch back and forth - verify no errors in console
- [ ] Check distance shows "16,000 km" in both languages
- [ ] Verify modal content updates correctly

### 2. Panel Display (Desktop)
- [ ] Right panel width appears doubled (~640px)
- [ ] Left panel width appears doubled (~760px)
- [ ] Panels positioned lower (no overlap with basemap selector)
- [ ] Both panels visible simultaneously without overlap
- [ ] Vertical scrolling minimal on right panel

### 3. Vietnamese Mode Specific
- [ ] Location info shows compact format (single line)
- [ ] Ancient Chinese names show only romanization (e.g., "Cháng'ān" not "長安 (Cháng'ān)")
- [ ] Modern names display Vietnamese versions (e.g., "Tây An, Trung Quốc")
- [ ] Timeline markers show Vietnamese city names
- [ ] Summary panel title: "Tổng Quan Hành Trình"
- [ ] Illustration panel shows Vietnamese city names

### 4. Map Features
- [ ] City labels visible on major stops (start, end, major locations)
- [ ] Labels show city name and country
- [ ] Regular stops show labels on hover
- [ ] Direction arrows visible along the path
- [ ] Arrows point in travel direction
- [ ] No visible grid lines (lat/long) on map
- [ ] Monk avatar visible on map at current location

### 5. Monk Avatar Animation
- [ ] Avatar appears at starting location (Chang'an)
- [ ] Click any marker - avatar moves to that location
- [ ] Press Play - avatar moves along journey path
- [ ] Avatar performs emotion actions at stops
- [ ] Avatar visible above map but below UI panels

### 6. Timeline
- [ ] All markers show year, city, country
- [ ] Hover over marker - tooltip shows details
- [ ] Click marker - jumps to that location
- [ ] Vietnamese names display when VI selected
- [ ] Current position indicator updates smoothly

### 7. Responsive Behavior

#### Tablet (769px - 1024px)
- [ ] Left panel: ~500px wide
- [ ] Right panel: ~450px wide
- [ ] Both panels visible and functional
- [ ] No horizontal scrolling

#### Mobile (≤768px)
- [ ] Panels stack vertically at bottom
- [ ] Content readable and accessible
- [ ] Timeline controls work properly
- [ ] Illustration panel hidden on mobile

### 8. Accessibility
- [ ] Tab key navigates through controls
- [ ] Enter/Space activates buttons
- [ ] Arrow keys navigate timeline
- [ ] Screen reader announces location changes
- [ ] All buttons have ARIA labels

### 9. Performance
- [ ] Page loads within 3 seconds
- [ ] Language switch is instant
- [ ] Map panning is smooth
- [ ] No JavaScript errors in console
- [ ] Avatar animation is smooth (60fps)

### 10. Cross-Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (Chrome, Safari)

## Known Limitations
1. Country-specific timeline backgrounds not implemented (requires image assets)
2. Color phase bands retained for visual orientation
3. External CDN resources required (Bootstrap, Leaflet)

## Issue Reporting
If any test fails, please document:
- Browser and version
- Screen size/resolution
- Language selected (EN/VI)
- Steps to reproduce
- Expected vs actual behavior
- Console errors (if any)
