// Map initialization and journey visualization
let map;
let markers = [];
let journeyLine;
let currentStepIndex = 0;
let isPlaying = false;
let playInterval;

// NOTE: Bookmark and share functionality disabled per requirements
// let bookmarkedLocations = new Set();

/*
// Load bookmarks from localStorage
function loadBookmarks() {
    const saved = localStorage.getItem('xuanzang_bookmarks');
    if (saved) {
        try {
            bookmarkedLocations = new Set(JSON.parse(saved));
        } catch (e) {
            bookmarkedLocations = new Set();
        }
    }
}

// Save bookmarks to localStorage
function saveBookmarks() {
    localStorage.setItem('xuanzang_bookmarks', JSON.stringify([...bookmarkedLocations]));
}

// Toggle bookmark for current location
function toggleBookmark() {
    const currentLocation = journeyData[currentStepIndex];
    const locationId = `${currentLocation.name}_${currentLocation.year}`;
    
    if (bookmarkedLocations.has(locationId)) {
        bookmarkedLocations.delete(locationId);
    } else {
        bookmarkedLocations.add(locationId);
    }
    
    saveBookmarks();
    updateBookmarkButton();
}

// Update bookmark button UI
function updateBookmarkButton() {
    const currentLocation = journeyData[currentStepIndex];
    const locationId = `${currentLocation.name}_${currentLocation.year}`;
    const isBookmarked = bookmarkedLocations.has(locationId);
    
    const bookmarkIcon = document.getElementById('bookmarkIcon');
    const bookmarkText = document.getElementById('bookmarkText');
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const tFunc = typeof t === 'function' ? t : (key) => key;
    
    if (bookmarkIcon) {
        bookmarkIcon.textContent = isBookmarked ? '★' : '☆';
    }
    
    if (bookmarkText) {
        bookmarkText.textContent = isBookmarked ? tFunc('bookmark.saved') : tFunc('bookmark.button');
    }
    
    if (bookmarkBtn) {
        // Update visual state
        if (isBookmarked) {
            bookmarkBtn.classList.remove('btn-outline-warning');
            bookmarkBtn.classList.add('btn-warning');
        } else {
            bookmarkBtn.classList.remove('btn-warning');
            bookmarkBtn.classList.add('btn-outline-warning');
        }
        
        // Update ARIA state for accessibility
        bookmarkBtn.setAttribute('aria-pressed', isBookmarked ? 'true' : 'false');
        bookmarkBtn.setAttribute('aria-label', 
            isBookmarked ? tFunc('bookmark.saved') : tFunc('bookmark.button'));
    }
}

// Make toggleBookmark globally accessible
window.toggleBookmark = toggleBookmark;
*/

// NOTE: Share and bookmark functionality removed per requirements
// All sharing and bookmarking features have been disabled to focus on
// educational content about Buddhism and Xuanzang's journey

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

    // Define basemap layers
    const esriNatGeo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; National Geographic',
        maxZoom: 18,
        minZoom: 3
    });

    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics',
        maxZoom: 18,
        minZoom: 3
    });

    const esriStreet = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, METI, TomTom',
        maxZoom: 18,
        minZoom: 3
    });

    const shadedRelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM, NASA',
        maxZoom: 17,
        minZoom: 3
    });

    const osmTopo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; OpenTopoMap (CC-BY-SA)',
        maxZoom: 17,
        minZoom: 3
    });

    // Load saved basemap preference from localStorage or default to ESRI National Geographic
    const savedBasemap = localStorage.getItem('xuanzang_basemap') || 'esriNatGeo';
    
    // Prepare basemap options with i18n labels
    const tFunc = typeof t === 'function' ? t : (key) => key;
    const baseMaps = {};
    baseMaps[tFunc('basemap.esriNatGeo')] = esriNatGeo;
    baseMaps[tFunc('basemap.esriWorldImagery')] = esriWorldImagery;
    baseMaps[tFunc('basemap.esriStreet')] = esriStreet;
    baseMaps[tFunc('basemap.shadedRelief')] = shadedRelief;
    baseMaps[tFunc('basemap.osmTopo')] = osmTopo;

    // Add the default basemap based on saved preference
    let defaultBasemap = esriNatGeo;
    if (savedBasemap === 'esriWorldImagery') defaultBasemap = esriWorldImagery;
    else if (savedBasemap === 'esriStreet') defaultBasemap = esriStreet;
    else if (savedBasemap === 'shadedRelief') defaultBasemap = shadedRelief;
    else if (savedBasemap === 'osmTopo') defaultBasemap = osmTopo;
    
    defaultBasemap.addTo(map);

    // Add layer control for basemap switching
    const layerControl = L.control.layers(baseMaps, null, {
        position: 'topright',
        collapsed: true
    }).addTo(map);

    // Save basemap preference when user changes it
    map.on('baselayerchange', function(e) {
        const basemapKey = Object.keys(baseMaps).find(key => baseMaps[key] === e.layer);
        if (basemapKey === tFunc('basemap.esriNatGeo')) {
            localStorage.setItem('xuanzang_basemap', 'esriNatGeo');
        } else if (basemapKey === tFunc('basemap.esriWorldImagery')) {
            localStorage.setItem('xuanzang_basemap', 'esriWorldImagery');
        } else if (basemapKey === tFunc('basemap.esriStreet')) {
            localStorage.setItem('xuanzang_basemap', 'esriStreet');
        } else if (basemapKey === tFunc('basemap.shadedRelief')) {
            localStorage.setItem('xuanzang_basemap', 'shadedRelief');
        } else if (basemapKey === tFunc('basemap.osmTopo')) {
            localStorage.setItem('xuanzang_basemap', 'osmTopo');
        }
    });

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
    
    // Add directional arrows along the path
    addDirectionalArrows(pathCoordinates);
    
    // Fit map to show the entire journey
    map.fitBounds(journeyLine.getBounds());
}

