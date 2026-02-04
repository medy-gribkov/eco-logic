import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';
import { useLanguage } from '../../i18n';
import LanguageToggle from '../ui/LanguageToggle';

const Navbar = () => {
    const { t, language, isRTL } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    const isHomePage = location.pathname === '/';

    // Track scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section with IntersectionObserver
    useEffect(() => {
        if (!isHomePage) return;

        const sectionIds = ['hero', 'about', 'features', 'free-resources', 'programs', 'quiz-preview', 'collaborate'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-80px 0px -50% 0px'
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [isHomePage]);

    const scrollToSection = (sectionId) => {
        if (!isHomePage) {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileMenuOpen(false);
    };

    // Education-focused navigation
    const scrollNavLinks = [
        { id: 'about', label: language === 'he' ? 'מי אנחנו' : 'About' },
        { id: 'free-resources', label: language === 'he' ? 'משאבים חינם' : 'Free Resources' },
        { id: 'programs', label: language === 'he' ? 'תכניות' : 'Programs' },
        { id: 'collaborate', label: language === 'he' ? 'שיתוף פעולה' : 'Collaborate' },
    ];

    return (
        <nav className={`
            sticky top-0 z-50 transition-all duration-300
            ${scrolled
                ? 'bg-paper/98 backdrop-blur-md shadow-sm border-b border-graphite/10'
                : 'bg-paper/80 backdrop-blur-sm'
            }
        `}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/assets/logo/logo.svg"
                            alt="EcoLogic"
                            className="h-9 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {scrollNavLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`
                                    relative px-4 py-2 font-body text-sm transition-colors rounded-lg
                                    ${activeSection === link.id
                                        ? 'text-green'
                                        : 'text-graphite/70 hover:text-graphite hover:bg-sand/50'
                                    }
                                `}
                            >
                                {link.label}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-green rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}

                        <div className="w-px h-6 bg-gray/30 mx-2" />

                        {/* Try Interactive Lesson - subtle CTA */}
                        <button
                            onClick={() => scrollToSection('quiz-preview')}
                            className="flex items-center gap-2 px-4 py-2 bg-green/10 text-green font-body text-sm rounded-lg hover:bg-green/20 transition-colors"
                        >
                            <BookOpen className="w-4 h-4" />
                            {language === 'he' ? 'נסו שיעור' : 'Try Lesson'}
                        </button>

                        <div className="w-px h-6 bg-gray/30 mx-2" />
                        <LanguageToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <LanguageToggle className="!px-2 !py-1 text-xs" />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 hover:bg-sand/50 rounded-lg transition-colors"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-graphite/10 bg-paper"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {scrollNavLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`
                                        block w-full text-start py-3 px-4 rounded-lg font-body text-sm transition-colors
                                        ${activeSection === link.id
                                            ? 'text-green bg-green/10'
                                            : 'text-graphite hover:bg-sand/50'
                                        }
                                    `}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('quiz-preview')}
                                className="flex items-center gap-2 w-full py-3 px-4 rounded-lg font-body text-sm bg-green/10 text-green mt-2"
                            >
                                <BookOpen className="w-4 h-4" />
                                {language === 'he' ? 'נסו שיעור אינטראקטיבי' : 'Try Interactive Lesson'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
