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
    
    render() {
        const tFunc = typeof t === 'function' ? t : (key) => key;
        
        this.container.innerHTML = `
            <div class="timeline-header">
                <h6 class="timeline-title">${tFunc('timeline.title')}</h6>
                <div class="timeline-phases">
                    <div class="timeline-phase">
                        <span class="phase-indicator phase-1"></span>
                        <span>${tFunc('timeline.phase1')}</span>
                    </div>
                    <div class="timeline-phase">
                        <span class="phase-indicator phase-2"></span>
                        <span>${tFunc('timeline.phase2')}</span>
                    </div>
                    <div class="timeline-phase">
                        <span class="phase-indicator phase-3"></span>
                        <span>${tFunc('timeline.phase3')}</span>
                    </div>
                    <div class="timeline-phase">
                        <span class="phase-indicator phase-4"></span>
                        <span>${tFunc('timeline.phase4')}</span>
                    </div>
                </div>
            </div>
            <div class="timeline-visualization">
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
        
        this.renderMarkers();
        this.updatePosition(0);
    }
    
    renderMarkers() {
        const markersContainer = document.getElementById('timelineMarkers');
        markersContainer.innerHTML = '';
        this.markers = [];
        
        this.journeyData.forEach((location, index) => {
            const position = this.calculatePosition(location.year);
            const enhanced = typeof getEnhancedLocation === 'function' 
                ? getEnhancedLocation(location) 
                : location;
            
            const marker = document.createElement('div');
            marker.className = 'timeline-marker';
            marker.style.left = `${position}%`;
            marker.dataset.index = index;
            
            // Extract city and country from modernName
            const nameParts = location.modernName.split(',');
            const city = nameParts[0].trim();
            const country = nameParts.length > 1 ? nameParts[nameParts.length - 1].trim() : '';
            
            const emotion = enhanced.emotion || 'peaceful';
            marker.innerHTML = `
                <div class="marker-dot ${location.type}"></div>
                <div class="marker-label">
                    <div class="marker-year">${location.year}</div>
                    <div class="marker-city">${city}</div>
                    ${country ? `<div class="marker-country">${country}</div>` : ''}
                </div>
                <div class="marker-emotion emotion-${emotion}"></div>
            `;
            
            // Add tooltip with full information
            marker.title = `${enhanced.name} (${location.year})\n${location.modernName}\n${location.duration}`;
            
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
        // This will be set by the main map.js
        if (window.onTimelineMarkerClick) {
            window.onTimelineMarkerClick(index);
        }
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