// Add directional arrows along the journey path
function addDirectionalArrows(pathCoordinates) {
    // Create arrow markers at the end of each path segment (not middle)
    for (let i = 0; i < pathCoordinates.length - 1; i++) {
        const start = pathCoordinates[i];
        const end = pathCoordinates[i + 1];
        
        // Place arrow near the end of the segment (80% along the path)
        const arrowLat = start[0] + (end[0] - start[0]) * 0.8;
        const arrowLng = start[1] + (end[1] - start[1]) * 0.8;
        
        // Calculate angle for arrow direction
        const angle = Math.atan2(end[1] - start[1], end[0] - start[0]) * 180 / Math.PI;
        
        // Create arrow icon with better styling
        const arrowIcon = L.divIcon({
            className: 'journey-arrow',
            html: `<div style="transform: rotate(${angle}deg); font-size: 18px; font-weight: bold; text-shadow: 0 0 3px rgba(255,255,255,0.8), 1px 1px 2px rgba(0,0,0,0.8);">▶</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
        
        // Add arrow marker near the end of segment
        L.marker([arrowLat, arrowLng], {
            icon: arrowIcon,
            interactive: false,
            keyboard: false
        }).addTo(map);
    }
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
        
        // Get current language for labels
        const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        const isVietnamese = currentLang === 'vi';
        const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
        
        // Add text label for city and country
        const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
        const cityName = modernName.split(',')[0].trim();
        const country = modernName.split(',').pop().trim();
        
        // Create tooltip that is always visible for major stops
        if (location.type === 'start' || location.type === 'end' || location.type === 'major') {
            marker.bindTooltip(`${cityName}<br>${country}`, {
                permanent: true,
                direction: 'top',
                className: 'location-label',
                offset: [0, -10]
            });
        } else {
            // For regular stops, show on hover
            marker.bindTooltip(`${cityName}, ${country}`, {
                permanent: false,
                direction: 'top',
                className: 'location-label-hover'
            });
        }
        
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
    
    // Update Desktop Side Panel (≥1024px)
    if (window.innerWidth >= 1024) {
        updateDesktopSidePanel(location);
    }
    
    // Update Summary Panel (right side - deprecated but kept for compatibility)
    updateSummaryPanel(location, enhanced, tFunc);
    
    // Update Illustration Panel (left side - deprecated but kept for compatibility)
    updateIllustrationPanel(location, enhanced, tFunc);
    
    // Keep old info panel hidden
    const infoPanel = document.getElementById('infoPanel');
    if (infoPanel) {
        infoPanel.classList.remove('active');
    }
}

// Update the right summary panel
function updateSummaryPanel(location, enhanced, tFunc) {
    const summaryBriefInfo = document.getElementById('summaryBriefInfo');
    const summaryDetails = document.getElementById('summaryDetails');
    
    // Get current language
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const isVietnamese = currentLang === 'vi';
    
    // Update brief info (shown by default)
    if (summaryBriefInfo) {
        const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
        // Show year prominently first
        summaryBriefInfo.innerHTML = `
            <div class="mb-2">
                <span class="year-highlight">${enhanced.year} CE</span>
            </div>
            <div class="mb-2">
                <strong>Station:</strong> ${enhanced.name}
            </div>
            <div class="mb-2">
                <strong>Location:</strong> ${modernName}
            </div>
        `;
    }
    
    if (summaryDetails) {
        // Get current language
        const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        const isVietnamese = currentLang === 'vi';
        
        // Get modernName and ancientName based on language
        const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
        
        // For Vietnamese, convert Chinese names to Vietnamese transliteration
        let ancientName = enhanced.ancientName || '';
        if (isVietnamese && ancientName) {
            // Extract just the transliteration from format "漢字 (Pinyin)"
            const match = ancientName.match(/\(([^)]+)\)/);
            if (match) {
                ancientName = match[1]; // Just use the romanized version
            }
        }
        
        // Extract country from modernName
        const country = modernName.split(',').pop().trim();
        
        // Get duration based on language
        const duration = isVietnamese && enhanced.duration_vi ? enhanced.duration_vi : enhanced.duration;
        
        let detailsHTML = '';
        
        if (isVietnamese) {
            // Compact format for Vietnamese: all on one line
            detailsHTML += `<p class="compact-info">`;
            detailsHTML += `<strong>${tFunc('info.modernName')}:</strong> ${modernName}`;
            if (ancientName) {
                detailsHTML += `; <strong>${tFunc('info.ancientName')}:</strong> ${ancientName}`;
            }
            if (country) {
                detailsHTML += `; <strong>${tFunc('info.country')}:</strong> ${country}`;
            }
            detailsHTML += `; <strong>${tFunc('info.duration')}:</strong> ${duration}`;
            detailsHTML += `</p>`;
        } else {
            // Standard format for English
            detailsHTML += `<p><strong>${tFunc('info.modernName')}:</strong> ${modernName}</p>`;
            if (ancientName) {
                detailsHTML += `<p><strong>${tFunc('info.ancientName')}:</strong> ${ancientName}</p>`;
            }
            if (country) {
                detailsHTML += `<p><strong>${tFunc('info.country')}:</strong> ${country}</p>`;
            }
            detailsHTML += `<p><strong>${tFunc('info.duration')}:</strong> ${duration}</p>`;
        }
        
        // Add Buddhist Context if available
        if (enhanced.buddhistContext) {
            const buddhistContextText = isVietnamese && enhanced.buddhistContext_vi ? enhanced.buddhistContext_vi : enhanced.buddhistContext;
            detailsHTML += `
                <div class="content-section">
                    <h6>${tFunc('info.buddhistContext')}</h6>
                    <p class="small">${buddhistContextText}</p>
                </div>
            `;
        }
        
        // Add Xuanzang's Experience if available
        if (enhanced.xuanzangExperience) {
            const xuanzangExpText = isVietnamese && enhanced.xuanzangExperience_vi ? enhanced.xuanzangExperience_vi : enhanced.xuanzangExperience;
            detailsHTML += `
                <div class="content-section">
                    <h6>${tFunc('info.xuanzangExperience')}</h6>
                    <p class="small">${xuanzangExpText}</p>
                </div>
            `;
        }
        
        // Add quote if available
        if (enhanced.quote) {
            const quoteText = isVietnamese && enhanced.quote_vi ? enhanced.quote_vi : enhanced.quote;
            detailsHTML += `
                <div class="quote-section">
                    <p class="quote-text"><em>"${quoteText}"</em></p>
                    <p class="quote-attribution">— ${tFunc('quote.xuanzang')}</p>
                </div>
            `;
        }
        
        // Add Historical Events if available
        if (enhanced.historicalEvents) {
            const histEventsText = isVietnamese && enhanced.historicalEvents_vi ? enhanced.historicalEvents_vi : enhanced.historicalEvents;
            detailsHTML += `
                <div class="content-section">
                    <h6>${tFunc('info.historicalEvents')}</h6>
                    <p class="small">${histEventsText}</p>
                </div>
            `;
        }
        
        // Add description
        const description = isVietnamese 
            ? (enhanced.expandedDescription_vi || enhanced.description_vi || enhanced.description)
            : (enhanced.expandedDescription || enhanced.description);
        detailsHTML += `
            <div class="content-section">
                <h6>${tFunc('info.description')}</h6>
                <p class="small">${description}</p>
            </div>
        `;
        
        // Add Historical Context
        const historicalContext = isVietnamese && enhanced.historicalContext_vi ? enhanced.historicalContext_vi : (enhanced.historicalContext || location.historicalContext);
        if (historicalContext) {
            detailsHTML += `
                <div class="content-section">
                    <h6>${tFunc('info.historicalContext')}</h6>
                    <p class="small">${historicalContext}</p>
                </div>
            `;
        }
        
        // Add sources/references if available
        if (enhanced.sources) {
            detailsHTML += `
                <div class="content-section">
                    <h6>${tFunc('info.sources')}</h6>
                    <p class="small">${enhanced.sources}</p>
                </div>
            `;
        }
        
        summaryDetails.innerHTML = detailsHTML;
    }
}


// Toggle illustration panel visibility
function toggleIllustrationPanel() {
    const panel = document.getElementById('illustrationPanel');
    const btn = document.getElementById('showImagesBtn');
    
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        btn.textContent = '📷 Show Images';
        btn.style.display = 'block';
    } else {
        panel.classList.add('active');
        btn.style.display = 'none';
    }
}

// Toggle details in summary panel
function toggleDetails() {
    const collapsible = document.getElementById('summaryDetailsCollapsible');
    const btn = document.getElementById('toggleDetailsBtn');
    const btnText = document.getElementById('toggleDetailsText');
    
    if (collapsible.classList.contains('expanded')) {
        collapsible.classList.remove('expanded');
        btnText.textContent = 'Show More Details';
    } else {
        collapsible.classList.add('expanded');
        btnText.textContent = 'Hide Details';
    }
}

// Make functions globally accessible
window.toggleIllustrationPanel = toggleIllustrationPanel;
window.toggleDetails = toggleDetails;

// Update the left illustration panel with images
function updateIllustrationPanel(location, enhanced, tFunc) {
    const illustrationTitle = document.getElementById('illustrationTitle');
    const carouselImages = document.getElementById('carouselImages');
    const carouselCaption = document.getElementById('carouselCaption');
    
    // Get current language
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const isVietnamese = currentLang === 'vi';
    
    if (illustrationTitle) {
        // Use Vietnamese name if available
        const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
        const cityName = modernName.split(',')[0].trim();
        illustrationTitle.textContent = cityName;
    }
    
    if (carouselImages) {
        carouselImages.innerHTML = '';
        
        // Load images from local images folder based on site index
        // Format: {index}_{city}_{code}.jpg where code is 0001-0004
        // Show only 0004.jpg by default (road condition), others available for scrolling
        const siteIndex = String(location.id).padStart(2, '0');
        // IMPORTANT: Always use the original English city name for image paths, not translated names
        // Image filenames are based on English names (e.g., "Xi'an" not "Tây An")
        const cityName = location.modernName.split(',')[0].trim().replace(/ /g, '_');
        
        // Image codes: 0004, 0001, 0002, 0003 for gallery, 0004 first as default (road condition)
        const imageCodes = ['0004', '0001', '0002', '0003']; // 0004 first as default
        const imageDescriptions = [
            'Road condition illustration',
            'Historical site view',
            'Archaeological perspective', 
            'Buddhist temple/monastery'
        ];
        
        imageCodes.forEach((code, index) => {
            const img = document.createElement('img');
            
            // Implement lazy loading for performance
            img.loading = 'lazy';
            
            // Set image path from local images folder
            img.src = `images/${siteIndex}_${cityName}_${code}.jpg`;
            img.alt = `${enhanced.name} - ${imageDescriptions[index]}`;
            img.className = 'carousel-image';
            img.dataset.caption = `${enhanced.name} - ${imageDescriptions[index]}`;
            
            // Add error handling for broken images
            img.onerror = function() {
                console.warn(`Failed to load image: ${img.src}`);
                // Replace with placeholder on error
                const errorPlaceholder = createImagePlaceholder(enhanced, tFunc, true);
                this.parentNode.replaceChild(errorPlaceholder, this);
            };
            
            // Add loading state
            img.onload = function() {
                this.classList.add('loaded');
            };
            
            carouselImages.appendChild(img);
        });
        
        // Show first image caption (0004 - road condition)
        if (carouselCaption) {
            carouselCaption.textContent = `${enhanced.name} - ${imageDescriptions[0]}`;
        }
        
        // Setup carousel controls
        setupCarousel();
    }
}

// Helper function to create image placeholder
function createImagePlaceholder(enhanced, tFunc, isError) {
    const placeholder = document.createElement('div');
    placeholder.className = 'carousel-placeholder';
    
    // Choose icon based on location type or emotion
    let icon = '🏛️'; // default
    if (enhanced.emotion === 'tired') icon = '🏜️';
    else if (enhanced.emotion === 'peaceful' || enhanced.emotion === 'reverent') icon = '🛕';
    else if (enhanced.emotion === 'excited') icon = '🏔️';
    else if (enhanced.emotion === 'determined') icon = '🚶';
    else if (enhanced.emotion === 'contemplative') icon = '🌄';
    else if (enhanced.emotion === 'triumphant') icon = '🎉';
    
    const message = isError 
        ? (tFunc('info.imageLoadError') || 'Image failed to load')
        : (tFunc('info.noImagesAvailable') || 'Historical images not available');
    
    placeholder.innerHTML = `
        <div>
            <div class="location-icon">${icon}</div>
            <h5>${enhanced.name}</h5>
            <p>📍 ${enhanced.modernName}</p>
            <p style="font-size: 0.85rem; margin-top: 10px;">${message}</p>
        </div>
    `;
    
    return placeholder;
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
    
    const goToPrev = () => {
        if (currentCarouselIndex > 0) {
            currentCarouselIndex--;
            updateCarousel();
        }
    };
    
    const goToNext = () => {
        if (currentCarouselIndex < images.length - 1) {
            currentCarouselIndex++;
            updateCarousel();
        }
    };
    
    if (prevBtn) {
        prevBtn.onclick = goToPrev;
        
        // Keyboard support for prev button
        prevBtn.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToPrev();
            }
        };
    }
    
    if (nextBtn) {
        nextBtn.onclick = goToNext;
        
        // Keyboard support for next button
        nextBtn.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToNext();
            }
        };
    }
    
    // Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (carouselImages) {
        carouselImages.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carouselImages.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        const handleSwipe = () => {
            const swipeThreshold = 50; // minimum distance for swipe
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left - go to next
                    goToNext();
                } else {
                    // Swiped right - go to previous
                    goToPrev();
                }
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
    
    // Update URL hash for deep-linking
    updateLocationHash(currentLocation);
    
    // Move avatar to current location
    if (window.monkAvatar) {
        window.monkAvatar.moveToLocation(currentLocation.coordinates, 1000);
    }
    
    // DON'T open popup - use side panels instead
    // markers[currentStepIndex].openPopup();
}

// Update journey path to show completed portion with animation
function updateJourneyProgress() {
    // Remove old progress line if it exists
    if (window.progressLine) {
        map.removeLayer(window.progressLine);
    }
    
    // Create completed path up to current location
    const completedCoordinates = journeyData
        .slice(0, currentStepIndex + 1)
        .map(location => location.coordinates);
    
    // Only draw if we have at least 2 points
    if (completedCoordinates.length >= 2) {
        window.progressLine = L.polyline(completedCoordinates, {
            color: '#198754',
            weight: 4,
            opacity: 0.9,
            smoothFactor: 1,
            className: 'animated-path' // Add CSS class for animations
        }).addTo(map);
        
        // Animate the path drawing if we're playing
        if (isPlaying) {
            animatePathSegment(window.progressLine);
        }
    }
}

// Animate the drawing of a path segment
function animatePathSegment(polyline) {
    if (!polyline || !polyline._path) return;
    
    const path = polyline._path;
    const length = path.getTotalLength();
    
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    
    // Trigger animation
    requestAnimationFrame(() => {
        path.style.transition = 'stroke-dashoffset 1s ease-in-out';
        path.style.strokeDashoffset = '0';
    });
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
        
        // Perform emotion-based animation at new location
        const location = journeyData[currentStepIndex];
        const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
        
        // Stop walking briefly for emotion display
        if (window.monkAvatar && enhanced.emotion) {
            window.monkAvatar.stopWalking();
            
            // Perform the emotion animation
            setTimeout(() => {
                if (window.monkAvatar) {
                    window.monkAvatar.performEmotionAction(enhanced.emotion);
                }
                
                // Resume walking after emotion animation
                setTimeout(() => {
                    if (isPlaying && window.monkAvatar) {
                        window.monkAvatar.startWalking();
                    }
                }, 1500);
            }, 200);
        }
    }, 3000); // Move to next location every 3 seconds (increased from 2s for better viewing)
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

// Deep-linking support - parse URL hash and navigate to location
function handleDeepLink() {
    const hash = window.location.hash.substring(1); // Remove the #
    
    if (hash) {
        // Try to find location by name (case-insensitive, handle URL encoding)
        const locationName = decodeURIComponent(hash).toLowerCase().replace(/-/g, ' ');
        const locationIndex = journeyData.findIndex(loc => 
            loc.name.toLowerCase() === locationName ||
            loc.name.toLowerCase().replace(/['\s]/g, '') === locationName.replace(/['\s]/g, '')
        );
        
        if (locationIndex !== -1) {
            currentStepIndex = locationIndex;
            updateTimeline();
            
            // Scroll to location smoothly
            setTimeout(() => {
                map.setView(journeyData[locationIndex].coordinates, 8, {
                    animate: true,
                    duration: 1.5
                });
            }, 100);
        }
    }
}

// Update URL hash when location changes (for deep-linking)
function updateLocationHash(location) {
    const locationSlug = location.name.toLowerCase().replace(/['\s]/g, '-').replace(/--+/g, '-');
    window.history.replaceState(null, '', `#${locationSlug}`);
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load bookmarks first - DISABLED
    // loadBookmarks();
    
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
    
    // Check for deep link first
    const hasDeepLink = window.location.hash.length > 1;
    
    if (hasDeepLink) {
        handleDeepLink();
    } else {
        // Show first location by default
        setTimeout(() => {
            showLocationDetails(journeyData[0]);
            updateTimeline();
            
            // Position avatar at first location
            if (window.monkAvatar && journeyData[0]) {
                window.monkAvatar.moveToLocation(journeyData[0].coordinates, 0);
                window.monkAvatar.show(); // Ensure avatar is visible
            }
        }, 500);
    }
    
    // NOTE: Location search functionality removed per requirements
});

// Handle hash changes (when user uses browser back/forward)
window.addEventListener('hashchange', () => {
    handleDeepLink();
});

// Handle window resize
window.addEventListener('resize', () => {
    map.invalidateSize();
});

// Handle language change
document.addEventListener('languageChanged', () => {
    // Clear and re-create markers with updated labels
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    addMarkers();
    
    // Update info panel if visible
    if (currentStepIndex >= 0 && currentStepIndex < journeyData.length) {
        showLocationDetails(journeyData[currentStepIndex]);
    }
    
    // Update timeline
    updateTimeline();
    
    // Update mobile language button flag
    const mobileLangBtn = document.getElementById('mobileLangBtn');
    if (mobileLangBtn) {
        const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        mobileLangBtn.textContent = currentLang === 'vi' ? '🇻🇳' : '🇬🇧';
    }
    
    // Update language buttons
    updateLanguageButtons();
    
    // Re-render timeline markers with updated language
    if (window.enhancedTimeline) {
        window.enhancedTimeline.render();
        window.enhancedTimeline.setCurrentIndex(currentStepIndex);
    }
});

// Connect timeline clicks to map
window.onTimelineMarkerClick = function(index) {
    currentStepIndex = index;
    updateTimeline();
    stopPlaying();
};

// NOTE: Location search functionality removed per requirements
// The search function has been removed from the UI to simplify the interface
// and focus on the journey visualization

// ===== Mobile Bottom Panel Functionality =====

let mobilePanel = null;
let panelStartY = 0;
let panelCurrentY = 0;
let isDragging = false;
let isPanelExpanded = false;

function initMobilePanel() {
    mobilePanel = document.getElementById('mobileBottomPanel');
    if (!mobilePanel) return;
    
    const panelHandle = document.getElementById('panelHandle');
    
    // Touch event handlers for swipe gestures
    panelHandle.addEventListener('touchstart', handleTouchStart, { passive: true });
    panelHandle.addEventListener('touchmove', handleTouchMove, { passive: false });
    panelHandle.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Initialize with first location
    if (journeyData && journeyData.length > 0) {
        updateMobilePanel(journeyData[0]);
    }
}

function handleTouchStart(e) {
    panelStartY = e.touches[0].clientY;
    isDragging = true;
}

function handleTouchMove(e) {
    if (!isDragging) return;
    
    panelCurrentY = e.touches[0].clientY;
    const deltaY = panelStartY - panelCurrentY;
    
    // Prevent default scrolling during drag
    if (Math.abs(deltaY) > 10) {
        e.preventDefault();
    }
}

function handleTouchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaY = panelStartY - panelCurrentY;
    const threshold = 50; // Minimum swipe distance
    
    if (deltaY > threshold) {
        // Swiped up - expand panel
        expandMobilePanel();
    } else if (deltaY < -threshold) {
        // Swiped down - collapse panel
        collapseMobilePanel();
    }
}

function expandMobilePanel() {
    if (!mobilePanel) return;
    mobilePanel.classList.add('expanded');
    mobilePanel.classList.remove('collapsed');
    isPanelExpanded = true;
}

function collapseMobilePanel() {
    if (!mobilePanel) return;
    mobilePanel.classList.remove('expanded');
    mobilePanel.classList.add('collapsed');
    isPanelExpanded = false;
}

function updateMobilePanel(location) {
    const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
    const tFunc = typeof t === 'function' ? t : (key) => key;
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const isVietnamese = currentLang === 'vi';
    
    // Update station name and meta
    const stationName = document.getElementById('mobileStationName');
    const stationMeta = document.getElementById('mobileStationMeta');
    
    if (stationName) {
        stationName.textContent = enhanced.name;
    }
    
    if (stationMeta) {
        const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
        // Show year prominently first, then location
        stationMeta.innerHTML = `<span class="year-highlight">${enhanced.year} CE</span><span class="location-text">${modernName}</span>`;
    }
    
    // Update image gallery
    updateMobileGallery(location, enhanced);
    
    // Update expanded details
    updateMobileDetails(location, enhanced, tFunc, isVietnamese);
    
    // Initialize mobile timeline if not already done
    initMobileTimeline();
}

function updateMobileGallery(location, enhanced) {
    const galleryScroll = document.getElementById('galleryScroll');
    if (!galleryScroll) return;
    
    galleryScroll.innerHTML = '';
    
    // Use same logic as desktop carousel for image paths
    const siteIndex = String(location.id).padStart(2, '0');
    const cityName = location.modernName.split(',')[0].trim().replace(/ /g, '_');
    
    // Image codes: 0001, 0002, 0003, 0004 (4 mini thumbnails)
    const imageCodes = ['0001', '0002', '0003', '0004'];
    const loadedImages = [];
    
    imageCodes.forEach((code, index) => {
        const img = document.createElement('img');
        img.className = 'gallery-image';
        img.loading = 'lazy';
        img.src = `images/${siteIndex}_${cityName}_${code}.jpg`;
        img.alt = `${enhanced.name} - Image ${index + 1}`;
        
        // Store image info for lightbox
        loadedImages.push({
            src: img.src,
            alt: img.alt
        });
        
        // Add error handling
        img.onerror = function() {
            const placeholder = document.createElement('div');
            placeholder.className = 'gallery-placeholder';
            placeholder.innerHTML = '🖼️';
            this.parentNode.replaceChild(placeholder, this);
        };
        
        // Add click handler for lightbox viewer
        img.addEventListener('click', () => {
            if (typeof window.openLightbox === 'function') {
                window.openLightbox(loadedImages, index);
            }
        });
        
        galleryScroll.appendChild(img);
    });
}

function updateMobileDetails(location, enhanced, tFunc, isVietnamese) {
    const detailsContainer = document.getElementById('mobileStationDetails');
    if (!detailsContainer) return;
    
    const description = isVietnamese && enhanced.description_vi ? enhanced.description_vi : enhanced.description;
    const historicalContext = isVietnamese && enhanced.historicalContext_vi ? enhanced.historicalContext_vi : enhanced.historicalContext;
    
    detailsContainer.innerHTML = `
        <h6>${tFunc('info.description') || 'Description'}</h6>
        <p>${description}</p>
        ${historicalContext ? `
            <h6>${tFunc('info.historicalContext') || 'Historical Context'}</h6>
            <p>${historicalContext}</p>
        ` : ''}
        <p><strong>${tFunc('info.duration') || 'Duration'}:</strong> ${enhanced.duration}</p>
        <p><strong>${tFunc('info.arrival') || 'Arrival'}:</strong> ${enhanced.arrivalMonth || enhanced.year + ' CE'}</p>
    `;
}

function initMobileTimeline() {
    const mobileTimelineContainer = document.getElementById('mobileTimelineContainer');
    if (!mobileTimelineContainer || window.mobileTimelineInitialized) return;
    
    // Check if we're on mobile
    if (window.innerWidth > 768) return;
    
    // Create a timeline instance for mobile
    if (typeof EnhancedTimeline !== 'undefined' && journeyData) {
        window.mobileTimeline = new EnhancedTimeline(mobileTimelineContainer, journeyData);
        window.mobileTimelineInitialized = true;
    }
}

// Update showLocationDetails to also update mobile panel
const originalShowLocationDetails = showLocationDetails;
showLocationDetails = function(location) {
    // Call original function for desktop panels
    originalShowLocationDetails(location);
    
    // Update mobile panel if on mobile
    if (window.innerWidth <= 768) {
        updateMobilePanel(location);
    }
};

// Initialize mobile panel on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobilePanel);
} else {
    initMobilePanel();
}

