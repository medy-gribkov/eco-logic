import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { useLanguage } from '../../i18n';

const AboutSection = () => {
    const { language, isRTL } = useLanguage();

    const values = [
        {
            icon: BookOpen,
            title: { he: 'חינוך נגיש', en: 'Accessible Education' },
            description: { he: 'חומרי לימוד חינמיים לכל אחד, בכל גיל', en: 'Free learning materials for everyone, at any age' }
        },
        {
            icon: Heart,
            title: { he: 'ללא מטרות רווח', en: 'Non-Profit' },
            description: { he: 'כל ההכנסות חוזרות לפעילות חינוכית', en: 'All proceeds go back to educational activities' }
        },
        {
            icon: Globe,
            title: { he: 'השפעה גלובלית', en: 'Global Impact' },
            description: { he: 'מקהילות מקומיות לשינוי עולמי', en: 'From local communities to global change' }
        }
    ];

    return (
        <Section id="about" spacing="large" className="bg-gradient-to-b from-paper via-sand/20 to-paper">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Background decorative shape */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-green/10 rounded-3xl transform -rotate-2" />

                            {/* Main image container */}
                            <div className="relative bg-paper rounded-3xl p-4 shadow-elevated">
                                <img
                                    src="/assets/images/hero-illustrated.png"
                                    alt={language === 'he' ? 'חינוך סביבתי' : 'Environmental education'}
                                    className="w-full h-auto rounded-2xl"
                                />

                                {/* Floating stat card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-4 -end-4 bg-paper rounded-xl p-4 shadow-lg border border-sand"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                                            <Users className="w-6 h-6 text-green" />
                                        </div>
                                        <div>
                                            <div className="font-display text-2xl text-graphite">10K+</div>
                                            <div className="text-sm text-graphite/60">
                                                {language === 'he' ? 'תלמידים למדו' : 'Students taught'}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative leaf element */}
                            <div className="absolute -top-6 -start-6 text-5xl opacity-60">🌿</div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-6">
                            <span className="font-body text-sm uppercase tracking-wider">
                                {language === 'he' ? 'מי אנחנו' : 'Who We Are'}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-4xl md:text-5xl mb-6 text-graphite leading-tight">
                            {language === 'he'
                                ? 'ללמד את הדור הבא לשמור על העולם'
                                : 'Teaching the next generation to protect our world'}
                        </h2>

                        {/* Mission text */}
                        <p className="text-lg text-graphite/70 mb-8 leading-relaxed">
                            {language === 'he'
                                ? 'EcoLogic הוא ארגון ללא מטרות רווח שנוסד עם מטרה פשוטה: להפוך חינוך סביבתי לנגיש לכולם. אנחנו מפתחים חומרי לימוד, סדנאות ותכניות לימודים שמלמדות ילדים ומבוגרים על הקשר בינינו לסביבה.'
                                : 'EcoLogic is a non-profit organization founded with a simple mission: to make environmental education accessible to everyone. We develop learning materials, workshops, and curricula that teach children and adults about our connection to the environment.'}
                        </p>

                        {/* Values */}
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-sand/30 rounded-xl hover:bg-sand/50 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <value.icon className="w-5 h-5 text-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg text-graphite mb-1">
                                            {value.title[language]}
                                        </h3>
                                        <p className="text-sm text-graphite/60">
                                            {value.description[language]}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default AboutSection;
