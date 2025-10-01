// Enhanced Journey Data with Vietnamese translations, emotions, and additional details
// This extends the base journey-data.js with multilingual support

const journeyEnhancements = {
    1: {
        ancientName: "長安 (Cháng'ān)",
        emotion: "determined",
        month: "Spring",
        arrivalMonth: null,
        departureMonth: "Spring 629",
        travelTime: null,
        modernName_vi: "Tây An, Trung Quốc",
        description_vi: "Thủ đô của triều đại Đường. Huyền Trang bí mật rời đi không có phép của hoàng đế, bắt đầu hành trình sử thi để lấy kinh điển Phật giáo.",
        historicalContext_vi: "Trường An là một trong những thành phố lớn nhất thế giới thời Đường, là đầu mối phía đông của Con đường Tơ lụa.",
        duration_vi: "Điểm khởi đầu"
    },
    2: {
        ancientName: "涼州 (Liángzhōu)",
        emotion: "excited",
        month: "Late Spring",
        arrivalMonth: "Late Spring 629",
        departureMonth: "Summer 629",
        travelTime: "~15 days",
        modernName_vi: "Vũ Uy, Cam Túc, Trung Quốc",
        description_vi: "Điểm dừng quan trọng đầu tiên nơi Huyền Trang nghiên cứu kinh điển Phật giáo và chuẩn bị cho cuộc hành trình nguy hiểm qua sa mạc.",
        historicalContext_vi: "Thị trấn đồn trú quan trọng ở rìa phía đông của Hành lang Hà Tây, cửa ngõ đến Trung Á.",
        duration_vi: "1 tháng"
    },
    3: {
        ancientName: "敦煌 (Dūnhuáng)",
        emotion: "contemplative",
        month: "Summer",
        arrivalMonth: "Summer 629",
        departureMonth: "Late Summer 629",
        travelTime: "~20 days",
        modernName_vi: "Đôn Hoàng, Cam Túc, Trung Quốc",
        description_vi: "Thành phố ốc đảo nổi tiếng ở rìa sa mạc Gobi. Huyền Trang nhận được sự giúp đỡ từ các nhà sư địa phương trước khi băng qua sa mạc.",
        historicalContext_vi: "Nơi có Động Mạc Cao, di tích nghệ thuật Phật giáo quan trọng. Điểm dừng chân quan trọng trên Con đường Tơ lụa.",
        duration_vi: "1 tháng"
    },
    4: {
        ancientName: "伊吾 (Yīwú)",
        emotion: "tired",
        month: "Fall",
        arrivalMonth: "Fall 629",
        departureMonth: "Late Fall 629",
        travelTime: "~12 days",
        modernName_vi: "Hạ Mật, Tân Cương, Trung Quốc",
        description_vi: "Thành phố ốc đảo nơi Huyền Trang được vua địa phương tiếp đón nồng hậu và hồi phục sau khi băng qua sa mạc.",
        historicalContext_vi: "Ốc đảo chiến lược trên tuyến đường Con đường Tơ lụa phía bắc.",
        duration_vi: "2 tuần"
    },
    5: {
        ancientName: "高昌 (Gāochāng)",
        emotion: "peaceful",
        month: "Late Fall",
        arrivalMonth: "Late Fall 629",
        departureMonth: "Winter 630",
        travelTime: "~8 days",
        modernName_vi: "Turpan, Tân Cương, Trung Quốc",
        description_vi: "Vua của Cao Xương trở thành người bảo trợ của Huyền Trang, cung cấp vật tư và thư giới thiệu cho hành trình phía trước.",
        historicalContext_vi: "Trung tâm thương mại lớn và vương quốc Phật giáo ở lưu vực Tarim.",
        duration_vi: "2 tháng"
    },
    6: {
        ancientName: "龜茲 (Qiūcí)",
        emotion: "contemplative",
        month: "Early 630",
        arrivalMonth: "Early 630",
        departureMonth: "Spring 630",
        travelTime: "~15 days",
        modernName_vi: "Kuqa, Tân Cương, Trung Quốc",
        description_vi: "Trung tâm Phật giáo quan trọng nơi Huyền Trang nghiên cứu các văn bản và giáo lý Phật giáo khác nhau.",
        historicalContext_vi: "Vương quốc Phật giáo cổ đại nổi tiếng với các tu viện và truyền thống học thuật.",
        duration_vi: "2 tháng"
    },
    7: {
        ancientName: "姑墨 (Gūmò)",
        emotion: "determined",
        month: "Late Spring 630",
        arrivalMonth: "Late Spring 630",
        departureMonth: "Summer 630",
        travelTime: "~5 days",
        modernName_vi: "Aksu, Tân Cương, Trung Quốc",
        description_vi: "Thành phố ốc đảo dọc theo Con đường Tơ lụa phía bắc.",
        historicalContext_vi: "Trạm thương mại quan trọng trong lưu vực Tarim.",
        duration_vi: "2 tuần"
    },
    8: {
        ancientName: "素葉城 (Sùyè Chéng)",
        emotion: "excited",
        month: "Summer 630",
        arrivalMonth: "Summer 630",
        departureMonth: "Late Summer 630",
        travelTime: "~20 days",
        modernName_vi: "Tokmok, Kyrgyzstan",
        description_vi: "Thị trấn ở thung lũng sông Chu, thuộc Khaganate Turkic Tây.",
        historicalContext_vi: "Nằm gần thành phố cổ Suyab, thủ đô của Khaganate Turkic Tây.",
        duration_vi: "1 tháng"
    },
    9: {
        ancientName: "石國 (Shíguó)",
        emotion: "contemplative",
        month: "Late Summer 630",
        arrivalMonth: "Late Summer 630",
        departureMonth: "Fall 630",
        travelTime: "~10 days",
        modernName_vi: "Tashkent, Uzbekistan",
        description_vi: "Thành phố lớn ở Transoxiana nơi Huyền Trang quan sát các truyền thống Phật giáo và phi Phật giáo đa dạng.",
        historicalContext_vi: "Thành phố Con đường Tơ lụa cổ đại với sự trao đổi văn hóa phong phú giữa các nền văn minh khác nhau.",
        duration_vi: "1 tháng"
    },
    10: {
        ancientName: "康國 (Kāngguó)",
        emotion: "reverent",
        month: "Fall 630",
        arrivalMonth: "Fall 630",
        departureMonth: "Winter 631",
        travelTime: "~15 days",
        modernName_vi: "Samarkand, Uzbekistan",
        description_vi: "Một trong những thành phố có người ở liên tục lâu đời nhất, trung tâm của văn hóa Sogdia. Huyền Trang ghi nhận sự pha trộn của các tập tục Phật giáo và Zoroastrian.",
        historicalContext_vi: "Thành phố Con đường Tơ lụa lớn, thủ đô của Sogdiana và nồi nấu văn hóa.",
        duration_vi: "1 tháng"
    },
    11: {
        ancientName: "縛喝國 (Fúhèguó)",
        emotion: "peaceful",
        month: "Winter 631",
        arrivalMonth: "Winter 631",
        departureMonth: "Spring 631",
        travelTime: "~18 days",
        modernName_vi: "Balkh, Afghanistan",
        description_vi: "Trung tâm Phật giáo lớn được biết đến là 'Mẹ của các thành phố'. Huyền Trang học tại nhiều tu viện và gặp các nhà sư học giả.",
        historicalContext_vi: "Thành phố cổ đại, một trong những thành phố lâu đời nhất trên thế giới, và là trung tâm Phật giáo lớn trước Hồi giáo.",
        duration_vi: "3 tháng"
    },
    12: {
        ancientName: "梵衍那國 (Fànyǎnnàguó)",
        emotion: "reverent",
        month: "Spring 632",
        arrivalMonth: "Spring 632",
        departureMonth: "Late Spring 632",
        travelTime: "~10 days",
        modernName_vi: "Bamiyan, Afghanistan",
        description_vi: "Địa điểm của các bức tượng Phật khổng lồ nổi tiếng được chạm khắc vào vách đá. Huyền Trang mô tả chúng chi tiết trong các tác phẩm của mình.",
        historicalContext_vi: "Nơi có các bức tượng Phật khổng lồ (bị phá hủy năm 2001), biểu tượng của di sản Phật giáo của khu vực.",
        duration_vi: "2 tuần"
    },
    13: {
        ancientName: "迦畢試國 (Jiābìshìguó)",
        emotion: "determined",
        month: "Late Spring 632",
        arrivalMonth: "Late Spring 632",
        departureMonth: "Summer 632",
        travelTime: "~12 days",
        modernName_vi: "Kabul, Afghanistan",
        description_vi: "Thành phố chiến lược trong vùng Hindu Kush với các tu viện Phật giáo.",
        historicalContext_vi: "Thành phố cổ đại trên các tuyến đường thương mại giữa Trung Á và tiểu lục địa Ấn Độ.",
        duration_vi: "1 tháng"
    },
    14: {
        ancientName: "布路沙布邏 (Bùlùshābùluó)",
        emotion: "excited",
        month: "Summer 632",
        arrivalMonth: "Summer 632",
        departureMonth: "Late Summer 632",
        travelTime: "~8 days",
        modernName_vi: "Peshawar, Pakistan",
        description_vi: "Vùng Gandhara cổ đại. Huyền Trang đã viếng thăm nhiều di tích và tháp Phật giáo.",
        historicalContext_vi: "Thủ đô của Gandhara cổ đại, nơi nghệ thuật Hy Lạp-Phật giáo phát triển.",
        duration_vi: "1 tháng"
    },
    15: {
        ancientName: "呾叉始羅 (Dáchāshǐluó)",
        emotion: "contemplative",
        month: "Late Summer 632",
        arrivalMonth: "Late Summer 632",
        departureMonth: "Fall 633",
        travelTime: "~5 days",
        modernName_vi: "Taxila, Pakistan",
        description_vi: "Thành phố đại học cổ đại và trung tâm học tập Phật giáo lớn. Huyền Trang học tại các tu viện ở đây.",
        historicalContext_vi: "Một trong những trường đại học đầu tiên trên thế giới, trung tâm học tập Phật giáo trong nhiều thế kỷ.",
        duration_vi: "2 tháng"
    },
    16: {
        ancientName: "迦濕彌羅國 (Jiāshīmíluóguó)",
        emotion: "peaceful",
        month: "Fall 633",
        arrivalMonth: "Fall 633",
        departureMonth: "Fall 635",
        travelTime: "~10 days",
        modernName_vi: "Srinagar, Kashmir, Ấn Độ",
        description_vi: "Huyền Trang đã dành thời gian kéo dài ở Kashmir nghiên cứu triết học và văn bản Phật giáo với các học giả nổi tiếng.",
        historicalContext_vi: "Trung tâm quan trọng của học tập và triết học Phật giáo trong thời kỳ trung cổ.",
        duration_vi: "2 năm"
    },
    17: {
        ancientName: "秣菟羅國 (Mòtúluóguó)",
        emotion: "reverent",
        month: "Fall 635",
        arrivalMonth: "Fall 635",
        departureMonth: "Winter 635",
        travelTime: "~15 days",
        modernName_vi: "Mathura, Uttar Pradesh, Ấn Độ",
        description_vi: "Thành phố cổ đại với các di tích Phật giáo quan trọng, mặc dù chủ yếu liên quan đến Ấn Độ giáo.",
        historicalContext_vi: "Nơi sinh của Chúa Krishna và địa điểm hành hương quan trọng.",
        duration_vi: "1 tháng"
    },
    18: {
        ancientName: "曲女城 (Qǔnǚchéng)",
        emotion: "excited",
        month: "Winter 635",
        arrivalMonth: "Winter 635",
        departureMonth: "Spring 636",
        travelTime: "~8 days",
        modernName_vi: "Kannauj, Uttar Pradesh, Ấn Độ",
        description_vi: "Thủ đô của vua Harsha, người trở thành người bảo trợ của Huyền Trang ở Ấn Độ. Trung tâm Phật giáo quan trọng.",
        historicalContext_vi: "Một trong những vương quốc quyền lực nhất ở Bắc Ấn Độ trong thế kỷ thứ 7.",
        duration_vi: "1 tháng"
    },
    19: {
        ancientName: "婆羅痆斯國 (Póluónísīguó)",
        emotion: "reverent",
        month: "Spring 636",
        arrivalMonth: "Spring 636",
        departureMonth: "Late Spring 636",
        travelTime: "~10 days",
        modernName_vi: "Varanasi, Uttar Pradesh, Ấn Độ",
        description_vi: "Một trong những thành phố linh thiêng nhất ở Ấn Độ. Huyền Trang đã viếng thăm Sarnath nơi Phật đưa ra bài thuyết pháp đầu tiên.",
        historicalContext_vi: "Thành phố cổ đại, một trong những thành phố có người ở liên tục lâu đời nhất trên thế giới. Nơi Phật giảng dạy lần đầu.",
        duration_vi: "1 tháng"
    },
    20: {
        ancientName: "摩揭陀國 (Mójiētuóguó)",
        emotion: "reverent",
        month: "Late Spring 637",
        arrivalMonth: "Late Spring 637",
        departureMonth: "Summer 637",
        travelTime: "~12 days",
        modernName_vi: "Bodh Gaya, Bihar, Ấn Độ",
        description_vi: "Địa điểm linh thiêng nhất trong Phật giáo - nơi Phật đạt được giác ngộ. Huyền Trang đã dành nhiều thời gian ở đây thiền định và học tập.",
        historicalContext_vi: "Địa điểm linh thiêng nhất trong Phật giáo, vị trí của cây Bồ Đề mà Phật đạt được giác ngộ bên dưới.",
        duration_vi: "3 tháng"
    },
    21: {
        ancientName: "那爛陀寺 (Nàlàtuósì)",
        emotion: "peaceful",
        month: "Summer 637",
        arrivalMonth: "Summer 637",
        departureMonth: "642",
        travelTime: "~2 days",
        modernName_vi: "Nalanda, Bihar, Ấn Độ",
        description_vi: "Đại học Phật giáo vĩ đại nhất của Ấn Độ cổ đại. Huyền Trang học tập ở đây dưới sự hướng dẫn của trụ trì Shilabhadra và các học giả nổi tiếng khác. Đây là điểm nổi bật của hành trình của ông.",
        historicalContext_vi: "Đại học nội trú đầu tiên trên thế giới, với hàng ngàn sinh viên từ khắp châu Á. Trung tâm học tập và triết học Phật giáo.",
        duration_vi: "5 năm"
    },
    22: {
        ancientName: "波吒釐子城 (Bōzhālízǐchéng)",
        emotion: "contemplative",
        month: "642",
        arrivalMonth: "642",
        departureMonth: "Late 642",
        travelTime: "~1 day",
        modernName_vi: "Patna, Bihar, Ấn Độ",
        description_vi: "Thủ đô cổ đại của nhiều đế chế Ấn Độ. Huyền Trang đã viếng thăm các di tích Phật giáo và thu thập kinh điển.",
        historicalContext_vi: "Thủ đô lịch sử của các đế chế Mauryan và Gupta.",
        duration_vi: "1 tháng"
    },
    23: {
        ancientName: "建志補羅 (Jiànzhìbǔluó)",
        emotion: "contemplative",
        month: "Late 642",
        arrivalMonth: "Late 642",
        departureMonth: "643",
        travelTime: "~30 days",
        modernName_vi: "Kanchipuram, Tamil Nadu, Ấn Độ",
        description_vi: "Thành phố miền Nam Ấn Độ nổi tiếng với các ngôi đền. Huyền Trang đến để nghiên cứu các truyền thống Phật giáo khác nhau.",
        historicalContext_vi: "Một trong bảy thành phố linh thiêng của Ấn Độ, nổi tiếng với ngàn ngôi đền.",
        duration_vi: "2 tháng"
    },
    24: {
        ancientName: "曲女城 (Qǔnǚchéng)",
        emotion: "triumphant",
        month: "643",
        arrivalMonth: "643",
        departureMonth: "Late 643",
        travelTime: "~25 days",
        modernName_vi: "Kannauj, Uttar Pradesh, Ấn Độ",
        description_vi: "Trở lại thủ đô của vua Harsha. Tham gia một hội nghị lớn nơi Huyền Trang bảo vệ Phật giáo Đại thừa.",
        historicalContext_vi: "Địa điểm của hội nghị tranh luận nổi tiếng do vua Harsha tổ chức.",
        duration_vi: "3 tháng"
    },
    25: {
        ancientName: "迦濕彌羅國 (Jiāshīmíluóguó)",
        emotion: "determined",
        month: "Late 643",
        arrivalMonth: "Late 643",
        departureMonth: "644",
        travelTime: "~20 days",
        modernName_vi: "Srinagar, Kashmir, Ấn Độ",
        description_vi: "Trở lại qua Kashmir, tiếp tục thu thập và sắp xếp các văn bản Phật giáo.",
        historicalContext_vi: "Thu thập kinh điển cuối cùng trước khi bắt đầu hành trình trở về Trung Quốc.",
        duration_vi: "3 tháng"
    },
    26: {
        ancientName: "疏勒國 (Shūlèguó)",
        emotion: "tired",
        month: "644",
        arrivalMonth: "644",
        departureMonth: "Late 644",
        travelTime: "~45 days",
        modernName_vi: "Kashgar, Tân Cương, Trung Quốc",
        description_vi: "Thành phố ốc đảo lớn ở rìa phía tây của lưu vực Tarim. Huyền Trang nghỉ ngơi ở đây trên hành trình trở về.",
        historicalContext_vi: "Trung tâm thương mại Con đường Tơ lụa quan trọng và điểm gặp gỡ của các nền văn hóa khác nhau.",
        duration_vi: "1 tháng"
    },
    27: {
        ancientName: "于闐國 (Yútiangu ó)",
        emotion: "contemplative",
        month: "Late 644",
        arrivalMonth: "Late 644",
        departureMonth: "644",
        travelTime: "~15 days",
        modernName_vi: "Hotan, Tân Cương, Trung Quốc",
        description_vi: "Vương quốc Phật giáo trên Con đường Tơ lụa phía nam. Huyền Trang đi theo tuyến đường phía nam khi trở về.",
        historicalContext_vi: "Nổi tiếng với sản xuất ngọc bích và là một vương quốc Phật giáo.",
        duration_vi: "1 tháng"
    },
    28: {
        ancientName: "敦煌 (Dūnhuáng)",
        emotion: "excited",
        month: "Late 644",
        arrivalMonth: "Late 644",
        departureMonth: "645",
        travelTime: "~30 days",
        modernName_vi: "Đôn Hoàng, Cam Túc, Trung Quốc",
        description_vi: "Trở lại Đôn Hoàng, đang tiếp cận lãnh thổ Trung Quốc với hàng hóa quý giá là các văn bản Phật giáo.",
        historicalContext_vi: "Tái gia nhập lãnh thổ Trung Quốc sau 15 năm ở nước ngoài.",
        duration_vi: "1 tháng"
    },
    29: {
        ancientName: "長安 (Cháng'ān)",
        emotion: "triumphant",
        month: "Spring 645",
        arrivalMonth: "Spring 645",
        departureMonth: null,
        travelTime: "~40 days",
        modernName_vi: "Tây An, Trung Quốc",
        description_vi: "Trở về thành công đến Trường An với 657 văn bản Phật giáo, 150 xá lợi và 7 tượng Phật. Hoàng đế Thái Tông chào đón ông như một anh hùng. Dành phần đời còn lại dịch kinh.",
        historicalContext_vi: "Sự trở về của ông được tôn vinh như một thành tựu lớn. Các văn bản ông mang về đã cách mạng hóa Phật giáo Trung Quốc.",
        duration_vi: "Kết thúc hành trình"
    }
};

