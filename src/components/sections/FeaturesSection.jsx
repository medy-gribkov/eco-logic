import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Eye, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { useLanguage } from '../../i18n';

const FeaturesSection = () => {
    const { language, isRTL } = useLanguage();
    const [activeFeature, setActiveFeature] = useState(0);
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const features = [
        {
            id: 'education',
            icon: BookOpen,
            title: { he: 'חינוך', en: 'Education' },
            subtitle: { he: 'ללמוד דרך גילוי', en: 'Learning through discovery' },
            description: {
                he: 'שיעורים אינטראקטיביים, חידונים ופעילויות שהופכים נושאים מורכבים לפשוטים ומעניינים. חומרי לימוד מותאמים לכל גיל.',
                en: 'Interactive lessons, quizzes, and activities that make complex topics simple and engaging. Materials adapted for all ages.'
            },
            stats: { value: '50+', label: { he: 'שיעורים', en: 'Lessons' } },
            color: 'green'
        },
        {
            id: 'awareness',
            icon: Eye,
            title: { he: 'מודעות', en: 'Awareness' },
            subtitle: { he: 'להבין את ההשפעה', en: 'Understanding our impact' },
            description: {
                he: 'נתונים, עובדות ומידע על הקשר בין הפעולות היומיות שלנו לסביבה. להפוך את הבלתי נראה לנראה.',
                en: 'Data, facts, and information about the connection between our daily actions and the environment. Making the invisible visible.'
            },
            stats: { value: '100+', label: { he: 'עובדות', en: 'Facts' } },
            color: 'sage'
        },
        {
            id: 'action',
            icon: Zap,
            title: { he: 'פעולה', en: 'Action' },
            subtitle: { he: 'לעשות שינוי', en: 'Making a difference' },
            description: {
                he: 'כלים מעשיים, אתגרים קהילתיים ופרויקטים שמאפשרים לכל אחד לתרום לשינוי חיובי בסביבה.',
                en: 'Practical tools, community challenges, and projects that enable everyone to contribute to positive environmental change.'
            },
            stats: { value: '20+', label: { he: 'אתגרים', en: 'Challenges' } },
            color: 'burgundy'
        }
    ];

    const colorClasses = {
        green: {
            bg: 'bg-green/10',
            border: 'border-green/30',
            icon: 'bg-green/20 text-green',
            accent: 'text-green'
        },
        sage: {
            bg: 'bg-sage/10',
            border: 'border-sage/30',
            icon: 'bg-sage/20 text-green',
            accent: 'text-sage'
        },
        burgundy: {
            bg: 'bg-burgundy/10',
            border: 'border-burgundy/30',
            icon: 'bg-burgundy/20 text-burgundy',
            accent: 'text-burgundy'
        }
    };

    return (
        <Section id="features" spacing="large" className="bg-paper overflow-hidden">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-sand/50 text-graphite/70 px-4 py-2 rounded-full mb-6">
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'הגישה שלנו' : 'Our Approach'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'שלושה עמודי תווך' : 'Three Pillars'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'הגישה שלנו משלבת חינוך, מודעות ופעולה כדי ליצור שינוי אמיתי'
                            : 'Our approach combines education, awareness, and action to create real change'}
                    </p>
                </motion.div>

                {/* Features Navigation */}
                <div className="flex justify-center gap-4 mb-12">
                    {features.map((feature, index) => {
                        const colors = colorClasses[feature.color];
                        const isActive = activeFeature === index;

                        return (
                            <motion.button
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                                    flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300
                                    ${isActive
                                        ? `${colors.bg} ${colors.border} shadow-lg`
                                        : 'border-sand bg-paper hover:border-gray'
                                    }
                                `}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? colors.icon : 'bg-sand text-graphite/50'}`}>
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <span className={`font-display text-lg ${isActive ? colors.accent : 'text-graphite/70'}`}>
                                    {feature.title[language]}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Active Feature Content */}
                <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    {(() => {
                        const feature = features[activeFeature];
                        const colors = colorClasses[feature.color];

                        return (
                            <div className={`rounded-3xl p-8 md:p-12 ${colors.bg} border ${colors.border}`}>
                                <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                                    <div>
                                        <h3 className={`font-display text-2xl md:text-3xl mb-2 ${colors.accent}`}>
                                            {feature.subtitle[language]}
                                        </h3>
                                        <p className="text-graphite/70 text-lg leading-relaxed mb-6">
                                            {feature.description[language]}
                                        </p>
                                        <Button
                                            variant="outline"
                                            className="border-graphite/30 hover:bg-graphite hover:text-paper"
                                        >
                                            {language === 'he' ? 'גלה עוד' : 'Discover More'}
                                            <Arrow className="w-4 h-4 ms-2" />
                                        </Button>
                                    </div>

                                    {/* Stats */}
                                    <div className="text-center md:text-end">
                                        <div className={`font-display text-6xl md:text-7xl ${colors.accent}`}>
                                            {feature.stats.value}
                                        </div>
                                        <div className="text-graphite/60">
                                            {feature.stats.label[language]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </motion.div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${index === activeFeature
                                    ? 'w-8 bg-green'
                                    : 'bg-sand hover:bg-gray'
                                }
                            `}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturesSection;
