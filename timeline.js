// Enhanced Timeline Visualization
// Visual, interactive timeline with emotions and phases

class EnhancedTimeline {
    constructor(container, journeyData) {
        this.container = container;
        this.journeyData = journeyData;
        this.currentIndex = 0;
        this.markers = [];
        this.init();
    }
    
    init() {
        this.render();
        this.attachEventListeners();
    }
    
    getCountryRegion(location) {
        const name = location.modernName.toLowerCase();
        
        if (name.includes('china') || name.includes('xi\'an') || name.includes('gansu')) {
            return 'china';
        } else if (name.includes('xinjiang') || name.includes('hami') || name.includes('turpan') || name.includes('aksu')) {
            return 'desert';
        } else if (name.includes('uzbekistan') || name.includes('samarkand') || name.includes('bukhara') || name.includes('tashkent')) {
            return 'central-asia';
        } else if (name.includes('afghanistan') || name.includes('tajikistan') || name.includes('kyrgyzstan') || name.includes('kashgar') || name.includes('pamir') || name.includes('hindu kush')) {
            return 'mountain';
        } else if (name.includes('india') || name.includes('pakistan') || name.includes('bangladesh') || name.includes('nalanda') || name.includes('bodh gaya')) {
            return 'india';
        }
        return 'general';
    }
    
    getBackgroundImageForRegion(region) {
        const backgrounds = {
            'china': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Giant_Wild_Goose_Pagoda.jpg/800px-Giant_Wild_Goose_Pagoda.jpg',
            'desert': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taklamakan_desert.jpg/800px-Taklamakan_desert.jpg',
            'central-asia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Registan_Samarkand.jpg/800px-Registan_Samarkand.jpg',
            'mountain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pamir_Mountains.jpg/800px-Pamir_Mountains.jpg',
            'india': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mahabodhi_temple.jpg/800px-Mahabodhi_temple.jpg',
            'general': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Silk_Road_map.jpg/800px-Silk_Road_map.jpg'
        };
        return backgrounds[region] || backgrounds['general'];
    }
    
    setTimelineBackground() {
        const timelineViz = document.getElementById('timelineVisualization');
        if (!timelineViz || !this.journeyData || this.journeyData.length === 0) return;
        
        // Determine dominant region from current index or middle of journey
        const location = this.journeyData[this.currentIndex] || this.journeyData[Math.floor(this.journeyData.length / 2)];
        const region = this.getCountryRegion(location);
        const backgroundImage = this.getBackgroundImageForRegion(region);
        
        timelineViz.style.backgroundImage = `url('${backgroundImage}')`;
    }
    
    render() {
        const tFunc = typeof t === 'function' ? t : (key) => key;
        
        this.container.innerHTML = `
            <div class="timeline-visualization" id="timelineVisualization">
                <div class="timeline-track"></div>
                <div class="timeline-markers" id="timelineMarkers"></div>
                <div class="timeline-current-position" id="currentPosition">
                    <div class="timeline-current-info" id="currentInfo"></div>
                </div>
                <div class="timeline-year-markers">
                    <span class="year-marker">629</span>
                    <span class="year-marker">632</span>
                    <span class="year-marker">637</span>
                    <span class="year-marker">642</span>
                    <span class="year-marker">645</span>
                </div>
            </div>
        `;
        
        this.setTimelineBackground();
        this.renderMarkers();
        this.updatePosition(0);
    }
    
