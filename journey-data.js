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
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Xian_-_Walled_city_-_view_from_the_Bell_Tower.jpg/320px-Xian_-_Walled_city_-_view_from_the_Bell_Tower.jpg",
                caption: "Modern Xi'an city center, formerly Chang'an"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bell_Tower_of_Xi%27an.JPG/320px-Bell_Tower_of_Xi%27an.JPG",
                caption: "Bell Tower of Xi'an, symbol of the ancient capital"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Xian_city_walls.jpg/320px-Xian_city_walls.jpg",
                caption: "Ancient city walls of Xi'an, dating to Tang Dynasty"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Terracotta_Army_Pit_1_-_3.jpg/320px-Terracotta_Army_Pit_1_-_3.jpg",
                caption: "Terracotta Army near Xi'an, showing the region's ancient glory"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Statue_of_Xuanzang.jpg/240px-Statue_of_Xuanzang.jpg",
                caption: "Statue of Xuanzang at the Giant Wild Goose Pagoda"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tang_Paradise_Xi%27an.jpg/320px-Tang_Paradise_Xi%27an.jpg",
                caption: "Tang Paradise in Xi'an, recreation of Tang Dynasty gardens"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Small_Wild_Goose_Pagoda_in_2011.JPG/240px-Small_Wild_Goose_Pagoda_in_2011.JPG",
                caption: "Small Wild Goose Pagoda, another Tang Dynasty Buddhist structure"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Xian_beilin_museum.JPG/320px-Xian_beilin_museum.JPG",
                caption: "Forest of Stone Steles Museum in Xi'an"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Great_Mosque_of_Xi%27an.jpg/320px-Great_Mosque_of_Xi%27an.jpg",
                caption: "Great Mosque of Xi'an, showing the city's diverse religious heritage"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Daming_Palace_model.jpg/320px-Daming_Palace_model.jpg",
                caption: "Model of Daming Palace, the royal palace complex during Tang Dynasty"
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
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wuwei_Leitai_Han_Tomb_-_Bronze_Galloping_Horse.jpg/320px-Wuwei_Leitai_Han_Tomb_-_Bronze_Galloping_Horse.jpg",
                caption: "Bronze Galloping Horse from Wuwei, symbol of ancient Silk Road"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Wuwei_Confucius_Temple.jpg/320px-Wuwei_Confucius_Temple.jpg",
                caption: "Wuwei Confucius Temple, showing the city's historical architecture"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Wuwei_Bell_Tower.jpg/320px-Wuwei_Bell_Tower.jpg",
                caption: "Wuwei Bell Tower in Gansu Province"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Gansu_landscape.jpg/320px-Gansu_landscape.jpg",
                caption: "Landscape of Gansu Province, the Hexi Corridor"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Liangzhou_pagoda.jpg/240px-Liangzhou_pagoda.jpg",
                caption: "Historical pagoda in Liangzhou region"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hexi_Corridor_terrain.jpg/320px-Hexi_Corridor_terrain.jpg",
                caption: "Hexi Corridor terrain, gateway to Central Asia"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Wuwei_city_street.jpg/320px-Wuwei_city_street.jpg",
                caption: "Modern Wuwei city, formerly Liangzhou"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Desert_landscape_Gansu.jpg/320px-Desert_landscape_Gansu.jpg",
                caption: "Desert landscape near Wuwei"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ancient_watchtower_Gansu.jpg/240px-Ancient_watchtower_Gansu.jpg",
                caption: "Ancient watchtower along the Silk Road in Gansu"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Silk_Road_caravan.jpg/320px-Silk_Road_caravan.jpg",
                caption: "Recreation of Silk Road caravan"
            }
        ]
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
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Mogao_Cave_45_interior.jpg/320px-Mogao_Cave_45_interior.jpg",
                caption: "Interior of Mogao Cave 45 with Tang Dynasty Buddha sculptures"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mogao_Caves_murals.jpg/320px-Mogao_Caves_murals.jpg",
                caption: "Buddhist murals in Mogao Caves"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mingsha_Sand_Dunes_Dunhuang.jpg/320px-Mingsha_Sand_Dunes_Dunhuang.jpg",
                caption: "Mingsha Sand Dunes (Singing Sands) near Dunhuang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Crescent_Lake_Dunhuang.jpg/320px-Crescent_Lake_Dunhuang.jpg",
                caption: "Crescent Lake oasis near Dunhuang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Dunhuang_Yardang_landform.jpg/320px-Dunhuang_Yardang_landform.jpg",
                caption: "Yardang landforms near Dunhuang in the Gobi Desert"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gobi_Desert_landscape.jpg/320px-Gobi_Desert_landscape.jpg",
                caption: "Gobi Desert landscape near Dunhuang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Dunhuang_city_view.jpg/320px-Dunhuang_city_view.jpg",
                caption: "Modern Dunhuang city, ancient oasis on the Silk Road"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dunhuang_Night_Market.jpg/320px-Dunhuang_Night_Market.jpg",
                caption: "Dunhuang night market showing local culture"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yangguan_Pass_ruins.jpg/320px-Yangguan_Pass_ruins.jpg",
                caption: "Yangguan Pass ruins near Dunhuang, ancient Silk Road checkpoint"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/White_Horse_Pagoda_Dunhuang.jpg/240px-White_Horse_Pagoda_Dunhuang.jpg",
                caption: "White Horse Pagoda near Dunhuang"
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
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hami_city_view.jpg/320px-Hami_city_view.jpg",
                caption: "View of Hami city in Xinjiang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hami_melon_field.jpg/320px-Hami_melon_field.jpg",
                caption: "Hami melon fields, famous produce of the region"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hami_King_Mausoleum.jpg/320px-Hami_King_Mausoleum.jpg",
                caption: "Hami King Mausoleum, historical architecture"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Xinjiang_desert_oasis.jpg/320px-Xinjiang_desert_oasis.jpg",
                caption: "Desert oasis landscape in Xinjiang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tian_Shan_mountains_Xinjiang.jpg/320px-Tian_Shan_mountains_Xinjiang.jpg",
                caption: "Tian Shan mountains near Hami"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hami_mosque.jpg/320px-Hami_mosque.jpg",
                caption: "Historical mosque in Hami"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Silk_Road_ruins_Xinjiang.jpg/320px-Silk_Road_ruins_Xinjiang.jpg",
                caption: "Ancient Silk Road ruins in Xinjiang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hami_bazaar.jpg/320px-Hami_bazaar.jpg",
                caption: "Traditional bazaar in Hami"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Xinjiang_landscape.jpg/320px-Xinjiang_landscape.jpg",
                caption: "Landscape of Xinjiang province"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ancient_watchtower_Xinjiang.jpg/240px-Ancient_watchtower_Xinjiang.jpg",
                caption: "Ancient watchtower along the Silk Road"
            }
        ]
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
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Turpan_Emin_Minaret.jpg/240px-Turpan_Emin_Minaret.jpg",
                caption: "Emin Minaret in Turpan, historic Islamic architecture"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jiaohe_ruins_Turpan.jpg/320px-Jiaohe_ruins_Turpan.jpg",
                caption: "Jiaohe ancient city ruins near Turpan"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gaochang_ruins.jpg/320px-Gaochang_ruins.jpg",
                caption: "Gaochang ancient city ruins, capital of Turfan kingdom"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bezeklik_Thousand_Buddha_Caves.jpg/320px-Bezeklik_Thousand_Buddha_Caves.jpg",
                caption: "Bezeklik Thousand Buddha Caves near Turpan"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Turpan_depression.jpg/320px-Turpan_depression.jpg",
                caption: "Turpan Depression, one of the lowest points on earth"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flaming_Mountains_Turpan.jpg/320px-Flaming_Mountains_Turpan.jpg",
                caption: "Flaming Mountains near Turpan"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Turpan_grape_valley.jpg/320px-Turpan_grape_valley.jpg",
                caption: "Grape Valley in Turpan, famous vineyard region"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Karez_irrigation_system_Turpan.jpg/320px-Karez_irrigation_system_Turpan.jpg",
                caption: "Ancient Karez irrigation system in Turpan"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Astana_tombs_Turpan.jpg/320px-Astana_tombs_Turpan.jpg",
                caption: "Astana ancient tombs near Turpan"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Turpan_desert_landscape.jpg/320px-Turpan_desert_landscape.jpg",
                caption: "Desert landscape around Turpan"
            }
        ]
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
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kizil_Caves_Kuqa.jpg/320px-Kizil_Caves_Kuqa.jpg",
                caption: "Kizil Thousand Buddha Caves near Kuqa"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kuqa_Grand_Mosque.jpg/320px-Kuqa_Grand_Mosque.jpg",
                caption: "Kuqa Grand Mosque, showing historical architecture"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Subashi_Buddhist_ruins_Kuqa.jpg/320px-Subashi_Buddhist_ruins_Kuqa.jpg",
                caption: "Subashi Buddhist temple ruins near Kuqa"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kuqa_old_city.jpg/320px-Kuqa_old_city.jpg",
                caption: "Old city of Kuqa in Xinjiang"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tarim_Basin_landscape.jpg/320px-Tarim_Basin_landscape.jpg",
                caption: "Tarim Basin landscape near Kuqa"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kuqa_market.jpg/320px-Kuqa_market.jpg",
                caption: "Traditional market in Kuqa"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kizil_Cave_murals.jpg/320px-Kizil_Cave_murals.jpg",
                caption: "Buddhist murals in Kizil Caves"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tianshan_Canyon_Kuqa.jpg/320px-Tianshan_Canyon_Kuqa.jpg",
                caption: "Tianshan Grand Canyon near Kuqa"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ancient_Buddhist_stupa_Kuqa.jpg/240px-Ancient_Buddhist_stupa_Kuqa.jpg",
                caption: "Ancient Buddhist stupa ruins near Kuqa"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Silk_Road_caravan_route.jpg/320px-Silk_Road_caravan_route.jpg",
                caption: "Ancient Silk Road caravan route through Kuqa region"
            }
        ]
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
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nalanda_monastery_ruins.jpg/320px-Nalanda_monastery_ruins.jpg",
                caption: "Ancient monastery cells at Nalanda"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nalanda_stupa.jpg/240px-Nalanda_stupa.jpg",
                caption: "Great Stupa at Nalanda University"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nalanda_archaeological_site.jpg/320px-Nalanda_archaeological_site.jpg",
                caption: "Archaeological site of Nalanda University"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nalanda_temple_remains.jpg/320px-Nalanda_temple_remains.jpg",
                caption: "Temple remains at Nalanda"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nalanda_museum.jpg/320px-Nalanda_museum.jpg",
                caption: "Nalanda Archaeological Museum"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nalanda_University_model.jpg/320px-Nalanda_University_model.jpg",
                caption: "Model reconstruction of ancient Nalanda University"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bihar_landscape.jpg/320px-Bihar_landscape.jpg",
                caption: "Landscape of Bihar near Nalanda"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Buddhist_sculpture_Nalanda.jpg/240px-Buddhist_sculpture_Nalanda.jpg",
                caption: "Buddhist sculpture from Nalanda"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Nalanda_library_remains.jpg/320px-Nalanda_library_remains.jpg",
                caption: "Remains of the great library of Nalanda"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Xuanzang_memorial_Nalanda.jpg/240px-Xuanzang_memorial_Nalanda.jpg",
                caption: "Xuanzang Memorial Hall at Nalanda"
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

