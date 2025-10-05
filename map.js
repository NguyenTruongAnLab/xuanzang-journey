// Map initialization and journey visualization
let map;
let markers = [];
let journeyLine;
let currentStepIndex = 0;
let isPlaying = false;
let playInterval;
let bookmarkedLocations = new Set();

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

// Update share buttons for current location
function updateShareButtons(location, enhanced, tFunc) {
    const shareButtonsContainer = document.getElementById('shareButtons');
    if (!shareButtonsContainer) return;
    
    // Generate shareable URL
    const locationSlug = location.name.toLowerCase().replace(/['\s]/g, '-').replace(/--+/g, '-');
    const shareUrl = `${window.location.origin}${window.location.pathname}#${locationSlug}`;
    const shareText = `${enhanced.name} - Xuanzang's Journey (${location.year} CE)`;
    
    shareButtonsContainer.innerHTML = `
        <button class="btn btn-sm btn-outline-primary share-btn" onclick="copyShareLink('${shareUrl}')" title="${tFunc('share.copyLink')}">
            🔗 ${tFunc('share.copyLink')}
        </button>
        <button class="btn btn-sm btn-outline-info share-btn" onclick="shareOnTwitter('${encodeURIComponent(shareText)}', '${encodeURIComponent(shareUrl)}')" title="Share on Twitter/X">
            𝕏 Twitter
        </button>
        <button class="btn btn-sm btn-outline-primary share-btn" onclick="shareOnFacebook('${encodeURIComponent(shareUrl)}')" title="Share on Facebook">
            📘 Facebook
        </button>
    `;
}

// Copy share link to clipboard
window.copyShareLink = function(url) {
    const tFunc = typeof t === 'function' ? t : (key) => key;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showShareNotification(tFunc('share.linkCopied'));
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyToClipboard(url);
        });
    } else {
        fallbackCopyToClipboard(url);
    }
};

// Fallback copy method for older browsers
function fallbackCopyToClipboard(text) {
    const tFunc = typeof t === 'function' ? t : (key) => key;
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showShareNotification(tFunc('share.linkCopied'));
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
}

// Show notification after sharing
function showShareNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'share-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #198754;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Share on Twitter/X
window.shareOnTwitter = function(text, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
};

// Share on Facebook
window.shareOnFacebook = function(url) {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
};

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
    
    // Update bookmark button state
    updateBookmarkButton();
    
    // Update share buttons
    updateShareButtons(location, enhanced, tFunc);
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
                
                // Implement lazy loading for performance
                img.loading = 'lazy';
                
                // Set responsive image attributes
                img.src = image.url;
                img.alt = image.caption || `Image of ${enhanced.name}`;
                img.className = 'carousel-image';
                img.dataset.caption = image.caption;
                
                // Add error handling for broken images
                img.onerror = function() {
                    console.warn(`Failed to load image: ${image.url}`);
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
            
            // Show first image caption
            if (carouselCaption && enhanced.images[0]) {
                carouselCaption.textContent = enhanced.images[0].caption;
            }
            
            // Setup carousel controls
            setupCarousel();
        } else {
            // Show placeholder when no images available
            carouselImages.appendChild(createImagePlaceholder(enhanced, tFunc, false));
            
            if (carouselCaption) {
                carouselCaption.textContent = '';
            }
        }
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
    // Load bookmarks first
    loadBookmarks();
    
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
            }
        }, 500);
    }
    
    // Add location search functionality
    addLocationSearchUI();
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

// Add location search functionality
function addLocationSearchUI() {
    const tFunc = typeof t === 'function' ? t : (key) => key;
    
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.id = 'locationSearch';
    searchContainer.className = 'location-search';
    searchContainer.innerHTML = `
        <input type="text" 
               id="searchInput" 
               class="form-control form-control-sm" 
               placeholder="${tFunc('search.placeholder')}"
               aria-label="${tFunc('search.label')}"
               autocomplete="off">
        <div id="searchResults" class="search-results"></div>
    `;
    
    // Insert after the navbar
    const navbar = document.querySelector('.navbar');
    if (navbar && navbar.nextSibling) {
        navbar.parentNode.insertBefore(searchContainer, navbar.nextSibling);
    }
    
    // Set up search functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performLocationSearch(query, searchResults);
        }, 300); // Debounce search
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Show results when focusing on input
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2) {
            performLocationSearch(searchInput.value.trim().toLowerCase(), searchResults);
        }
    });
}

// Perform location search and display results
function performLocationSearch(query, resultsContainer) {
    const tFunc = typeof t === 'function' ? t : (key) => key;
    
    // Search in name, modern name, and description
    const results = journeyData.filter((location, index) => {
        const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
        
        return (
            enhanced.name.toLowerCase().includes(query) ||
            enhanced.modernName.toLowerCase().includes(query) ||
            enhanced.description.toLowerCase().includes(query) ||
            (enhanced.ancientName && enhanced.ancientName.toLowerCase().includes(query))
        );
    });
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `<div class="search-result-item no-results">${tFunc('search.noResults')}</div>`;
        resultsContainer.style.display = 'block';
        return;
    }
    
    // Display results
    resultsContainer.innerHTML = results.map(location => {
        const enhanced = typeof getEnhancedLocation === 'function' ? getEnhancedLocation(location) : location;
        const locationIndex = journeyData.findIndex(l => l.id === location.id);
        
        return `
            <div class="search-result-item" data-index="${locationIndex}">
                <strong>${enhanced.name}</strong>
                <div class="search-result-meta">
                    <span class="text-muted">${enhanced.modernName}</span>
                    <span class="badge bg-secondary">${location.year} CE</span>
                </div>
            </div>
        `;
    }).join('');
    
    resultsContainer.style.display = 'block';
    
    // Add click handlers to results
    resultsContainer.querySelectorAll('.search-result-item[data-index]').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            currentStepIndex = index;
            updateTimeline();
            stopPlaying();
            
            // Close search results
            resultsContainer.style.display = 'none';
            document.getElementById('searchInput').value = '';
            
            // Zoom to location
            map.setView(journeyData[index].coordinates, 8, {
                animate: true,
                duration: 1
            });
        });
    });
}
