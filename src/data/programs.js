// Educational programs and packages data - bilingual (Hebrew/English)

export const programs = [
    {
        id: 'seed',
        tier: 'free',
        icon: 'seedling',
        name: {
            he: 'זרע',
            en: 'Seed'
        },
        tagline: {
            he: 'התחל את המסע הסביבתי שלך',
            en: 'Start your environmental journey'
        },
        price: 0,
        currency: 'ILS',
        features: {
            he: [
                'מדריכי PDF להורדה חינם',
                'אינפוגרפיקות ודפי עובדות',
                'גישה לחידון האינטראקטיבי',
                'עדכונים בניוזלטר'
            ],
            en: [
                'Free downloadable PDF guides',
                'Infographics and fact sheets',
                'Access to interactive quiz',
                'Newsletter updates'
            ]
        },
        cta: {
            he: 'הורד עכשיו',
            en: 'Download Now'
        },
        highlighted: false
    },
    {
        id: 'sprout',
        tier: 'basic',
        icon: 'sprout',
        name: {
            he: 'נבט',
            en: 'Sprout'
        },
        tagline: {
            he: 'חבילת סדנאות מוכנה',
            en: 'Ready-made workshop bundle'
        },
        price: 299,
        currency: 'ILS',
        features: {
            he: [
                'כל מה שב״זרע״ +',
                'תכנית לימודים מלאה (10 מפגשים)',
                'פעילויות מעשיות ומשחקים',
                'מצגות מוכנות למורים',
                'תעודת השתתפות'
            ],
            en: [
                'Everything in Seed +',
                'Complete curriculum (10 sessions)',
                'Hands-on activities and games',
                'Ready-made presentations for teachers',
                'Certificate of participation'
            ]
        },
        cta: {
            he: 'הזמן עכשיו',
            en: 'Order Now'
        },
        highlighted: false
    },
    {
        id: 'tree',
        tier: 'premium',
        icon: 'tree',
        name: {
            he: 'עץ',
            en: 'Tree'
        },
        tagline: {
            he: 'החבילה המלאה עם מוצרים',
            en: 'Full program with merchandise'
        },
        price: 899,
        currency: 'ILS',
        features: {
            he: [
                'כל מה שב״נבט״ +',
                'סדנה חיה (מקוונת או פרונטלית)',
                'ערכת מרצ\'נדייז ממוחזר',
                'תמיכה שוטפת ועדכוני תוכן',
                'אישור לשימוש בלוגו EcoLogic'
            ],
            en: [
                'Everything in Sprout +',
                'Live workshop (online or in-person)',
                'Recycled merchandise kit',
                'Ongoing support and content updates',
                'Permission to use EcoLogic logo'
            ]
        },
        cta: {
            he: 'הזמן עכשיו',
            en: 'Order Now'
        },
        highlighted: true,
        badge: {
            he: 'הכי פופולרי',
            en: 'Most Popular'
        }
    },
    {
        id: 'forest',
        tier: 'enterprise',
        icon: 'forest',
        name: {
            he: 'יער',
            en: 'Forest'
        },
        tagline: {
            he: 'פתרון מותאם למוסדות',
            en: 'Custom solution for institutions'
        },
        price: null,
        currency: 'ILS',
        features: {
            he: [
                'תכנית לימודים מותאמת אישית',
                'הרצאות והדרכות באתר',
                'הכשרת צוות מורים',
                'מרצ\'נדייז ממותג',
                'דוחות השפעה ומעקב'
            ],
            en: [
                'Custom curriculum design',
                'On-site lectures and training',
                'Teacher staff training',
                'Branded merchandise',
                'Impact reports and tracking'
            ]
        },
        cta: {
            he: 'צור קשר',
            en: 'Contact Us'
        },
        highlighted: false
    }
];

