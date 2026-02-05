// Press Kit Content - Bilingual data for PDF generation

export const brandGuidelinesContent = {
    metadata: {
        id: 'brand-guidelines',
        version: '1.0.0',
        author: 'EcoLogic'
    },
    title: {
        he: 'מדריך זהות מותג',
        en: 'Brand Identity Guidelines'
    },
    subtitle: {
        he: 'הנחיות לשימוש נכון בזהות הויזואלית שלנו',
        en: 'Guidelines for proper use of our visual identity'
    },
    intro: {
        he: 'מסמך זה מכיל את ההנחיות הרשמיות לשימוש בזהות הויזואלית של EcoLogic. אנא הקפידו לעקוב אחר ההנחיות כדי לשמור על עקביות המותג.',
        en: 'This document contains the official guidelines for using the EcoLogic visual identity. Please follow these guidelines to maintain brand consistency.'
    },
    sections: [
        {
            id: 'about',
            title: { he: 'אודות EcoLogic', en: 'About EcoLogic' },
            content: {
                he: 'EcoLogic היא עמותה ישראלית מחיפה, המספקת משאבי חינוך סביבתי חינמיים לבתי ספר, קהילות וארגונים ברחבי הארץ. המשימה שלנו: להעצים את הדור הבא לשמור על כדור הארץ דרך חינוך מעשי, ערכות שתילה, וסדנאות אינטראקטיביות.',
                en: 'EcoLogic is an Israeli non-profit based in Haifa, providing free environmental education resources to schools, communities, and organizations nationwide. Our mission: empowering the next generation to protect our planet through hands-on education, seedling kits, and interactive workshops.'
            },
            facts: [
                { label: { he: 'שנת הקמה', en: 'Founded' }, value: '2024' },
                { label: { he: 'מיקום', en: 'Location' }, value: { he: 'חיפה, ישראל', en: 'Haifa, Israel' } },
                { label: { he: 'סוג ארגון', en: 'Organization' }, value: { he: 'עמותה רשומה', en: 'Registered Non-profit' } },
                { label: { he: 'תחום', en: 'Focus' }, value: { he: 'חינוך סביבתי', en: 'Environmental Education' } }
            ]
        },
        {
            id: 'logo',
            title: { he: 'שימוש בלוגו', en: 'Logo Usage' },
            content: {
                he: 'הלוגו של EcoLogic הוא הסמל המרכזי של הארגון. יש להשתמש בו בעקביות בכל החומרים השיווקיים והחינוכיים.',
                en: 'The EcoLogic logo is the central symbol of our organization. It should be used consistently across all marketing and educational materials.'
            },
            guidelines: [
                {
                    type: 'do',
                    items: {
                        he: ['השתמשו בקבצי הלוגו הרשמיים בלבד', 'שמרו על יחס גובה-רוחב', 'השאירו מרווח נקי סביב הלוגו', 'השתמשו בגרסת הלוגו המתאימה לרקע'],
                        en: ['Use only official logo files', 'Maintain aspect ratio', 'Keep clear space around the logo', 'Use appropriate logo version for background']
                    }
                },
                {
                    type: 'dont',
                    items: {
                        he: ['אל תעוותו או תמתחו את הלוגו', 'אל תשנו את הצבעים', 'אל תוסיפו אפקטים כמו צל או זוהר', 'אל תציבו על רקע עמוס'],
                        en: ['Do not distort or stretch the logo', 'Do not change the colors', 'Do not add effects like shadows or glow', 'Do not place on busy backgrounds']
                    }
                }
            ],
            files: [
                { name: 'logo.svg', description: { he: 'וקטור - לשימוש דיגיטלי ודפוס', en: 'Vector - for digital and print use' } },
                { name: 'logo.png', description: { he: 'רסטר - לשימוש דיגיטלי', en: 'Raster - for digital use' } }
            ]
        },
        {
            id: 'typography',
            title: { he: 'טיפוגרפיה', en: 'Typography' },
            content: {
                he: 'הטיפוגרפיה שלנו משלבת גופנים מודרניים וקריאים התומכים גם בעברית וגם באנגלית.',
                en: 'Our typography combines modern, readable fonts that support both Hebrew and English.'
            },
            fonts: [
                {
                    name: 'Bebas Neue',
                    usage: { he: 'כותרות באנגלית', en: 'English Headlines' },
                    style: { he: 'אותיות גדולות, Bold', en: 'Uppercase, Bold' }
                },
                {
                    name: 'Heebo',
                    usage: { he: 'כותרות וגוף בעברית', en: 'Hebrew Headlines & Body' },
                    style: { he: 'משקל 700 לכותרות, 400 לגוף', en: 'Weight 700 for headlines, 400 for body' }
                },
                {
                    name: 'Inter',
                    usage: { he: 'גוף באנגלית', en: 'English Body Text' },
                    style: { he: 'משקל 400-600', en: 'Weight 400-600' }
                }
            ]
        },
        {
            id: 'colors',
            title: { he: 'פלטת הצבעים', en: 'Color Palette' },
            content: {
                he: 'הצבעים שלנו נבחרו לשקף את הקשר לטבע תוך שמירה על מראה מודרני ונגיש.',
                en: 'Our colors were chosen to reflect our connection to nature while maintaining a modern, accessible look.'
            }
        },
        {
            id: 'imagery',
            title: { he: 'דימויים ותמונות', en: 'Imagery' },
            content: {
                he: 'הסגנון הויזואלי שלנו כולל איורים בצבעי מים, צילומי טבע אותנטיים, ופרסונות מאוירות.',
                en: 'Our visual style includes watercolor illustrations, authentic nature photography, and illustrated personas.'
            },
            guidelines: {
                he: [
                    'העדיפו תמונות טבעיות ואותנטיות',
                    'השתמשו באיורי הפרסונות שלנו לתקשורת ידידותית',
                    'שמרו על איכות גבוהה בכל הדימויים',
                    'וודאו שהתמונות תומכות במסר החינוכי'
                ],
                en: [
                    'Prefer natural, authentic images',
                    'Use our persona illustrations for friendly communication',
                    'Maintain high quality in all imagery',
                    'Ensure images support the educational message'
                ]
            }
        }
    ],
    contact: {
        email: 'press@ecologic.org.il',
        website: 'ecologic.org.il'
    }
};

