// Quiz questions data - bilingual (Hebrew primary, English)
// All facts are based on real environmental research data

export const questions = [
    {
        id: 1,
        topic: 'water',
        iconSrc: '/assets/icons/leaf.webp',
        question: {
            he: 'מה דורש יותר מים לייצור?',
            en: 'Which uses more water to produce?'
        },
        options: [
            { id: 'a', label: { he: '1 ק"ג בשר בקר', en: '1 KG of Beef' }, value: 15400, unit: { he: 'ליטר', en: 'Liters' } },
            { id: 'b', label: { he: '1 ק"ג אורז', en: '1 KG of Rice' }, value: 2500, unit: { he: 'ליטר', en: 'Liters' } },
            { id: 'c', label: { he: '1 ק"ג עוף', en: '1 KG of Chicken' }, value: 4325, unit: { he: 'ליטר', en: 'Liters' } }
        ],
        correctId: 'a',
        fact: {
            he: '1 ק"ג בשר בקר דורש 15,400 ליטר מים. זה כמו 6 חודשים של מקלחות!',
            en: '1 kg of beef requires 15,400 Liters of water. That\'s 6 months of showers!'
        },
        source: 'waterfootprint.org'
    },
    {
        id: 2,
        topic: 'water',
        iconSrc: '/assets/icons/leaf.webp',
        question: {
            he: 'כמה ליטר מים נדרשים לייצור ג\'ינס אחד?',
            en: 'How many liters of water are needed to produce one pair of jeans?'
        },
        options: [
            { id: 'a', label: { he: '500 ליטר', en: '500 Liters' }, value: 500 },
            { id: 'b', label: { he: '2,000 ליטר', en: '2,000 Liters' }, value: 2000 },
            { id: 'c', label: { he: '7,500 ליטר', en: '7,500 Liters' }, value: 7500 }
        ],
        correctId: 'c',
        fact: {
            he: 'ייצור ג\'ינס אחד דורש כ-7,500 ליטר מים - מגידול הכותנה ועד הצביעה. זה יותר ממה שאדם שותה ב-7 שנים!',
            en: 'Producing one pair of jeans requires about 7,500 liters of water - from growing cotton to dyeing. That\'s more than a person drinks in 7 years!'
        },
        source: 'UN Environment Programme'
    },
    {
        id: 3,
        topic: 'carbon',
        iconSrc: '/assets/icons/globe.webp',
        question: {
            he: 'איזה אמצעי תחבורה פולט הכי הרבה CO2 לנוסע לקילומטר?',
            en: 'Which mode of transport emits the most CO2 per passenger per kilometer?'
        },
        options: [
            { id: 'a', label: { he: 'מטוס', en: 'Airplane' }, value: 255 },
            { id: 'b', label: { he: 'רכב פרטי', en: 'Private Car' }, value: 171 },
            { id: 'c', label: { he: 'רכבת', en: 'Train' }, value: 41 }
        ],
        correctId: 'a',
        fact: {
            he: 'מטוס פולט כ-255 גרם CO2 לנוסע לק"מ, פי 6 יותר מרכבת! טיסה לאירופה פולטת כטונה CO2 לנוסע.',
            en: 'A plane emits about 255g CO2 per passenger per km, 6 times more than a train! A flight to Europe emits about 1 ton of CO2 per passenger.'
        },
        source: 'European Environment Agency'
    },
    {
        id: 4,
        topic: 'carbon',
        iconSrc: '/assets/icons/leaf.webp',
        question: {
            he: 'כמה עצים צריכים לגדול שנה שלמה כדי לספוג את הפליטות של טיסה לאירופה?',
            en: 'How many trees need to grow for a full year to absorb emissions from one flight to Europe?'
        },
        options: [
            { id: 'a', label: { he: '10 עצים', en: '10 Trees' }, value: 10 },
            { id: 'b', label: { he: '50 עצים', en: '50 Trees' }, value: 50 },
            { id: 'c', label: { he: '150 עצים', en: '150 Trees' }, value: 150 }
        ],
        correctId: 'b',
        fact: {
            he: 'עץ בוגר סופג כ-20 ק"ג CO2 בשנה. טיסה לאירופה פולטת כטונה CO2, כך ש-50 עצים צריכים לעבוד שנה כדי לקזז את הטיסה.',
            en: 'A mature tree absorbs about 20kg of CO2 per year. A flight to Europe emits about 1 ton of CO2, so 50 trees need to work for a year to offset one flight.'
        },
        source: 'Arbor Day Foundation'
    },
    {
        id: 5,
        topic: 'food',
        iconSrc: '/assets/icons/recycle-heart.webp',
        question: {
            he: 'מה טביעת הרגל הפחמנית הגבוהה ביותר?',
            en: 'Which has the highest carbon footprint?'
        },
        options: [
            { id: 'a', label: { he: '1 ק"ג בשר בקר', en: '1 KG of Beef' }, value: 60 },
            { id: 'b', label: { he: '1 ק"ג גבינה', en: '1 KG of Cheese' }, value: 21 },
            { id: 'c', label: { he: '1 ק"ג ירקות', en: '1 KG of Vegetables' }, value: 2 }
        ],
        correctId: 'a',
        fact: {
            he: 'ייצור ק"ג בשר בקר פולט כ-60 ק"ג CO2 - פי 30 יותר מירקות! תעשיית הבשר אחראית ל-14.5% מפליטות גזי החממה בעולם.',
            en: 'Producing 1kg of beef emits about 60kg of CO2 - 30 times more than vegetables! The meat industry is responsible for 14.5% of global greenhouse gas emissions.'
        },
        source: 'Our World in Data'
    },
    {
        id: 6,
        topic: 'food',
        iconSrc: '/assets/icons/recycle-heart.webp',
        question: {
            he: 'כמה מכל המזון שמיוצר בעולם מבוזבז מדי שנה?',
            en: 'How much of all food produced globally is wasted each year?'
        },
        options: [
            { id: 'a', label: { he: '10%', en: '10%' }, value: 10 },
            { id: 'b', label: { he: '20%', en: '20%' }, value: 20 },
            { id: 'c', label: { he: 'שליש (33%)', en: 'One Third (33%)' }, value: 33 }
        ],
        correctId: 'c',
        fact: {
            he: 'שליש מכל המזון בעולם נזרק - כ-1.3 מיליארד טון בשנה! אם בזבוז המזון היה מדינה, היא הייתה פולטת שלישית הכי הרבה גזי חממה.',
            en: 'One third of all food globally is thrown away - about 1.3 billion tons per year! If food waste were a country, it would be the third largest emitter of greenhouse gases.'
        },
        source: 'FAO - United Nations'
    },
    {
        id: 7,
        topic: 'energy',
        iconSrc: '/assets/icons/lightbulb.webp',
        question: {
            he: 'כמה אנרגיה חוסכת נורת LED לעומת נורת ליבון?',
            en: 'How much energy does an LED bulb save compared to an incandescent bulb?'
        },
        options: [
            { id: 'a', label: { he: '50%', en: '50%' }, value: 50 },
            { id: 'b', label: { he: '75%', en: '75%' }, value: 75 },
            { id: 'c', label: { he: '90%', en: '90%' }, value: 90 }
        ],
        correctId: 'c',
        fact: {
            he: 'נורת LED חוסכת עד 90% אנרגיה ומחזיקה פי 25 יותר מנורת ליבון. החלפת כל הנורות בבית ל-LED יכולה לחסוך עד 1,000 ש"ח בשנה!',
            en: 'LED bulbs save up to 90% energy and last 25 times longer than incandescent bulbs. Replacing all bulbs at home with LED can save up to $300 per year!'
        },
        source: 'US Department of Energy'
    },
    {
        id: 8,
        topic: 'energy',
        iconSrc: '/assets/icons/lightbulb.webp',
        question: {
            he: 'מה צורך הכי הרבה חשמל בבית ממוצע בישראל?',
            en: 'What consumes the most electricity in an average home?'
        },
        options: [
            { id: 'a', label: { he: 'מקרר', en: 'Refrigerator' }, value: 15 },
            { id: 'b', label: { he: 'מזגן', en: 'Air Conditioner' }, value: 40 },
            { id: 'c', label: { he: 'טלוויזיה', en: 'Television' }, value: 5 }
        ],
        correctId: 'b',
        fact: {
            he: 'מיזוג אוויר אחראי לכ-40% מצריכת החשמל הביתית בישראל! כל מעלה בטמפרטורה במזגן מייצרת עלייה של 3% בצריכה.',
            en: 'Air conditioning is responsible for about 40% of home electricity consumption! Each degree increase in AC temperature results in a 3% increase in consumption.'
        },
        source: 'Israel Electric Corporation'
    },
    {
        id: 9,
        topic: 'waste',
        iconSrc: '/assets/icons/recycle-heart.webp',
        question: {
            he: 'כמה שנים לוקח לבקבוק פלסטיק להתפרק בטבע?',
            en: 'How many years does it take for a plastic bottle to decompose in nature?'
        },
        options: [
            { id: 'a', label: { he: '50 שנה', en: '50 Years' }, value: 50 },
            { id: 'b', label: { he: '200 שנה', en: '200 Years' }, value: 200 },
            { id: 'c', label: { he: '450 שנה', en: '450 Years' }, value: 450 }
        ],
        correctId: 'c',
        fact: {
            he: 'בקבוק פלסטיק לוקח עד 450 שנה להתפרק! מדי דקה, מיליון בקבוקות פלסטיק נקנים ברחבי העולם.',
            en: 'A plastic bottle takes up to 450 years to decompose! Every minute, one million plastic bottles are purchased worldwide.'
        },
        source: 'National Geographic'
    },
    {
        id: 10,
        topic: 'waste',
        iconSrc: '/assets/icons/recycle-heart.webp',
        question: {
            he: 'כמה אחוז מכל הפלסטיק שיוצר אי פעם ממוחזר בפועל?',
            en: 'What percentage of all plastic ever produced has actually been recycled?'
        },
        options: [
            { id: 'a', label: { he: '9%', en: '9%' }, value: 9 },
            { id: 'b', label: { he: '25%', en: '25%' }, value: 25 },
            { id: 'c', label: { he: '50%', en: '50%' }, value: 50 }
        ],
        correctId: 'a',
        fact: {
            he: 'רק 9% מכל הפלסטיק שיוצר אי פעם מוחזר! 12% נשרף ו-79% מצטבר בטבע או במזבלות. מחזור באמת עובד רק אם עושים אותו נכון.',
            en: 'Only 9% of all plastic ever produced has been recycled! 12% has been incinerated and 79% accumulates in nature or landfills. Recycling only works if done correctly.'
        },
        source: 'Science Advances Journal'
    }
];

// Helper function to get questions by topic
export const getQuestionsByTopic = (topic) => {
    return questions.filter(q => q.topic === topic);
};

// Get unique topics
export const getTopics = () => {
    return [...new Set(questions.map(q => q.topic))];
};

// Topic metadata
export const topicInfo = {
    water: {
        name: { he: 'מים', en: 'Water' },
        iconSrc: '/assets/icons/leaf.webp',
        color: 'blue'
    },
    carbon: {
        name: { he: 'פחמן', en: 'Carbon' },
        iconSrc: '/assets/icons/globe.webp',
        color: 'gray'
    },
    food: {
        name: { he: 'מזון', en: 'Food' },
        iconSrc: '/assets/icons/recycle-heart.webp',
        color: 'green'
    },
    energy: {
        name: { he: 'אנרגיה', en: 'Energy' },
        iconSrc: '/assets/icons/lightbulb.webp',
        color: 'yellow'
    },
    waste: {
        name: { he: 'פסולת', en: 'Waste' },
        iconSrc: '/assets/icons/recycle-heart.webp',
        color: 'magenta'
    }
};

export default questions;
