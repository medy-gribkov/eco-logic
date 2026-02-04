import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Cpu,
    Wrench,
    AlertTriangle,
    Clock,
    Search,
    Palette,
    Code,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Users,
    MessageSquare,
    Scale,
    ExternalLink,
    Lightbulb,
    Target,
    Sparkles,
    BookOpen,
    PenTool,
    Monitor,
    TestTube,
} from 'lucide-react';
import Card from '../components/ui/Card';
import { useLanguage } from '../i18n';

const Process = () => {
    const { language, isRTL } = useLanguage();
    const [expandedPrompt, setExpandedPrompt] = useState(null);

    // Timeline phases
    const timelinePhases = [
        {
            icon: Search,
            title: language === 'he' ? 'מחקר' : 'Research',
            duration: language === 'he' ? 'שלב 1' : 'Phase 1',
            description: language === 'he'
                ? 'מחקר קהל יעד, ניתוח מתחרים, הגדרת הבעיה הסביבתית'
                : 'Target audience research, competitor analysis, defining the environmental problem',
            color: 'blue',
        },
        {
            icon: Palette,
            title: language === 'he' ? 'עיצוב' : 'Design',
            duration: language === 'he' ? 'שלב 2' : 'Phase 2',
            description: language === 'he'
                ? 'יצירת קונספט, wireframes, עיצוב ויזואלי, בחירת צבעים וטיפוגרפיה'
                : 'Concept creation, wireframes, visual design, color & typography selection',
            color: 'green',
        },
        {
            icon: Code,
            title: language === 'he' ? 'פיתוח' : 'Development',
            duration: language === 'he' ? 'שלב 3' : 'Phase 3',
            description: language === 'he'
                ? 'בניית קומפוננטות, אינטגרציית AI, responsive design, נגישות'
                : 'Component building, AI integration, responsive design, accessibility',
            color: 'magenta',
        },
        {
            icon: TestTube,
            title: language === 'he' ? 'בדיקות' : 'Testing',
            duration: language === 'he' ? 'שלב 4' : 'Phase 4',
            description: language === 'he'
                ? 'בדיקות משתמשים, תיקון באגים, אופטימיזציה, בדיקות נגישות'
                : 'User testing, bug fixes, optimization, accessibility testing',
            color: 'blue',
        },
    ];

    // Expanded tools list
    const tools = [
        {
            name: 'Figma',
            purpose: language === 'he' ? 'עיצוב ממשק ופרוטוטייפ' : 'UI design & prototyping',
            category: 'design',
            icon: PenTool,
        },
        {
            name: 'Claude AI',
            purpose: language === 'he' ? 'יצירת קוד React ו-Tailwind' : 'React & Tailwind code generation',
            category: 'ai',
            icon: Cpu,
        },
        {
            name: 'Gemini',
            purpose: language === 'he' ? 'יצירת תמונות מרצ\'נדייז' : 'Merchandise image generation',
            category: 'ai',
            icon: Sparkles,
        },
        {
            name: 'ChatGPT + DALL-E',
            purpose: language === 'he' ? 'יצירת תמונות רקע ואייקונים' : 'Background & icon generation',
            category: 'ai',
            icon: Sparkles,
        },
        {
            name: 'React 19',
            purpose: language === 'he' ? 'ספריית UI' : 'UI library',
            category: 'dev',
            icon: Code,
        },
        {
            name: 'Vite',
            purpose: language === 'he' ? 'כלי בנייה מהיר' : 'Fast build tool',
            category: 'dev',
            icon: Code,
        },
        {
            name: 'Tailwind CSS',
            purpose: language === 'he' ? 'עיצוב CSS utility-first' : 'Utility-first CSS',
            category: 'dev',
            icon: Palette,
        },
        {
            name: 'Framer Motion',
            purpose: language === 'he' ? 'אנימציות React' : 'React animations',
            category: 'dev',
            icon: Monitor,
        },
    ];

    // Human decisions vs AI assistance
    const humanDecisions = language === 'he' ? [
        'הגדרת הקונספט "השפעה בלתי נראית"',
        'בחירת קהל היעד (צעירים בישראל)',
        'עיצוב חווית המשתמש והמסע',
        'בחירת פלטת הצבעים והטיפוגרפיה',
        'החלטות על היררכיה ויזואלית',
        'עריכה וביקורת איכות של כל התוצרים',
        'הגדרת הטון והשפה',
        'אסטרטגיית תוכן ומסרים',
    ] : [
        'Defining the "Invisible Impact" concept',
        'Target audience selection (Israeli youth)',
        'User experience & journey design',
        'Color palette & typography selection',
        'Visual hierarchy decisions',
        'Quality review of all deliverables',
        'Tone of voice definition',
        'Content strategy & messaging',
    ];

    const aiAssistance = language === 'he' ? [
        'יצירת אייקונים בסגנון אחיד',
        'יצירת תמונות רקע (יער, טבע)',
        'הצעות לפלטות צבעים ראשוניות',
        'יצירת קוד React components',
        'עזרה בניסוח תוכן ראשוני',
        'יצירת mockups למרצ\'נדייז',
        'תרגום ראשוני של תוכן',
        'יצירת CSS animations',
    ] : [
        'Creating consistent-style icons',
        'Background image generation (forest, nature)',
        'Initial color palette suggestions',
        'React component code generation',
        'Initial content drafting assistance',
        'Merchandise mockup creation',
        'Initial content translation',
        'CSS animation generation',
    ];

    // Team roles
    const teamRoles = [
        {
            role: language === 'he' ? 'מעצב/ת' : 'Designer',
            icon: Palette,
            responsibilities: language === 'he'
                ? 'קונספט, עיצוב ויזואלי, UX, בחירת צבעים'
                : 'Concept, visual design, UX, color selection',
            color: 'green',
        },
        {
            role: language === 'he' ? 'מפתח/ת' : 'Developer',
            icon: Code,
            responsibilities: language === 'he'
                ? 'React, Tailwind, אינטגרציית AI, נגישות'
                : 'React, Tailwind, AI integration, accessibility',
            color: 'blue',
        },
        {
            role: language === 'he' ? 'תוכן' : 'Content',
            icon: BookOpen,
            responsibilities: language === 'he'
                ? 'טקסטים, מחקר נתונים, תרגום'
                : 'Copy, data research, translation',
            color: 'magenta',
        },
        {
            role: language === 'he' ? 'QA' : 'QA',
            icon: CheckCircle,
            responsibilities: language === 'he'
                ? 'בדיקות, נגישות, responsive'
                : 'Testing, accessibility, responsive',
            color: 'green',
        },
    ];

    // AI Prompts examples
    const aiPrompts = [
        {
            title: language === 'he' ? 'יצירת אייקונים' : 'Icon Generation',
            tool: 'ChatGPT + DALL-E',
            prompt: language === 'he'
                ? '"צור אייקון בסגנון flat design המייצג חינוך סביבתי. סגנון: מינימליסטי, צבע אחד (#1D7C5A ירוק), ללא גרדיאנטים. גודל: 512x512 PNG עם רקע שקוף."'
                : '"Create a flat design icon representing environmental education. Style: Minimalist, single color (#1D7C5A green), no gradients. Size: 512x512 PNG with transparent background."',
            result: language === 'he'
                ? 'אייקונים אחידים לכל הסקשנים באתר'
                : 'Consistent icons across all website sections',
        },
        {
            title: language === 'he' ? 'תמונת רקע' : 'Background Image',
            tool: 'ChatGPT + DALL-E',
            prompt: language === 'he'
                ? '"צור תמונה של שביל יער שטוף שמש, מבט מנקודת מבט של הולך רגל. הסגנון צריך להיות צילומי אך מעט חלומי. אור בוקר זהוב מסנן דרך העצים. אווירה מזמינה ומעוררת תקווה."'
                : '"Create an image of a sunlit forest path, from a pedestrian\'s point of view. Style should be photographic yet slightly dreamy. Golden morning light filtering through trees. Inviting and hopeful atmosphere."',
            result: language === 'he'
                ? 'תמונת הרקע של ה-Hero Section'
                : 'Hero section background image',
        },
        {
            title: language === 'he' ? 'יצירת קומפוננטה' : 'Component Generation',
            tool: 'Claude AI',
            prompt: language === 'he'
                ? '"צור React component עבור פאנל נגישות עם 3 טאבים (ראייה, מוטוריקה, קוגניטיבי). השתמש ב-Tailwind CSS ו-Framer Motion. כלול אפשרויות: גודל טקסט, ניגודיות גבוהה, הפחתת תנועה, מצב עיוורון צבעים."'
                : '"Create a React component for an accessibility panel with 3 tabs (Vision, Motor, Cognitive). Use Tailwind CSS and Framer Motion. Include options: text size, high contrast, reduced motion, color blind mode."',
            result: language === 'he'
                ? 'קומפוננטת AccessibilityPanel מלאה'
                : 'Complete AccessibilityPanel component',
        },
        {
            title: language === 'he' ? 'ניסוח תוכן' : 'Content Writing',
            tool: 'Claude AI',
            prompt: language === 'he'
                ? '"כתוב טקסט קצר לארגון חינוך סביבתי ישראלי. קונספט: \'השפעה בלתי נראית\' - בחירות יומיות קטנות עם השלכות גדולות. טון: מעורר תקווה, מעצים. מקסימום 8 מילים. עברית ואנגלית."'
                : '"Write a short tagline for an Israeli environmental education nonprofit. Concept: \'Invisible Impact\' - small daily choices have big consequences. Tone: Hopeful, empowering. Max 8 words. Hebrew and English."',
            result: language === 'he'
                ? 'הסלוגן "גלה את ההשפעה הבלתי נראית שלך"'
                : 'The tagline "Discover Your Invisible Impact"',
        },
    ];

    // Challenges and solutions
    const challenges = [
        {
            problem: language === 'he' ? 'איזון בין AI לאנושי' : 'Balancing AI vs Human',
            solution: language === 'he'
                ? 'הגדרנו כללים ברורים: AI ליצירת חומרי גלם בלבד, כל ההחלטות העיצוביות נשארות אנושיות'
                : 'We defined clear rules: AI for raw materials only, all design decisions remain human',
            icon: Scale,
        },
        {
            problem: language === 'he' ? 'נגישות WCAG' : 'WCAG Accessibility',
            solution: language === 'he'
                ? 'פיתחנו פאנל נגישות מקיף עם 12+ אפשרויות, כולל מצבי עיוורון צבעים ופונט דיסלקסיה'
                : 'Developed comprehensive accessibility panel with 12+ options including color blind modes and dyslexia font',
            icon: Users,
        },
        {
            problem: language === 'he' ? 'תמיכה בשפות RTL/LTR' : 'RTL/LTR Language Support',
            solution: language === 'he'
                ? 'בנינו מערכת i18n מותאמת עם context provider ותמיכה מלאה בעברית ואנגלית'
                : 'Built custom i18n system with context provider and full Hebrew/English support',
            icon: MessageSquare,
        },
        {
            problem: language === 'he' ? 'עקביות ויזואלית' : 'Visual Consistency',
            solution: language === 'he'
                ? 'יצרנו design system עם משתני CSS, קומפוננטות לשימוש חוזר וסגנון אחיד'
                : 'Created design system with CSS variables, reusable components, and consistent styling',
            icon: Palette,
        },
    ];

    // Ethics principles
    const ethicsPrinciples = [
        {
            title: language === 'he' ? 'שקיפות' : 'Transparency',
            description: language === 'he'
                ? 'אנחנו מציינים בבירור איפה AI עזר בפרויקט'
                : 'We clearly indicate where AI assisted in the project',
        },
        {
            title: language === 'he' ? 'אנושיות במרכז' : 'Human-Centered',
            description: language === 'he'
                ? 'כל ההחלטות היצירתיות והאסטרטגיות נעשו על ידי בני אדם'
                : 'All creative and strategic decisions made by humans',
        },
        {
            title: language === 'he' ? 'איכות מעל כמות' : 'Quality Over Quantity',
            description: language === 'he'
                ? 'העדפנו לעבד ולערוך תוצרי AI במקום להשתמש בהם כמו שהם'
                : 'We preferred refining AI outputs over using them as-is',
        },
        {
            title: language === 'he' ? 'למידה מתמדת' : 'Continuous Learning',
            description: language === 'he'
                ? 'תיעדנו את התהליך כדי לשתף ידע עם אחרים'
                : 'We documented the process to share knowledge with others',
        },
    ];

    // Resources links
    const resources = [
        {
            title: 'WCAG 2.1 Guidelines',
            url: 'https://www.w3.org/WAI/WCAG21/quickref/',
            category: language === 'he' ? 'נגישות' : 'Accessibility',
        },
        {
            title: 'Water Footprint Network',
            url: 'https://waterfootprint.org/',
            category: language === 'he' ? 'נתונים' : 'Data',
        },
        {
            title: 'UNEP - UN Environment Programme',
            url: 'https://www.unep.org/',
            category: language === 'he' ? 'נתונים' : 'Data',
        },
        {
            title: 'FAO - Food & Agriculture',
            url: 'https://www.fao.org/',
            category: language === 'he' ? 'נתונים' : 'Data',
        },
        {
            title: 'React Documentation',
            url: 'https://react.dev/',
            category: language === 'he' ? 'פיתוח' : 'Development',
        },
        {
            title: 'Tailwind CSS',
            url: 'https://tailwindcss.com/',
            category: language === 'he' ? 'פיתוח' : 'Development',
        },
    ];

    return (
        <div className="py-12 px-4 md:px-8 min-h-screen bg-paper">
            <div className="max-w-6xl mx-auto">
                {/* 1. Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <User className="w-12 h-12 text-green" />
                        <span className="font-display text-5xl text-graphite/30">*</span>
                        <Cpu className="w-12 h-12 text-blue" />
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl mb-4 text-graphite">
                        {language === 'he' ? 'המסע העיצובי שלנו' : 'Our Design Journey'}
                    </h1>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto mb-6">
                        {language === 'he'
                            ? 'HUMAN * AI - תיעוד מלא של איך שילבנו בינה מלאכותית בתהליך העיצוב'
                            : 'HUMAN * AI - Full documentation of how we integrated AI in the design process'}
                    </p>
                    <div className="inline-block bg-graphite text-paper px-6 py-3 rounded-full font-display">
                        {language === 'he' ? 'הקאתון תילתן 2026' : 'Tiltan Hackathon 2026'}
                    </div>
                </motion.div>

                {/* 2. Timeline Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-12 flex items-center justify-center gap-3">
                        <Clock className="w-8 h-8 text-green" />
                        {language === 'he' ? 'ציר הזמן של הפרויקט' : 'Project Timeline'}
                    </h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-graphite/10 transform -translate-y-1/2 hidden md:block" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {timelinePhases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <Card className="h-full text-center relative z-10 bg-paper">
                                        <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-${phase.color}/10`}>
                                            <phase.icon className={`w-7 h-7 text-${phase.color}`} />
                                        </div>
                                        <span className="text-sm text-graphite/50 uppercase tracking-wider">
                                            {phase.duration}
                                        </span>
                                        <h3 className="font-display text-xl mt-2 mb-3">{phase.title}</h3>
                                        <p className="text-sm text-graphite/70">{phase.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 3. Tools Section - Expanded */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-4 flex items-center justify-center gap-3">
                        <Wrench className="w-8 h-8 text-green" />
                        {language === 'he' ? 'כלים וטכנולוגיות' : 'Tools & Technologies'}
                    </h2>
                    <p className="text-center text-graphite/60 mb-10 max-w-xl mx-auto">
                        {language === 'he'
                            ? 'הכלים שהשתמשנו בהם לאורך הפרויקט'
                            : 'The tools we used throughout the project'}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -4 }}
                            >
                                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                                    <div className={`w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                                        tool.category === 'ai' ? 'bg-blue/10' :
                                        tool.category === 'design' ? 'bg-green/10' : 'bg-magenta/10'
                                    }`}>
                                        <tool.icon className={`w-5 h-5 ${
                                            tool.category === 'ai' ? 'text-blue' :
                                            tool.category === 'design' ? 'text-green' : 'text-magenta'
                                        }`} />
                                    </div>
                                    <h3 className="font-display text-base mb-1">{tool.name}</h3>
                                    <p className="text-xs text-graphite/60">{tool.purpose}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 4. Human vs AI Section - Expanded */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-10">
                        {language === 'he' ? 'אנושי לעומת AI' : 'Human vs AI'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Human Decisions */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-2 border-green">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center">
                                        <User className="w-6 h-6 text-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl">
                                            {language === 'he' ? 'החלטות אנושיות' : 'Human Decisions'}
                                        </h3>
                                        <p className="text-sm text-graphite/60">
                                            {language === 'he' ? '100% בשליטתנו' : '100% in our control'}
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {humanDecisions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                                            <span className="text-graphite/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>

                        {/* AI Assistance */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-2 border-blue">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center">
                                        <Cpu className="w-6 h-6 text-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl">
                                            {language === 'he' ? 'סיוע AI' : 'AI Assistance'}
                                        </h3>
                                        <p className="text-sm text-graphite/60">
                                            {language === 'he' ? 'כלי תומך בלבד' : 'Supporting tool only'}
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {aiAssistance.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Sparkles className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                                            <span className="text-graphite/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </div>
                </motion.section>

                {/* 5. Team Roles Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-4 flex items-center justify-center gap-3">
                        <Users className="w-8 h-8 text-green" />
                        {language === 'he' ? 'תפקידי הצוות' : 'Team Roles'}
                    </h2>
                    <p className="text-center text-graphite/60 mb-10">
                        {language === 'he'
                            ? 'התחומים שכיסינו בהקאתון'
                            : 'The areas we covered in the hackathon'}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {teamRoles.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={`h-full text-center border-t-4 border-${member.color}`}>
                                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-${member.color}/10`}>
                                        <member.icon className={`w-7 h-7 text-${member.color}`} />
                                    </div>
                                    <h3 className="font-display text-xl mb-2">{member.role}</h3>
                                    <p className="text-sm text-graphite/60">{member.responsibilities}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 6. AI Prompts Section - Collapsible */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-4 flex items-center justify-center gap-3">
                        <MessageSquare className="w-8 h-8 text-blue" />
                        {language === 'he' ? 'דוגמאות לפרומפטים' : 'Prompt Examples'}
                    </h2>
                    <p className="text-center text-graphite/60 mb-10 max-w-xl mx-auto">
                        {language === 'he'
                            ? 'פרומפטים שהשתמשנו בהם ליצירת התוצרים'
                            : 'Actual prompts we used to create deliverables'}
                    </p>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {aiPrompts.map((prompt, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden">
                                    <button
                                        onClick={() => setExpandedPrompt(expandedPrompt === index ? null : index)}
                                        className="w-full flex items-center justify-between p-4 hover:bg-graphite/5 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Lightbulb className="w-5 h-5 text-blue" />
                                            <span className="font-display text-lg">{prompt.title}</span>
                                            <span className="text-xs bg-blue/10 text-blue px-2 py-1 rounded">
                                                {prompt.tool}
                                            </span>
                                        </div>
                                        {expandedPrompt === index ? (
                                            <ChevronUp className="w-5 h-5 text-graphite/40" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-graphite/40" />
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {expandedPrompt === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-2 border-t border-graphite/10">
                                                    <div className="bg-graphite/5 rounded-lg p-4 mb-4">
                                                        <p className="font-mono text-sm text-graphite/80 whitespace-pre-wrap">
                                                            {prompt.prompt}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Target className="w-4 h-4 text-green" />
                                                        <span className="text-sm text-graphite/70">
                                                            <strong>{language === 'he' ? 'תוצאה:' : 'Result:'}</strong> {prompt.result}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 7. Challenges Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-4 flex items-center justify-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-magenta" />
                        {language === 'he' ? 'אתגרים ופתרונות' : 'Challenges & Solutions'}
                    </h2>
                    <p className="text-center text-graphite/60 mb-10">
                        {language === 'he'
                            ? 'בעיות שנתקלנו בהן ואיך פתרנו אותן'
                            : 'Problems we encountered and how we solved them'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {challenges.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-magenta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-6 h-6 text-magenta" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-lg mb-2 text-magenta">
                                                {item.problem}
                                            </h3>
                                            <p className="text-graphite/70 text-sm">
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 8. Ethics Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="font-display text-3xl text-center mb-4 flex items-center justify-center gap-3">
                        <Scale className="w-8 h-8 text-green" />
                        {language === 'he' ? 'עקרונות אתיים' : 'Ethical Framework'}
                    </h2>
                    <p className="text-center text-graphite/60 mb-10 max-w-xl mx-auto">
                        {language === 'he'
                            ? 'הכללים שהנחו אותנו בשימוש ב-AI'
                            : 'The principles that guided our AI usage'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {ethicsPrinciples.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-l-4 border-green">
                                    <h3 className="font-display text-lg mb-2">{principle.title}</h3>
                                    <p className="text-sm text-graphite/70">{principle.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 9. The Intentional Constraint */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <Card className="max-w-3xl mx-auto bg-green/5 border-l-4 border-green">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-10 h-10 text-green flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="font-display text-2xl mb-4 text-green">
                                    {language === 'he' ? 'האילוץ המכוון' : 'The Intentional Constraint'}
                                </h2>
                                <p className="text-graphite/80 leading-relaxed text-lg">
                                    {language === 'he'
                                        ? 'בחרנו להגביל את השימוש ב-AI ליצירת חומרי גלם בלבד. כל ההחלטות העיצוביות, הקומפוזיציה והמסר נשארו בידיים אנושיות. זה מבטיח שהפרויקט משקף את הראייה והערכים שלנו, ולא רק את יכולות ה-AI.'
                                        : 'We chose to limit AI use to creating raw materials only. All design decisions, composition, and messaging remained in human hands. This ensures the project reflects our vision and values, not just AI capabilities.'}
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.section>

                {/* 10. Resources Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="font-display text-3xl text-center mb-4 flex items-center justify-center gap-3">
                        <BookOpen className="w-8 h-8 text-blue" />
                        {language === 'he' ? 'משאבים והפניות' : 'Resources & References'}
                    </h2>
                    <p className="text-center text-graphite/60 mb-10">
                        {language === 'he'
                            ? 'מקורות המידע והכלים שעזרו לנו'
                            : 'Data sources and tools that helped us'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {resources.map((resource, index) => (
                            <motion.a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -2 }}
                                className="block"
                            >
                                <Card className="h-full hover:shadow-lg transition-all hover:border-blue/30 border border-transparent">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-graphite/50 uppercase tracking-wider">
                                                {resource.category}
                                            </span>
                                            <h3 className="font-display text-base mt-1">{resource.title}</h3>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-blue" />
                                    </div>
                                </Card>
                            </motion.a>
                        ))}
                    </div>
                </motion.section>

                {/* Hackathon Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-graphite to-graphite/90 text-paper px-10 py-6 rounded-2xl">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <User className="w-6 h-6" />
                            <span className="font-display text-2xl">*</span>
                            <Cpu className="w-6 h-6" />
                        </div>
                        <p className="font-display text-xl mb-1">HUMAN * AI</p>
                        <p className="font-mono text-sm text-paper/70">
                            {language === 'he' ? 'הקאתון תילתן 2026' : 'Tiltan Hackathon 2026'}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Process;