// Function to get enhanced location data
function getEnhancedLocation(location) {
    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'en';
    const enhancement = journeyEnhancements[location.id] || {};
    
    return {
        ...location,
        ancientName: enhancement.ancientName || location.name,
        emotion: enhancement.emotion || 'peaceful',
        month: enhancement.month || location.year.toString(),
        arrivalMonth: enhancement.arrivalMonth || null,
        departureMonth: enhancement.departureMonth || null,
        travelTime: enhancement.travelTime || null,
        modernName: typeof location.modernName === 'string' 
            ? (lang === 'vi' ? enhancement.modernName_vi || location.modernName : location.modernName)
            : (location.modernName[lang] || location.modernName['en']),
        description: typeof location.description === 'string'
            ? (lang === 'vi' ? enhancement.description_vi || location.description : location.description)
            : (location.description[lang] || location.description['en']),
        historicalContext: typeof location.historicalContext === 'string'
            ? (lang === 'vi' ? enhancement.historicalContext_vi || location.historicalContext : location.historicalContext)
            : (location.historicalContext[lang] || location.historicalContext['en']),
        duration: typeof location.duration === 'string'
            ? (lang === 'vi' ? enhancement.duration_vi || location.duration : location.duration)
            : (location.duration[lang] || location.duration['en']),
        images: location.images.map(img => ({
            ...img,
            caption: typeof img.caption === 'string'
                ? img.caption
                : (img.caption[lang] || img.caption['en'])
        }))
    };
}

// Extend journeyData with enhancements
if (typeof journeyData !== 'undefined') {
    journeyData.forEach((location, index) => {
        const enhancement = journeyEnhancements[location.id] || {};
        Object.assign(location, {
            ancientName: enhancement.ancientName || location.name,
            emotion: enhancement.emotion || 'peaceful',
            month: enhancement.month || location.year.toString(),
            arrivalMonth: enhancement.arrivalMonth || null,
            departureMonth: enhancement.departureMonth || null,
            travelTime: enhancement.travelTime || null
        });
    });
}
