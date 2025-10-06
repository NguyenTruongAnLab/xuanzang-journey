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
        duration_vi: "Điểm khởi đầu",
        quote: "I would rather die going to the West than live by going back to the East.",
        quote_vi: "Ta thà chết trên đường đến Tây Phương còn hơn sống mà quay về Đông Phương.",
        expandedDescription: "In the spring of 629 CE, the 27-year-old monk Xuanzang defied imperial orders and secretly departed from Chang'an, then one of the world's greatest cities. His goal was audacious: to travel to India, the birthplace of Buddhism, to resolve doctrinal disputes and bring back authentic Buddhist scriptures. The Tang Dynasty had forbidden travel westward, but Xuanzang's determination to seek true Buddhist knowledge overcame his fear of punishment.",
        expandedDescription_vi: "Vào mùa xuân năm 629, nhà sư 27 tuổi Huyền Trang đã bất chấp mệnh lệnh hoàng đế và bí mật rời khỏi Trường An, khi đó là một trong những thành phố vĩ đại nhất thế giới. Mục tiêu của ông thật táo bạo: đi đến Ấn Độ, nơi khai sinh Phật giáo, để giải quyết các tranh cãi giáo lý và mang về kinh điển Phật giáo chân chính.",
        buddhistContext: "Chang'an housed numerous Buddhist temples and monasteries, including the Great Ci'en Temple. During the early Tang Dynasty, Buddhism flourished under imperial patronage, but various schools had conflicting interpretations of Buddhist texts, which motivated Xuanzang's journey.",
        buddhistContext_vi: "Trường An có nhiều chùa chiền và tu viện Phật giáo, bao gồm cả Đại Từ Ân Tự. Trong thời kỳ đầu nhà Đường, Phật giáo phát triển mạnh dưới sự bảo trợ của hoàng gia, nhưng các tông phái khác nhau có những diễn giải mâu thuẫn về kinh điển Phật giáo.",
        xuanzangExperience: "Xuanzang secretly departed at night, risking execution for defying the imperial travel ban. He felt deep conflict between his duty to the emperor and his spiritual calling. Local officials sympathetic to his cause helped him escape the city walls under cover of darkness.",
        xuanzangExperience_vi: "Huyền Trang bí mật rời đi vào ban đêm, mạo hiểm bị xử tử vì bất chấp lệnh cấm đi lại của hoàng đế. Ông cảm thấy xung đột sâu sắc giữa nhiệm vụ với hoàng đế và sứ mệnh tâm linh. Các quan chức địa phương đồng cảm với ông đã giúp ông trốn khỏi tường thành trong bóng tối.",
        historicalEvents: "The Tang Dynasty under Emperor Taizong had just stabilized after years of civil war. Buddhism was experiencing a golden age in China, with thousands of monasteries and monks throughout the empire. However, access to original Sanskrit texts was limited.",
        historicalEvents_vi: "Triều đại Đường dưới hoàng đế Đường Thái Tông vừa ổn định sau nhiều năm nội chiến. Phật giáo đang trải qua thời kỳ hoàng kim ở Trung Quốc, với hàng ngàn tu viện và nhà sư trên khắp đế quốc.",
        sources: "Great Tang Records on the Western Regions (大唐西域記) by Xuanzang; Biography of the Tripitaka Master (大慈恩寺三藏法師傳) by Huili and Yancong"
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
        duration_vi: "1 tháng",
        quote: "The desert stretches vast and empty, with not a bird in the sky nor a beast on the ground.",
        quote_vi: "Sa mạc trải dài bao la và trống vắng, không một con chim trên trời hay một con thú dưới đất.",
        expandedDescription: "At Dunhuang, the gateway to the Western Regions, Xuanzang prepared for the most dangerous leg of his journey - crossing the Gobi Desert. Local Buddhist monks provided him with supplies and guidance. The Mogao Caves, carved into cliffs near Dunhuang, contained hundreds of Buddhist temples and became a spiritual inspiration for his journey ahead.",
        expandedDescription_vi: "Tại Đôn Hoàng, cửa ngõ đến Tây Vực, Huyền Trang chuẩn bị cho chặng đường nguy hiểm nhất - băng qua sa mạc Gobi. Các nhà sư Phật giáo địa phương cung cấp cho ông vật tư và hướng dẫn.",
        buddhistContext: "The Mogao Caves contained over 1,000 cave temples filled with Buddhist murals and sculptures. Dunhuang was a major center for Buddhist art and scholarship on the Silk Road, where Chinese, Central Asian, and Indian Buddhist traditions merged.",
        buddhistContext_vi: "Động Mạc Cao chứa hơn 1.000 hang động chùa chiền đầy tranh tường và tượng Phật. Đôn Hoàng là trung tâm lớn về nghệ thuật và học thuật Phật giáo trên Con đường Tơ lụa.",
        xuanzangExperience: "Xuanzang spent a month studying at local monasteries and preparing mentally and physically for the perilous desert crossing. He met an elderly monk who warned him of the dangers ahead but also provided crucial guidance on navigation and survival. Against all warnings, he resolved to continue alone.",
        xuanzangExperience_vi: "Huyền Trang dành một tháng nghiên cứu tại các tu viện địa phương và chuẩn bị tinh thần và thể chất cho chặng đường sa mạc nguy hiểm. Ông gặp một nhà sư lớn tuổi cảnh báo về những nguy hiểm phía trước.",
        historicalEvents: "Dunhuang was at its peak as a Buddhist center during the Tang Dynasty. The Silk Road trade brought wealth and cultural exchange, making it a cosmopolitan oasis city with diverse religious and ethnic communities.",
        historicalEvents_vi: "Đôn Hoàng đang ở đỉnh cao như một trung tâm Phật giáo trong thời nhà Đường. Thương mại Con đường Tơ lụa mang lại sự giàu có và trao đổi văn hóa."
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
        duration_vi: "2 tháng",
        buddhistContext: "The Kingdom of Gaochang (Turfan) was a thriving Buddhist state with numerous monasteries and temples. The Bezeklik Thousand Buddha Caves near Turfan contain well-preserved Buddhist murals from this period.",
        buddhistContext_vi: "Vương quốc Cao Xương (Turpan) là một quốc gia Phật giáo phát triển với nhiều tu viện và chùa chiền. Động Ngàn Phật Bezeklik gần Turpan chứa tranh tường Phật giáo được bảo quản tốt từ thời kỳ này.",
        xuanzangExperience: "King Qu Wentai of Gaochang became Xuanzang's devoted patron and tried to convince him to stay permanently. Xuanzang went on a hunger strike to continue his journey. The king relented and provided generous supplies, letters of introduction, and 30 assistants for the journey ahead.",
        xuanzangExperience_vi: "Vua Cúc Văn Thái của Cao Xương trở thành người bảo trợ tận tụy của Huyền Trang và cố gắng thuyết phục ông ở lại vĩnh viễn. Huyền Trang đã tuyệt thực để tiếp tục hành trình.",
        historicalEvents: "Gaochang was a major Buddhist kingdom and trading center on the Silk Road. It maintained close cultural ties with China while also being influenced by Central Asian Buddhist traditions.",
        historicalEvents_vi: "Cao Xương là một vương quốc Phật giáo lớn và trung tâm thương mại trên Con đường Tơ lụa. Nó duy trì quan hệ văn hóa chặt chẽ với Trung Quốc."
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
        duration_vi: "1 tháng",
        buddhistContext: "While Samarkand was predominantly Zoroastrian and had declining Buddhism by Xuanzang's time, it once housed important Buddhist monasteries. Xuanzang noted the mix of religious traditions and documented the remaining Buddhist communities alongside fire temples.",
        buddhistContext_vi: "Mặc dù Samarkand chủ yếu theo đạo Zoroastrian và Phật giáo đang suy tàn vào thời Huyền Trang, nơi đây từng có các tu viện Phật giáo quan trọng. Huyền Trang ghi nhận sự pha trộn của các truyền thống tôn giáo.",
        xuanzangExperience: "Xuanzang was received by local rulers and observed the cultural diversity. He noted the decline of Buddhism in Central Asia and the predominance of Zoroastrianism, which reinforced his determination to reach India to study at the source of Buddhist teachings.",
        xuanzangExperience_vi: "Huyền Trang được các nhà cai trị địa phương tiếp đón và quan sát sự đa dạng văn hóa. Ông ghi nhận sự suy tàn của Phật giáo ở Trung Á và sự thống trị của đạo Zoroastrian."
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
        duration_vi: "3 tháng",
        buddhistContext: "Balkh was known as the 'Mother of Cities' and a major center of Buddhism in Bactria. The city had over 100 monasteries, including the famous Nava Vihara (New Monastery), one of the greatest Buddhist learning centers in Central Asia. It housed thousands of monks studying Mahayana and Hinayana traditions.",
        buddhistContext_vi: "Balkh được biết đến là 'Mẹ của các thành phố' và là trung tâm Phật giáo lớn ở Bactria. Thành phố có hơn 100 tu viện, bao gồm Nava Vihara (Tu viện Mới) nổi tiếng, một trong những trung tâm học tập Phật giáo vĩ đại nhất ở Trung Á.",
        xuanzangExperience: "Xuanzang spent three months in Balkh studying with learned monks at the Nava Vihara monastery. He acquired important Sanskrit texts and deepened his understanding of both Mahayana and Hinayana Buddhism. The scholars here prepared him intellectually for his studies at Nalanda.",
        xuanzangExperience_vi: "Huyền Trang dành ba tháng ở Balkh học tập với các nhà sư uyên bác tại tu viện Nava Vihara. Ông thu thập các văn bản Sanskrit quan trọng và làm sâu sắc thêm hiểu biết về cả Phật giáo Đại thừa và Tiểu thừa."
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
        duration_vi: "2 tuần",
        buddhistContext: "Bamiyan was home to two colossal Buddha statues (55m and 38m tall) carved into cliff faces, surrounded by numerous cave monasteries. The valley was a thriving Buddhist center with thousands of monks. Xuanzang's detailed descriptions became crucial historical records after the statues were destroyed in 2001.",
        buddhistContext_vi: "Bamiyan là nơi có hai bức tượng Phật khổng lồ (cao 55m và 38m) được chạm khắc vào vách đá, xung quanh là nhiều tu viện trong hang động. Thung lũng này là một trung tâm Phật giáo phát triển với hàng ngàn nhà sư.",
        xuanzangExperience: "Xuanzang was awestruck by the massive Buddha statues and the devotion of the local Buddhist community. He spent two weeks studying and meditating in the cave monasteries, documenting the artistry and spiritual atmosphere. His writings provide the most detailed account of Bamiyan before its destruction.",
        xuanzangExperience_vi: "Huyền Trang kinh ngạc trước những bức tượng Phật khổng lồ và lòng sùng kính của cộng đồng Phật giáo địa phương. Ông dành hai tuần học tập và thiền định trong các tu viện trong hang động."
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
        duration_vi: "1 tháng",
        buddhistContext: "Peshawar was the heart of ancient Gandhara, where Greco-Buddhist art flourished and created the first anthropomorphic representations of Buddha. The city housed numerous monasteries and stupas, including the Kanishka Stupa which was one of the tallest structures in the ancient world at nearly 200 meters. Xuanzang documented over 1,000 monasteries in the region, serving as major centers for both Mahayana and Sarvastivada Buddhist schools.",
        buddhistContext_vi: "Peshawar là trung tâm của vùng Gandhara cổ đại, nơi nghệ thuật Phật giáo-Hy Lạp phát triển mạnh và tạo ra những hình tượng Phật đầu tiên dưới dạng con người. Thành phố có nhiều tu viện và tháp, bao gồm tháp Kanishka - một trong những công trình cao nhất thế giới cổ đại với chiều cao gần 200 mét. Huyền Trang ghi nhận hơn 1.000 tu viện trong vùng.",
        xuanzangExperience: "After crossing the treacherous mountain passes from Afghanistan, Xuanzang arrived in Peshawar exhausted but exhilarated to finally reach the land where Buddha's teachings first spread beyond India. He spent over a month meticulously visiting Buddhist sites, studying Gandharan art and architecture, and collecting relics. Local monks welcomed him warmly and shared oral traditions about the Buddha's visits to the region. The king of Kapisa provided him with letters of introduction to rulers in India. Xuanzang was particularly moved by the blend of Greek artistic styles with Buddhist devotion, which he had never encountered before.",
        xuanzangExperience_vi: "Sau khi vượt qua những con đèo nguy hiểm từ Afghanistan, Huyền Trang đến Peshawar trong tình trạng kiệt sức nhưng phấn khích vì cuối cùng đã đến được vùng đất nơi giáo lý Phật giáo lần đầu lan ra ngoài Ấn Độ. Ông dành hơn một tháng cẩn thận viếng thăm các di tích Phật giáo, nghiên cứu nghệ thuật và kiến trúc Gandhara, và thu thập xá lợi. Các nhà sư địa phương nhiệt tình chào đón và chia sẻ truyền thống truyền miệng về chuyến viếng thăm của Đức Phật đến khu vực này.",
        historicalEvents: "In 632 CE, Gandhara was under the rule of various local kingdoms following the decline of the Kushan Empire. The region was experiencing political fragmentation but remained culturally vibrant. Buddhism was still strong, though Hindu practices were also prevalent. The area served as a crucial crossroads between the Iranian, Central Asian, and Indian cultural spheres.",
        historicalEvents_vi: "Năm 632, Gandhara nằm dưới sự cai trị của nhiều vương quốc địa phương sau sự suy tàn của Đế quốc Kushan. Khu vực đang trải qua sự phân mảnh chính trị nhưng vẫn sôi động về văn hóa. Phật giáo vẫn mạnh mẽ, mặc dù các tập tục Hindu cũng rất phổ biến.",
        sources: "Great Tang Records on the Western Regions, Book 2; Archaeological Survey of India reports on Gandharan Buddhist sites"
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
        duration_vi: "2 tháng",
        buddhistContext: "Taxila was one of the world's first universities, established around 600 BCE and flourishing as a center of Buddhist learning for centuries. By Xuanzang's time, it housed several important monasteries teaching various Buddhist schools. The Dharmarajika Stupa and Jaulian monastery were active centers where monks studied Sanskrit, logic, metaphysics, and Buddhist philosophy. Taxila was particularly renowned for its expertise in the Sarvastivada school of Buddhism.",
        buddhistContext_vi: "Taxila là một trong những trường đại học đầu tiên trên thế giới, được thành lập khoảng năm 600 TCN và phát triển mạnh như một trung tâm học tập Phật giáo trong nhiều thế kỷ. Vào thời Huyền Trang, nơi đây có nhiều tu viện quan trọng giảng dạy các tông phái Phật giáo khác nhau. Tháp Dharmarajika và tu viện Jaulian là các trung tâm hoạt động nơi các nhà sư học Sanskrit, logic, siêu hình học và triết học Phật giáo.",
        xuanzangExperience: "Xuanzang spent two months at Taxila immersed in intensive study at the ancient monasteries. He engaged in philosophical debates with local scholars, particularly on the finer points of Abhidharma (Buddhist metaphysics). The monks at Jaulian monastery shared with him rare manuscripts and oral teachings passed down through generations. He was housed in a simple cell and followed the monastic routine of meditation, study, and alms-gathering. The intellectual rigor he experienced here prepared him for the even more demanding studies that awaited him at Nalanda. Local rulers provided him with provisions and honored him with ceremonial robes, recognizing his growing reputation as a scholar.",
        xuanzangExperience_vi: "Huyền Trang dành hai tháng tại Taxila đắm mình trong học tập chuyên sâu tại các tu viện cổ. Ông tham gia tranh luận triết học với các học giả địa phương, đặc biệt về các điểm tinh tế của Vi diệu pháp (siêu hình học Phật giáo). Các nhà sư tại tu viện Jaulian chia sẻ với ông những bản thảo quý hiếm và giáo lý truyền miệng được truyền qua nhiều thế hệ. Ông được ở trong một căn phòng đơn giản và tuân theo thói quen tu viện gồm thiền định, học tập và đi khất thực.",
        historicalEvents: "By the 7th century, Taxila had declined from its ancient glory but remained an important center of learning. The region was politically fragmented following the collapse of the Gupta Empire and incursions by the Huns. However, local rulers still patronized Buddhist institutions. Trade along the Grand Trunk Road, which passed through Taxila, continued to bring cultural and economic vitality to the region.",
        historicalEvents_vi: "Đến thế kỷ thứ 7, Taxila đã suy giảm so với thời kỳ huy hoàng xưa nhưng vẫn là một trung tâm học tập quan trọng. Khu vực bị phân mảnh chính trị sau sự sụp đổ của Đế quốc Gupta và sự xâm lược của người Huns. Tuy nhiên, các nhà cai trị địa phương vẫn bảo trợ các tổ chức Phật giáo.",
        sources: "Great Tang Records on the Western Regions, Book 2; John Marshall's excavation reports on Taxila (1920s-1930s); Ancient Buddhist Scrolls from Gandhara"
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
        duration_vi: "1 tháng",
        buddhistContext: "Mathura was once a major Buddhist center, home to the famous Mathura school of art which produced some of the earliest standing Buddha images. By Xuanzang's time, Buddhism had declined significantly in the city, with Hindu practices dominating. However, several ancient Buddhist monasteries and stupas still stood, including remnants of structures dating to the Kushan period. Xuanzang noted about 20 monasteries with around 2,000 monks, mostly followers of the Sarvastivada and Mahayana schools.",
        buddhistContext_vi: "Mathura từng là một trung tâm Phật giáo lớn, quê hương của trường phái nghệ thuật Mathura nổi tiếng, nơi tạo ra một số tượng Phật đứng sớm nhất. Vào thời Huyền Trang, Phật giáo đã suy giảm đáng kể trong thành phố, với các tập tục Hindu chiếm ưu thế. Tuy nhiên, một số tu viện và tháp Phật giáo cổ vẫn còn, bao gồm tàn tích của các công trình có từ thời kỳ Kushan.",
        xuanzangExperience: "Arriving in Mathura after his long stay in Kashmir, Xuanzang found a city transformed by Hindu resurgence. He visited the remaining Buddhist sites with a mix of reverence for the past and sadness at Buddhism's decline in this once-thriving center. The local monks, though fewer in number, welcomed him eagerly and shared their struggles to maintain their traditions. Xuanzang studied ancient Sanskrit manuscripts preserved in the monasteries and met with Hindu scholars for comparative philosophical discussions. He noted the city's prosperity due to its position on major trade routes. Local merchants provided him with food and supplies, and he stayed in a modest monastery on the city's outskirts.",
        xuanzangExperience_vi: "Đến Mathura sau thời gian dài ở Kashmir, Huyền Trang thấy một thành phố đã biến đổi bởi sự phục hưng của Hindu. Ông viếng thăm các di tích Phật giáo còn lại với sự kính trọng đối với quá khứ và nỗi buồn về sự suy giảm của Phật giáo ở trung tâm từng thịnh vượng này. Các nhà sư địa phương, mặc dù ít hơn về số lượng, đón tiếp ông một cách háo hức và chia sẻ những khó khăn để duy trì truyền thống của họ.",
        historicalEvents: "In the mid-7th century, Mathura was under the rule of King Harsha of Kannauj, who was a great patron of Buddhism. However, the city itself had experienced Hindu revival, particularly the Krishna-centered Bhakti movement. The region was peaceful and prosperous, benefiting from trade along the Yamuna River and overland routes. Xuanzang's visit coincided with a period of religious tolerance, though Buddhist institutional power had significantly waned.",
        historicalEvents_vi: "Vào giữa thế kỷ thứ 7, Mathura nằm dưới sự cai trị của vua Harsha của Kannauj, người bảo trợ lớn cho Phật giáo. Tuy nhiên, bản thân thành phố đã trải qua sự phục hưng Hindu, đặc biệt là phong trào Bhakti tập trung vào Krishna. Khu vực yên bình và thịnh vượng, được hưởng lợi từ thương mại dọc sông Yamuna và các tuyến đường bộ.",
        sources: "Great Tang Records on the Western Regions, Book 4; Mathura Archaeological Museum inscriptions; Studies on Buddhist art of Mathura school"
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
        duration_vi: "3 tháng",
        quote: "Here the World-Honored One, after six years of painful austerities, attained perfect enlightenment.",
        quote_vi: "Tại đây, Thế Tôn, sau sáu năm khổ hạnh đau đớn, đã đạt được giác ngộ hoàn hảo.",
        expandedDescription: "At Bodh Gaya, Xuanzang visited the sacred Bodhi Tree and Mahabodhi Temple, where Buddha achieved enlightenment 1,100 years earlier. He spent three months in meditation and contemplation at this holiest of Buddhist sites, walking in the footsteps of the Buddha himself. The experience deeply moved him and reinforced his commitment to bringing authentic Buddhist teachings back to China.",
        expandedDescription_vi: "Tại Bodh Gaya, Huyền Trang đã viếng thăm cây Bồ Đề thiêng liêng và đền Mahabodhi, nơi Phật đạt được giác ngộ 1.100 năm trước đó. Ông đã dành ba tháng thiền định và trầm tư tại địa điểm linh thiêng nhất của Phật giáo này."
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
        duration_vi: "5 năm",
        quote: "The sangharama of Nalanda is majestic and beautiful. Ten thousand monks dwell here, and the rules of discipline are strictly observed.",
        quote_vi: "Tăng già lam của Nalanda thật hùng vĩ và đẹp đẽ. Mười ngàn nhà sư sống ở đây, và các quy tắc kỷ luật được tuân thủ nghiêm ngặt.",
        expandedDescription: "Nalanda University was the pinnacle of Xuanzang's journey. For five years, he studied under the great master Shilabhadra, learning Sanskrit, Buddhist philosophy, and logic. The university housed 10,000 students and 2,000 teachers, with a library of nine million manuscripts. Here, Xuanzang mastered the Yogacara school of Mahayana Buddhism and collected the precious texts he would carry back to China. His reputation as a scholar grew so great that he was invited to debate with other learned monks, and he emerged victorious in philosophical disputations.",
        expandedDescription_vi: "Đại học Nalanda là đỉnh cao của hành trình Huyền Trang. Trong năm năm, ông học tập dưới sự hướng dẫn của đại sư Shilabhadra, học tiếng Phạn, triết học Phật giáo và logic. Đại học có 10.000 sinh viên và 2.000 giáo viên, với thư viện chín triệu bản thảo.",
        buddhistContext: "Nalanda was the world's first residential university and the greatest center of Buddhist learning in ancient India. Founded in the 5th century CE, it attracted students from Tibet, China, Korea, Japan, Mongolia, Turkey, Sri Lanka, and Southeast Asia. The curriculum included the study of all Buddhist schools (Mahayana and Hinayana), Sanskrit grammar, logic, medicine, mathematics, and astronomy. The monastery complex had eight separate compounds, ten temples, meditation halls, classrooms, lakes, and parks.",
        buddhistContext_vi: "Nalanda là đại học nội trú đầu tiên trên thế giới và là trung tâm học tập Phật giáo vĩ đại nhất ở Ấn Độ cổ đại. Được thành lập vào thế kỷ thứ 5 sau Công nguyên, nó thu hút sinh viên từ Tây Tạng, Trung Quốc, Triều Tiên, Nhật Bản, Mông Cổ, Thổ Nhĩ Kỳ, Sri Lanka và Đông Nam Á.",
        xuanzangExperience: "Xuanzang's five years at Nalanda transformed him from a pilgrim into one of the greatest Buddhist scholars of his time. Under the 106-year-old abbot Shilabhadra, he studied the Yogacara philosophy intensively. He was assigned a spacious room and provided with all necessities. Daily life included lectures, debates, meditation, and manuscript copying. His intellect impressed everyone, and he was given the honorific title 'Master of the Tripitaka.' When he finally prepared to return to China, he had collected 657 Buddhist texts, 150 relics, and seven Buddha statues.",
        xuanzangExperience_vi: "Năm năm tại Nalanda đã biến Huyền Trang từ một nhà hành hương thành một trong những học giả Phật giáo vĩ đại nhất thời đại của ông. Dưới sự hướng dẫn của trụ trì Shilabhadra 106 tuổi, ông nghiên cứu triết học Yogacara một cách chuyên sâu."
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
        duration_vi: "Kết thúc hành trình",
        quote: "I have traveled 50,000 li through 138 kingdoms, and now return with sacred texts to enlighten our land.",
        quote_vi: "Ta đã đi được 50.000 dặm qua 138 vương quốc, và giờ trở về với kinh điển thiêng liêng để soi sáng đất nước chúng ta.",
        expandedDescription: "After 16 years and over 10,000 miles of travel, Xuanzang returned triumphantly to Chang'an in 645 CE. Emperor Taizong, who had initially forbidden the journey, welcomed him as a hero. Xuanzang brought back 657 Buddhist texts, 150 relics, and 7 Buddha statues. He spent the remaining 19 years of his life translating these Sanskrit texts into Chinese, producing 1,335 volumes of Buddhist scriptures. His translations and his travelogue, 'Great Tang Records on the Western Regions,' revolutionized Chinese Buddhism and provided invaluable historical records of Central and South Asia in the 7th century.",
        expandedDescription_vi: "Sau 16 năm và hơn 10.000 dặm đi lại, Huyền Trang trở về thành công đến Trường An vào năm 645. Hoàng đế Thái Tông, người ban đầu đã cấm cuộc hành trình, chào đón ông như một anh hùng. Huyền Trang mang về 657 văn bản Phật giáo, 150 xá lợi và 7 tượng Phật."
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
        quote: lang === 'vi' ? enhancement.quote_vi || enhancement.quote : enhancement.quote,
        expandedDescription: lang === 'vi' ? enhancement.expandedDescription_vi || enhancement.expandedDescription : enhancement.expandedDescription,
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
