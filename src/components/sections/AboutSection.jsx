import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';

const AboutSection = () => {
    const { language, isRTL } = useLanguage();

    // Animation variants for smooth scroll reveals
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Section
            id="about"
            spacing="large"
            className="relative overflow-hidden"
        >
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-about.webp)' }}
            />


            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side - Visual with floating card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main image container */}
                            <div className="relative bg-paper rounded-3xl p-3 shadow-elevated">
                                <img
                                    src="/assets/images/persona-planting.webp"
                                    alt={language === 'he' ? 'ילדים לומדים על הטבע' : 'Children learning about nature'}
                                    className="w-full h-auto rounded-2xl"
                                    loading="lazy"
                                />

                                {/* Floating secondary teacher image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="absolute -bottom-12 -start-12 w-2/3 max-w-[200px]"
                                >
                                    <img
                                        src="/assets/personas/persona-teacher-pointing.webp"
                                        alt={language === 'he' ? 'מורה מסבירה' : 'Teacher explaining'}
                                        className="w-full h-auto drop-shadow-xl z-20"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>

                            {/* Decorative leaf icon - no container */}
                            <div className="absolute -top-4 -start-4">
                                <Icon name="leaf" size="xl" alt="Decorative leaf" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-8"
                    >
                        {/* Title - Moved up since badge is gone */}
                        <h2 className="font-display text-5xl md:text-6xl text-graphite leading-none -mt-4">
                            {language === 'he' ? 'מי אנחנו' : 'About EcoLogic'}
                        </h2>

                        {/* Mission block */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Icon name="recycle-heart" size="lg" className="flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-display text-xl text-graphite mb-2">
                                        {language === 'he' ? 'המשימה שלנו' : 'Our Mission'}
                                    </h3>
                                    <p className="text-graphite/70 leading-relaxed">
                                        {language === 'he'
                                            ? 'להפוך את ההשפעה הסביבתית הבלתי נראית לנראית, ולהעניק לכל אחד את הכוח לקבל החלטות מודעות יותר.'
                                            : 'To make invisible environmental impact visible, and empower everyone to make more conscious decisions.'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Icon name="lightbulb" size="lg" className="flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-display text-xl text-graphite mb-2">
                                        {language === 'he' ? 'הקונספט' : 'The Concept'}
                                    </h3>
                                    <p className="text-graphite/70 leading-relaxed">
                                        {language === 'he'
                                            ? '"השפעה בלתי נראית" בוחנת איך הבחירות היומיות שלנו - מה אנחנו אוכלים, איך אנחנו נוסעים, מה אנחנו קונים - משפיעות על הסביבה.'
                                            : '"Invisible Impact" explores how our daily choices - what we eat, how we travel, what we buy - affect the environment.'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Icon name="ideas" size="lg" className="flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-display text-xl text-graphite mb-2">
                                        {language === 'he' ? 'איך אנחנו עושים את זה' : 'How We Do It'}
                                    </h3>
                                    <p className="text-graphite/70 leading-relaxed">
                                        {language === 'he'
                                            ? 'באמצעות שילוב של טכנולוגיה, עיצוב ונתונים, אנחנו יוצרים כלים חינוכיים נגישים ומרתקים שמניעים לפעולה חיובית.'
                                            : 'By combining technology, design, and data, we create accessible and engaging educational tools that drive positive action.'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="border-s-4 border-magenta ps-6 py-2 italic text-graphite/60">
                            {language === 'he'
                                ? '"כל שאלה שאתם עונים מקרבת אתכם צעד אחד להבנת הקשר שלנו עם כדור הארץ."'
                                : '"Every question you answer brings you one step closer to understanding our connection with Earth."'}
                        </blockquote>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default AboutSection;
