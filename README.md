# Xuanzang's Journey (629-645 CE)

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

- **Interactive Map**: Built with Leaflet.js showing the complete journey route
- **29 Historical Locations**: From Chang'an (Xi'an) to Nalanda and back
- **Modern City Names**: Each location shows its contemporary name
- **Timeline Slider**: Interactive timeline from 629-645 CE
- **Play Mode**: Animated journey playback
- **Stay Durations**: See how long Xuanzang stayed at each location
- **Historical Context**: Detailed information about each stop
- **Historical Images**: Photos of significant sites (where available)
- **Responsive Design**: Works on desktop, tablet, and mobile devices

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
├── index.html          # Main HTML file
├── styles.css          # Custom styling
├── map.js             # Map initialization and interaction logic
├── journey-data.js    # Historical data for all 29 locations
├── README.md          # This file
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Pages deployment
```

## 🎯 How to Use

1. **Explore the Map**: Click on any marker to see details about that location
2. **Use Timeline Slider**: Drag the slider to jump to different years
3. **Play Journey**: Click "Play Journey" to watch an animated progression
4. **Read Details**: Click markers or view the info panel for historical context
5. **View Images**: See historical and modern photos of key sites

## 📚 Historical Accuracy

The data in this project is based on:
- Xuanzang's own travelogue "Great Tang Records on the Western Regions" (大唐西域記)
- Historical research and archaeological evidence
- Modern scholarly interpretations of the route

Note: Some dates and durations are approximations based on historical records.

## 🤝 Contributing

Contributions are welcome! If you'd like to:
- Add more historical details
- Include additional images
- Improve translations
- Fix bugs or enhance features

Please open an issue or submit a pull request.

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Historical data from various scholarly sources on Xuanzang's journey
- Map tiles from OpenStreetMap contributors
- Images from Wikimedia Commons (where used)
- Inspired by the historical significance of the Silk Road and Buddhist cultural exchange

## 📖 Learn More

- [Xuanzang on Wikipedia](https://en.wikipedia.org/wiki/Xuanzang)
- [Great Tang Records on the Western Regions](https://en.wikipedia.org/wiki/Great_Tang_Records_on_the_Western_Regions)
- [Silk Road history](https://en.wikipedia.org/wiki/Silk_Road)
