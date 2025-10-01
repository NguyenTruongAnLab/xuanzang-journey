// Map initialization and journey visualization
let map;
let markers = [];
let journeyLine;
let currentStepIndex = 0;
let isPlaying = false;
let playInterval;

// Initialize the map
function initMap() {
    // Create map centered on the approximate middle of the journey
    map = L.map('map').setView([35, 80], 4);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 3
    }).addTo(map);

    // Create the journey path
    createJourneyPath();
    
    // Add markers for all locations
    addMarkers();
    
    // Setup timeline controls
    setupTimelineControls();
}

// Create the full journey path line
function createJourneyPath() {
    const pathCoordinates = journeyData.map(location => location.coordinates);
    
    journeyLine = L.polyline(pathCoordinates, {
        color: '#dc3545',
        weight: 3,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(map);
    
    // Fit map to show the entire journey
    map.fitBounds(journeyLine.getBounds());
}

// Add markers for all locations
function addMarkers() {
    journeyData.forEach((location, index) => {
        // Create custom icon based on location type
        const iconClass = `journey-marker ${location.type}`;
        const iconSize = location.type === 'start' || location.type === 'end' ? 16 : 
                        location.type === 'major' ? 14 : 12;
        
        const customIcon = L.divIcon({
            className: iconClass,
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize/2, iconSize/2]
        });
        
        // Create marker
        const marker = L.marker(location.coordinates, { 
            icon: customIcon,
            title: location.name
        }).addTo(map);
        
        // Create popup content
        const popupContent = createPopupContent(location);
        marker.bindPopup(popupContent);
        
        // Add click event to show detailed info in panel
        marker.on('click', () => {
            showLocationDetails(location);
            currentStepIndex = index;
            updateTimeline();
        });
        
        markers.push(marker);
    });
}

// Create popup content for markers
function createPopupContent(location) {
    let content = `
        <div class="marker-popup">
            <h6>${location.name}</h6>
            <p class="modern-name">${location.modernName}</p>
            <p class="duration">Duration: ${location.duration}</p>
            <p><strong>Year:</strong> ${location.year} CE</p>
            <p>${location.description.substring(0, 150)}...</p>
        </div>
    `;
    return content;
}

// Show detailed information in the side panel
function showLocationDetails(location) {
    const infoPanel = document.getElementById('infoPanel');
    const titleEl = document.getElementById('locationTitle');
    const infoEl = document.getElementById('locationInfo');
    const imagesEl = document.getElementById('locationImages');
    
    titleEl.textContent = `${location.name} (${location.year} CE)`;
    
    let infoHTML = `
        <p><strong>Modern Name:</strong> ${location.modernName}</p>
        <p><strong>Duration:</strong> ${location.duration}</p>
        <p><strong>Description:</strong> ${location.description}</p>
        <p><strong>Historical Context:</strong> ${location.historicalContext}</p>
    `;
    
    infoEl.innerHTML = infoHTML;
    
    // Add images if available
    if (location.images && location.images.length > 0) {
        let imagesHTML = '<div class="mt-3">';
        location.images.forEach(image => {
            imagesHTML += `
                <img src="${image.url}" alt="${image.caption}" class="location-image">
                <p class="text-muted small">${image.caption}</p>
            `;
        });
        imagesHTML += '</div>';
        imagesEl.innerHTML = imagesHTML;
    } else {
        imagesEl.innerHTML = '';
    }
    
    infoPanel.classList.add('active');
}

// Setup timeline controls
function setupTimelineControls() {
    const slider = document.getElementById('timelineSlider');
    const playBtn = document.getElementById('playBtn');
    const currentYearEl = document.getElementById('currentYear');
    
    // Slider change event
    slider.addEventListener('input', (e) => {
        const percentage = e.target.value;
        currentStepIndex = Math.floor((percentage / 100) * (journeyData.length - 1));
        updateTimeline();
        stopPlaying();
    });
    
    // Play button event
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopPlaying();
        } else {
            startPlaying();
        }
    });
}

// Update timeline visualization
function updateTimeline() {
    const slider = document.getElementById('timelineSlider');
    const currentYearEl = document.getElementById('currentYear');
    
    // Update slider position
    const percentage = (currentStepIndex / (journeyData.length - 1)) * 100;
    slider.value = percentage;
    
    // Update current year display
    const currentLocation = journeyData[currentStepIndex];
    currentYearEl.textContent = `Year: ${currentLocation.year}`;
    
    // Highlight current location
    highlightCurrentLocation();
    
    // Update the journey path to show progress
    updateJourneyProgress();
}

// Highlight the current location on the map
function highlightCurrentLocation() {
    const currentLocation = journeyData[currentStepIndex];
    
    // Pan to current location
    map.panTo(currentLocation.coordinates);
    
    // Show location details
    showLocationDetails(currentLocation);
    
    // Open popup for current marker
    markers[currentStepIndex].openPopup();
}

// Update journey path to show completed portion
function updateJourneyProgress() {
    // Remove old progress line if it exists
    if (window.progressLine) {
        map.removeLayer(window.progressLine);
    }
    
    // Create completed path up to current location
    const completedCoordinates = journeyData
        .slice(0, currentStepIndex + 1)
        .map(location => location.coordinates);
    
    window.progressLine = L.polyline(completedCoordinates, {
        color: '#198754',
        weight: 4,
        opacity: 0.9,
        smoothFactor: 1
    }).addTo(map);
}

// Start animated playback
function startPlaying() {
    isPlaying = true;
    document.getElementById('playBtn').textContent = 'Pause';
    
    playInterval = setInterval(() => {
        currentStepIndex++;
        
        if (currentStepIndex >= journeyData.length) {
            currentStepIndex = 0; // Loop back to start
        }
        
        updateTimeline();
    }, 2000); // Move to next location every 2 seconds
}

// Stop animated playback
function stopPlaying() {
    isPlaying = false;
    document.getElementById('playBtn').textContent = 'Play Journey';
    
    if (playInterval) {
        clearInterval(playInterval);
    }
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    
    // Show first location by default
    setTimeout(() => {
        showLocationDetails(journeyData[0]);
        updateTimeline();
    }, 500);
});

// Handle window resize
window.addEventListener('resize', () => {
    map.invalidateSize();
});
