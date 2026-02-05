import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import VolunteerSection from '../components/sections/VolunteerSection';
import Accordion from '../components/ui/Accordion';
import Icon from '../components/ui/Icon';
import { useLanguage } from '../i18n';

// Animated counter component
const AnimatedStat = ({ value, suffix = '', label }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <div className="font-display text-4xl md:text-5xl text-green mb-2">
                {value}{suffix}
            </div>
            <div className="text-sm text-graphite/60 font-body">{label}</div>
        </motion.div>
    );
};

const VolunteerPage = () => {
    const { language } = useLanguage();

    // Impact statistics
    const stats = [
        { value: '500', suffix: '+', label: { he: 'מתנדבים פעילים', en: 'Active Volunteers' } },
        { value: '120', suffix: '', label: { he: 'בתי ספר', en: 'Schools Reached' } },
        { value: '15,000', suffix: '+', label: { he: 'תלמידים הושפעו', en: 'Students Impacted' } },
        { value: '50', suffix: '+', label: { he: 'קהילות', en: 'Communities' } },
    ];

    // Testimonials
    const testimonials = [
        {
            quote: {
                he: 'ההתנדבות באקולוג׳יק שינתה את הדרך שבה אני רואה חינוך סביבתי. לראות את הילדים מתלהבים משתילת הזרעים הראשונים שלהם - זה רגע קסום.',
                en: 'Volunteering with EcoLogic changed how I see environmental education. Seeing kids excited about planting their first seeds - that\'s a magical moment.'
            },
            name: { he: 'מיכל כהן', en: 'Michal Cohen' },
            role: { he: 'שגרירה קהילתית, חיפה', en: 'Community Ambassador, Haifa' },
            image: '/assets/personas/persona-teacher-reading.webp'
        },
        {
            quote: {
                he: 'הצוות תומך ומקצועי, וההדרכות שקיבלתי עזרו לי להפוך למדריך טוב יותר. זו חוויה מעשירה לכל מי שאוהב טבע וילדים.',
                en: 'The team is supportive and professional, and the training helped me become a better guide. It\'s an enriching experience for anyone who loves nature and kids.'
            },
            name: { he: 'דני לוי', en: 'Danny Levi' },
            role: { he: 'מנטור ירוק, תל אביב', en: 'Green Mentor, Tel Aviv' },
            image: '/assets/personas/persona-teacher-pointing.webp'
        },
    ];

    // FAQ items
    const faqItems = [
        {
            id: 'time',
            title: language === 'he' ? 'כמה זמן נדרש להתנדבות?' : 'How much time is required?',
            content: language === 'he'
                ? 'ההתנדבות גמישה לחלוטין. יש מתנדבים שמגיעים פעם בשבוע, ויש כאלה שמשתתפים רק באירועים מיוחדים. אנחנו מתאימים את המשימות לזמינות שלך.'
                : 'Volunteering is completely flexible. Some volunteers come weekly, others participate only in special events. We match tasks to your availability.'
        },
        {
            id: 'experience',
            title: language === 'he' ? 'האם נדרש ניסיון קודם?' : 'Do I need prior experience?',
            content: language === 'he'
                ? 'לא! אנחנו מספקים הכשרה מלאה לכל המתנדבים. כל מה שצריך זה אהבה לטבע ורצון ללמוד. הצוות שלנו ילווה אותך בכל שלב.'
                : 'No! We provide full training for all volunteers. All you need is a love for nature and willingness to learn. Our team will guide you every step of the way.'
        },
        {
            id: 'areas',
            title: language === 'he' ? 'באילו אזורים אתם פעילים?' : 'What areas do you operate in?',
            content: language === 'he'
                ? 'אנחנו פעילים בכל רחבי הארץ - מהצפון ועד הדרום. יש לנו קהילות פעילות בחיפה, תל אביב, ירושלים, השרון, ועוד. תמיד מחפשים מתנדבים חדשים באזורים נוספים!'
                : 'We operate throughout Israel - from north to south. We have active communities in Haifa, Tel Aviv, Jerusalem, Sharon, and more. Always looking for new volunteers in additional areas!'
        },
        {
            id: 'remote',
            title: language === 'he' ? 'אפשר להתנדב מרחוק?' : 'Can I volunteer remotely?',
            content: language === 'he'
                ? 'בהחלט! תורמי תוכן יכולים לעבוד מכל מקום - כתיבת מדריכים, תרגום חומרים, עיצוב גרפי ועוד. גם ניהול קהילות ברשתות החברתיות נעשה מרחוק.'
                : 'Absolutely! Content contributors can work from anywhere - writing guides, translating materials, graphic design, and more. Social media community management is also done remotely.'
        },
        {
            id: 'support',
            title: language === 'he' ? 'איזו תמיכה מתנדבים מקבלים?' : 'What support do volunteers receive?',
            content: language === 'he'
                ? 'כל מתנדב מקבל: הכשרה מקיפה, חומרי הדרכה, ליווי אישי מרכז המתנדבים, קהילה תומכת של מתנדבים אחרים, וכמובן - הרבה הערכה על התרומה שלכם!'
                : 'Every volunteer receives: comprehensive training, guidance materials, personal support from our volunteer coordinator, a supportive community of fellow volunteers, and of course - lots of appreciation for your contribution!'
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/assets/backgrounds/bg-programs.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/80 to-paper/60" />

                <Container className="relative z-10 pt-20 md:pt-24 pb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 text-graphite leading-tight">
                                {language === 'he' ? 'עשו את' : 'Make a'}
                                <span className="block text-green">
                                    {language === 'he' ? 'ההבדל' : 'Difference'}
                                </span>
                            </h1>

                            <p className="text-xl text-graphite/70 mb-8 max-w-lg leading-relaxed">
                                {language === 'he'
                                    ? 'הצטרפו למאות מתנדבים שמביאים חינוך סביבתי לאלפי ילדים ברחבי הארץ. כל שעה שלכם יוצרת השפעה אמיתית.'
                                    : 'Join hundreds of volunteers bringing environmental education to thousands of kids across the country. Every hour you give creates real impact.'}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    const element = document.getElementById('volunteer');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-green hover:bg-green/90 text-paper px-8 py-4 rounded-xl font-body text-lg flex items-center gap-3 shadow-lg transition-colors"
                            >
                                <Icon name="heart" size="sm" className="brightness-0 invert" />
                                {language === 'he' ? 'הצטרפו עכשיו' : 'Join Now'}
                            </motion.button>
                        </motion.div>

                        {/* Persona Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:flex justify-center"
                        >
                            <img
                                src="/assets/personas/persona-teacher-welcome.webp"
                                alt="Volunteer"
                                className="max-h-[500px] w-auto object-contain drop-shadow-2xl"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-sand/30 border-y border-sand">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="font-display text-4xl md:text-5xl text-green mb-2">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-sm text-graphite/60 font-body">{stat.label[language]}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Main Volunteer Section (existing component) */}
            <VolunteerSection isFullPage />

            {/* Testimonials Section */}
            <Section spacing="large" className="bg-paper">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-6">
                            <Icon name="heart" size="xs" inline />
                            <span className="font-body text-sm uppercase tracking-wider">
                                {language === 'he' ? 'עדויות' : 'Testimonials'}
                            </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl mb-4 text-graphite">
                            {language === 'he' ? 'מה המתנדבים שלנו אומרים' : 'What Our Volunteers Say'}
                        </h2>
                        <p className="text-graphite/60 max-w-2xl mx-auto">
                            {language === 'he'
                                ? 'הכירו את הקהילה המדהימה שלנו'
                                : 'Meet our amazing community'}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-paper/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-sand shadow-card"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name[language]}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-green/20"
                                        loading="lazy"
                                    />
                                    <div>
                                        <div className="font-display text-lg text-graphite">
                                            {testimonial.name[language]}
                                        </div>
                                        <div className="text-sm text-green">
                                            {testimonial.role[language]}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-graphite/70 leading-relaxed italic">
                                    "{testimonial.quote[language]}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FAQ Section */}
            <Section spacing="large" className="bg-sage/10">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-6">
                            <Icon name="lightbulb" size="xs" inline />
                            <span className="font-body text-sm uppercase tracking-wider">
                                {language === 'he' ? 'שאלות נפוצות' : 'FAQ'}
                            </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl mb-4 text-graphite">
                            {language === 'he' ? 'יש לכם שאלות?' : 'Have Questions?'}
                        </h2>
                        <p className="text-graphite/60 max-w-2xl mx-auto">
                            {language === 'he'
                                ? 'הנה התשובות לשאלות הנפוצות ביותר'
                                : 'Here are answers to the most common questions'}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <Accordion items={faqItems} />
                    </motion.div>

                    {/* Still have questions CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <p className="text-graphite/60 mb-4">
                            {language === 'he' ? 'עדיין יש שאלות?' : 'Still have questions?'}
                        </p>
                        <a
                            href="mailto:volunteer@ecologic.org.il"
                            className="inline-flex items-center gap-2 text-green hover:text-green/80 font-body transition-colors"
                        >
                            <Icon name="heart" size="xs" inline />
                            {language === 'he' ? 'דברו איתנו' : 'Contact us'}
                        </a>
                    </motion.div>
                </Container>
            </Section>
        </div>
    );
};

export default VolunteerPage;