// Re-initialize on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        initMobileTimeline();
    }
});

// ===== Mobile Navbar Handlers =====

// Language toggle for mobile
let currentLangIndex = 0;
const languages = ['en', 'vi'];

function initMobileNavbar() {
    const mobileLangBtn = document.getElementById('mobileLangBtn');
    const mobileGalleryBtn = document.getElementById('mobileGalleryBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileLangBtn) {
        // Initialize with the current language flag
        const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        mobileLangBtn.textContent = currentLang === 'vi' ? '🇻🇳' : '🇬🇧';
        
        mobileLangBtn.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % languages.length;
            const newLang = languages[currentLangIndex];
            if (typeof setLanguage === 'function') {
                setLanguage(newLang);
            }
            // Update button to show the flag of the current language
            mobileLangBtn.textContent = newLang === 'vi' ? '🇻🇳' : '🇬🇧';
        });
    }
    
    if (mobileGalleryBtn) {
        let galleryVisible = true;
        mobileGalleryBtn.addEventListener('click', () => {
            const mobileGallery = document.getElementById('mobileGallery');
            if (mobileGallery) {
                galleryVisible = !galleryVisible;
                mobileGallery.style.display = galleryVisible ? 'block' : 'none';
                mobileGalleryBtn.style.opacity = galleryVisible ? '1' : '0.5';
            }
        });
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle expanded details panel
            if (mobilePanel) {
                if (isPanelExpanded) {
                    collapseMobilePanel();
                } else {
                    expandMobilePanel();
                }
            }
        });
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavbar);
} else {
    initMobileNavbar();
}