export const colorPaletteContent = {
    metadata: {
        id: 'color-palette',
        version: '1.0.0'
    },
    title: {
        he: 'פלטת צבעי המותג',
        en: 'Brand Color Palette'
    },
    subtitle: {
        he: 'צבעים רשמיים עם קודים לשימוש דיגיטלי ודפוס',
        en: 'Official colors with codes for digital and print use'
    },
    intro: {
        he: 'השתמשו בצבעים אלה בלבד בכל החומרים הקשורים ל-EcoLogic כדי לשמור על עקביות המותג.',
        en: 'Use only these colors in all EcoLogic-related materials to maintain brand consistency.'
    },
    primaryColors: [
        {
            name: 'Green',
            hex: '#1D7C5A',
            rgb: 'rgb(29, 124, 90)',
            cmyk: 'C77 M0 Y27 K51',
            usage: { he: 'צבע ראשי - לוגו, כפתורים, הדגשות', en: 'Primary - logo, buttons, accents' }
        },
        {
            name: 'Magenta',
            hex: '#FF2D7A',
            rgb: 'rgb(255, 45, 122)',
            cmyk: 'C0 M82 Y52 K0',
            usage: { he: 'הדגשה - קריאות לפעולה, קישורים', en: 'Accent - CTAs, links, highlights' }
        },
        {
            name: 'Graphite',
            hex: '#111111',
            rgb: 'rgb(17, 17, 17)',
            cmyk: 'C0 M0 Y0 K93',
            usage: { he: 'טקסט - כותרות וגוף', en: 'Text - headlines and body copy' }
        }
    ],
    secondaryColors: [
        {
            name: 'Paper',
            hex: '#F3F1EA',
            rgb: 'rgb(243, 241, 234)',
            cmyk: 'C0 M1 Y4 K5',
            usage: { he: 'רקע ראשי', en: 'Primary background' }
        },
        {
            name: 'Sand',
            hex: '#E8DFD0',
            rgb: 'rgb(232, 223, 208)',
            cmyk: 'C0 M4 Y10 K9',
            usage: { he: 'רקע משני, כרטיסים', en: 'Secondary background, cards' }
        },
        {
            name: 'Sage',
            hex: '#7A9E7E',
            rgb: 'rgb(122, 158, 126)',
            cmyk: 'C23 M0 Y20 K38',
            usage: { he: 'הדגשה ירוקה משנית', en: 'Secondary green accent' }
        },
        {
            name: 'Gray',
            hex: '#C7C2B6',
            rgb: 'rgb(199, 194, 182)',
            cmyk: 'C0 M3 Y9 K22',
            usage: { he: 'גבולות, אלמנטים עדינים', en: 'Borders, subtle elements' }
        },
        {
            name: 'Blue',
            hex: '#2F6BFF',
            rgb: 'rgb(47, 107, 255)',
            cmyk: 'C82 M58 Y0 K0',
            usage: { he: 'קישורים, מצב פוקוס', en: 'Links, focus states' }
        }
    ]
};

