// Xuanzang's Journey Data (629-645 CE)
// All coordinates, modern city names, and historical context

const journeyData = [
    {
        id: 1,
        name: "Chang'an",
        modernName: "Xi'an, China",
        coordinates: [34.2658, 108.9541],
        year: 629,
        duration: "Starting point",
        type: "start",
        description: "Capital of Tang Dynasty China. Xuanzang departed secretly without imperial permission, beginning his epic journey to obtain Buddhist scriptures.",
        historicalContext: "Chang'an was one of the largest cities in the world during the Tang Dynasty, serving as the eastern terminus of the Silk Road.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Giant_Wild_Goose_Pagoda.jpg/320px-Giant_Wild_Goose_Pagoda.jpg",
                caption: "Giant Wild Goose Pagoda in Xi'an, built to house the scriptures Xuanzang brought back"
            }
        ]
    },
    {
        id: 2,
        name: "Liangzhou",
        modernName: "Wuwei, Gansu, China",
        coordinates: [37.9277, 102.6344],
        year: 629,
        duration: "1 month",
        type: "regular",
        description: "First major stop where Xuanzang studied Buddhist texts and prepared for the dangerous journey ahead through the desert.",
        historicalContext: "An important garrison town on the eastern edge of the Hexi Corridor, gateway to Central Asia.",
        images: []
    },
    {
        id: 3,
        name: "Dunhuang",
        modernName: "Dunhuang, Gansu, China",
        coordinates: [40.1424, 94.6617],
        year: 629,
        duration: "1 month",
        type: "major",
        description: "Famous oasis city at the edge of the Gobi Desert. Xuanzang received help from local monks before crossing the desert.",
        historicalContext: "Home to the Mogao Caves, a major Buddhist art site. Critical waypoint on the Silk Road.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mogao_Caves.jpg/320px-Mogao_Caves.jpg",
                caption: "Mogao Caves near Dunhuang, famous Buddhist cave complex"
            }
        ]
    },
    {
        id: 4,
        name: "Hami",
        modernName: "Hami, Xinjiang, China",
        coordinates: [42.8273, 93.5151],
        year: 630,
        duration: "2 weeks",
        type: "regular",
        description: "Oasis city where Xuanzang was warmly received by the local king and recovered from desert crossing.",
        historicalContext: "Strategic oasis on the northern Silk Road route.",
        images: []
    },
    {
        id: 5,
        name: "Turfan",
        modernName: "Turpan, Xinjiang, China",
        coordinates: [42.9476, 89.1892],
        year: 630,
        duration: "2 months",
        type: "major",
        description: "The King of Turfan became Xuanzang's patron, providing supplies and letters of introduction for the journey ahead.",
        historicalContext: "Major trading center and Buddhist kingdom in the Tarim Basin.",
        images: []
    },
    {
        id: 6,
        name: "Kucha",
        modernName: "Kuqa, Xinjiang, China",
        coordinates: [41.7168, 82.9369],
        year: 630,
        duration: "2 months",
        type: "major",
        description: "Important Buddhist center where Xuanzang studied various Buddhist texts and doctrines.",
        historicalContext: "Ancient Buddhist kingdom known for its monasteries and scholarly traditions.",
        images: []
    },
    {
        id: 7,
        name: "Aksu",
        modernName: "Aksu, Xinjiang, China",
        coordinates: [41.1688, 80.2601],
        year: 630,
        duration: "2 weeks",
        type: "regular",
        description: "Oasis city along the northern Silk Road.",
        historicalContext: "Important trading post in the Tarim Basin.",
        images: []
    },
    {
        id: 8,
        name: "Tokmak",
        modernName: "Tokmok, Kyrgyzstan",
        coordinates: [42.8417, 75.2917],
        year: 630,
        duration: "1 month",
        type: "regular",
        description: "Town in the Chu River valley, part of the Western Turkic Khaganate.",
        historicalContext: "Located near the ancient city of Suyab, capital of the Western Turkic Khaganate.",
        images: []
    },
    {
        id: 9,
        name: "Tashkent",
        modernName: "Tashkent, Uzbekistan",
        coordinates: [41.2995, 69.2401],
        year: 630,
        duration: "1 month",
        type: "major",
        description: "Major city in Transoxiana where Xuanzang observed diverse Buddhist and non-Buddhist traditions.",
        historicalContext: "Ancient Silk Road city with rich cultural exchange between various civilizations.",
        images: []
    },
    {
        id: 10,
        name: "Samarkand",
        modernName: "Samarkand, Uzbekistan",
        coordinates: [39.6270, 66.9750],
        year: 631,
        duration: "1 month",
        type: "major",
        description: "One of the oldest continuously inhabited cities, center of Sogdian culture. Xuanzang noted the blend of Buddhist and Zoroastrian practices.",
        historicalContext: "Major Silk Road city, capital of Sogdiana and a melting pot of cultures.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Registan_Square%2C_Samarkand_%2838613350795%29.jpg/320px-Registan_Square%2C_Samarkand_%2838613350795%29.jpg",
                caption: "Registan Square in Samarkand (later construction)"
            }
        ]
    },
    {
        id: 11,
        name: "Balkh",
        modernName: "Balkh, Afghanistan",
        coordinates: [36.7581, 66.8977],
        year: 631,
        duration: "3 months",
        type: "major",
        description: "Major Buddhist center known as 'Mother of Cities.' Xuanzang studied at several monasteries and met learned monks.",
        historicalContext: "Ancient city, one of the oldest in the world, and a major center of Buddhism before Islam.",
        images: []
    },
    {
        id: 12,
        name: "Bamiyan",
        modernName: "Bamiyan, Afghanistan",
        coordinates: [34.8167, 67.8167],
        year: 632,
        duration: "2 weeks",
        type: "major",
        description: "Site of the famous giant Buddha statues carved into the cliff. Xuanzang described them in detail in his writings.",
        historicalContext: "Home to the massive Buddha statues (destroyed in 2001), symbols of the region's Buddhist heritage.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Taller_Buddha_of_Bamiyan_before_destruction.jpg/240px-Taller_Buddha_of_Bamiyan_before_destruction.jpg",
                caption: "The Bamiyan Buddha (before 2001 destruction)"
            }
        ]
    },
    {
        id: 13,
        name: "Kabul",
        modernName: "Kabul, Afghanistan",
        coordinates: [34.5553, 69.2075],
        year: 632,
        duration: "1 month",
        type: "regular",
        description: "Strategic city in the Hindu Kush region with Buddhist monasteries.",
        historicalContext: "Ancient city on the trade routes between Central Asia and the Indian subcontinent.",
        images: []
    },
    {
        id: 14,
        name: "Peshawar",
        modernName: "Peshawar, Pakistan",
        coordinates: [34.0151, 71.5249],
        year: 632,
        duration: "1 month",
        type: "major",
        description: "Ancient Gandhara region. Xuanzang visited numerous Buddhist sites and stupas.",
        historicalContext: "Capital of ancient Gandhara, where Greco-Buddhist art flourished.",
        images: []
    },
    {
        id: 15,
        name: "Taxila",
        modernName: "Taxila, Pakistan",
        coordinates: [33.7782, 72.8606],
        year: 633,
        duration: "2 months",
        type: "major",
        description: "Ancient university city and major Buddhist learning center. Xuanzang studied at monasteries here.",
        historicalContext: "One of the earliest universities in the world, center of Buddhist learning for centuries.",
        images: []
    },
    {
        id: 16,
        name: "Srinagar",
        modernName: "Srinagar, Kashmir, India",
        coordinates: [34.0837, 74.7973],
        year: 633,
        duration: "2 years",
        type: "major",
        description: "Xuanzang spent extended time in Kashmir studying Buddhist philosophy and texts with renowned scholars.",
        historicalContext: "Important center of Buddhist learning and philosophy in medieval period.",
        images: []
    },
    {
        id: 17,
        name: "Mathura",
        modernName: "Mathura, Uttar Pradesh, India",
        coordinates: [27.4924, 77.6737],
        year: 635,
        duration: "1 month",
        type: "regular",
        description: "Ancient city with important Buddhist sites, though primarily associated with Hinduism.",
        historicalContext: "Birthplace of Lord Krishna and important pilgrimage site.",
        images: []
    },
    {
        id: 18,
        name: "Kanauj",
        modernName: "Kannauj, Uttar Pradesh, India",
        coordinates: [27.0514, 79.9145],
        year: 635,
        duration: "1 month",
        type: "major",
        description: "Capital of King Harsha, who became Xuanzang's patron in India. Important Buddhist center.",
        historicalContext: "One of the most powerful kingdoms in North India during the 7th century.",
        images: []
    },
    {
        id: 19,
        name: "Varanasi",
        modernName: "Varanasi, Uttar Pradesh, India",
        coordinates: [25.3176, 82.9739],
        year: 636,
        duration: "1 month",
        type: "major",
        description: "One of the holiest cities in India. Xuanzang visited Sarnath where Buddha gave his first sermon.",
        historicalContext: "Ancient city, one of the oldest continuously inhabited cities in the world. Site of Buddha's first teaching.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Dhamekh_Stupa.jpg/240px-Dhamekh_Stupa.jpg",
                caption: "Dhamekh Stupa at Sarnath, near Varanasi"
            }
        ]
    },
    {
        id: 20,
        name: "Bodh Gaya",
        modernName: "Bodh Gaya, Bihar, India",
        coordinates: [24.6958, 84.9918],
        year: 637,
        duration: "3 months",
        type: "major",
        description: "The most sacred site in Buddhism - where Buddha attained enlightenment. Xuanzang spent significant time here in meditation and study.",
        historicalContext: "The holiest site in Buddhism, location of the Bodhi Tree under which Buddha achieved enlightenment.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mahabodhi_temple_in_Bodh_Gaya.jpg/240px-Mahabodhi_temple_in_Bodh_Gaya.jpg",
                caption: "Mahabodhi Temple at Bodh Gaya"
            }
        ]
    },
    {
        id: 21,
        name: "Nalanda",
        modernName: "Nalanda, Bihar, India",
        coordinates: [25.1353, 85.4428],
        year: 637,
        duration: "5 years",
        type: "major",
        description: "The greatest Buddhist university of ancient India. Xuanzang studied here under the guidance of the abbot Shilabhadra and other renowned scholars. This was the highlight of his journey.",
        historicalContext: "World's first residential university, with thousands of students from across Asia. Center of Buddhist learning and philosophy.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Nalanda_University_India_ruins.jpg/320px-Nalanda_University_India_ruins.jpg",
                caption: "Ruins of Nalanda University"
            }
        ]
    },
    {
        id: 22,
        name: "Pataliputra",
        modernName: "Patna, Bihar, India",
        coordinates: [25.5941, 85.1376],
        year: 642,
        duration: "1 month",
        type: "regular",
        description: "Ancient capital of several Indian empires. Xuanzang visited Buddhist sites and collected texts.",
        historicalContext: "Historic capital of the Mauryan and Gupta empires.",
        images: []
    },
    {
        id: 23,
        name: "Kanchipuram",
        modernName: "Kanchipuram, Tamil Nadu, India",
        coordinates: [12.8342, 79.7036],
        year: 642,
        duration: "2 months",
        type: "regular",
        description: "Southern Indian city known for its temples. Xuanzang visited to study different Buddhist traditions.",
        historicalContext: "One of the seven sacred cities of India, known for its thousand temples.",
        images: []
    },
    {
        id: 24,
        name: "Kanauj (Return)",
        modernName: "Kannauj, Uttar Pradesh, India",
        coordinates: [27.0514, 79.9145],
        year: 643,
        duration: "3 months",
        type: "major",
        description: "Returned to King Harsha's capital. Participated in a great assembly where Xuanzang defended Mahayana Buddhism.",
        historicalContext: "Site of the famous debate assembly organized by King Harsha.",
        images: []
    },
    {
        id: 25,
        name: "Kashmir (Return)",
        modernName: "Srinagar, Kashmir, India",
        coordinates: [34.0837, 74.7973],
        year: 643,
        duration: "3 months",
        type: "regular",
        description: "Returned through Kashmir, continuing to collect and organize Buddhist texts.",
        historicalContext: "Final collection of texts before beginning the return journey to China.",
        images: []
    },
    {
        id: 26,
        name: "Kashgar",
        modernName: "Kashgar, Xinjiang, China",
        coordinates: [39.4704, 75.9896],
        year: 644,
        duration: "1 month",
        type: "major",
        description: "Major oasis city on the western edge of the Tarim Basin. Xuanzang rested here on his return journey.",
        historicalContext: "Important Silk Road trading center and meeting point of different cultures.",
        images: []
    },
    {
        id: 27,
        name: "Khotan",
        modernName: "Hotan, Xinjiang, China",
        coordinates: [37.1104, 79.9358],
        year: 644,
        duration: "1 month",
        type: "regular",
        description: "Buddhist kingdom on the southern Silk Road. Xuanzang took the southern route on his return.",
        historicalContext: "Famous for jade production and as a Buddhist kingdom.",
        images: []
    },
    {
        id: 28,
        name: "Dunhuang (Return)",
        modernName: "Dunhuang, Gansu, China",
        coordinates: [40.1424, 94.6617],
        year: 644,
        duration: "1 month",
        type: "regular",
        description: "Returned to Dunhuang, approaching Chinese territory with his precious cargo of Buddhist texts.",
        historicalContext: "Re-entering Chinese territory after 15 years abroad.",
        images: []
    },
    {
        id: 29,
        name: "Chang'an (Return)",
        modernName: "Xi'an, China",
        coordinates: [34.2658, 108.9541],
        year: 645,
        duration: "End of journey",
        type: "end",
        description: "Triumphant return to Chang'an with 657 Buddhist texts, 150 relics, and 7 Buddha statues. Emperor Taizong welcomed him as a hero. Spent remaining life translating texts.",
        historicalContext: "His return was celebrated as a major achievement. The texts he brought revolutionized Chinese Buddhism.",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tang_Sanzang.JPG/240px-Tang_Sanzang.JPG",
                caption: "Statue of Xuanzang at the Giant Wild Goose Pagoda"
            }
        ]
    }
];