// ===== Image Lightbox Functionality =====

let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(images, startIndex) {
    currentLightboxImages = images;
    currentLightboxIndex = startIndex;
    showLightboxImage();
    
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function showLightboxImage() {
    const img = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');
    
    if (img && currentLightboxImages.length > 0) {
        const currentImage = currentLightboxImages[currentLightboxIndex];
        img.src = currentImage.src;
        img.alt = currentImage.alt;
        
        if (caption) {
            caption.textContent = currentImage.alt || `Image ${currentLightboxIndex + 1} of ${currentLightboxImages.length}`;
        }
    }
}

function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    showLightboxImage();
}

function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    showLightboxImage();
}

// Initialize lightbox controls
function initLightbox() {
    const closeBtn = document.getElementById('lightboxClose');
    const overlay = document.getElementById('lightboxOverlay');
    const nextBtn = document.getElementById('lightboxNext');
    const prevBtn = document.getElementById('lightboxPrev');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeLightbox);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextLightboxImage);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevLightboxImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('imageLightbox');
        if (lightbox && lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextLightboxImage();
            } else if (e.key === 'ArrowLeft') {
                prevLightboxImage();
            }
        }
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
} else {
    initLightbox();
}

// Make openLightbox available globally
window.openLightbox = openLightbox;

