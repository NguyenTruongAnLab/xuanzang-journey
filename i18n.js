// Internationalization (i18n) System
// Supports English (en) and Vietnamese (vi)

const translations = {
    en: {
        // Navigation
        'nav.title': "Xuanzang's Journey (629-645 CE)",
        'nav.about': 'About',
        'nav.language': 'Language',
        
        // Controls
        'controls.play': 'Play Journey',
        'controls.pause': 'Pause',
        'controls.startYear': '629 CE',
        'controls.endYear': '645 CE',
        'controls.currentYear': 'Year: {year}',
        
        // Timeline
        'timeline.title': 'Journey Timeline',
        'timeline.phase1': 'Departure & Silk Road',
        'timeline.phase2': 'Central Asia',
        'timeline.phase3': 'India Study',
        'timeline.phase4': 'Return Journey',
        
        // Emotions
        'emotion.excited': 'Excited',
        'emotion.tired': 'Tired',
        'emotion.contemplative': 'Contemplative',
        'emotion.peaceful': 'Peaceful',
        'emotion.determined': 'Determined',
        'emotion.reverent': 'Reverent',
        'emotion.triumphant': 'Triumphant',
        
        // Info Panel
        'info.selectLocation': 'Select a location',
        'info.clickMarker': 'Click on any marker to see details about that stop',
        'info.modernName': 'Modern Name',
        'info.ancientName': 'Ancient Name',
        'info.duration': 'Duration',
        'info.arrival': 'Arrival',
        'info.departure': 'Departure',
        'info.travelTime': 'Travel Time from Previous',
        'info.description': 'Description',
        'info.historicalContext': 'Historical Context',
        'info.emotion': 'Emotion',
        'info.noImagesAvailable': 'Historical images not available',
        
        // Summary Panel
        'summary.title': 'Journey Summary',
        'summary.duration': 'Duration:',
        'summary.distance': 'Distance:',
        'summary.current': 'Current:',
        'summary.progress': 'Progress:',
        'summary.details': 'Location Details',
        
        // Illustration Panel
        'illustration.title': 'Location Images',
        'illustration.previous': 'Previous image',
        'illustration.next': 'Next image',
        
        // Bookmark
        'bookmark.button': 'Bookmark',
        'bookmark.saved': 'Bookmarked',
        
        // Modal
        'modal.aboutTitle': "About Xuanzang's Journey",
        'modal.intro': 'This interactive map shows the remarkable 16-year journey (629-645 CE) of the Chinese Buddhist monk Xuanzang, who traveled from China to India and back to bring Buddhist scriptures to China.',
        'modal.keyFacts': 'Key Facts:',
        'modal.duration': 'Journey Duration: 16 years (629-645 CE)',
        'modal.distance': 'Total Distance: Over 10,000 miles',
        'modal.purpose': 'Purpose: To obtain Buddhist scriptures from India',
        'modal.legacy': 'Legacy: His journey inspired "Journey to the West"',
        
        // Map Style
        'mapStyle.switch': 'Map Style',
        'mapStyle.modern': 'Modern Map',
        'mapStyle.ancient': 'Ancient Style',
        
        // Accessibility
        'a11y.mapRegion': 'Interactive map showing Xuanzang\'s journey',
        'a11y.timelineSlider': 'Timeline slider to navigate through years',
        'a11y.playButton': 'Play or pause the journey animation',
        'a11y.languageButton': 'Switch language'
    },
    
    vi: {
        // Navigation
        'nav.title': 'Hành Trình Huyền Trang (629-645)',
        'nav.about': 'Giới Thiệu',
        'nav.language': 'Ngôn Ngữ',
        
        // Controls
        'controls.play': 'Bắt Đầu Hành Trình',
        'controls.pause': 'Tạm Dừng',
        'controls.startYear': '629',
        'controls.endYear': '645',
        'controls.currentYear': 'Năm: {year}',
        
        // Timeline
        'timeline.title': 'Thời Gian Hành Trình',
        'timeline.phase1': 'Khởi Hành & Con Đường Tơ Lụa',
        'timeline.phase2': 'Trung Á',
        'timeline.phase3': 'Học Tập Ở Ấn Độ',
        'timeline.phase4': 'Trở Về',
        
        // Emotions
        'emotion.excited': 'Phấn Khích',
        'emotion.tired': 'Mệt Mỏi',
        'emotion.contemplative': 'Trầm Tư',
        'emotion.peaceful': 'An Yên',
        'emotion.determined': 'Quyết Tâm',
        'emotion.reverent': 'Cung Kính',
        'emotion.triumphant': 'Chiến Thắng',
        
        // Info Panel
        'info.selectLocation': 'Chọn một địa điểm',
        'info.clickMarker': 'Nhấp vào điểm đánh dấu để xem chi tiết',
        'info.modernName': 'Tên Hiện Đại',
        'info.ancientName': 'Tên Cổ Đại',
        'info.duration': 'Thời Gian Lưu Trú',
        'info.arrival': 'Đến',
        'info.departure': 'Rời Đi',
        'info.travelTime': 'Thời Gian Di Chuyển Từ Điểm Trước',
        'info.description': 'Mô Tả',
        'info.historicalContext': 'Bối Cảnh Lịch Sử',
        'info.emotion': 'Tâm Trạng',
        'info.noImagesAvailable': 'Không có hình ảnh lịch sử',
        
        // Summary Panel
        'summary.title': 'Tổng Quan Hành Trình',
        'summary.duration': 'Thời gian:',
        'summary.distance': 'Quãng đường:',
        'summary.current': 'Hiện tại:',
        'summary.progress': 'Tiến trình:',
        'summary.details': 'Chi Tiết Địa Điểm',
        
        // Illustration Panel
        'illustration.title': 'Hình Ảnh Địa Điểm',
        'illustration.previous': 'Ảnh trước',
        'illustration.next': 'Ảnh tiếp theo',
        
        // Bookmark
        'bookmark.button': 'Đánh Dấu',
        'bookmark.saved': 'Đã Đánh Dấu',
        
        // Modal
        'modal.aboutTitle': 'Về Hành Trình Huyền Trang',
        'modal.intro': 'Bản đồ tương tác này thể hiện hành trình 16 năm đáng kinh ngạc (629-645) của nhà sư Phật giáo Trung Quốc Huyền Trang, người đã đi từ Trung Quốc đến Ấn Độ và trở về để mang kinh điển Phật giáo về Trung Quốc.',
        'modal.keyFacts': 'Thông Tin Chính:',
        'modal.duration': 'Thời gian hành trình: 16 năm (629-645)',
        'modal.distance': 'Tổng quãng đường: Hơn 10.000 dặm',
        'modal.purpose': 'Mục đích: Lấy kinh điển Phật giáo từ Ấn Độ',
        'modal.legacy': 'Di sản: Hành trình của ông đã truyền cảm hứng cho "Tây Du Ký"',
        
        // Map Style
        'mapStyle.switch': 'Kiểu Bản Đồ',
        'mapStyle.modern': 'Bản Đồ Hiện Đại',
        'mapStyle.ancient': 'Phong Cách Cổ Đại',
        
        // Accessibility
        'a11y.mapRegion': 'Bản đồ tương tác hiển thị hành trình của Huyền Trang',
        'a11y.timelineSlider': 'Thanh trượt thời gian để điều hướng qua các năm',
        'a11y.playButton': 'Phát hoặc tạm dừng hoạt ảnh hành trình',
        'a11y.languageButton': 'Chuyển đổi ngôn ngữ'
    }
};

