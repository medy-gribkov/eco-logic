import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { useLanguage } from '../../i18n';
import { collaborationOptions } from '../../data/programs';

const CollaborationCard = ({ option, index }) => {
    const { language, isRTL } = useLanguage();

    // Map collaboration types to our custom icons
    const iconTypeMap = {
        'invite-teach': 'lightbulb',
        'custom-curriculum': 'book',
        'ambassador': 'globe',
        'donate': 'heart',
    };

    const iconName = iconTypeMap[option.id] || 'checkmark';

    const colorClasses = [
        'bg-green/10 text-green hover:bg-green hover:text-paper',
        'bg-sage/20 text-green hover:bg-sage hover:text-paper',
        'bg-magenta/10 text-magenta hover:bg-magenta hover:text-paper',
        'bg-sand text-graphite hover:bg-graphite hover:text-paper',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="group"
        >
            <div className={`
                relative p-6 rounded-2xl transition-all duration-300 cursor-pointer
                ${colorClasses[index]}
            `}>
                {/* Icon - displayed directly */}
                <div className="mb-4">
                    <Icon name={iconName} size="xl" className="transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl mb-2">
                    {option.title[language]}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                    {option.description[language]}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-sm font-body">
                    <span>{language === 'he' ? 'למידע נוסף' : 'Learn more'}</span>
                    <Icon name="checkmark" size="xs" className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </div>
            </div>
        </motion.div>
    );
};

// Component for the Collaboration Section with interactive modal
const CollaborateSection = () => {
    const { language } = useLanguage();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactSuccess, setContactSuccess] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', organization: '', role: 'teacher', message: '' });

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setContactSuccess(true);
        }, 800);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Section id="collaborate" spacing="large" className="relative overflow-hidden">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-collaborate.webp)' }}
            />


            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >


                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'בואו לעשות את זה ביחד' : "Let's Do This Together"}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'יש הרבה דרכים לשתף פעולה. מצאו את זו שמתאימה לכם.'
                            : 'There are many ways to collaborate. Find the one that fits you.'}
                    </p>
                </motion.div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collaborationOptions.map((option, index) => (
                        <CollaborationCard key={option.id} option={option} index={index} />
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <div className="relative bg-paper rounded-3xl p-8 md:p-12 shadow-card border border-sand overflow-visible mt-12">
                        {/* Welcoming Teacher Image */}
                        <div className="absolute -top-24 start-1/2 -translate-x-1/2 w-48 md:w-56 pointer-events-none">
                            <img
                                src="/assets/personas/persona-teacher-welcome.webp"
                                alt={language === 'he' ? 'מורה מזמינה' : 'Teacher welcoming'}
                                className="w-full h-auto drop-shadow-lg"
                            />
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl mb-4 text-graphite pt-16">
                            {language === 'he' ? 'יש לכם רעיון אחר?' : 'Have another idea?'}
                        </h3>
                        <p className="text-graphite/70 mb-6 max-w-lg mx-auto">
                            {language === 'he'
                                ? 'אנחנו תמיד פתוחים לשיתופי פעולה יצירתיים. ספרו לנו מה יש לכם בראש.'
                                : "We're always open to creative collaborations. Tell us what you have in mind."}
                        </p>
                        <Button
                            variant="primary"
                            className="bg-magenta hover:bg-magenta/90 px-8 py-3 flex items-center gap-2 mx-auto"
                            onClick={() => setIsContactModalOpen(true)}
                        >
                            <Icon name="heart" size="xs" className="brightness-0 invert" inline />
                            {language === 'he' ? 'צרו קשר' : 'Get in Touch'}
                        </Button>
                    </div>
                </motion.div>
            </Container>

            {/* Contact Modal */}
            <Modal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                title={language === 'he' ? 'בואו נשתף פעולה' : 'Let\'s Collaborate'}
            >
                {!contactSuccess ? (
                    <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                        <p className="text-graphite/70 mb-2">
                            {language === 'he'
                                ? 'ספרו לנו על הרעיון שלכם ואיך נוכל ליצור השפעה סביבתית יחד.'
                                : 'Tell us about your idea and how we can create environmental impact together.'}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                label={language === 'he' ? 'שם מלא' : 'Full Name'}
                                value={contactForm.name}
                                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                autoComplete="name"
                                required
                            />
                            <Input
                                label={language === 'he' ? 'אימייל' : 'Email'}
                                type="email"
                                value={contactForm.email}
                                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                label={language === 'he' ? 'מוסד / ארגון' : 'Institution / Org'}
                                value={contactForm.organization}
                                onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                                autoComplete="organization"
                                placeholder={language === 'he' ? 'שם בית הספר או הארגון' : 'School or Org name'}
                            />
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-body text-graphite/70">
                                    {language === 'he' ? 'אני פונה כ...' : 'I am a...'}
                                </label>
                                <select
                                    className="w-full p-3 bg-paper border border-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/50 text-sm"
                                    onChange={(e) => setContactForm({ ...contactForm, role: e.target.value })}
                                >
                                    <option value="teacher">{language === 'he' ? 'מורה / איש חינוך' : 'Teacher / Educator'}</option>
                                    <option value="parent">{language === 'he' ? 'הורה' : 'Parent'}</option>
                                    <option value="student">{language === 'he' ? 'סטודנט / תלמיד' : 'Student'}</option>
                                    <option value="organization">{language === 'he' ? 'מוסד / עמותה' : 'Institution / NGO'}</option>
                                    <option value="other">{language === 'he' ? 'אחר' : 'Other'}</option>
                                </select>
                            </div>
                        </div>
                        <Textarea
                            label={language === 'he' ? 'החזון שלכם לשיתוף פעולה' : 'Your Vision for Collaboration'}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            placeholder={language === 'he'
                                ? 'ספרו לנו על הקהילה שלכם ואיזה סוג של פעילות אתם מדמיינים...'
                                : 'Tell us about your community and what kind of activity you imagine...'}
                            rows={4}
                            required
                        />
                        <div className="flex justify-end gap-3 mt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsContactModalOpen(false)}
                            >
                                {language === 'he' ? 'ביטול' : 'Cancel'}
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="bg-magenta hover:bg-magenta/90"
                            >
                                {language === 'he' ? 'שליחה' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <img
                            src="/assets/personas/persona-celebration.webp"
                            alt="Celebration"
                            className="w-32 h-32 object-contain mx-auto mb-4"
                        />
                        <h3 className="font-display text-2xl mb-2">
                            {language === 'he' ? 'ההודעה נשלחה!' : 'Message Sent!'}
                        </h3>
                        <p className="text-graphite/70 mb-6">
                            {language === 'he'
                                ? 'תודה שפניתם אלינו. נחזור אליכם תוך 48 שעות.'
                                : 'Thanks for reaching out. We will get back to you within 48 hours.'}
                        </p>
                        <Button
                            variant="primary"
                            onClick={() => {
                                setIsContactModalOpen(false);
                                setContactSuccess(false);
                                setContactForm({ name: '', email: '', message: '' });
                            }}
                            className="bg-green hover:bg-green/90"
                        >
                            {language === 'he' ? 'סגירה' : 'Close'}
                        </Button>
                    </div>
                )}
            </Modal>
        </Section>
    );
};

export default CollaborateSection;
