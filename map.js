// Map initialization and journey visualization
let map;
let markers = [];
let journeyLine;
let currentStepIndex = 0;
let isPlaying = false;
let playInterval;

// Initialize the map
function initMap() {
    // Initialize i18n first
    if (typeof initI18n === 'function') {
        initI18n();
        updateUILanguage();
    }
    
    // Create map centered on the journey region (Central Asia)
    // Focus on the area between China, Central Asia, and India
    map = L.map('map', {
        tap: true,  // Enable touch interactions
        tapTolerance: 15,  // Increase tap tolerance for mobile
        touchZoom: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,  // Enable keyboard navigation
        keyboardPanDelta: 80
    }).setView([35, 75], 4);  // Center on Central Asia with better zoom

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 3
    }).addTo(map);

    // Add ARIA labels for accessibility
    const mapContainer = document.getElementById('map');
    mapContainer.setAttribute('role', 'application');
    mapContainer.setAttribute('aria-label', typeof t === 'function' ? t('a11y.mapRegion') : 'Interactive map showing Xuanzang\'s journey');

    // Create the journey path
    createJourneyPath();
    
    // Add markers for all locations
    addMarkers();
    
    // Setup timeline controls
    setupTimelineControls();
    
    // Set active language button
    updateLanguageButtons();
    
    // Fit map to journey bounds with padding
    if (journeyLine) {
        map.fitBounds(journeyLine.getBounds(), {
            padding: [50, 50],
            maxZoom: 5
        });
    }
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
        
        // DISABLE popups - use side panels instead
        // const popupContent = createPopupContent(location);
        // marker.bindPopup(popupContent);
        
        // Add click event to show detailed info in panel
        marker.on('click', () => {
            showLocationDetails(location);
            currentStepIndex = index;
            updateTimeline();
            
            // Move avatar to clicked location
            if (window.monkAvatar) {
                window.monkAvatar.moveToLocation(location.coordinates, 1000);
            }
        });
        
        markers.push(marker);
    });
}

// Create popup content for markers
function createPopupContent(location) {
    const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
    const tFunc = typeof t === 'function' ? t : (key) => key;
    
    let content = `
        <div class="marker-popup">
            <h6>${enhanced.name}</h6>
            <p class="modern-name">${enhanced.modernName}</p>
            <p class="duration">${tFunc('info.duration')}: ${enhanced.duration}</p>
            <p><strong>${tFunc('info.arrival')}:</strong> ${enhanced.arrivalMonth || enhanced.year + ' CE'}</p>
            <p>${enhanced.description.substring(0, 150)}...</p>
        </div>
    `;
    return content;
}

// Show detailed information in the side panel
function showLocationDetails(location) {
    const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
    const tFunc = typeof t === 'function' ? t : (key) => key;
    
    // Update Summary Panel (right side - always visible)
    updateSummaryPanel(location, enhanced, tFunc);
    
    // Update Illustration Panel (left side)
    updateIllustrationPanel(location, enhanced, tFunc);
    
    // Keep old info panel hidden
    const infoPanel = document.getElementById('infoPanel');
    if (infoPanel) {
        infoPanel.classList.remove('active');
    }
}

// Update the right summary panel
function updateSummaryPanel(location, enhanced, tFunc) {
    const summaryCurrentName = document.getElementById('summaryCurrentName');
    const summaryProgressText = document.getElementById('summaryProgressText');
    const summaryDetails = document.getElementById('summaryDetails');
    
    if (summaryCurrentName) {
        summaryCurrentName.textContent = `${enhanced.name} (${enhanced.year} CE)`;
    }
    
    if (summaryProgressText) {
        summaryProgressText.textContent = `${currentStepIndex + 1} / ${journeyData.length} locations`;
    }
    
    if (summaryDetails) {
        let detailsHTML = `
            <p><strong>${tFunc('info.modernName')}:</strong> ${enhanced.modernName}</p>
            ${enhanced.ancientName ? `<p><strong>${tFunc('info.ancientName')}:</strong> ${enhanced.ancientName}</p>` : ''}
            <p><strong>${tFunc('info.duration')}:</strong> ${enhanced.duration}</p>
            ${enhanced.emotion ? `<p><strong>${tFunc('info.emotion')}:</strong> ${tFunc('emotion.' + enhanced.emotion)}</p>` : ''}
            <p class="small">${enhanced.description.substring(0, 200)}...</p>
        `;
        summaryDetails.innerHTML = detailsHTML;
    }
}

