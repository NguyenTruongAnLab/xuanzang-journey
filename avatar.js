// Animated Monk Avatar System
// Creates an animated Buddhist monk character that walks along the journey path

class MonkAvatar {
    constructor() {
        this.container = null;
        this.avatar = null;
        this.currentAnimation = 'idle';
        this.footstepInterval = null;
        this.init();
    }
    
    init() {
        this.createAvatarContainer();
        this.createAtmosphere();
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
    
    hide() {
        this.container.style.opacity = '0';
    }
    
    show() {
        this.container.style.opacity = '1';
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