export const mediaAssetsManifest = {
    categories: [
        {
            id: 'logos',
            title: { he: 'לוגואים', en: 'Logos' },
            files: [
                { name: 'logo.svg', path: '/assets/logo/logo.svg', size: '~10KB' },
                { name: 'logo.png', path: '/assets/logo/logo.webp', size: '~50KB' }
            ]
        },
        {
            id: 'heroes',
            title: { he: 'תמונות גיבור', en: 'Hero Images' },
            files: [
                { name: 'hero-main.png', path: '/assets/images/hero-main.webp', size: '~1MB' },
                { name: 'hero-forest.png', path: '/assets/images/hero-forest.webp', size: '~3MB' },
                { name: 'hero-illustrated.png', path: '/assets/images/hero-illustrated.webp', size: '~1MB' }
            ]
        },
        {
            id: 'personas',
            title: { he: 'פרסונות', en: 'Personas' },
            files: [
                { name: 'persona-thinking.png', path: '/assets/personas/persona-thinking.webp', size: '~800KB' },
                { name: 'persona-celebration.png', path: '/assets/personas/persona-celebration.webp', size: '~700KB' },
                { name: 'persona-modal-guide.png', path: '/assets/personas/persona-modal-guide.webp', size: '~700KB' },
                { name: 'persona-teacher-welcome.png', path: '/assets/personas/persona-teacher-welcome.webp', size: '~100KB' },
                { name: 'persona-teacher-pointing.png', path: '/assets/personas/persona-teacher-pointing.webp', size: '~130KB' },
                { name: 'persona-teacher-reading.png', path: '/assets/personas/persona-teacher-reading.webp', size: '~240KB' }
            ]
        },
        {
            id: 'social',
            title: { he: 'סושיאל מדיה', en: 'Social Media' },
            files: [
                { name: 'social-post-1.jpg', path: '/assets/images/social-post-1.webp', size: '~160KB' },
                { name: 'social-post-2.jpg', path: '/assets/images/social-post-2.webp', size: '~190KB' },
                { name: 'billboard.jpg', path: '/assets/images/billboard.webp', size: '~380KB' }
            ]
        },
        {
            id: 'products',
            title: { he: 'מוצרים', en: 'Products' },
            files: [
                { name: 'curriculum-cards.png', path: '/assets/images/products/curriculum-cards.webp', size: '~900KB' },
                { name: 'notebook.png', path: '/assets/images/products/notebook.webp', size: '~1MB' },
                { name: 'sprout-kit-box.png', path: '/assets/images/products/sprout-kit-box.webp', size: '~730KB' },
                { name: 'sprout-kit-full.png', path: '/assets/images/products/sprout-kit-full.webp', size: '~860KB' },
                { name: 'tree-kit-box.png', path: '/assets/images/products/tree-kit-box.webp', size: '~800KB' },
                { name: 'tree-kit-full.png', path: '/assets/images/products/tree-kit-full.webp', size: '~910KB' }
            ]
        }
    ]
};