// ===== Swipe Navigation for Map (Next/Previous Stop) =====

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleMapSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Only process horizontal swipes (more horizontal than vertical)
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        const minSwipeDistance = 50;
        
        if (deltaX > minSwipeDistance) {
            // Swipe right - go to previous stop
            navigateToPreviousStop();
        } else if (deltaX < -minSwipeDistance) {
            // Swipe left - go to next stop
            navigateToNextStop();
        }
    }
}

function navigateToNextStop() {
    if (typeof currentStepIndex !== 'undefined' && typeof journeyData !== 'undefined') {
        if (currentStepIndex < journeyData.length - 1) {
            currentStepIndex++;
            if (typeof updateTimeline === 'function') {
                updateTimeline();
            }
        }
    }
}

function navigateToPreviousStop() {
    if (typeof currentStepIndex !== 'undefined' && typeof journeyData !== 'undefined') {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            if (typeof updateTimeline === 'function') {
                updateTimeline();
            }
        }
    }
}

function initMapSwipe() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    mapElement.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    mapElement.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleMapSwipe();
    }, { passive: true });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMapSwipe);
} else {
    initMapSwipe();
}

// ===== Desktop Side Panel Functionality =====

let isDesktopSidePanelCollapsed = false;

function toggleDesktopSidePanel() {
    const panel = document.getElementById('desktopSidePanel');
    if (!panel) return;
    
    isDesktopSidePanelCollapsed = !isDesktopSidePanelCollapsed;
    
    if (isDesktopSidePanelCollapsed) {
        panel.classList.add('collapsed');
    } else {
        panel.classList.remove('collapsed');
    }
}

