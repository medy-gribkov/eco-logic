// Merchandise products data - bilingual (Hebrew/English)

export const products = [
    {
        id: 13,
        name: {
            he: 'כרטיסיות לימוד תכנית',
            en: 'Curriculum Cards'
        },
        description: {
            he: 'כרטיסיות לימוד צבעוניות לחינוך סביבתי - מושלם למורים',
            en: 'Colorful educational cards for environmental education - perfect for teachers'
        },
        price: 79,
        currency: 'ILS',
        image: '/assets/images/products/curriculum-cards.webp',
        category: 'educational',
        featured: true
    },
    {
        id: 14,
        name: {
            he: 'ערכת נבט - קופסה',
            en: 'Sprout Kit Box'
        },
        description: {
            he: 'ערכת גידול מלאה בקופסה מעוצבת - כל מה שצריך להתחיל לגדל',
            en: 'Complete growing kit in designed box - everything you need to start growing'
        },
        price: 149,
        currency: 'ILS',
        image: '/assets/images/products/sprout-kit-box.webp',
        category: 'garden',
        featured: true
    },
    {
        id: 15,
        name: {
            he: 'ערכת עץ - קופסה',
            en: 'Tree Kit Box'
        },
        description: {
            he: 'ערכת שתילת עציץ מלאה עם הכל - לשתול עץ יחד',
            en: 'Complete tree planting kit with everything - plant a tree together'
        },
        price: 199,
        currency: 'ILS',
        image: '/assets/images/products/tree-kit-box.webp',
        category: 'garden',
        featured: true
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
        image: '/assets/images/starter-seedling.webp',
        category: 'garden',
        featured: true
    },
    {
        id: 8,
        name: {
            he: 'סט סכו"ם מבמבוק',
            en: 'Bamboo Cutlery Set'
        },
        description: {
            he: 'סט רב פעמי לנסיעות - מזלג, סכין, כף וקשית',
            en: 'Reusable travel set - fork, knife, spoon & straw'
        },
        price: 45,
        currency: 'ILS',
        image: '/assets/images/products/bamboo-cutlery-set.webp',
        category: 'accessories',
        featured: false,
        colors: ['natural']
    },
    {
        id: 9,
        name: {
            he: 'מטען נייד סולארי',
            en: 'Solar Power Bank'
        },
        description: {
            he: 'סוללת גיבוי נטענת מהשמש - אנרגיה נקייה בכל מקום',
            en: 'Solar rechargeable backup battery - clean energy everywhere'
        },
        price: 129,
        currency: 'ILS',
        image: '/assets/images/merch.webp',
        category: 'gadgets',
        featured: true,
        colors: ['black', 'green']
    },
    {
        id: 10,
        name: {
            he: 'קפוצ\'ון כותנה אורגנית',
            en: 'Organic Cotton Hoodie'
        },
        description: {
            he: 'קפוצ\'ון נעים ומחמם, ייצור הוגן',
            en: 'Cozy and warm hoodie, fair trade production'
        },
        price: 149,
        currency: 'ILS',
        image: '/assets/images/products/organic-hoodie.webp',
        category: 'clothing',
        featured: false,
        colors: ['sage', 'black', 'navy'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 11,
        name: {
            he: 'מלון לדבורים יחידאיות',
            en: 'Solitary Bee Hotel'
        },
        description: {
            he: 'בית גידול קטן למאביקים - עזרו לטבע בעיר',
            en: 'Small habitat for pollinators - help nature in the city'
        },
        price: 85,
        currency: 'ILS',
        image: '/assets/images/products/sprout-kit-full.webp',
        category: 'garden',
        featured: true
    },
    {
        id: 12,
        name: {
            he: 'כוס קפה רב פעמית',
            en: 'Reusable Coffee Cup'
        },
        description: {
            he: 'כוס סיבי במבוק עם מכסה סיליקון - ללא פלסטיק',
            en: 'Bamboo fiber cup with silicone lid - plastic free'
        },
        price: 45,
        currency: 'ILS',
        image: '/assets/images/products/coffee-cup.webp',
        category: 'accessories',
        featured: false,
        colors: ['natural', 'pink', 'blue']
    },
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
        image: '/assets/images/products/tshirt.webp',
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
        image: '/assets/images/products/tote-bag.webp',
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
        image: '/assets/images/products/water-bottle.webp',
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
        image: '/assets/images/products/cap.webp',
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
        image: '/assets/images/products/notebook.webp',
        category: 'stationery',
        featured: true,
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
        image: '/assets/images/products/sticker-pack.webp',
        category: 'accessories',
        featured: false
    }
];

// Helper functions
export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category) => products.filter(p => p.category === category);

export const getCategories = () => [...new Set(products.map(p => p.category))];

export default products;
