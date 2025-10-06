# Xuanzang's Journey (629-645 CE)

> **📋 Project Memory Bank**: All project problems, diagnoses, and feature goals are tracked in [`status.md`](status.md) and [`roadmap.md`](roadmap.md).  
> DO NOT leave orphaned fix/test/temporary markdown files in the repo—consolidate all state in these two docs for a complete memory bank!

An interactive historical map showing the remarkable 16-year journey of the Chinese Buddhist monk Xuanzang from China to India and back, with modern city names, duration of stays, and historical context.

## 🗺️ Live Demo

[View the Interactive Map](https://NguyenTruongAnLab.github.io/xuanzang-journey/)

## 📖 About the Journey

Xuanzang (玄奘, 602-664 CE) was a Chinese Buddhist monk, scholar, and translator who undertook an epic 16-year journey (629-645 CE) from China to India to obtain Buddhist scriptures. His journey covered over 10,000 miles through some of the most challenging terrain in Asia, including:

- The Gobi Desert
- The Pamir Mountains
- Central Asian kingdoms
- Northern India and the Gangetic Plain

His detailed travelogue, "Great Tang Records on the Western Regions," became an invaluable historical document and later inspired the famous Chinese novel "Journey to the West."

## ✨ Features

### Core Features
- **Interactive Map**: Built with Leaflet.js showing the complete journey route
- **29 Historical Locations**: From Chang'an (Xi'an) to Nalanda and back
- **Modern & Ancient Names**: Each location shows both contemporary and historical names
- **Timeline Slider**: Interactive timeline from 629-645 CE
- **Play Mode**: Animated journey playback
- **Stay Durations**: See how long Xuanzang stayed at each location
- **Historical Context**: Detailed information about each stop
- **Historical Images**: Photos of significant sites (where available)
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### New Enhanced Features 🎉

#### 1. Multilanguage Support (EN/VN)
- **Language Switcher**: Toggle between English and Vietnamese instantly
- **Auto-Detection**: Automatically detects browser language preference
- **Complete Translation**: All UI elements, location data, and descriptions available in both languages
- **Persistent Selection**: Language preference saved in browser

#### 2. Enhanced Timeline Visualization
- **Visual Timeline**: Beautiful color-coded timeline showing journey phases
  - 🟢 Green: Departure & Silk Road (629-630)
  - 🟡 Yellow: Central Asia (630-631)
  - 🔵 Blue: India Study Period (631-642)
  - 🔴 Red: Return Journey (642-645)
- **Emotion Indicators**: Each stop shows Xuanzang's emotional state with emojis
  - 💪 Determined, 😊 Excited, 😓 Tired, 🤔 Contemplative
  - 😌 Peaceful, 🙏 Reverent, 🎉 Triumphant
- **Interactive Markers**: Click any point on timeline to jump to that location
- **Synchronized**: Timeline perfectly syncs with map and journey animation

#### 3. Animated Buddhist Monk Avatar
- **Custom SVG Character**: Hand-drawn Buddhist monk with traditional robe, staff, and prayer beads
- **Map Synchronization**: Avatar moves on the map to current location coordinates
- **Emotion-Based Animations**:
  - 🚶‍♂️ Walking animation during journey playback
  - 🙏 Bowing at reverent locations
  - 🧘 Meditating at peaceful and contemplative stops
  - 🎉 Celebrating at triumphant moments
- **Atmospheric Effects**:
  - ☁️ Floating clouds across the screen
  - 🍃 Falling leaves during travel
  - 👣 Footstep markers showing the path
- **Enhanced Play Button**: Mini monk icon shows animation state

#### 4. Enhanced Location Data
- **Ancient Names**: Original Chinese names (長安, 那爛陀寺, etc.)
- **Precise Timing**: Arrival and departure months for each location
- **Travel Times**: Calculated travel duration between stops
- **Emotional Context**: Xuanzang's state of mind at each location
- **Bilingual Descriptions**: Full context in both English and Vietnamese

#### 5. Interactive Side Panels (New!) 🎨
- **Left Illustration Panel**: 
  - Display location-specific images with carousel navigation
  - Previous/Next buttons to browse through historical photos
  - Beautiful gradient placeholders with emotion-based icons when images unavailable
  - Lazy loading and responsive images for better performance
  - Robust error handling with graceful fallback to placeholders

