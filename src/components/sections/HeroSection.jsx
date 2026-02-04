import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Download } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import { useLanguage } from '../../i18n';

const HeroSection = () => {
    const navigate = useNavigate();
    const { t, language, isRTL } = useLanguage();
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Illustrated Background Image - Style C */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/images/hero-illustrated.png)' }}
            />

            {/* Soft gradient overlay for text readability - warm tones */}
            <div className="absolute inset-0 bg-gradient-to-b from-paper/85 via-paper/70 to-paper/90" />

            {/* Decorative floating elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[15%] right-[10%] w-24 h-24 bg-sage/20 rounded-full blur-2xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[5%] w-32 h-32 bg-green/10 rounded-full blur-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center py-24">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center mb-6"
                    >
                        <span className="inline-flex items-center gap-2 bg-sand/80 backdrop-blur-sm text-graphite px-4 py-2 rounded-full text-sm font-body">
                            <BookOpen className="w-4 h-4 text-green" />
                            {language === 'he' ? 'חינוך סביבתי לכולם' : 'Environmental Education for All'}
                        </span>
                    </motion.div>

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center mb-6"
                    >
                        <img
                            src="/assets/logo/logo.svg"
                            alt="EcoLogic"
                            className="h-16 w-auto"
                        />
                    </motion.div>

                    {/* Main Title - New tagline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-graphite"
                    >
                        {language === 'he' ? 'ללמוד מהטבע,' : 'Learning from nature,'}
                        <span className="block text-green">
                            {language === 'he' ? 'לשמור על העתיד' : 'preserving the future'}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-graphite/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {language === 'he'
                            ? 'משאבים חינוכיים חינמיים, סדנאות וחומרי לימוד לכל מי שרוצה ללמד ולהפיץ מודעות סביבתית'
                            : 'Free educational resources, workshops, and learning materials for anyone who wants to teach and spread environmental awareness'}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            onClick={() => scrollToSection('free-resources')}
                            className="px-8 py-4 text-lg flex items-center justify-center gap-2 bg-green hover:bg-green/90"
                        >
                            <Download className="w-5 h-5" />
                            {language === 'he' ? 'הורד משאבים חינם' : 'Get Free Resources'}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => scrollToSection('programs')}
                            className="px-8 py-4 text-lg border-graphite/30 text-graphite hover:bg-graphite hover:text-paper"
                        >
                            {language === 'he' ? 'גלה את התכניות שלנו' : 'Explore Our Programs'}
                            <Arrow className="w-5 h-5 ms-2" />
                        </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-graphite/60"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green rounded-full" />
                            <span>{language === 'he' ? 'ארגון ללא מטרות רווח' : 'Non-profit organization'}</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-graphite/20" />
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-sage rounded-full" />
                            <span>{language === 'he' ? 'חומרים ממוחזרים בלבד' : '100% recycled materials'}</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-graphite/20" />
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-burgundy rounded-full" />
                            <span>{language === 'he' ? 'פתוח לכל הגילאים' : 'Open to all ages'}</span>
                        </div>
                    </motion.div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-graphite/30 rounded-full flex justify-center cursor-pointer"
                    onClick={() => scrollToSection('about')}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-green/60 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
