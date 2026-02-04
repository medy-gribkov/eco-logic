// Merchandise products data - bilingual (Hebrew/English)

export const products = [
    {
        id: 1,
        name: {
            he: 'חולצת EcoLogic',
            en: 'EcoLogic T-Shirt'
        },
        description: {
            he: 'חולצת כותנה אורגנית עם הדפס הלוגו',
            en: 'Organic cotton t-shirt with logo print'
        },
        price: 89,
        currency: 'ILS',
        image: '/assets/images/merch.png',
        category: 'clothing',
        featured: true,
        colors: ['white', 'green', 'black'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: {
            he: 'תיק בד אקולוגי',
            en: 'Eco Tote Bag'
        },
        description: {
            he: 'תיק בד רב פעמי - אמירה סביבתית',
            en: 'Reusable canvas bag - environmental statement'
        },
        price: 49,
        currency: 'ILS',
        image: '/assets/images/merch-updated.png',
        category: 'accessories',
        featured: true,
        colors: ['natural', 'green']
    },
    {
        id: 3,
        name: {
            he: 'בקבוק מים רב פעמי',
            en: 'Reusable Water Bottle'
        },
        description: {
            he: 'בקבוק נירוסטה 500 מ"ל - שומר חום וקור',
            en: '500ml stainless steel - keeps hot and cold'
        },
        price: 79,
        currency: 'ILS',
        image: '/assets/images/merch.png',
        category: 'accessories',
        featured: true,
        colors: ['silver', 'green', 'black']
    },
    {
        id: 4,
        name: {
            he: 'כובע EcoLogic',
            en: 'EcoLogic Cap'
        },
        description: {
            he: 'כובע מצחייה מכותנה אורגנית',
            en: 'Organic cotton baseball cap'
        },
        price: 59,
        currency: 'ILS',
        image: '/assets/images/merch-updated.png',
        category: 'clothing',
        featured: false,
        colors: ['green', 'white', 'black']
    },
    {
        id: 5,
        name: {
            he: 'מחברת ממוחזרת',
            en: 'Recycled Notebook'
        },
        description: {
            he: 'מחברת A5 מנייר ממוחזר 100%',
            en: 'A5 notebook from 100% recycled paper'
        },
        price: 35,
        currency: 'ILS',
        image: '/assets/images/merch.png',
        category: 'stationery',
        featured: false,
        colors: ['natural']
    },
    {
        id: 6,
        name: {
            he: 'סט מדבקות',
            en: 'Sticker Pack'
        },
        description: {
            he: '10 מדבקות סביבתיות - הפיצו את המסר',
            en: '10 eco stickers - spread the message'
        },
        price: 25,
        currency: 'ILS',
        image: '/assets/images/merch-updated.png',
        category: 'accessories',
        featured: false
    },
    {
        id: 7,
        name: {
            he: 'ערכת שתיל התחלתית',
            en: 'Starter Seedling Kit'
        },
        description: {
            he: 'ערכת גידול עם עציץ ושתיל - התחילו לגדל ירוק',
            en: 'Growing kit with pot and seedling - start growing green'
        },
        price: 45,
        currency: 'ILS',
        image: '/assets/images/starter-seedling.png',
        category: 'garden',
        featured: true
    }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category) => products.filter(p => p.category === category);

export const getCategories = () => [...new Set(products.map(p => p.category))];

export default products;