#### 6. Multiple Basemap Options 🗺️
- **5 Different Basemap Styles**: Switch between map views to suit your preference
  - 🌍 **ESRI National Geographic** (default): High-quality geographic basemap with terrain
  - 🛰️ **ESRI World Imagery**: Satellite view for real-world context
  - 🗺️ **ESRI Street Map**: Detailed street-level modern map
  - ⛰️ **Shaded Relief**: Topographic map highlighting elevation and terrain
  - 🗻 **OSM Topo**: OpenStreetMap topographic with detailed features
- **Easy Layer Control**: Top-right control panel for quick switching
- **Persistent Preference**: Your basemap choice is saved automatically
- **Proper Attribution**: All basemaps display required copyright information
  - Keyboard accessible (Tab, Enter, Space)
- **Right Summary Panel**:
  - Always visible journey statistics (duration, distance, progress)
  - Current location details and context
  - Historical quotes from Xuanzang's writings at key locations
  - Expanded descriptions with rich historical context
  - Buddhist context information where available
  - Xuanzang's personal experiences and challenges at each stop
  - Real-time updates as you navigate the timeline
- **No Popup Clutter**: All information displayed in clean side panels instead of map popups

#### 6. Enhanced Location Search 🔍
- **Fast Search**: Type-ahead search with debouncing for smooth performance
- **Comprehensive Results**: Search by location name, modern name, ancient name, or description
- **Smart Matching**: Case-insensitive search with partial matching
- **Visual Results**: Shows location name, modern name, and year in results
- **Keyboard Navigation**: Fully accessible with keyboard
- **Mobile Optimized**: Responsive search bar that adapts to screen size

#### 7. Buddhist Educational Content 📿
- **Buddhist Context**: Information about temples, monasteries, and religious significance at each stop
- **Xuanzang's Experiences**: Personal challenges, studies, and interactions with local communities
- **Historical Events**: Political and cultural context during his journey
- **7 Major Locations** with comprehensive Buddhist content:
  - Chang'an: Departure and Tang Dynasty Buddhism
  - Dunhuang: Mogao Caves and Buddhist art
  - Turfan: Bezeklik Caves and Buddhist kingdom
  - Samarkand: Religious diversity on the Silk Road
  - Balkh: 100+ monasteries and Nava Vihara
  - Bamiyan: Colossal Buddha statues and cave monasteries
  - Nalanda: World's first university and 5 years of study
- **Bilingual Content**: All Buddhist content available in English and Vietnamese

