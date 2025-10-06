# GitHub Copilot Instructions for Xuanzang's Journey Project

This document provides comprehensive guidance for any AI agent or developer working with the NguyenTruongAnLab/xuanzang-journey project. This will allow fast, confident understanding and robust responses to any technical or content question.

## 🗺️ Project Overview

"Xuanzang's Journey (629-645 CE)" is an interactive map web app that visualizes the 16-year pilgrimage of the Chinese Buddhist monk Xuanzang from China to India and back.

- Displays historical and modern names, emotional context, Buddhist significance, duration of stays, and more for 29 distinct locations.
- Emphasizes historical storytelling, education, and accessibility.

## 📁 Major Folders & Files

### `/images/`
Contains core journey site image assets.

- **Image naming convention**: `{locationIndex}_{EnglishCityName}_{code}.jpg` (e.g., `01_Xian_0001.jpg`)
- There should be 4 images per location, codes: `0001`–`0004`
  - `0004` = road condition
  - `0001` = site view
  - `0002` = archaeological perspective
  - `0003` = Buddhist temple/monastery
- Used for side panel galleries and mobile carousel.

### `index.html`
Main HTML structure, all panels, containers, and most root elements.

### `styles.css`
Global custom styles.

### `timeline.css`
Styles for the enhanced timeline (colors, gradient track, phase highlights, marker size, etc.).

### `avatar.css`
Styles and animations for the monk avatar and atmospheric effects.

### `map.js`
Map creation, Layer control, marker initialization, journey path, and synchronizing avatar, marker, and panels.

Defines essential navigation functions, including:
- Map marker click and pan logic
- Path progress line logic
- Cross-module state sharing (`window.currentStepIndex`)

### `avatar.js`
Animated SVG Buddhist monk avatar system.

- Handles custom drawing, animation (walking, bowing, meditating, etc.)
- Exposes APIs to move along journey, trigger emotion, and sync position with the map.

### `timeline.js`
Enhanced interactive timeline (visual slider + markers)

- Renders all journey stops
- Handles timeline marker click to update location and trigger avatar movement

### `journey-data.js`
Core array of 29 journey stop objects, with base info (name, modern/ancient names, coordinates, etc.).

### `journey-data-enhanced.js`
Enhanced journey data, with bilingual fields, expanded narrative, emotion, Buddhist, and historical context.

### `i18n.js`
Internationalization logic

- All UI keys, structure for EN/VN (and easily extendable to other languages)

### `README.md`
Master project intro, features, development and usage instructions.

### `CHANGELOG.md`
History of major changes.

### `BASEMAP_GUIDE.md`, `ROUTE_NOTES.md`
Layer explanations and journey reconstruction notes.

### `.github/workflows/deploy.yml`
GitHub Pages deployment automation.

## ✨ Core Features

### Interactive Map
Leaflet.js-based, all stops clickable, progress line animated.

### Timeline
Enhanced visual timeline, journey phase colors, emoji emotional states.

### Multi-language Support
English/Vietnamese, with auto-detect and instant toggle.

### Side Panel & Mobile Panels
Rich, structured info (description, Buddhist context, historical events, quotes, images).

### Monk Avatar
Custom SVG—walks, bows, meditates, celebrates, moves with correct emotion per location.

### Multiple Basemaps
ESRI (Geographic, Imagery, Street), OSM Topo, etc.

### Image Galleries
Each stop pulls up to 4 images (with graceful fallback if images missing).

### Journey Statistics
Always-visible journey summary (distance, time, progress).

### Accessibility
Keyboard nav, ARIA labels, high contrast, focus indicators.

### Keyboard Support
Arrow keys (← →), space to play/pause, full tab navigation.

### Atmospheric Effects
Clouds drift, leaves fall, footsteps animate the path.

### Content Expansion
Buddhist significance ("Buddhist context"), Xuanzang's experiences, historical events, duration, arrival/departure.

## 💡 How the Project Works

### State Management
JS modules communicate via a shared index/global state (`window.currentStepIndex`).

### Navigation
Navigation (via timeline, map, panel, key, or swipe) should always use a central handler that updates:
- The monk avatar position/animation
- The summary panel (right)
- The info/details (side/mob panels)
- The animated path/progress
- Timeline and marker highlights

### Image Loading
Image loading always follows the English city name standard in `/images/`.

### Content Source
All narrative, historical, and UI text are sourced from the enhanced JS data and i18n system.

### Adding a Language
Add translations in `i18n.js` and UI button in `index.html`.

### Adding a Stop
Add to both `journey-data.js` and `journey-data-enhanced.js`, images in `/images/` with same naming convention.

## 🧑‍💻 For AI Agents/Developers

### Reading Content
Always read from enhanced data when presenting content.

### Synchronization
Sync panels, avatar, and timeline for every navigation update.

### Image Paths
**Never hardcode image paths**—always build from data object + `images/` naming convention.

### Search Functionality
Searches and interactions should be case-insensitive; search across `modernName`, `ancientName`, `description`, etc.

### Mobile vs Desktop
Mobile vs desktop panels: maintain parity of content; only layout changes differ.