function updateDesktopSidePanel(location) {
    // Only update on desktop (≥1024px)
    if (window.innerWidth < 1024) return;
    
    const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
    const tFunc = typeof t === 'function' ? t : (key) => key;
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const isVietnamese = currentLang === 'vi';
    
    // Update title and subtitle
    const titleEl = document.getElementById('desktopLocationTitle');
    const subtitleEl = document.getElementById('desktopLocationSubtitle');
    
    if (titleEl) {
        titleEl.textContent = enhanced.name;
    }
    
    if (subtitleEl) {
        const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : enhanced.modernName;
        subtitleEl.textContent = `${modernName} • ${enhanced.year} CE`;
    }
    
    // Update gallery
    updateDesktopGallery(location, enhanced);
    
    // Update mini timeline
    // Update bottom timeline highlight (if initialized)
    if (typeof updateDesktopTimelineHighlight === 'function') {
        updateDesktopTimelineHighlight(location);
    }
    
    // Update description
    const descriptionEl = document.getElementById('desktopDescription');
    if (descriptionEl) {
        const description = isVietnamese 
            ? (enhanced.expandedDescription_vi || enhanced.description_vi || enhanced.description)
            : (enhanced.expandedDescription || enhanced.description);
        descriptionEl.textContent = description;
    }
    
    // Update historical context
    const historicalSection = document.getElementById('desktopHistoricalSection');
    const historicalContext = document.getElementById('desktopHistoricalContext');
    
    if (enhanced.historicalEvents && historicalContext) {
        const histEventsText = isVietnamese && enhanced.historicalEvents_vi 
            ? enhanced.historicalEvents_vi 
            : enhanced.historicalEvents;
        historicalContext.textContent = histEventsText;
        if (historicalSection) {
            historicalSection.style.display = 'block';
        }
    } else if (historicalSection) {
        historicalSection.style.display = 'none';
    }
    
    // Ensure panel is visible (not collapsed)
    const panel = document.getElementById('desktopSidePanel');
    if (panel && isDesktopSidePanelCollapsed) {
        panel.classList.remove('collapsed');
        isDesktopSidePanelCollapsed = false;
    }
}

