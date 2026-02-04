import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Cpu, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import { useLanguage } from '../i18n';

const About = () => {
    const { t, language } = useLanguage();

    const features = [
        {
            icon: <Target className="w-8 h-8 text-magenta" />,
            title: t('about.missionTitle'),
            description: t('about.missionText')
        },
        {
            icon: <Heart className="w-8 h-8 text-green" />,
            title: t('about.conceptTitle'),
            description: t('about.conceptText')
        },
        {
            icon: <Cpu className="w-8 h-8 text-blue" />,
            title: t('about.aiTitle'),
            description: t('about.aiText')
        }
    ];

    return (
        <div className="py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-20 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
                        <img
                            src="/assets/icons/nature.png"
                            alt="EcoLogic"
                            className="w-12 h-12"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl mb-4">
                        {t('about.title')}
                    </h1>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'עמותה ישראלית לחינוך סביבתי, מחברת בין טכנולוגיה לקיימות'
                            : 'An Israeli nonprofit for environmental education, connecting technology and sustainability'
                        }
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-paper rounded-full">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
                                        <p className="text-graphite/70 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Users className="w-8 h-8 text-magenta" />
                        <h2 className="font-display text-3xl">
                            {language === 'he' ? 'הצוות' : 'The Team'}
                        </h2>
                    </div>
                    <Card className="inline-block">
                        <p className="text-lg">
                            {language === 'he'
                                ? 'מהדי, אמה ולובה - סטודנטים לעיצוב בתילתן'
                                : 'Mahdi, Ama & Luba - Design students at Tiltan'
                            }
                        </p>
                        <p className="font-mono text-sm text-gray mt-2">
                            HUMAN * AI Hackathon 2026
                        </p>
                    </Card>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <div className="p-6 bg-green/10 rounded-lg">
                        <div className="font-display text-4xl text-green mb-2">10</div>
                        <div className="font-mono text-xs uppercase tracking-wider">
                            {language === 'he' ? 'שאלות' : 'Questions'}
                        </div>
                    </div>
                    <div className="p-6 bg-blue/10 rounded-lg">
                        <div className="font-display text-4xl text-blue mb-2">5</div>
                        <div className="font-mono text-xs uppercase tracking-wider">
                            {language === 'he' ? 'נושאים' : 'Topics'}
                        </div>
                    </div>
                    <div className="p-6 bg-magenta/10 rounded-lg">
                        <div className="font-display text-4xl text-magenta mb-2">2</div>
                        <div className="font-mono text-xs uppercase tracking-wider">
                            {language === 'he' ? 'שפות' : 'Languages'}
                        </div>
                    </div>
                    <div className="p-6 bg-gray/20 rounded-lg">
                        <div className="font-display text-4xl mb-2">∞</div>
                        <div className="font-mono text-xs uppercase tracking-wider">
                            {language === 'he' ? 'השפעה' : 'Impact'}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
