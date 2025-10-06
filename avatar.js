// Animated Monk Avatar System
// Creates an animated Buddhist monk character that walks along the journey path

class MonkAvatar {
    constructor() {
        this.container = null;
        this.avatar = null;
        this.currentAnimation = 'idle';
        this.footstepInterval = null;
        this.map = null;
        this.mapMarker = null;
        this.currentPosition = null; // Track current position for animations
        this.animationFrame = null; // Track animation frame for cancellation
        this.init();
    }
    
    init() {
        this.createAvatarContainer();
        this.createAtmosphere();
    }
    
    setMap(map) {
        this.map = map;
        // Create a custom divIcon for the map marker
        if (map && window.L) {
            const avatarIcon = L.divIcon({
                className: 'map-monk-avatar',
                html: this.getMonkSVG(),
                iconSize: [60, 80],
                iconAnchor: [30, 80]
            });
            
            // Create marker but don't add to map yet
            // Initialize at first journey location if available
            const initialCoords = window.journeyData && window.journeyData[0] 
                ? window.journeyData[0].coordinates 
                : [34.2658, 108.9541]; // Default to Chang'an
            
            this.mapMarker = L.marker(initialCoords, { 
                icon: avatarIcon,
                zIndexOffset: 2000
            });
            
            this.currentPosition = initialCoords;
        }
    }
    
    createAvatarContainer() {
        this.container = document.createElement('div');
        this.container.className = 'monk-avatar-container';
        this.container.innerHTML = this.getMonkSVG();
        document.body.appendChild(this.container);
        this.avatar = this.container.querySelector('.monk-avatar');
    }
    
    getMonkSVG() {
        return `
            <svg class="monk-avatar" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                <!-- Monk's robe -->
                <ellipse cx="30" cy="60" rx="18" ry="8" fill="#8B4513" opacity="0.3"/>
                <path d="M 20 35 Q 15 50 18 65 L 42 65 Q 45 50 40 35 Z" fill="#D2691E" stroke="#8B4513" stroke-width="1"/>
                
                <!-- Left arm -->
                <line x1="22" y1="40" x2="15" y2="50" stroke="#D2691E" stroke-width="4" stroke-linecap="round"/>
                <circle cx="15" cy="50" r="3" fill="#FFE4C4"/>
                
                <!-- Right arm with staff -->
                <line x1="38" y1="40" x2="45" y2="50" stroke="#D2691E" stroke-width="4" stroke-linecap="round"/>
                <circle cx="45" cy="50" r="3" fill="#FFE4C4"/>
                <line x1="47" y1="30" x2="47" y2="65" stroke="#8B4513" stroke-width="2"/>
                <circle cx="47" cy="28" r="3" fill="#FFD700"/>
                
                <!-- Body/robe details -->
                <path d="M 25 40 Q 30 45 35 40" stroke="#8B4513" stroke-width="1" fill="none"/>
                <path d="M 23 48 Q 30 52 37 48" stroke="#8B4513" stroke-width="1" fill="none"/>
                
                <!-- Head -->
                <circle cx="30" cy="25" r="10" fill="#FFE4C4" stroke="#D2B48C" stroke-width="1"/>
                
                <!-- Hat/head covering -->
                <ellipse cx="30" cy="18" rx="11" ry="6" fill="#8B4513"/>
                <path d="M 19 18 Q 30 12 41 18" fill="#A0522D"/>
                
                <!-- Face details -->
                <circle cx="26" cy="24" r="1.5" fill="#000"/>
                <circle cx="34" cy="24" r="1.5" fill="#000"/>
                <path d="M 26 28 Q 30 30 34 28" stroke="#000" stroke-width="0.5" fill="none"/>
                
                <!-- Praying hands -->
                <ellipse cx="30" cy="42" rx="6" ry="4" fill="#FFE4C4" opacity="0.9"/>
                <line x1="30" y1="38" x2="30" y2="46" stroke="#D2B48C" stroke-width="1"/>
                
                <!-- Beads/prayer beads -->
                <circle cx="28" cy="42" r="1" fill="#8B4513"/>
                <circle cx="30" cy="43" r="1" fill="#8B4513"/>
                <circle cx="32" cy="42" r="1" fill="#8B4513"/>
                
                <!-- Legs (simple) -->
                <line x1="26" y1="65" x2="26" y2="75" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
                <line x1="34" y1="65" x2="34" y2="75" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
                
                <!-- Feet -->
                <ellipse cx="26" cy="76" rx="4" ry="2" fill="#654321"/>
                <ellipse cx="34" cy="76" rx="4" ry="2" fill="#654321"/>
            </svg>
        `;
    }
    