function updateDesktopGallery(location, enhanced) {
    const galleryEl = document.getElementById('desktopGallery');
    if (!galleryEl) return;
    
    galleryEl.innerHTML = '';
    
    // Use the exact same image loading logic as updateIllustrationPanel() for consistency
    // Load images from local images folder based on site index
    // Format: {index}_{city}_{code}.jpg where code is 0001-0004
    const siteIndex = String(location.id).padStart(2, '0');
    // IMPORTANT: Always use the original English city name for image paths, not translated names
    // Image filenames are based on English names (e.g., "Xi'an" not "Tây An")
    const cityName = location.modernName.split(',')[0].trim().replace(/ /g, '_');
    
    // Image codes: 0004, 0001, 0002, 0003 for gallery
    const imageCodes = ['0004', '0001', '0002', '0003'];
    const imageDescriptions = [
        'Road condition illustration',
        'Historical site view',
        'Archaeological perspective', 
        'Buddhist temple/monastery'
    ];
    
    // Track loaded images for lightbox
    const loadedImages = [];
    
    imageCodes.forEach((code, index) => {
        const img = document.createElement('img');
        
        // Implement lazy loading for performance
        img.loading = 'lazy';
        
        // Set image path from local images folder
        img.src = `images/${siteIndex}_${cityName}_${code}.jpg`;
        img.alt = `${enhanced.name} - ${imageDescriptions[index]}`;
        img.className = 'side-panel-gallery-image';
        
        // Add to loaded images array for lightbox
        loadedImages.push({
            src: img.src,
            alt: img.alt
        });
        
        // Add error handling for broken images
        img.onerror = function() {
            console.warn(`Failed to load image: ${img.src}`);
            // Replace with placeholder on error
            const placeholder = document.createElement('div');
            placeholder.className = 'side-panel-gallery-placeholder';
            placeholder.textContent = '🏛️';
            this.parentNode.replaceChild(placeholder, this);
        };
        
        // Add loading state
        img.onload = function() {
            this.classList.add('loaded');
        };
        
        // Add click handler to open lightbox
        img.addEventListener('click', () => {
            if (typeof openLightbox === 'function') {
                openLightbox(loadedImages, index);
            }
        });
        
        galleryEl.appendChild(img);
    });
}