// Generic fallback images for locations (Wikimedia Commons)
const genericImages = {
    desert: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Desert_landscape_Central_Asia.jpg/320px-Desert_landscape_Central_Asia.jpg", caption: "Desert landscape along the Silk Road" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Sand_dunes_Taklamakan.jpg/320px-Sand_dunes_Taklamakan.jpg", caption: "Sand dunes in Central Asia" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Camel_caravan_Silk_Road.jpg/320px-Camel_caravan_Silk_Road.jpg", caption: "Traditional camel caravan" }
    ],
    mountain: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pamir_Mountains.jpg/320px-Pamir_Mountains.jpg", caption: "Mountain ranges along the ancient route" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Hindu_Kush_mountains.jpg/320px-Hindu_Kush_mountains.jpg", caption: "Mountain pass in Central Asia" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mountain_valley_Central_Asia.jpg/320px-Mountain_valley_Central_Asia.jpg", caption: "Mountain valley" }
    ],
    oasis: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Oasis_city_Silk_Road.jpg/320px-Oasis_city_Silk_Road.jpg", caption: "Ancient oasis city" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Traditional_bazaar_Central_Asia.jpg/320px-Traditional_bazaar_Central_Asia.jpg", caption: "Traditional market" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Historic_architecture_Silk_Road.jpg/320px-Historic_architecture_Silk_Road.jpg", caption: "Historical architecture" }
    ],
    buddhist: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Buddhist_monastery_ruins.jpg/320px-Buddhist_monastery_ruins.jpg", caption: "Ancient Buddhist monastery" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Buddhist_stupa_Central_Asia.jpg/240px-Buddhist_stupa_Central_Asia.jpg", caption: "Buddhist stupa" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Buddhist_cave_temple.jpg/320px-Buddhist_cave_temple.jpg", caption: "Buddhist cave temple" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Buddha_statue_ancient.jpg/240px-Buddha_statue_ancient.jpg", caption: "Ancient Buddha statue" }
    ],
    india: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Indian_temple_architecture.jpg/240px-Indian_temple_architecture.jpg", caption: "Ancient Indian temple" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ganges_River.jpg/320px-Ganges_River.jpg", caption: "The sacred Ganges River" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Indian_countryside.jpg/320px-Indian_countryside.jpg", caption: "Indian countryside" }
    ],
    general: [
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Silk_Road_map.jpg/320px-Silk_Road_map.jpg", caption: "Historical Silk Road map" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ancient_ruins_Silk_Road.jpg/320px-Ancient_ruins_Silk_Road.jpg", caption: "Ancient ruins along the route" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Historical_manuscript.jpg/320px-Historical_manuscript.jpg", caption: "Historical Buddhist manuscript" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Monk_pilgrim.jpg/240px-Monk_pilgrim.jpg", caption: "Buddhist monk pilgrim" }
    ]
};