// Current language state
let currentLanguage = 'en';

// Initialize i18n system
function initI18n() {
    // Try to detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('vi')) {
        currentLanguage = 'vi';
    }
    
    // Check for stored preference
    const storedLang = localStorage.getItem('xuanzang-language');
    if (storedLang && translations[storedLang]) {
        currentLanguage = storedLang;
    }
}

// Get translation for a key
function t(key, params = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
}

// Change language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('xuanzang-language', lang);
        updateUILanguage();
    }
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Update all UI elements with translations
function updateUILanguage() {
    // Update navbar
    const navTitle = document.querySelector('.navbar-brand');
    if (navTitle) navTitle.textContent = t('nav.title');
    
    const aboutBtn = document.querySelector('[data-bs-target="#aboutModal"]');
    if (aboutBtn) aboutBtn.textContent = t('nav.about');
    
    // Update controls
    const playBtn = document.getElementById('playBtn');
    if (playBtn && !window.isPlaying) {
        playBtn.textContent = t('controls.play');
    }
    
    // Update timeline labels
    const startYear = document.querySelector('.timeline-controls .me-2');
    if (startYear) startYear.textContent = t('controls.startYear');
    
    const endYear = document.querySelector('.timeline-controls .ms-2');
    if (endYear) endYear.textContent = t('controls.endYear');
    
    // Update modal
    const modalTitle = document.querySelector('#aboutModal .modal-title');
    if (modalTitle) modalTitle.textContent = t('modal.aboutTitle');
    
    const modalBody = document.querySelector('#aboutModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <p>${t('modal.intro')}</p>
            <p><strong>${t('modal.keyFacts')}</strong></p>
            <ul>
                <li>${t('modal.duration')}</li>
                <li>${t('modal.distance')}</li>
                <li>${t('modal.purpose')}</li>
                <li>${t('modal.legacy')}</li>
            </ul>
        `;
    }
    
    // Update info panel if visible
    const locationTitle = document.getElementById('locationTitle');
    if (locationTitle && locationTitle.textContent === t('info.selectLocation')) {
        locationTitle.textContent = t('info.selectLocation');
        document.getElementById('locationInfo').textContent = t('info.clickMarker');
    }
    
    // Update summary panel
    const summaryTitle = document.getElementById('summaryTitle');
    if (summaryTitle) summaryTitle.textContent = t('summary.title');
    
    const summaryTotalDuration = document.getElementById('summaryTotalDuration');
    if (summaryTotalDuration) summaryTotalDuration.textContent = t('summary.duration');
    
    const summaryTotalDistance = document.getElementById('summaryTotalDistance');
    if (summaryTotalDistance) summaryTotalDistance.textContent = t('summary.distance');
    
    const summaryCurrentLocation = document.getElementById('summaryCurrentLocation');
    if (summaryCurrentLocation) summaryCurrentLocation.textContent = t('summary.current');
    
    const summaryProgress = document.getElementById('summaryProgress');
    if (summaryProgress) summaryProgress.textContent = t('summary.progress');
    
    const summaryDetailsTitle = document.getElementById('summaryDetailsTitle');
    if (summaryDetailsTitle) summaryDetailsTitle.textContent = t('summary.details');
    
    // Update illustration panel
    const illustrationTitle = document.getElementById('illustrationTitle');
    if (illustrationTitle) illustrationTitle.textContent = t('illustration.title');
    
    const carouselPrev = document.getElementById('carouselPrev');
    if (carouselPrev) carouselPrev.setAttribute('aria-label', t('illustration.previous'));
    
    const carouselNext = document.getElementById('carouselNext');
    if (carouselNext) carouselNext.setAttribute('aria-label', t('illustration.next'));
    
    // Update bookmark button
    const bookmarkText = document.getElementById('bookmarkText');
    if (bookmarkText) {
        const isBookmarked = bookmarkText.textContent === t('bookmark.saved') || 
                           document.getElementById('bookmarkBtn')?.classList.contains('btn-warning');
        bookmarkText.textContent = isBookmarked ? t('bookmark.saved') : t('bookmark.button');
    }
    
    // Update current year display
    if (window.journeyData && window.currentStepIndex !== undefined) {
        const currentLocation = window.journeyData[window.currentStepIndex];
        if (currentLocation) {
            const currentYearEl = document.getElementById('currentYear');
            if (currentYearEl) {
                currentYearEl.textContent = t('controls.currentYear', { year: currentLocation.year });
            }
        }
    }
    
    // Trigger custom event for other components to update
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

// Get available languages
function getAvailableLanguages() {
    return Object.keys(translations);
}