// Update the left illustration panel with images
function updateIllustrationPanel(location, enhanced, tFunc) {
    const illustrationTitle = document.getElementById('illustrationTitle');
    const carouselImages = document.getElementById('carouselImages');
    const carouselCaption = document.getElementById('carouselCaption');
    
    if (illustrationTitle) {
        illustrationTitle.textContent = enhanced.name;
    }
    
    if (carouselImages) {
        carouselImages.innerHTML = '';
        
        // Add images if available
        if (enhanced.images && enhanced.images.length > 0) {
            enhanced.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image.url;
                img.alt = image.caption;
                img.className = 'carousel-image';
                img.dataset.caption = image.caption;
                carouselImages.appendChild(img);
            });
            
            // Show first image caption
            if (carouselCaption && enhanced.images[0]) {
                carouselCaption.textContent = enhanced.images[0].caption;
            }
            
            // Setup carousel controls
            setupCarousel();
        } else {
            // Show placeholder when no images available
            const placeholder = document.createElement('div');
            placeholder.className = 'carousel-placeholder';
            placeholder.innerHTML = `
                <div>
                    <h5>${enhanced.name}</h5>
                    <p>📍 ${enhanced.modernName}</p>
                    <p style="font-size: 0.85rem; margin-top: 10px;">${tFunc('info.noImagesAvailable') || 'Historical images not available'}</p>
                </div>
            `;
            carouselImages.appendChild(placeholder);
            
            if (carouselCaption) {
                carouselCaption.textContent = '';
            }
        }
    }
}

// Setup carousel navigation
let currentCarouselIndex = 0;

function setupCarousel() {
    const carouselImages = document.getElementById('carouselImages');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const carouselCaption = document.getElementById('carouselCaption');
    
    if (!carouselImages) return;
    
    const images = carouselImages.querySelectorAll('.carousel-image');
    currentCarouselIndex = 0;
    
    const updateCarousel = () => {
        const offset = -currentCarouselIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        
        // Update caption
        if (carouselCaption && images[currentCarouselIndex]) {
            carouselCaption.textContent = images[currentCarouselIndex].dataset.caption || '';
        }
        
        // Hide/show buttons based on position
        if (prevBtn) {
            prevBtn.style.display = currentCarouselIndex > 0 ? 'block' : 'none';
        }
        if (nextBtn) {
            nextBtn.style.display = currentCarouselIndex < images.length - 1 ? 'block' : 'none';
        }
    };
    
    if (prevBtn) {
        prevBtn.onclick = () => {
            if (currentCarouselIndex > 0) {
                currentCarouselIndex--;
                updateCarousel();
            }
        };
    }
    
    if (nextBtn) {
        nextBtn.onclick = () => {
            if (currentCarouselIndex < images.length - 1) {
                currentCarouselIndex++;
                updateCarousel();
            }
        };
    }
    
    updateCarousel();
}

// Setup timeline controls
function setupTimelineControls() {
    const slider = document.getElementById('timelineSlider');
    const playBtn = document.getElementById('playBtn');
    const currentYearEl = document.getElementById('currentYear');
    
    // Add ARIA labels
    const tFunc = typeof t === 'function' ? t : (key) => key;
    slider.setAttribute('aria-label', tFunc('a11y.timelineSlider'));
    playBtn.setAttribute('aria-label', tFunc('a11y.playButton'));
    
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
    
    // Keyboard navigation for timeline
    document.addEventListener('keydown', (e) => {
        // Arrow keys to navigate timeline
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            if (e.key === 'ArrowLeft' && currentStepIndex > 0) {
                currentStepIndex--;
            } else if (e.key === 'ArrowRight' && currentStepIndex < journeyData.length - 1) {
                currentStepIndex++;
            }
            updateTimeline();
            stopPlaying();
        }
        // Space to play/pause
        else if (e.key === ' ' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            if (isPlaying) {
                stopPlaying();
            } else {
                startPlaying();
            }
        }
    });
}