#### 8. Enhanced Content 📖
- **Expanded Descriptions**: Rich historical context for major locations
- **Xuanzang's Quotes**: Authentic quotes from his writings at key stops
  - "I would rather die going to the West than live by going back to the East." (Chang'an)
  - "The desert stretches vast and empty..." (Dunhuang)
  - "The sangharama of Nalanda is majestic and beautiful..." (Nalanda)
  - "I have traveled 50,000 li through 138 kingdoms..." (Return to Chang'an)
- **Bilingual Quotes**: All quotes available in English and Vietnamese
- **Visual Quote Display**: Styled quote boxes with elegant typography

### Accessibility Features ♿
- **Keyboard Navigation**: 
  - Arrow keys (← →) to navigate timeline
  - Space bar to play/pause
  - Tab key to navigate all controls
  - Enter/Space to activate buttons and carousel navigation
- **ARIA Labels**: All interactive elements properly labeled for screen readers
- **Live Regions**: Dynamic content updates announced to screen readers
- **High Contrast**: Readable color combinations throughout
- **Responsive Design**: Fully functional on all device sizes
- **Focus Indicators**: Clear visual feedback for keyboard navigation
- **Semantic HTML**: Proper use of roles and ARIA attributes

## 🚀 Technologies Used

- **Leaflet.js**: Interactive mapping library
- **Bootstrap 5**: Modern, responsive UI framework
- **OpenStreetMap**: Map tiles
- **Vanilla JavaScript**: No framework dependencies for core functionality

## 📍 Key Locations

The journey includes 29 key locations:

1. **Chang'an** (Xi'an, China) - Starting point (629 CE)
2. **Dunhuang** (Gansu, China) - Gateway to the Silk Road
3. **Turfan** (Xinjiang, China) - Received royal patronage
4. **Samarkand** (Uzbekistan) - Silk Road hub
5. **Balkh** (Afghanistan) - Major Buddhist center
6. **Bamiyan** (Afghanistan) - Giant Buddha statues
7. **Taxila** (Pakistan) - Ancient university city
8. **Srinagar** (Kashmir, India) - 2 years of study
9. **Nalanda** (Bihar, India) - 5 years at the great university ⭐
10. **Chang'an** (Return, 645 CE) - Triumphant homecoming

## 🛠️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/NguyenTruongAnLab/xuanzang-journey.git
   cd xuanzang-journey
   ```

2. Serve locally (any HTTP server):
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Using Python 2
   python -m SimpleHTTPServer 8080
   
   # Using Node.js
   npx http-server -p 8080
   ```

3. Open browser to `http://localhost:8080`

## 📁 Project Structure

```
xuanzang-journey/
├── index.html              # Main HTML file with enhanced structure
├── styles.css              # Custom styling
├── timeline.css            # Enhanced timeline visualization styles
├── avatar.css              # Animated monk avatar and atmosphere styles
├── map.js                  # Map initialization and interaction logic
├── journey-data.js         # Historical data for all 29 locations
├── journey-data-enhanced.js # Enhanced data with translations and emotions
├── i18n.js                 # Internationalization system (EN/VN)
├── timeline.js             # Enhanced timeline component
├── avatar.js               # Animated monk avatar system
├── README.md               # This file
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## 🌐 Internationalization (i18n)

### Adding a New Language

The project uses a simple i18n system. To add a new language:

1. Open `i18n.js`
2. Add a new language object in the `translations` object:
```javascript
translations.zh = {  // Chinese example
    'nav.title': '玄奘之旅',
    'nav.about': '关于',
    // ... add all keys
};
```
3. Update `getAvailableLanguages()` if needed
4. Add a button in `index.html` for the new language

### Translation Structure
- All translations are organized by category (nav, controls, timeline, etc.)
- Use parameter substitution with `{paramName}` syntax
- Emotions and UI elements are fully translatable

## 🎨 Customization

### Customizing the Monk Avatar
Edit `avatar.js` and modify the `getMonkSVG()` method to change:
- Colors and styling
- Size and proportions
- Additional accessories or features

### Customizing Timeline Phases
Edit `timeline.css` to change:
- Phase colors in `.phase-indicator` classes
- Timeline track gradient colors
- Marker sizes and styles

### Customizing Atmospheric Effects
Edit `avatar.css` to modify:
- Cloud sizes and speeds
- Leaf colors and fall patterns
- Footstep appearance

## 🔧 Advanced Features

### Emotion System
Each location has an associated emotion that triggers specific avatar animations:
- `determined`: Walking animation
- `excited`: Celebration animation
- `tired`: Stop walking
- `contemplative`: Meditation
- `peaceful`: Meditation
- `reverent`: Bowing
- `triumphant`: Celebration

Add or modify emotions in `journey-data-enhanced.js`.

## 🎯 How to Use

### Basic Navigation
1. **Explore the Map**: Click on any marker to see details about that location
2. **Use Timeline Slider**: Drag the slider to jump to different years
3. **Play Journey**: Click "Play Journey" to watch an animated progression with the monk avatar
4. **Read Details**: Click markers or view the info panel for historical context
5. **View Images**: See historical and modern photos of key sites

### Enhanced Features
6. **Switch Language**: Click EN/VI buttons in the top navigation to change language
7. **Interactive Timeline**: Click on any marker in the visual timeline to jump to that location
8. **Watch the Monk**: The animated monk avatar performs different actions based on location emotions
9. **Read Buddhist Context**: Learn about Buddhist temples, monasteries, and religious significance
10. **Understand Xuanzang's Experiences**: Read about his personal challenges and studies at each location
11. **Keyboard Navigation**: 
   - Use ← → arrow keys to move between locations
   - Press Space to play/pause the journey
   - Tab through all interactive elements
   - Type in search bar to find locations

### Understanding the Timeline
- **Colors**: The timeline is color-coded by journey phase
  - Green: Early journey through Silk Road
  - Yellow: Central Asian exploration
  - Blue: Main study period in India
  - Red: Return journey to China
- **Emojis**: Show Xuanzang's emotional state at each location
- **Hover**: Hover over timeline markers to see location names and dates

## 📚 Historical Accuracy & Sources

The data in this project is based on:
- Xuanzang's own travelogue "Great Tang Records on the Western Regions" (大唐西域記)
- Historical research and archaeological evidence
- Modern scholarly interpretations of the route
- Silk Road historical trade routes
- Timeline reconstructed from multiple historical sources

### Route Information
The journey path shown represents the historically documented route through:
- **Hexi Corridor**: Traditional Silk Road path through Gansu
- **Tarim Basin**: Northern and southern routes around the Taklamakan Desert
- **Transoxiana**: Through modern Uzbekistan and Kazakhstan
- **Hindu Kush**: Mountain passes through Afghanistan
- **Indian Subcontinent**: Through Kashmir, Punjab, and the Gangetic Plain

### Data Sources
- Ancient Chinese historical records (Tang Dynasty)
- Archaeological evidence from Silk Road sites
- Modern geographical mapping of historical locations
- Scholarly research on Buddhist pilgrimages
- UNESCO World Heritage documentation

**Note**: Some dates and durations are approximations based on historical records. The exact route and timing of certain segments remain subject to scholarly interpretation.

## 🤝 Contributing

Contributions are welcome! If you'd like to:
- **Add more historical details**: Help us expand location descriptions
- **Include additional images**: Add historical or modern photographs
- **Improve translations**: Enhance or add new language translations
- **Fix bugs or enhance features**: Technical improvements welcome
- **Add new visualizations**: Creative enhancements to the timeline or map
- **Improve accessibility**: Help make the site more accessible
- **Add more languages**: Expand beyond English and Vietnamese

Please open an issue or submit a pull request.

### Contributing Guidelines
1. Keep changes focused and well-documented
2. Maintain historical accuracy - cite sources
3. Follow existing code style and structure
4. Test on multiple browsers and devices
5. Update README if adding new features

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Historical data compiled from scholarly sources on Xuanzang's journey
- Map tiles from OpenStreetMap contributors
- Images from Wikimedia Commons (where used)
- Inspired by the historical significance of the Silk Road and Buddhist cultural exchange
- Translation support from native Vietnamese speakers
- Emoji artwork from system fonts

### Special Thanks
- Buddhist scholars and historians who documented this remarkable journey
- The OpenStreetMap community for detailed geographical data
- Silk Road archaeological researchers
- Tang Dynasty historical documentation preservationists

## 📖 Learn More

- [Xuanzang on Wikipedia](https://en.wikipedia.org/wiki/Xuanzang)
- [Great Tang Records on the Western Regions](https://en.wikipedia.org/wiki/Great_Tang_Records_on_the_Western_Regions)
- [Silk Road history](https://en.wikipedia.org/wiki/Silk_Road)
- [Journey to the West (novel inspired by Xuanzang)](https://en.wikipedia.org/wiki/Journey_to_the_West)
- [Nalanda University](https://en.wikipedia.org/wiki/Nalanda)
- [Tang Dynasty China](https://en.wikipedia.org/wiki/Tang_dynasty)

## 🆕 Recent Updates

### Version 2.1 (Current - December 2024)
- 🐛 **Critical Fix**: Fixed syntax error that broke website functionality
- ❌ **Removed Share/Bookmark Features**: Eliminated social sharing and bookmarking to focus on education
- 📿 **Enhanced Buddhist Content**: Added comprehensive Buddhist context to 7 major locations
- 🧘 **Xuanzang's Experiences**: Personal stories and challenges at key stops
- 🏛️ **Historical Detail**: Expanded content about monasteries, universities, and Buddhist art
- 🌏 **Bilingual Buddhist Content**: All new content available in English and Vietnamese

### Version 2.0
- ✨ Added multilanguage support (English/Vietnamese)
- 🎨 Enhanced visual timeline with journey phases
- 🧘 Animated Buddhist monk avatar with emotions
- ☁️ Atmospheric effects (clouds, leaves, footsteps)
- ♿ Full keyboard navigation and accessibility
- 🗺️ Improved map region focus
- 📅 Detailed arrival/departure dates for all locations
- 🏯 Ancient names in original script
- 💭 Emotional context for each stop
- 🔍 Location search with autocomplete
- 🔗 Deep linking and URL routing for specific stops
- 📱 Social sharing buttons (Twitter/X, Facebook)
- 📖 Expanded descriptions with historical context
- 💬 Authentic quotes from Xuanzang's writings
- 🖼️ Robust image handling with lazy loading
- 🎯 Animated route path progression

### Version 1.0
- Initial release with 29 locations
- Basic timeline slider
- Interactive map with markers
- Historical information and images
