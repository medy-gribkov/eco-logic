import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';
import { useCart } from '../../context/CartContext';

const ProgramsSection = () => {
    const { language, isRTL } = useLanguage();
    const { addItem, openCart } = useCart();

    const programs = [
        {
            id: 'seed',
            tier: 'seed',
            icon: 'seedling',
            name: { he: 'זרע', en: 'Seed' },
            subtitle: { he: 'התחלה טובה', en: 'Fresh Start' },
            price: { he: 'חינם', en: 'Free' },
            description: {
                he: 'גישה מיידית לחומרים דיגיטליים. להתחיל את המסע הירוק - בחינם.',
                en: 'Instant access to digital resources. Start your eco-journey today, completely free.'
            },
            features: [
                { he: 'מדריך חיסכון במים', en: 'Water saving guide' },
                { he: 'פעילויות לכיתה', en: 'Classroom activities' },
                { he: 'אינפוגרפיקות', en: 'Infographics' }
            ],
            cta: { he: 'הורד עכשיו', en: 'Download Now' },
            action: 'scroll-resources',
            popular: false
        },
        {
            id: 'sprout',
            tier: 'sprout',
            icon: 'sprout',
            name: { he: 'נבט', en: 'Sprout' },
            subtitle: { he: 'ערכת הזנקה', en: 'Starter Kit' },
            price: { he: '299 ש"ח', en: '299 ILS' },
            priceValue: 299,
            description: {
                he: 'ללכלך את הידיים! ערכה פיזית עם שתיל אמיתי ותכנית לימודים להזנקה.',
                en: 'Get your hands dirty! Includes a real seedling kit and a 10-lesson starter curriculum.'
            },
            features: [
                { he: 'ערכת שתיל פיזית', en: 'Physical seedling kit' },
                { he: 'תכנית 4 שיעורים', en: '4-lesson curriculum' },
                { he: 'גישה לפלטפורמה', en: 'Platform access' }
            ],
            cta: { he: 'הזמן עכשיו', en: 'Order Now' },
            action: 'add-to-cart',
            popular: false
        },
        {
            id: 'tree',
            tier: 'tree',
            icon: 'tree',
            name: { he: 'עץ', en: 'Tree' },
            subtitle: { he: 'החבילה המלאה', en: 'The Full Package' },
            price: { he: '899 ש"ח', en: '899 ILS' },
            priceValue: 899,
            description: {
                he: 'החוויה האולטימטיבית. תכנית מלאה, ציוד ממותג וליווי אישי צמוד.',
                en: 'The ultimate experience. Full curriculum, branded eco-gear, and personal guidance.'
            },
            features: [
                { he: 'כל תכני הנבט', en: 'All Sprout content' },
                { he: 'תכנית 12 שיעורים', en: '12-lesson curriculum' },
                { he: 'מרצ\'נדייז EcoLogic', en: 'EcoLogic merchandise' },
                { he: 'תמיכה אישית', en: 'Personal support' }
            ],
            cta: { he: 'הזמן עכשיו', en: 'Order Now' },
            action: 'add-to-cart',
            popular: true
        },
        {
            id: 'forest',
            tier: 'forest',
            icon: 'forest',
            name: { he: 'יער', en: 'Forest' },
            subtitle: { he: 'למוסדות וארגונים', en: 'For Organizations' },
            price: { he: 'צרו קשר', en: 'Contact Us' },
            description: {
                he: 'מהפכה ירוקה בארגון. תכניות מותאמות, הכשרת צוות והשפעה רחבה.',
                en: 'Transform your institution. Tailored programs, teacher training, and organization-wide impact.'
            },
            features: [
                { he: 'ערכות מרובות', en: 'Multiple kits' },
                { he: 'הכשרת מורים', en: 'Teacher training' },
                { he: 'תכנית מותאמת', en: 'Custom curriculum' },
                { he: 'ליווי שנתי', en: 'Annual support' }
            ],
            cta: { he: 'דברו איתנו', en: 'Talk to Us' },
            action: 'scroll-collaborate',
            popular: false
        }
    ];

    const handleAction = (program) => {
        if (program.action === 'scroll-resources') {
            document.getElementById('free-resources')?.scrollIntoView({ behavior: 'smooth' });
        } else if (program.action === 'scroll-collaborate') {
            document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' });
        } else if (program.action === 'add-to-cart') {
            addItem({
                id: `program-${program.id}`,
                type: 'program',
                name: program.name[language],
                price: program.priceValue,
                image: '/assets/icons/tree.png'
            });
            openCart();
        }
    };

    return (
        <Section id="programs" spacing="large" className="relative overflow-hidden">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-programs.png)' }}
            />


            <Container className="relative z-10">
                {/* Hero with Starter Kit Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    {/* Video Side */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-paper/50 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/images/persona-starterkit.png"
                                className="w-full h-auto aspect-video object-cover scale-110"
                            >
                                <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-6 -end-6 bg-magenta text-paper px-6 py-3 rounded-full shadow-lg z-10">
                            <div className="font-display text-2xl">
                                {language === 'he' ? 'ערכת הזנקה' : 'Starter Kit'}
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full">
                            <Icon name="seedling" size="xs" inline />
                            <span className="font-body text-sm uppercase tracking-wider">
                                {language === 'he' ? 'התכניות שלנו' : 'Our Programs'}
                            </span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl text-graphite leading-none">
                            {language === 'he' ? 'גדלו איתנו' : 'Grow With Us'}
                        </h2>

                        <p className="text-xl text-graphite/70 leading-relaxed">
                            {language === 'he'
                                ? 'ערכת ההזנקה שלנו היא הדרך הטובה ביותר להתחיל. שתיל אמיתי, תכנית לימודים מובנית, וחיבור לקהילה של משפחות ומורים.'
                                : 'Our Starter Kit is the best way to begin. A real seedling, structured curriculum, and connection to a community of families and teachers.'}
                        </p>

                        <div className="flex flex-wrap gap-6 text-graphite/60 pt-4">
                            <div className="flex items-center gap-2">
                                <Icon name="checkmark" size="sm" />
                                <span>{language === 'he' ? 'עמותה רשומה' : 'Registered Non-profit'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="recycle" size="sm" />
                                <span>{language === 'he' ? 'חומרים ממוחזרים' : 'Recycled Materials'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="heart" size="sm" />
                                <span>{language === 'he' ? 'לכל הגילאים' : 'All Ages'}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                    relative bg-paper/80 backdrop-blur-sm border-2 rounded-3xl p-6
                                    flex flex-col h-full
                                    ${program.popular
                                    ? 'border-magenta shadow-elevated'
                                    : 'border-white/50 hover:border-magenta/30'}
                                    transition-all duration-300
                                `}
                        >
                            {/* Popular badge */}
                            {program.popular && (
                                <div className="absolute -top-3 start-1/2 -translate-x-1/2 bg-magenta text-paper text-xs font-body px-4 py-1 rounded-full">
                                    {language === 'he' ? 'הכי פופולרי' : 'Most Popular'}
                                </div>
                            )}

                            {/* Icon */}
                            <div className="mb-4">
                                <Icon name={program.icon} size="xl" />
                            </div>

                            {/* Name and Price */}
                            <h3 className="font-display text-3xl text-graphite mb-1">
                                {program.name[language]}
                            </h3>
                            <div className="text-sm text-graphite/60 mb-4">
                                {program.subtitle[language]}
                            </div>
                            <div className={`font-display text-2xl ${program.popular ? 'text-magenta' : 'text-green'} mb-4`}>
                                {program.price[language]}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-graphite/70 mb-6 flex-grow">
                                {program.description[language]}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {program.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-graphite/80">
                                        <Icon name="checkmark" size="xs" />
                                        <span>{feature[language]}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                variant={program.popular ? 'primary' : 'outline'}
                                className={`w-full mt-auto ${program.popular ? 'bg-magenta hover:bg-magenta/90' : ''}`}
                                onClick={() => handleAction(program)}
                            >
                                {program.cta[language]}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ProgramsSection;