### Atmospheric Effects
Atmosphere (clouds, leaves, footsteps) are handled via `avatar.css` and `avatar.js`, not in map layers!

### Integration
All features (timeline, avatar, panels, image gallery, progress) are deeply integrated for a seamless narrative and educational user experience.

## 📥 Contributing / Fixing / Extending

### Conventions
Keep code modular. Enhance only with clear, well-documented features.

### Debugging Cross-Module Updates
If syncing between avatar, panel, map, or timeline breaks, always check if shared handler/state is called in every navigation entry point!

### Documentation
Do not write/keep temporary `.md` "fix" or summary files—document major changes in `CHANGELOG.md` only.

### Memory Bank & Source of Truth
All current status, problem history, open issues, and solutions must be logged in two master markdown files in the repository root:
1. **`status.md`**:  
   - Tracks all unresolved and resolved bugs, critical symptoms/diagnosis, test coverage, and major root causes found.
   - Keeps a running log of what is broken and what is *fixed*—always up to date.
2. **`roadmap.md`**:  
   - Lists all upcoming, planned, or stretch features.
   - Tracks what work is in progress or planned, per release/milestone, with references to status items as needed.

### Cleaning/Removing Temporary Test & Fix Docs
**Rule:**
- **Immediately delete all temporary "test", "fix", or throwaway markdown files** after each work cycle.
- *Do not* keep files like `FIX_AVATAR_ANIMATION.md`, `TEST_AVATAR_ANIMATION.md`, or `CHANGES_*.md`, etc, once the issue is logged into `status.md` or `roadmap.md`.

### Workflow for AI Agents and Developers
1. **Whenever a new bug or feature is reported**, log it in `status.md` (bugs/fixes) or `roadmap.md` (feature/plan).
2. **DO NOT** create new ad-hoc `.md` files for discussions, fixes, or tests—*always* consolidate into `status.md` or `roadmap.md`.
3. **When investigating or fixing**, read `status.md` first to understand history and current focus.
4. **After fixing a bug or completing a feature:**
   - Mark the relevant entry as `[x]` in status.md (if bug), or move it to the "Resolved/Closed" section.
   - Briefly summarize what was changed (commit hash + summary/methods).
   - Remove any old, now-obsolete individual test/fix files.
5. **Push changes with a message like:**  
   `"Housekeeping: removed all temp test/fix md files, consolidated docs to status.md and roadmap.md as project memory bank."`

## 🤖 If You Are An AI Agent

When asked about any file, feature, or how to add/modify content, UI, or data, always refer to this structure and workflow before answering.

You can confidently guide users to add languages, stops, or troubleshoot navigation/image/sync because you always know where each part of the logic/data lives.

### Key Points to Remember

1. **Image Naming**: Always use English city names in image paths, not translated names
2. **State Sync**: `window.currentStepIndex` is the single source of truth for current location
3. **Data Source**: Use enhanced data (`journey-data-enhanced.js`) for rich content
4. **Navigation Flow**: Every navigation action must update: avatar → panels → timeline → map
5. **Module Communication**: Use shared global state, not direct module-to-module calls
6. **Atmospheric Effects**: These are CSS/JS based, not map layer based
7. **Content Parity**: Mobile and desktop must show the same content, just different layouts

### Common Tasks

#### To Add a New Location
1. Add entry to `journey-data.js` with basic info
2. Add enhanced entry to `journey-data-enhanced.js` with translations and emotions
3. Add 4 images to `/images/` following naming convention: `{id}_{EnglishName}_000{1-4}.jpg`

#### To Add a New Language
1. Add language code and translations to `i18n.js`
2. Add language toggle button in `index.html`
3. Test all UI elements and content panels

#### To Debug Navigation Issues
1. Check `window.currentStepIndex` is being updated
2. Verify `navigateToLocation()` in `map.js` is called
3. Ensure avatar's `moveToLocation()` is triggered
4. Confirm timeline markers are highlighted
5. Check both desktop and mobile panels update

#### To Modify Avatar Behavior
1. Edit animation logic in `avatar.js`
2. Update CSS animations in `avatar.css`
3. Ensure emotion states sync with location data

#### To Extend Timeline Features
1. Modify `timeline.js` for logic changes
2. Update `timeline.css` for visual changes
3. Keep synchronization with `window.currentStepIndex`

### Architecture Principles

- **Single Source of Truth**: `window.currentStepIndex` for current location
- **Event-Driven**: Navigation triggers cascade of updates across modules
- **Data-Driven**: All content from data files, minimal hardcoding
- **Progressive Enhancement**: Core features work, enhancements add value
- **Mobile-First**: Responsive design with mobile-specific optimizations

### Code Quality Standards

- Keep functions focused and single-purpose
- Use clear, descriptive variable names
- Comment complex logic, especially cross-module interactions
- Maintain consistent indentation and formatting
- Avoid global pollution except for necessary shared state
- Handle edge cases (missing images, incomplete data)

### Testing Considerations

- Test on multiple screen sizes (mobile, tablet, desktop)
- Verify keyboard navigation works completely
- Check accessibility features (screen readers, contrast)
- Test language switching at different locations
- Verify avatar animations at different speeds
- Ensure timeline sync across all navigation methods