export const freeResources = [
    {
        id: 'water-guide',
        title: {
            he: 'מדריך חיסכון במים',
            en: 'Water Saving Guide'
        },
        description: {
            he: '12 עמודים של טיפים מעשיים לחיסכון במים בבית ובבית הספר',
            en: '12 pages of practical tips for saving water at home and school'
        },
        type: 'water',
        format: 'PDF',
        pages: 12,
        downloadUrl: '/assets/downloads/water-guide.pdf'
    },
    {
        id: 'classroom-activities',
        title: {
            he: 'פעילויות לכיתה',
            en: 'Classroom Activities'
        },
        description: {
            he: '5 פעילויות מוכנות ללמידה חווייתית על קיימות',
            en: '5 ready-to-use activities for experiential learning about sustainability'
        },
        type: 'activities',
        format: 'PDF',
        pages: 20,
        downloadUrl: '/assets/downloads/classroom-activities.pdf'
    },
    {
        id: 'infographics-pack',
        title: {
            he: 'חבילת אינפוגרפיקות',
            en: 'Infographics Pack'
        },
        description: {
            he: '8 אינפוגרפיקות צבעוניות על סביבה ואקולוגיה',
            en: '8 colorful infographics on environment and ecology'
        },
        type: 'infographics',
        format: 'PNG',
        pages: 8,
        downloadUrl: '/assets/downloads/infographics-pack.webp'
    },
    {
        id: 'teacher-quickstart',
        title: {
            he: 'מדריך מהיר למורים',
            en: "Teacher's Quick-Start"
        },
        description: {
            he: 'כל מה שצריך כדי להתחיל ללמד קיימות ביום אחד',
            en: 'Everything you need to start teaching sustainability in one day'
        },
        type: 'guide',
        format: 'PDF',
        pages: 6,
        downloadUrl: '/assets/downloads/teacher-quickstart.pdf'
    },
    {
        id: 'seedling-starter',
        title: {
            he: 'ערכת שתיל להתחלה',
            en: 'Seedling Starter Pack'
        },
        description: {
            he: 'מדריך מלא לגידול שתיל ראשון עם הילדים - כולל טיפים, לוח זמנים ופעילויות',
            en: 'Complete guide to growing your first seedling with kids - includes tips, timeline and activities'
        },
        type: 'seedling',
        format: 'PDF',
        pages: 8,
        downloadUrl: '/assets/downloads/seedling-starter.pdf',
        image: '/assets/images/starter-seedling.webp'
    }
];

export const collaborationOptions = [
    {
        id: 'invite-teach',
        icon: 'lightbulb',
        title: {
            he: 'הזמינו אותנו ללמד',
            en: 'Invite Us to Teach'
        },
        description: {
            he: 'נגיע לבית הספר, הארגון או הקהילה שלכם עם סדנאות מותאמות',
            en: 'We\'ll come to your school, organization or community with tailored workshops'
        }
    },
    {
        id: 'custom-curriculum',
        icon: 'book',
        title: {
            he: 'בקשו תכנית מותאמת',
            en: 'Request Custom Curriculum'
        },
        description: {
            he: 'נבנה יחד תכנית לימודים שמתאימה בדיוק לצרכים שלכם',
            en: 'We\'ll build a curriculum together that fits your exact needs'
        }
    },
    {
        id: 'ambassador',
        icon: 'globe',
        title: {
            he: 'הפכו לשגרירים',
            en: 'Become an Ambassador'
        },
        description: {
            he: 'הצטרפו לרשת המתנדבים שלנו והפיצו את המסר בקהילה שלכם',
            en: 'Join our volunteer network and spread the message in your community'
        }
    },
    {
        id: 'donate',
        icon: 'heart',
        title: {
            he: 'תרמו לחינוך',
            en: 'Donate to Education'
        },
        description: {
            he: 'תרומתכם מאפשרת לנו לספק משאבים חינם לקהילות שזקוקות',
            en: 'Your donation enables us to provide free resources to communities in need'
        }
    }
];

export default programs;