// Update timeline visualization
function updateTimeline() {
    const slider = document.getElementById('timelineSlider');
    const currentYearEl = document.getElementById('currentYear');
    const tFunc = typeof t === 'function' ? t : (key, params) => key;
    
    // Update slider position
    const percentage = (currentStepIndex / (journeyData.length - 1)) * 100;
    slider.value = percentage;
    
    // Update current year display
    const currentLocation = journeyData[currentStepIndex];
    currentYearEl.textContent = tFunc('controls.currentYear', { year: currentLocation.year });
    
    // Update enhanced timeline
    if (window.enhancedTimeline) {
        window.enhancedTimeline.setCurrentIndex(currentStepIndex);
    }
    
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
    
    // Move avatar to current location
    if (window.monkAvatar) {
        window.monkAvatar.moveToLocation(currentLocation.coordinates, 1000);
    }
    
    // DON'T open popup - use side panels instead
    // markers[currentStepIndex].openPopup();
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
    const tFunc = typeof t === 'function' ? t : (key) => key;
    isPlaying = true;
    const playBtn = document.getElementById('playBtn');
    playBtn.textContent = tFunc('controls.pause');
    playBtn.classList.add('playing');
    
    // Start monk walking
    if (window.monkAvatar) {
        window.monkAvatar.startWalking();
    }
    
    playInterval = setInterval(() => {
        currentStepIndex++;
        
        if (currentStepIndex >= journeyData.length) {
            currentStepIndex = 0; // Loop back to start
        }
        
        updateTimeline();
        
        // Perform emotion-based animation
        const location = journeyData[currentStepIndex];
        const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
        if (window.monkAvatar && enhanced.emotion) {
            window.monkAvatar.performEmotionAction(enhanced.emotion);
        }
    }, 2000); // Move to next location every 2 seconds
}

// Stop animated playback
function stopPlaying() {
    const tFunc = typeof t === 'function' ? t : (key) => key;
    isPlaying = false;
    const playBtn = document.getElementById('playBtn');
    playBtn.textContent = tFunc('controls.play');
    playBtn.classList.remove('playing');
    
    // Stop monk walking
    if (window.monkAvatar) {
        window.monkAvatar.stopWalking();
    }
    
    if (playInterval) {
        clearInterval(playInterval);
    }
}

// Update language button active state
function updateLanguageButtons() {
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    document.getElementById('langEn').classList.toggle('active', currentLang === 'en');
    document.getElementById('langVi').classList.toggle('active', currentLang === 'vi');
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    
    // Initialize enhanced timeline
    initEnhancedTimeline();
    
    // Initialize monk avatar
    initMonkAvatar();
    updatePlayButtonWithAvatar();
    
    // Set map reference for avatar
    if (window.monkAvatar && map) {
        window.monkAvatar.setMap(map);
    }
    
    // Show first location by default
    setTimeout(() => {
        showLocationDetails(journeyData[0]);
        updateTimeline();
        
        // Position avatar at first location
        if (window.monkAvatar && journeyData[0]) {
            window.monkAvatar.moveToLocation(journeyData[0].coordinates, 0);
        }
    }, 500);
});

// Handle window resize
window.addEventListener('resize', () => {
    map.invalidateSize();
});

// Handle language change
document.addEventListener('languageChanged', () => {
    // Update all markers' popups
    markers.forEach((marker, index) => {
        const location = journeyData[index];
        marker.setPopupContent(createPopupContent(location));
    });
    
    // Update info panel if visible
    if (currentStepIndex >= 0 && currentStepIndex < journeyData.length) {
        showLocationDetails(journeyData[currentStepIndex]);
    }
    
    // Update timeline
    updateTimeline();
    
    // Update language buttons
    updateLanguageButtons();
});

// Connect timeline clicks to map
window.onTimelineMarkerClick = function(index) {
    currentStepIndex = index;
    updateTimeline();
    stopPlaying();
};
