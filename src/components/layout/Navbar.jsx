import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n';
import LanguageToggle from '../ui/LanguageToggle';
import Icon from '../ui/Icon';
import NavDropdown from '../ui/NavDropdown';

// Mobile dropdown sub-component
const MobileDropdown = ({ label, items, language, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const t = (obj) => obj?.[language] || obj?.['en'] || obj;

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-start py-3 px-4 rounded-xl font-body text-sm text-graphite hover:bg-sand/50 transition-colors"
            >
                <span>{label}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="ps-4 space-y-1 pb-2">
                            {items.map((item, index) => (
                                <button
                                    key={item.path || index}
                                    onClick={() => {
                                        navigate(item.path);
                                        onNavigate?.();
                                    }}
                                    className="flex items-center gap-2 w-full text-start py-2 px-4 rounded-lg font-body text-sm text-graphite/70 hover:text-graphite hover:bg-sand/30 transition-colors"
                                >
                                    {t(item.label)}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Navbar = () => {
    const { language } = useLanguage();
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

    // Navigation items - logical flow: Learn → Explore → Engage → Act → More
    const navigationItems = [
        { id: 'about', type: 'scroll', label: { he: 'עלינו', en: 'About' } },
        { id: 'features', type: 'scroll', label: { he: 'איך זה עובד', en: 'How It Works' } },
        { id: 'programs', type: 'scroll', label: { he: 'תכניות', en: 'Programs' } },
        { id: 'free-resources', type: 'scroll', label: { he: 'משאבים', en: 'Resources' } },
        { id: 'quiz-preview', type: 'scroll', label: { he: 'נסו שיעור', en: 'Try a Lesson' } },
        { id: 'collaborate', type: 'scroll', label: { he: 'שותפויות', en: 'Partner' } },
        {
            id: 'more',
            type: 'dropdown',
            label: { he: 'עוד', en: 'More' },
            items: [
                { path: '/volunteer', label: { he: 'התנדבות', en: 'Volunteer' } },
                { path: '/media-kit', label: { he: 'ערכת מדיה', en: 'Media Kit' } }
            ]
        },
    ];

    // Helper to get label based on language
    const t = (obj) => obj?.[language] || obj?.['en'] || obj;

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
                    className="h-9 md:h-10 w-auto"

                    {/* Decorative Vine - Continuous Drape Pattern */}
                    <div
                        className="absolute top-0 left-0 right-0 h-14 pointer-events-none opacity-15 z-0 hidden md:block"
                        style={{
                            backgroundImage: 'url(/assets/decor/vine-drape.webp)',
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: 'auto 100%',
                            backgroundPosition: 'top center'
                        }}
                    />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigationItems.map((item) => {
                            if (item.type === 'dropdown') {
                                return (
                                    <NavDropdown
                                        key={item.id}
                                        label={item.label}
                                        items={item.items}
                                    />
                                );
                            }

                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
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
                                    {t(item.label)}
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
                            {navigationItems.map((item) => {
                                if (item.type === 'dropdown') {
                                    return (
                                        <MobileDropdown
                                            key={item.id}
                                            label={t(item.label)}
                                            items={item.items}
                                            language={language}
                                            onNavigate={() => setMobileMenuOpen(false)}
                                        />
                                    );
                                }

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`
                                            flex items-center gap-3 w-full text-start py-3 px-4 rounded-xl font-body text-sm transition-colors
                                            ${activeSection === item.id
                                                ? 'text-paper bg-magenta'
                                                : 'text-graphite hover:bg-sand/50'
                                            }
                                        `}
                                    >
                                        {item.id === 'quiz-preview' && <Icon name="book" size="xs" inline />}
                                        {t(item.label)}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
