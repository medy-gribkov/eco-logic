import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../../i18n';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const Footer = () => {
    const { isRTL, language } = useLanguage();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const navLinks = [
        { id: 'about', label: isRTL ? 'אודות' : 'About' },
        { id: 'features', label: isRTL ? 'מה אנחנו עושים' : 'Features' },
        { id: 'free-resources', label: isRTL ? 'משאבים חינם' : 'Free Resources' },
        { id: 'programs', label: isRTL ? 'תכניות' : 'Programs' },
        { id: 'collaborate', label: isRTL ? 'שיתוף פעולה' : 'Collaborate' },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-bottom bg-no-repeat pointer-events-none"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-footer.png)' }}
            />

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <img
                            src="/assets/logo/logo.svg"
                            alt="EcoLogic"
                            className="h-12 w-auto mb-6"
                        />
                        <p className="text-graphite/80 text-lg leading-relaxed mb-6 font-display">
                            {language === 'he'
                                ? 'ללמוד מהטבע, לשמר את העתיד'
                                : 'Learning from nature, preserving the future'}
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-sm text-graphite/70">
                                <span className="bg-green/10 p-1.5 rounded-full text-green">
                                    <Icon name="checkmark" size="xs" />
                                </span>
                                <span>{language === 'he' ? 'עמותה רשומה' : 'Registered Non-profit'}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-graphite/70">
                                <span className="bg-green/10 p-1.5 rounded-full text-green">
                                    <Icon name="recycle" size="xs" />
                                </span>
                                <span>{language === 'he' ? 'חומרים ממוחזרים' : 'Recycled Materials'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigate Column */}
                    <div className="md:col-span-3">
                        <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-graphite border-b border-graphite/10 pb-2 inline-block">
                            {isRTL ? 'ניווט' : 'Navigate'}
                        </h4>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-graphite/70 hover:text-magenta transition-colors text-start text-base flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green/30 group-hover:bg-magenta transition-colors" />
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Connect Column */}
                    <div className="md:col-span-2">
                        <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-graphite border-b border-graphite/10 pb-2 inline-block">
                            {isRTL ? 'עקבו' : 'Connect'}
                        </h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-graphite/70 hover:text-magenta transition-colors flex items-center gap-2 group">
                                <Icon name="globe" size="xs" className="opacity-50 group-hover:opacity-100" />
                                Instagram
                            </a>
                            <a href="#" className="text-graphite/70 hover:text-magenta transition-colors flex items-center gap-2 group">
                                <Icon name="globe" size="xs" className="opacity-50 group-hover:opacity-100" />
                                Facebook
                            </a>
                            <a href="#" className="text-graphite/70 hover:text-magenta transition-colors flex items-center gap-2 group">
                                <Icon name="ideas" size="xs" className="opacity-50 group-hover:opacity-100" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-3">
                        <h4 className="font-display text-xl uppercase tracking-wider mb-6 text-graphite border-b border-graphite/10 pb-2 inline-block">
                            {language === 'he' ? 'הישארו מעודכנים' : 'Stay Updated'}
                        </h4>
                        <p className="text-graphite/60 text-sm mb-4 leading-relaxed">
                            {language === 'he'
                                ? 'קבלו טיפים, משאבים חינם ועדכונים על פעילויות לחינוך סביבתי'
                                : 'Get free tips, resources, and updates on environmental education'}
                        </p>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    placeholder={language === 'he' ? 'האימייל שלכם' : 'Your email'}
                                    className="w-full bg-paper border border-gray/30 px-4 py-3 rounded-xl text-sm placeholder:text-graphite/40 focus:outline-none focus:ring-2 focus:ring-magenta/50"
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-paper px-4 py-3 rounded-xl hover:opacity-90 transition-colors flex-shrink-0 flex items-center justify-center shadow-lg"
                                style={{ backgroundColor: '#807586' }}
                                aria-label="Subscribe"
                            >
                                <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-gray/10 bg-paper/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-graphite/50 text-sm">
                            © 2024 EcoLogic. {language === 'he' ? 'כל הזכויות שמורות' : 'All rights reserved'}
                        </p>
                        <div className="flex items-center gap-2 text-graphite/40 text-sm">
                            <Icon name="recycle-heart" size="xs" />
                            <span>{language === 'he' ? 'עשוי מאהבה לכדור הארץ' : 'Made with love for Earth'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Success Modal */}
            <Modal
                isOpen={subscribed}
                onClose={() => setSubscribed(false)}
                title={language === 'he' ? 'תודה!' : 'Thank You!'}
                size="small"
            >
                <div className="text-center py-6">
                    <img
                        src="/assets/personas/persona-celebration.png"
                        alt="Celebration"
                        className="w-28 h-28 object-contain mx-auto mb-4"
                    />
                    <h3 className="font-display text-xl mb-2">
                        {language === 'he' ? 'נרשמת בהצלחה' : 'You are subscribed!'}
                    </h3>
                    <p className="text-graphite/70 mb-6 text-sm">
                        {language === 'he'
                            ? 'אנחנו נשלח עדכונים מעניינים (ולא נספים לכם את המייל).'
                            : "We'll send you interesting updates (and won't spam your inbox)."}
                    </p>
                    <Button
                        variant="primary"
                        onClick={() => setSubscribed(false)}
                        className="bg-magenta hover:bg-magenta/90 w-full"
                    >
                        {language === 'he' ? 'מעולה' : 'Awesome'}
                    </Button>
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
