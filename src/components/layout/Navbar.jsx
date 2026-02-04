import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../i18n';
import LanguageToggle from '../ui/LanguageToggle';
import Icon from '../ui/Icon';

const Navbar = () => {
    const { language, isRTL } = useLanguage();
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

        const sectionIds = ['hero', 'about', 'features', 'programs', 'free-resources', 'quiz-preview', 'collaborate'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '-100px 0px -40% 0px'
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

    // Complete navigation with all sections in order
    const scrollNavLinks = [
        { id: 'about', label: language === 'he' ? 'עלינו' : 'About' },
        { id: 'features', label: language === 'he' ? 'איך זה עובד' : 'How It Works' },
        { id: 'free-resources', label: language === 'he' ? 'משאבים' : 'Resources' },
        { id: 'programs', label: language === 'he' ? 'תכניות' : 'Programs' },
        { id: 'quiz-preview', label: language === 'he' ? 'נסו שיעור' : 'Try Lesson' },
        { id: 'collaborate', label: language === 'he' ? 'שיתוף פעולה' : 'Partner' },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            {/* Pill-shaped navbar container */}
            <div className={`
                relative rounded-full transition-all duration-500
                ${scrolled
                    ? 'bg-paper/95 backdrop-blur-lg shadow-elevated'
                    : 'bg-paper/80 backdrop-blur-md shadow-card'
                }
            `}>
                <div className="flex justify-between items-center px-4 md:px-6 py-2 md:py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 z-10">
                        <img
                            src="/assets/logo/logo.svg"
                            alt="EcoLogic"
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {scrollNavLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`
                                        relative px-3 py-1.5 font-body text-sm transition-colors duration-200 rounded-full z-10
                                        ${isActive ? 'text-paper' : 'text-graphite/70 hover:text-graphite'}
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-magenta rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right side: Language toggle */}
                    <div className="flex items-center gap-2 z-10">
                        <LanguageToggle className="!px-3 !py-1.5 !text-sm !rounded-full" />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-sand/50 rounded-full transition-colors"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden mt-2 mx-4 bg-paper/95 backdrop-blur-lg rounded-2xl shadow-elevated overflow-hidden"
                    >
                        <div className="p-4 space-y-1">
                            {scrollNavLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`
                                        flex items-center gap-3 w-full text-start py-3 px-4 rounded-xl font-body text-sm transition-colors
                                        ${activeSection === link.id
                                            ? 'text-paper bg-magenta'
                                            : 'text-graphite hover:bg-sand/50'
                                        }
                                    `}
                                >
                                    {link.id === 'quiz-preview' && <Icon name="book" size="xs" inline />}
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
