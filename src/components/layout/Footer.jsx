import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, Send } from 'lucide-react';
import { useLanguage } from '../../i18n';

const Footer = () => {
    const { t, isRTL } = useLanguage();
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
        { id: 'quiz-preview', label: isRTL ? 'חידון' : 'Quiz' },
        { id: 'stats', label: isRTL ? 'השפעה' : 'Impact' },
        { id: 'brand', label: isRTL ? 'מותג' : 'Brand' },
        { id: 'process', label: isRTL ? 'תהליך' : 'Process', isPage: true },
    ];

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="bg-graphite text-paper">
            {/* Main Footer Content - Compact */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-3">
                        <img
                            src="/assets/logo/logo.svg"
                            alt="EcoLogic"
                            className="h-10 w-auto brightness-0 invert mb-3"
                        />
                        <p className="text-paper/60 text-sm leading-relaxed">
                            {t('common.tagline')}
                        </p>
                    </div>

                    {/* Navigate Column - 2 columns */}
                    <div className="md:col-span-4">
                        <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-paper/80">
                            {isRTL ? 'ניווט' : 'Navigate'}
                        </h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {navLinks.map((link) => (
                                link.isPage ? (
                                    <Link
                                        key={link.id}
                                        to={`/${link.id}`}
                                        className="text-paper/60 hover:text-paper transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-paper/60 hover:text-paper transition-colors text-sm text-start"
                                    >
                                        {link.label}
                                    </button>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Connect Column */}
                    <div className="md:col-span-2">
                        <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-paper/80">
                            {isRTL ? 'עקבו' : 'Connect'}
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-full bg-paper/10 flex items-center justify-center hover:bg-paper/20 transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-3">
                        <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-paper/80">
                            {t('newsletter.title')}
                        </h4>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('newsletter.placeholder')}
                                className="flex-1 bg-paper/10 px-3 py-2 rounded-sm text-sm placeholder:text-paper/40 focus:outline-none focus:ring-1 focus:ring-green min-w-0"
                            />
                            <button
                                type="submit"
                                className="bg-green px-3 py-2 rounded-sm hover:bg-green/90 transition-colors flex-shrink-0"
                                aria-label={isRTL ? 'הרשמה' : 'Subscribe'}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                        {subscribed && (
                            <p className="text-green text-xs mt-2">
                                {t('newsletter.success')}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-paper/10">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-paper/40 text-xs">
                            {t('footer.copyright')}
                        </p>
                        <p className="text-paper/30 text-xs">
                            {t('footer.hackathon')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