    createAtmosphere() {
        const atmosphere = document.createElement('div');
        atmosphere.className = 'atmosphere-container';
        atmosphere.id = 'atmosphereContainer';
        
        // Add clouds
        for (let i = 1; i <= 3; i++) {
            const cloud = document.createElement('div');
            cloud.className = `cloud cloud-${i}`;
            atmosphere.appendChild(cloud);
        }
        
        document.body.appendChild(atmosphere);
    }
    
    startWalking() {
        this.currentAnimation = 'walking';
        this.avatar.className = 'monk-avatar walking';
        this.startFootsteps();
        this.startLeaves();
    }
    
    stopWalking() {
        this.currentAnimation = 'idle';
        this.avatar.className = 'monk-avatar';
        this.stopFootsteps();
        this.stopLeaves();
    }
    
    bow() {
        this.currentAnimation = 'bowing';
        this.avatar.className = 'monk-avatar bowing';
        setTimeout(() => {
            if (this.currentAnimation === 'bowing') {
                this.avatar.className = 'monk-avatar';
                this.currentAnimation = 'idle';
            }
        }, 2000);
    }
    
    meditate() {
        this.currentAnimation = 'meditating';
        this.avatar.className = 'monk-avatar meditating';
        setTimeout(() => {
            if (this.currentAnimation === 'meditating') {
                this.avatar.className = 'monk-avatar';
                this.currentAnimation = 'idle';
            }
        }, 3000);
    }
    
    celebrate() {
        this.currentAnimation = 'celebrating';
        this.avatar.className = 'monk-avatar celebrating';
        setTimeout(() => {
            if (this.currentAnimation === 'celebrating') {
                this.avatar.className = 'monk-avatar';
                this.currentAnimation = 'idle';
            }
        }, 3000);
    }
    
    performEmotionAction(emotion) {
        const actions = {
            'determined': () => this.startWalking(),
            'excited': () => this.celebrate(),
            'tired': () => this.stopWalking(),
            'contemplative': () => this.meditate(),
            'peaceful': () => this.meditate(),
            'reverent': () => this.bow(),
            'triumphant': () => this.celebrate()
        };
        
        const action = actions[emotion];
        if (action) {
            action();
        }
    }
    
    startFootsteps() {
        if (this.footstepInterval) return;
        
        let leftFoot = true;
        this.footstepInterval = setInterval(() => {
            const footstep = document.createElement('div');
            footstep.className = 'footstep';
            
            const rect = this.container.getBoundingClientRect();
            footstep.style.left = (rect.left + (leftFoot ? 20 : 35)) + 'px';
            footstep.style.top = (rect.bottom - 10) + 'px';
            footstep.style.transform = `rotate(${leftFoot ? -10 : 10}deg)`;
            
            document.body.appendChild(footstep);
            leftFoot = !leftFoot;
            
            setTimeout(() => footstep.remove(), 2000);
        }, 400);
    }
    
    stopFootsteps() {
        if (this.footstepInterval) {
            clearInterval(this.footstepInterval);
            this.footstepInterval = null;
        }
    }
    
    startLeaves() {
        if (this.leavesInterval) return;
        
        this.leavesInterval = setInterval(() => {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            leaf.style.left = Math.random() * 100 + '%';
            leaf.style.animationDuration = (5 + Math.random() * 5) + 's';
            leaf.style.animationDelay = Math.random() * 2 + 's';
            
            const atmosphere = document.getElementById('atmosphereContainer');
            if (atmosphere) {
                atmosphere.appendChild(leaf);
                setTimeout(() => leaf.remove(), 12000);
            }
        }, 1000);
    }
    
    stopLeaves() {
        if (this.leavesInterval) {
            clearInterval(this.leavesInterval);
            this.leavesInterval = null;
        }
    }
    
    moveTo(x, y, duration = 1000) {
        this.container.style.transition = `all ${duration}ms ease-in-out`;
        this.container.style.left = x + 'px';
        this.container.style.bottom = y + 'px';
    }
    
    moveToLocation(coordinates, duration = 1000) {
        // Move avatar on the map to specific coordinates with animation along the route
        if (this.map && this.mapMarker && coordinates) {
            // Add marker to map if not already added
            if (!this.map.hasLayer(this.mapMarker)) {
                this.mapMarker.addTo(this.map);
            }
            
            // Get current position
            const currentLatLng = this.mapMarker.getLatLng();
            this.currentPosition = [currentLatLng.lat, currentLatLng.lng];
            const targetPosition = coordinates;
            
            // Find the path between current and target positions
            const path = this.getPathBetweenLocations(this.currentPosition, targetPosition);
            
            // Animate along the path
            this.animateAlongPath(path, duration);
        }
    }
    