// Function to load local images from images folder
function loadLocalImages(location) {
    const localImages = [];
    const locationId = location.id;
    
    // Get city name from modernName for folder matching
    const cityName = location.modernName.split(',')[0].trim();
    // Replace spaces with underscores for file matching
    const cityNameForFile = cityName.replace(/ /g, '_');
    
    // Try to load up to 10 local images based on the naming pattern: {id}_{city}_{number}.jpg
    for (let i = 1; i <= 10; i++) {
        const imageNumber = String(i).padStart(4, '0');
        const imagePath = `images/${String(locationId).padStart(2, '0')}_${cityNameForFile}_${imageNumber}.jpg`;
        
        localImages.push({
            url: imagePath,
            caption: `${cityName} - Historical Site ${i}`,
            isLocal: true
        });
    }
    
    return localImages;
}

// Function to ensure each location has at least 10 images
function ensureMinimumImages(location) {
    if (!location.images) location.images = [];
    
    if (location.images.length >= 10) return location;
    
    // First, try to add local images
    const localImages = loadLocalImages(location);
    localImages.forEach(img => {
        if (location.images.length < 10) {
            location.images.push(img);
        }
    });
    
    // If we still don't have enough images, add generic ones
    if (location.images.length < 10) {
        // Determine image type based on location
        let imageTypes = ['general'];
        const country = location.modernName.toLowerCase();
        
        if (country.includes('india') || country.includes('pakistan') || country.includes('bangladesh')) {
            imageTypes.push('india', 'buddhist');
        } else if (country.includes('afghanistan') || country.includes('uzbekistan') || country.includes('tajikistan') || country.includes('kyrgyzstan')) {
            imageTypes.push('mountain', 'oasis', 'buddhist');
        } else if (country.includes('china') || country.includes('xinjiang') || country.includes('gansu')) {
            imageTypes.push('desert', 'oasis', 'buddhist');
        }
        
        // Add images until we have at least 10
        let addedCount = 0;
        while (location.images.length < 10 && addedCount < 20) {
            const typeIndex = addedCount % imageTypes.length;
            const type = imageTypes[typeIndex];
            const typeImages = genericImages[type] || genericImages.general;
            const imageIndex = Math.floor(addedCount / imageTypes.length) % typeImages.length;
            
            location.images.push({
                url: typeImages[imageIndex].url,
                caption: `${typeImages[imageIndex].caption} (${location.name})`
            });
            addedCount++;
        }
    }
    
    return location;
}

// Apply to all locations
if (typeof journeyData !== 'undefined') {
    journeyData.forEach(location => ensureMinimumImages(location));
}