// Initialize Desktop Bottom Timeline (Full width, all 29 stops)
function initDesktopTimeline() {
    const timelineContainer = document.getElementById('desktopTimelineContainer');
    if (!timelineContainer || !journeyData || window.innerWidth < 1024) return;
    
    // Create timeline structure
    const timelineContent = document.createElement('div');
    timelineContent.className = 'desktop-timeline-content';
    
    const timelineTrack = document.createElement('div');
    timelineTrack.className = 'desktop-timeline-track';
    
    const timelineMarkers = document.createElement('div');
    timelineMarkers.className = 'desktop-timeline-markers';
    
    // Get current language for display
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const isVietnamese = currentLang === 'vi';
    
    // Create marker for each location (all 29 stops)
    journeyData.forEach((location, index) => {
        const enhanced = typeof getEnhancedLocation === 'function' 
            ? getEnhancedLocation(location) 
            : location;
        
        const marker = document.createElement('div');
        marker.className = 'desktop-timeline-marker';
        marker.dataset.index = index;
        
        // Determine if outward or return journey (approximate: first 15 are outward, rest return)
        const isReturn = index >= 15;
        marker.classList.add(isReturn ? 'return' : 'outward');
        
        // Year label
        const yearEl = document.createElement('div');
        yearEl.className = 'desktop-timeline-year';
        yearEl.textContent = location.year;
        
        // Dot/marker
        const dotEl = document.createElement('div');
        dotEl.className = 'desktop-timeline-dot';
        
        // City name (use Vietnamese if available)
        const cityEl = document.createElement('div');
        cityEl.className = 'desktop-timeline-city';
        const modernName = isVietnamese && enhanced.modernName_vi 
            ? enhanced.modernName_vi 
            : enhanced.modernName;
        const cityName = modernName.split(',')[0].trim();
        cityEl.textContent = cityName;
        
        // Add click handler
        marker.addEventListener('click', () => {
            if (window.currentStepIndex !== undefined) {
                window.currentStepIndex = index;
            }
            
            // Move monk avatar
            if (window.monkAvatar && journeyData[index]) {
                window.monkAvatar.moveToLocation(journeyData[index].coordinates, 1000);
            }
            
            // Update all panels
            showLocationDetails(journeyData[index]);
            
            // Update desktop side panel
            if (typeof updateDesktopSidePanel === 'function') {
                updateDesktopSidePanel(journeyData[index]);
            }
            
            // Update timeline highlight
            updateDesktopTimelineHighlight(journeyData[index]);
        });
        
        marker.appendChild(yearEl);
        marker.appendChild(dotEl);
        marker.appendChild(cityEl);
        timelineMarkers.appendChild(marker);
    });
    
    timelineContent.appendChild(timelineTrack);
    timelineContent.appendChild(timelineMarkers);
    timelineContainer.innerHTML = '';
    timelineContainer.appendChild(timelineContent);
    
    // Set initial highlight
    if (journeyData.length > 0) {
        updateDesktopTimelineHighlight(journeyData[0]);
    }
}

// Update Desktop Timeline to highlight current location
function updateDesktopTimelineHighlight(currentLocation) {
    if (window.innerWidth < 1024) return;
    
    const markers = document.querySelectorAll('.desktop-timeline-marker');
    if (!markers.length || !journeyData) return;
    
    // Find current location index
    const currentIndex = journeyData.findIndex(loc => 
        loc.name === currentLocation.name && loc.year === currentLocation.year
    );
    
    markers.forEach((marker, index) => {
        marker.classList.remove('active');
        if (parseInt(marker.dataset.index) === currentIndex) {
            marker.classList.add('active');
            // Scroll marker into view
            marker.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });
}

// Make functions globally accessible
window.toggleDesktopSidePanel = toggleDesktopSidePanel;
window.updateDesktopSidePanel = updateDesktopSidePanel;
window.updateDesktopTimelineHighlight = updateDesktopTimelineHighlight;

// Initialize desktop side panel and timeline with first location
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (journeyData && journeyData.length > 0 && window.innerWidth >= 1024) {
            updateDesktopSidePanel(journeyData[0]);
            initDesktopTimeline();
        }
    });
} else {
    if (journeyData && journeyData.length > 0 && window.innerWidth >= 1024) {
        updateDesktopSidePanel(journeyData[0]);
        initDesktopTimeline();
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && journeyData && journeyData[window.currentStepIndex || 0]) {
        // On desktop, update desktop side panel and timeline
        updateDesktopSidePanel(journeyData[window.currentStepIndex || 0]);
        if (!document.querySelector('.desktop-timeline-markers')) {
            initDesktopTimeline();
        }
    }
});