    getPathBetweenLocations(start, end) {
        // Get journey data to find intermediate points
        if (!window.journeyData) {
            return [start, end];
        }
        
        // Find indices of start and end in journey data
        const startIndex = window.journeyData.findIndex(loc => 
            Math.abs(loc.coordinates[0] - start[0]) < 0.01 && 
            Math.abs(loc.coordinates[1] - start[1]) < 0.01
        );
        
        const endIndex = window.journeyData.findIndex(loc => 
            Math.abs(loc.coordinates[0] - end[0]) < 0.01 && 
            Math.abs(loc.coordinates[1] - end[1]) < 0.01
        );
        
        // If we can't find the locations, just return direct path
        if (startIndex === -1 || endIndex === -1) {
            return [start, end];
        }
        
        // Extract the path between the two locations
        const path = [];
        const minIndex = Math.min(startIndex, endIndex);
        const maxIndex = Math.max(startIndex, endIndex);
        
        // If going forward in journey
        if (startIndex < endIndex) {
            for (let i = minIndex; i <= maxIndex; i++) {
                path.push(window.journeyData[i].coordinates);
            }
        } else {
            // If going backward in journey
            for (let i = maxIndex; i >= minIndex; i--) {
                path.push(window.journeyData[i].coordinates);
            }
        }
        
        return path;
    }
    
    animateAlongPath(path, totalDuration) {
        if (!path || path.length < 2) return;
        
        // Cancel any ongoing animation
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        const startTime = Date.now();
        const totalDistance = this.calculatePathDistance(path);
        
        // Start walking animation
        this.startWalking();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / totalDuration, 1);
            
            // Calculate position along path based on progress
            const position = this.getPositionAlongPath(path, progress);
            
            if (position) {
                this.mapMarker.setLatLng(position);
                this.currentPosition = position;
                
                // Don't pan the map - per requirement "we do not need to automatically zoom into the chosen location"
                // But we can keep the location in view without zooming
            }
            
            if (progress < 1) {
                this.animationFrame = requestAnimationFrame(animate);
            } else {
                // Animation complete - stop walking
                this.stopWalking();
                this.animationFrame = null;
            }
        };
        
        this.animationFrame = requestAnimationFrame(animate);
    }
    
    calculatePathDistance(path) {
        let totalDistance = 0;
        for (let i = 0; i < path.length - 1; i++) {
            const lat1 = path[i][0];
            const lon1 = path[i][1];
            const lat2 = path[i + 1][0];
            const lon2 = path[i + 1][1];
            
            // Simple distance calculation
            totalDistance += Math.sqrt(
                Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2)
            );
        }
        return totalDistance;
    }
    
    getPositionAlongPath(path, progress) {
        if (progress <= 0) return path[0];
        if (progress >= 1) return path[path.length - 1];
        
        // Calculate total path length
        const segments = [];
        let totalLength = 0;
        
        for (let i = 0; i < path.length - 1; i++) {
            const lat1 = path[i][0];
            const lon1 = path[i][1];
            const lat2 = path[i + 1][0];
            const lon2 = path[i + 1][1];
            
            const length = Math.sqrt(
                Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2)
            );
            
            segments.push({ start: path[i], end: path[i + 1], length });
            totalLength += length;
        }
        
        // Find which segment we're on based on progress
        const targetDistance = progress * totalLength;
        let accumulatedDistance = 0;
        
        for (const segment of segments) {
            if (accumulatedDistance + segment.length >= targetDistance) {
                // We're on this segment
                const segmentProgress = (targetDistance - accumulatedDistance) / segment.length;
                
                // Interpolate position
                const lat = segment.start[0] + (segment.end[0] - segment.start[0]) * segmentProgress;
                const lon = segment.start[1] + (segment.end[1] - segment.start[1]) * segmentProgress;
                
                return [lat, lon];
            }
            
            accumulatedDistance += segment.length;
        }
        
        return path[path.length - 1];
    }
    
    hide() {
        this.container.style.opacity = '0';
        if (this.mapMarker && this.map && this.map.hasLayer(this.mapMarker)) {
            this.map.removeLayer(this.mapMarker);
        }
    }
    
    show() {
        this.container.style.opacity = '1';
        if (this.mapMarker && this.map && !this.map.hasLayer(this.mapMarker)) {
            this.mapMarker.addTo(this.map);
        }
    }
}

// Global monk avatar instance
let monkAvatar = null;

function initMonkAvatar() {
    if (!monkAvatar) {
        monkAvatar = new MonkAvatar();
    }
    return monkAvatar;
}

// Update play button to show mini monk
function updatePlayButtonWithAvatar() {
    const playBtn = document.getElementById('playBtn');
    if (playBtn && !playBtn.classList.contains('avatar-play-button')) {
        playBtn.classList.add('avatar-play-button');
        
        // Add mini monk to button
        const miniMonk = document.createElement('span');
        miniMonk.className = 'mini-monk';
        miniMonk.innerHTML = '🚶‍♂️';
        playBtn.insertBefore(miniMonk, playBtn.firstChild);
    }
}