    renderMarkers() {
        const markersContainer = document.getElementById('timelineMarkers');
        markersContainer.innerHTML = '';
        this.markers = [];
        
        // Get current language
        const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        const isVietnamese = currentLang === 'vi';
        
        this.journeyData.forEach((location, index) => {
            const position = this.calculatePosition(location.year);
            const enhanced = typeof getEnhancedLocation === 'function' 
                ? getEnhancedLocation(location) 
                : location;
            
            const marker = document.createElement('div');
            marker.className = 'timeline-marker';
            marker.style.left = `${position}%`;
            marker.dataset.index = index;
            
            // Extract city and country from modernName (use Vietnamese if available)
            const modernName = isVietnamese && enhanced.modernName_vi ? enhanced.modernName_vi : location.modernName;
            const nameParts = modernName.split(',');
            const city = nameParts[0].trim();
            const country = nameParts.length > 1 ? nameParts[nameParts.length - 1].trim() : '';
            
            const emotion = enhanced.emotion || 'peaceful';
            const stopNumber = index + 1;
            marker.innerHTML = `
                <div class="marker-dot ${location.type}"></div>
                <div class="marker-label">
                    <div class="marker-year">${location.year}</div>
                    <div class="marker-city">${city}</div>
                </div>
            `;
            
            // Add tooltip with full information
            marker.title = `Stop ${stopNumber}: ${enhanced.name} (${location.year})\n${modernName}\n${location.duration}`;
            
            markersContainer.appendChild(marker);
            this.markers.push(marker);
        });
    }
    
    calculatePosition(year) {
        const startYear = 629;
        const endYear = 645;
        const percentage = ((year - startYear) / (endYear - startYear)) * 100;
        return Math.max(0, Math.min(100, percentage));
    }
    
    updatePosition(index) {
        this.currentIndex = index;
        const location = this.journeyData[index];
        const enhanced = typeof getEnhancedLocation === 'function' 
            ? getEnhancedLocation(location) 
            : location;
        
        const position = this.calculatePosition(location.year);
        const positionEl = document.getElementById('currentPosition');
        const infoEl = document.getElementById('currentInfo');
        
        if (positionEl && infoEl) {
            positionEl.style.left = `${position}%`;
            infoEl.textContent = `${enhanced.name} (${location.year})`;
        }
        
        // Update active marker
        this.markers.forEach((marker, idx) => {
            marker.classList.toggle('active', idx === index);
        });
        
        // Update timeline background based on current location
        this.setTimelineBackground();
    }
    
    attachEventListeners() {
        const markersContainer = document.getElementById('timelineMarkers');
        if (markersContainer) {
            markersContainer.addEventListener('click', (e) => {
                const marker = e.target.closest('.timeline-marker');
                if (marker) {
                    const index = parseInt(marker.dataset.index);
                    this.onMarkerClick(index);
                }
            });
        }
        
        // Listen for language changes
        document.addEventListener('languageChanged', () => {
            this.render();
            this.updatePosition(this.currentIndex);
        });
    }
    
    onMarkerClick(index) {
        // Update current index
        if (typeof window.currentStepIndex !== 'undefined') {
            window.currentStepIndex = index;
        }
        
        // Move monk avatar to clicked location with duration based on distance
        if (window.monkAvatar && window.journeyData && window.journeyData[index]) {
            // Calculate duration based on number of steps between current and target
            const currentIndex = window.currentStepIndex || 0;
            const stepsDifference = Math.abs(index - currentIndex);
            // Base duration of 2 seconds, plus 300ms per step
            const duration = Math.min(2000 + (stepsDifference * 300), 8000); // Cap at 8 seconds
            
            window.monkAvatar.moveToLocation(window.journeyData[index].coordinates, duration);
        }
        
        // Call the map update function
        if (window.onTimelineMarkerClick) {
            window.onTimelineMarkerClick(index);
        }
        
        // Update timeline to show current position
        this.updatePosition(index);
    }
    
    setCurrentIndex(index) {
        this.updatePosition(index);
    }
}

// Initialize enhanced timeline when DOM is ready
let enhancedTimeline = null;

function initEnhancedTimeline() {
    const container = document.getElementById('enhancedTimelineContainer');
    if (container && typeof journeyData !== 'undefined') {
        enhancedTimeline = new EnhancedTimeline(container, journeyData);
    }
}
