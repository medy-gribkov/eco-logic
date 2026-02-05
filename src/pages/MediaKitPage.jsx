import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import PressKitSection from '../components/sections/PressKitSection';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Modal from '../components/ui/Modal';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { useLanguage } from '../i18n';

const MediaKitPage = () => {
    const { language } = useLanguage();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        organization: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const resetContactForm = () => {
        setContactForm({ name: '', email: '', organization: '', message: '' });
        setIsSuccess(false);
        setIsContactModalOpen(false);
    };

    // Quick download items for sticky bar
    const quickDownloads = [
        { label: { he: 'לוגו SVG', en: 'Logo SVG' }, href: '/assets/logo/logo.svg', icon: 'leaf' },
        { label: { he: 'לוגו PNG', en: 'Logo PNG' }, href: '/assets/logo/logo.png', icon: 'leaf' },
    ];

    // Brand preview gallery items
    const galleryItems = [
        { src: '/assets/logo/logo.svg', label: { he: 'לוגו ראשי', en: 'Primary Logo' }, type: 'logo' },
        { src: '/assets/personas/persona-teacher-welcome.webp', label: { he: 'פרסונה - מורה', en: 'Persona - Teacher' }, type: 'persona' },
        { src: '/assets/personas/persona-celebration.webp', label: { he: 'פרסונה - חגיגה', en: 'Persona - Celebration' }, type: 'persona' },
        { src: '/assets/images/products/sprout-kit-box.webp', label: { he: 'ערכת שתילה', en: 'Seedling Kit' }, type: 'product' },
        { src: '/assets/images/products/curriculum-cards.webp', label: { he: 'כרטיסי לימוד', en: 'Curriculum Cards' }, type: 'product' },
        { src: '/assets/backgrounds/bg-hero.webp', label: { he: 'רקע ראשי', en: 'Hero Background' }, type: 'background' },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/assets/backgrounds/bg-features.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-paper/90 via-paper/80 to-paper" />

                <Container className="relative z-10 pt-32 pb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Logo Display */}
                            <motion.img
                                src="/assets/logo/logo.svg"
                                alt="EcoLogic"
                                className="h-24 md:h-32 w-auto mx-auto mb-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />

                            <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full mb-6">
                                <Icon name="book" size="xs" inline />
                                <span className="font-body text-sm uppercase tracking-wider">
                                    {language === 'he' ? 'ערכת מדיה' : 'Media Kit'}
                                </span>
                            </div>

                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 text-graphite">
                                {language === 'he' ? 'משאבי עיתונות ומדיה' : 'Press & Media Resources'}
                            </h1>

                            <p className="text-xl text-graphite/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                                {language === 'he'
                                    ? 'כל מה שצריך כדי לכתוב עלינו, לשתף את הסיפור שלנו, או לשתף פעולה. לוגואים, תמונות, מידע ועוד.'
                                    : 'Everything you need to write about us, share our story, or collaborate. Logos, images, information and more.'}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    className="bg-magenta hover:bg-magenta/90 flex items-center gap-2"
                                    onClick={() => {
                                        const element = document.getElementById('press-kit');
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <Icon name="download" size="xs" className="brightness-0 invert" inline />
                                    {language === 'he' ? 'להורדות' : 'Get Downloads'}
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-graphite/30"
                                    onClick={() => setIsContactModalOpen(true)}
                                >
                                    {language === 'he' ? 'יצירת קשר לעיתונות' : 'Press Contact'}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Quick Downloads Bar - Non-sticky, inline section */}
            <section className="bg-sand/30 border-b border-sand">
                <Container>
                    <div className="flex flex-wrap items-center justify-center gap-3 py-4">
                        <span className="text-sm font-body text-graphite/60 whitespace-nowrap">
                            {language === 'he' ? 'הורדה מהירה:' : 'Quick Download:'}
                        </span>
                        {quickDownloads.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-paper hover:bg-paper/80 rounded-lg transition-colors text-sm font-body text-graphite shadow-sm border border-sand/50"
                            >
                                <Icon name={item.icon} size="xs" inline />
                                {item.label[language]}
                            </a>
                        ))}
                        <a
                            href="mailto:press@ecologic.org.il"
                            className="flex items-center gap-2 px-4 py-2 bg-magenta text-paper hover:bg-magenta/90 rounded-lg transition-colors text-sm font-body shadow-sm"
                        >
                            <Icon name="heart" size="xs" className="brightness-0 invert" inline />
                            {language === 'he' ? 'פנייה לעיתונות' : 'Press Inquiry'}
                        </a>
                    </div>
                </Container>
            </section>

            {/* Main Press Kit Section */}
            <PressKitSection isFullPage />

            {/* Brand Preview Gallery */}
            <Section spacing="large" className="bg-sand/20">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full mb-6">
                            <Icon name="ideas" size="xs" inline />
                            <span className="font-body text-sm uppercase tracking-wider">
                                {language === 'he' ? 'תצוגה מקדימה' : 'Preview'}
                            </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl mb-4 text-graphite">
                            {language === 'he' ? 'תצוגה מקדימה של נכסים' : 'Asset Preview Gallery'}
                        </h2>
                        <p className="text-graphite/60 max-w-2xl mx-auto">
                            {language === 'he'
                                ? 'הצצה לנכסי המדיה שלנו - לוגואים, פרסונות, תמונות מוצרים ועוד'
                                : 'A glimpse at our media assets - logos, personas, product images and more'}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-paper/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-card border-2 border-sand"
                            >
                                <div className="aspect-[4/3] p-6 flex items-center justify-center">
                                    <img
                                        src={item.src}
                                        alt={item.label[language]}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="text-paper font-body text-sm">{item.label[language]}</div>
                                        <div className="text-paper/60 text-xs capitalize">{item.type}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-8"
                    >
                        <Button
                            variant="secondary"
                            onClick={() => {
                                const element = document.getElementById('press-kit');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2"
                        >
                            <Icon name="download" size="xs" inline />
                            {language === 'he' ? 'הורד את כל הנכסים' : 'Download All Assets'}
                        </Button>
                    </motion.div>
                </Container>
            </Section>

            {/* Press Contact CTA */}
            <Section spacing="large" className="bg-magenta/5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="bg-paper/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border-2 border-magenta/20">
                            <img
                                src="/assets/personas/persona-modal-guide.webp"
                                alt="Press Contact"
                                className="w-24 h-24 object-contain mx-auto mb-6"
                            />
                            <h2 className="font-display text-3xl md:text-4xl mb-4 text-graphite">
                                {language === 'he' ? 'צריכים עוד מידע?' : 'Need More Information?'}
                            </h2>
                            <p className="text-graphite/70 mb-6 max-w-lg mx-auto">
                                {language === 'he'
                                    ? 'לראיונות, ציטוטים, או מידע נוסף על EcoLogic - אנחנו כאן לעזור. אנחנו מגיבים תוך 24 שעות.'
                                    : 'For interviews, quotes, or additional information about EcoLogic - we\'re here to help. We respond within 24 hours.'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="primary"
                                    className="bg-magenta hover:bg-magenta/90"
                                    onClick={() => setIsContactModalOpen(true)}
                                >
                                    {language === 'he' ? 'שלחו פנייה' : 'Send Inquiry'}
                                </Button>
                                <a href="mailto:press@ecologic.org.il">
                                    <Button variant="outline" className="border-graphite/30 w-full sm:w-auto">
                                        press@ecologic.org.il
                                    </Button>
                                </a>
                            </div>
                            <p className="text-sm text-graphite/50 mt-6">
                                {language === 'he' ? 'טלפון: +972-4-XXX-XXXX' : 'Phone: +972-4-XXX-XXXX'}
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Press Contact Modal */}
            <Modal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title={language === 'he' ? 'פנייה לעיתונות' : 'Press Inquiry'}
                size="medium"
            >
                {!isSuccess ? (
                    <form onSubmit={handleContactSubmit} className="space-y-5">
                        <div className="flex items-start gap-4 bg-magenta/10 p-4 rounded-xl mb-6">
                            <img
                                src="/assets/personas/persona-modal-guide.webp"
                                alt="Guide"
                                className="w-16 h-16 object-contain flex-shrink-0"
                            />
                            <p className="text-graphite/80 text-sm">
                                {language === 'he'
                                    ? 'נשמח לעזור לכם עם כל פנייה עיתונאית. מלאו את הפרטים ונחזור אליכם בהקדם.'
                                    : 'We\'d love to help with your press inquiry. Fill in the details and we\'ll get back to you soon.'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                label={language === 'he' ? 'שם מלא' : 'Full Name'}
                                value={contactForm.name}
                                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                                required
                            />
                            <Input
                                label={language === 'he' ? 'אימייל' : 'Email'}
                                type="email"
                                value={contactForm.email}
                                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                                required
                            />
                        </div>

                        <Input
                            label={language === 'he' ? 'ארגון / כלי תקשורת' : 'Organization / Media Outlet'}
                            value={contactForm.organization}
                            onChange={(e) => setContactForm(prev => ({ ...prev, organization: e.target.value }))}
                        />

                        <Textarea
                            label={language === 'he' ? 'במה נוכל לעזור?' : 'How can we help?'}
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                            required
                        />

                        <div className="flex gap-3 pt-4 border-t border-sand">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsContactModalOpen(false)}
                                className="flex-1"
                            >
                                {language === 'he' ? 'ביטול' : 'Cancel'}
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="flex-[2] bg-magenta hover:bg-magenta/90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? (language === 'he' ? 'שולח...' : 'Sending...')
                                    : (language === 'he' ? 'שלח פנייה' : 'Send Inquiry')}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-magenta/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Icon name="checkmark" size="xl" className="text-magenta" />
                        </motion.div>
                        <h3 className="font-display text-2xl mb-3 text-graphite">
                            {language === 'he' ? 'תודה על הפנייה!' : 'Thanks for Reaching Out!'}
                        </h3>
                        <p className="text-graphite/70 mb-6 max-w-md mx-auto">
                            {language === 'he'
                                ? 'קיבלנו את ההודעה שלכם ונחזור אליכם תוך 24 שעות.'
                                : 'We received your message and will get back to you within 24 hours.'}
                        </p>
                        <Button
                            variant="primary"
                            onClick={resetContactForm}
                            className="bg-magenta hover:bg-magenta/90"
                        >
                            {language === 'he' ? 'סגירה' : 'Close'}
                        </Button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default MediaKitPage;
