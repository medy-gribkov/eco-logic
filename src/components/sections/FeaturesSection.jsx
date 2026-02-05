import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';

const FeaturesSection = () => {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    const pillars = [
        {
            id: 'education',
            icon: 'book',
            title: language === 'he' ? 'חינוך' : 'Education',
            subtitle: language === 'he' ? 'למידה חווייתית' : 'Experiential Learning',
            description: language === 'he'
                ? 'סדנאות ותכניות לימוד אינטראקטיביות שמלמדות על קיימות דרך חוויה ישירה עם הטבע.'
                : 'Interactive workshops and curricula that teach sustainability through direct experience with nature.',
            features: language === 'he'
                ? ['תכניות מותאמות לגיל', 'למידה מבוססת פרויקטים', 'משחקי סימולציה']
                : ['Age-appropriate programs', 'Project-based learning', 'Simulation games']
        },
        {
            id: 'awareness',
            icon: 'lightbulb',
            title: language === 'he' ? 'מודעות' : 'Awareness',
            subtitle: language === 'he' ? 'הבנת ההשפעה' : 'Understanding Impact',
            description: language === 'he'
                ? 'כלים להבנת ההשפעה הסביבתית של הבחירות היומיות שלנו - מאוכל ועד תחבורה.'
                : 'Tools for understanding the environmental impact of our daily choices - from food to transportation.',
            features: language === 'he'
                ? ['מחשבוני טביעת רגל', 'ויזואליזציות אינטראקטיביות', 'מעקב התקדמות']
                : ['Footprint calculators', 'Interactive visualizations', 'Progress tracking']
        },
        {
            id: 'action',
            icon: 'recycle-heart',
            title: language === 'he' ? 'פעולה' : 'Action',
            subtitle: language === 'he' ? 'לעשות את ההבדל' : 'Making a Difference',
            description: language === 'he'
                ? 'מדריכים מעשיים ופרויקטים קהילתיים שהופכים ידע לפעולה משמעותית.'
                : 'Practical guides and community projects that turn knowledge into meaningful action.',
            features: language === 'he'
                ? ['אתגרים יומיים', 'פרויקטים קהילתיים', 'מדידת השפעה']
                : ['Daily challenges', 'Community projects', 'Impact measurement']
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Section
            id="features"
            spacing="large"
            className="relative overflow-hidden"
        >
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-features.webp)' }}
            />


            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full mb-6">
                        <Icon name="ideas" size="xs" inline />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'הגישה שלנו' : 'Our Approach'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'שלושת העמודים' : 'Three Pillars'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'הפילוסופיה שלנו מבוססת על שלושה עקרונות מנחים'
                            : 'Our philosophy is built on three guiding principles'}
                    </p>
                </motion.div>

                {/* Tab Navigation - Pill style */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex bg-sand/50 rounded-full p-1.5">
                        {pillars.map((pillar, index) => (
                            <button
                                key={pillar.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                                    ${activeTab === index
                                        ? 'bg-paper shadow-card text-graphite'
                                        : 'text-graphite/60 hover:text-graphite'
                                    }
                                `}
                            >
                                <Icon name={pillar.icon} size="sm" />
                                <span className="font-display text-lg hidden sm:inline">{pillar.title}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-paper rounded-3xl p-8 md:p-12 shadow-card border border-sand">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Icon - displayed prominently, no container */}
                                <div className="text-center md:text-start">
                                    <Icon name={pillars[activeTab].icon} size="3xl" className="mb-6" />
                                    <h3 className="font-display text-3xl text-graphite mb-2">
                                        {pillars[activeTab].title}
                                    </h3>
                                    <p className="text-magenta font-body text-lg mb-4">
                                        {pillars[activeTab].subtitle}
                                    </p>
                                    <p className="text-graphite/70 leading-relaxed">
                                        {pillars[activeTab].description}
                                    </p>
                                </div>

                                {/* Features list - no extra containers */}
                                <div className="space-y-4">
                                    {pillars[activeTab].features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <Icon name="checkmark" size="sm" />
                                            <span className="text-graphite">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Section>
    );
};

export default FeaturesSection;
