/**
 * Real environmental statistics from reputable sources
 * Sources: UN Environment Programme, World Bank, EPA, waterfootprint.org
 */

export const impactStats = {
    // Global environmental stats
    global: [
        {
            id: 'plastic-ocean',
            number: 8,
            suffix: 'M',
            label: {
                he: 'טון פלסטיק מגיע לאוקיינוסים מדי שנה',
                en: 'tons of plastic enter oceans yearly'
            },
            iconSrc: '/assets/icons/globe.png',
            color: 'blue',
            source: 'UNEP 2023'
        },
        {
            id: 'food-waste',
            number: 33,
            suffix: '%',
            label: {
                he: 'מהמזון בעולם הולך לפח',
                en: 'of food globally is wasted'
            },
            iconSrc: '/assets/icons/recycle-heart.png',
            color: 'magenta',
            source: 'UN FAO'
        },
        {
            id: 'water-footprint',
            number: 15000,
            suffix: 'L',
            label: {
                he: 'מים לייצור קילו בשר בקר',
                en: 'water to produce 1kg of beef'
            },
            iconSrc: '/assets/icons/leaf.png',
            color: 'blue',
            source: 'waterfootprint.org'
        },
        {
            id: 'carbon-flight',
            number: 150,
            suffix: '',
            label: {
                he: 'עצים נדרשים לספוג טיסה לאירופה',
                en: 'trees needed to offset 1 flight to Europe'
            },
            iconSrc: '/assets/icons/globe.png',
            color: 'green',
            source: 'ICAO Carbon Calculator'
        }
    ],

    // Israel-specific stats
    israel: [
        {
            id: 'water-consumption',
            number: 137,
            suffix: 'L',
            label: {
                he: 'צריכת מים יומית ממוצעת לאדם',
                en: 'average daily water per person'
            },
            iconSrc: '/assets/icons/leaf.png',
            color: 'blue',
            source: 'Israel Water Authority'
        },
        {
            id: 'recycling-rate',
            number: 24,
            suffix: '%',
            label: {
                he: 'שיעור המיחזור בישראל',
                en: 'recycling rate in Israel'
            },
            iconSrc: '/assets/icons/recycle-heart.png',
            color: 'green',
            source: 'Ministry of Environment'
        },
        {
            id: 'plastic-bags',
            number: 2.6,
            suffix: 'B',
            label: {
                he: 'שקיות פלסטיק נצרכות בשנה',
                en: 'plastic bags consumed yearly'
            },
            iconSrc: '/assets/icons/globe.png',
            color: 'magenta',
            source: 'Israel Ministry of Environment'
        }
    ],

    // Quiz engagement stats (will be dynamic)
    engagement: [
        {
            id: 'people-educated',
            number: 1247,
            suffix: '+',
            label: {
                he: 'אנשים השלימו את החידון',
                en: 'people completed the quiz'
            },
            iconSrc: '/assets/icons/globe.png',
            color: 'green'
        },
        {
            id: 'facts-learned',
            number: 12470,
            suffix: '+',
            label: {
                he: 'עובדות סביבתיות נלמדו',
                en: 'environmental facts learned'
            },
            iconSrc: '/assets/icons/lightbulb.png',
            color: 'blue'
        },
        {
            id: 'shares',
            number: 342,
            suffix: '+',
            label: {
                he: 'שיתופים ברשתות חברתיות',
                en: 'social media shares'
            },
            iconSrc: '/assets/icons/checkmark.png',
            color: 'magenta'
        }
    ]
};

// Features/Services data
export const features = [
    {
        id: 'education',
        iconSrc: '/assets/icons/lightbulb.png',
        title: {
            he: 'חינוך',
            en: 'Education'
        },
        description: {
            he: 'חידונים אינטראקטיביים ותוכן מעשיר שעוזרים להבין את ההשפעה הסביבתית של הבחירות היומיות שלנו',
            en: 'Interactive quizzes and enriching content that help understand the environmental impact of our daily choices'
        },
        color: 'green'
    },
    {
        id: 'awareness',
        iconSrc: '/assets/icons/recycle-heart.png',
        title: {
            he: 'מודעות',
            en: 'Awareness'
        },
        description: {
            he: 'הפיכת ההשפעה הבלתי נראית לגלויה - נתונים אמיתיים שמראים את העלות האמיתית של צריכה',
            en: 'Making the invisible impact visible - real data showing the true cost of consumption'
        },
        color: 'blue'
    },
    {
        id: 'action',
        iconSrc: '/assets/icons/checkmark.png',
        title: {
            he: 'פעולה',
            en: 'Action'
        },
        description: {
            he: 'טיפים מעשיים והמלצות שניתן ליישם מיד להפחתת טביעת הרגל הסביבתית',
            en: 'Practical tips and recommendations that can be implemented immediately to reduce environmental footprint'
        },
        color: 'magenta'
    }
];

// Quick facts for homepage
export const quickFacts = [
    {
        he: 'ייצור חולצת כותנה אחת דורש 2,700 ליטר מים',
        en: 'Producing one cotton t-shirt requires 2,700 liters of water',
        source: 'WWF'
    },
    {
        he: 'פחות מ-9% מהפלסטיק בעולם ממוחזר',
        en: 'Less than 9% of plastic worldwide is recycled',
        source: 'OECD'
    },
    {
        he: 'מזגנים אחראים ל-10% מצריכת החשמל העולמית',
        en: 'Air conditioning accounts for 10% of global electricity consumption',
        source: 'IEA'
    },
    {
        he: 'לוקח לבקבוק פלסטיק 450 שנה להתפרק',
        en: 'It takes a plastic bottle 450 years to decompose',
        source: 'NOAA'
    }
];

export default impactStats;
