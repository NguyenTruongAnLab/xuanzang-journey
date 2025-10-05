# Changelog - Xuanzang Journey

## Version 2.1 (December 2024)

### 🐛 Critical Bug Fix
- **Fixed website crash**: Resolved unclosed block comment in `map.js` (line 12-83) that prevented the entire website from loading
- All JavaScript functionality now works correctly

### ❌ Removed Features
- **Removed all share/bookmark functionality** as requested to focus on educational content:
  - Removed `updateShareButtons()` function and all social sharing code
  - Removed `copyShareLink()`, `fallbackCopyToClipboard()`, `showShareNotification()`
  - Removed `shareOnTwitter()` and `shareOnFacebook()` functions
  - Bookmark functionality already commented out in previous version
  - **Total reduction**: ~100 lines of code removed

### 📿 Enhanced Buddhist Educational Content
Added comprehensive Buddhist context and Xuanzang's personal experiences to 7 major locations:

#### New Content for 4 Locations:
1. **Samarkand (康國, Location 10)**
   - Buddhist context about religious diversity and Buddhism's decline in Central Asia
   - Xuanzang's observations of Zoroastrianism and mixed religious traditions
   
2. **Balkh (縛喝國, Location 11)**
   - Major Buddhist center with 100+ monasteries
   - Nava Vihara (New Monastery) - one of Central Asia's greatest learning centers
   - 3 months of intensive study with learned monks
   
3. **Bamiyan (梵衍那國, Location 12)**
   - Colossal Buddha statues (55m and 38m tall, destroyed 2001)
   - Cave monasteries and thousands of monks
   - Xuanzang's detailed documentation now serves as historical record
   
4. **Nalanda (那爛陀寺, Location 21)**
   - World's first residential university
   - 10,000 students, 2,000 teachers, library of 9 million manuscripts
   - 5 years of study under 106-year-old Shilabhadra
   - Mastered Yogacara philosophy and collected 657 Buddhist texts

#### Existing Enhanced Content (3 Locations):
5. **Chang'an (長安, Location 1)** - Tang Dynasty Buddhism, Great Ci'en Temple
6. **Dunhuang (敦煌, Location 3)** - Mogao Caves, Buddhist art center
7. **Turfan (高昌, Location 5)** - Bezeklik Caves, Buddhist kingdom

### 📚 Documentation Updates
- Updated `README.md` to reflect removed features and new Buddhist content
- Updated `ENHANCEMENTS_2024.md` with comprehensive change tracking
- Added Version 2.1 changelog section
- Removed all references to sharing and bookmarking in documentation

### 🌍 Bilingual Support
All new Buddhist content includes:
- English versions
- Vietnamese translations (`_vi` suffix)
- Consistent formatting and quality

### 📊 Statistics
- **Files Modified**: 4 (`map.js`, `journey-data-enhanced.js`, `README.md`, `ENHANCEMENTS_2024.md`)
- **Buddhist Content Coverage**: 7/29 locations (24%, 100% of major stops)
- **Code Changes**: +40 lines (content), -100 lines (features), Net: -60 lines
- **Languages Supported**: 2 (English, Vietnamese)

### ✅ Requirements Fulfilled
- ✅ Fixed critical website crash
- ✅ Removed all share/bookmark tools
- ✅ Added Buddhist information to major locations
- ✅ Added Xuanzang's personal experiences
- ✅ Timeline already shows year, city, country
- ✅ Image gallery already has 10+ images per location
- ✅ Responsive design maintained
- ✅ Image fallbacks working properly

### 🔜 Future Enhancements (Optional)
- Add Buddhist context to remaining 22 locations
- Implement timeline background images/gradients
- Add more historical sources and citations
- Enhance image galleries with additional photos
- Add audio descriptions or narration

---

## Version 2.0 (Previous Release)

### ✨ Major Features
- Multilanguage support (English/Vietnamese)
- Enhanced visual timeline with journey phases
- Animated Buddhist monk avatar with emotions
- Atmospheric effects (clouds, leaves, footsteps)
- Full keyboard navigation and accessibility
- Location search with autocomplete
- Expanded descriptions and historical context
- Authentic quotes from Xuanzang's writings
- Image carousel with 10+ images per location
- Robust image handling with lazy loading

### 📍 Journey Coverage
- 29 historical locations from Chang'an to Nalanda and back
- Detailed modern and ancient names
- Precise arrival/departure dates
- Travel times between locations
- Emotional context for each stop
- Historical quotes at key locations

---

## Version 1.0 (Initial Release)

### Core Features
- Interactive map with 29 locations
- Basic timeline slider (629-645 CE)
- Map markers and journey path
- Location information and images
- Responsive design
