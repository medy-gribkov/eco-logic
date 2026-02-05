import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { useLanguage } from '../../i18n';

// Volunteer Section - Join our eco-education mission
// isFullPage: when true, shows full section (for /volunteer page)
// when false/undefined, shows compact teaser (for homepage)
const VolunteerSection = ({ isFullPage = false }) => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        roles: [],
        availability: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    // Form Handlers
    const handleInputChange = (field, value) => {
        setFormState(prev => ({ ...prev, [field]: value }));
    };

    const handleRoleToggle = (role) => {
        setFormState(prev => {
            const newRoles = prev.roles.includes(role)
                ? prev.roles.filter(r => r !== role)
                : [...prev.roles, role];
            return { ...prev, roles: newRoles };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const resetForm = () => {
        setFormState({
            name: '',
            email: '',
            phone: '',
            city: '',
            roles: [],
            availability: '',
            message: ''
        });
        setIsSuccess(false);
        setIsModalOpen(false);
    };

    // Data Config
    const volunteerRoles = [
        {
            id: 'ambassador',
            iconName: 'globe',
            title: { he: 'שגריר קהילתי', en: 'Community Ambassador' },
            description: { he: 'הובלת פעילויות שתילה וחינוך סביבתי בקהילה שלך', en: 'Lead planting activities and environmental education in your community' },
            color: 'bg-green/10 text-green'
        },
        {
            id: 'education',
            iconName: 'lightbulb',
            title: { he: 'מתנדב חינוכי', en: 'Educational Volunteer' },
            description: { he: 'סיוע בסדנאות ופעילויות עם ערכות השתילה שלנו', en: 'Assist in workshops and activities with our seedling kits' },
            color: 'bg-sage/20 text-green'
        },
        {
            id: 'content',
            iconName: 'book',
            title: { he: 'תורם תוכן', en: 'Content Contributor' },
            description: { he: 'כתיבת מדריכים ותכניות לימודים סביבתיות', en: 'Write environmental guides and curriculum materials' },
            color: 'bg-magenta/10 text-magenta'
        },
        {
            id: 'mentor',
            iconName: 'seedling',
            title: { he: 'מנטור ירוק', en: 'Green Mentor' },
            description: { he: 'ליווי כיתות בפרויקטי גידול והנבטה', en: 'Guide classrooms through growing and sprouting projects' },
            color: 'bg-sand text-graphite'
        }
    ];

    const values = [
        { iconName: 'leaf', title: { he: 'קיימות', en: 'Sustainability' }, description: { he: 'פועלים לשמירה על הסביבה', en: 'Acting to preserve the environment' } },
        { iconName: 'recycle-heart', title: { he: 'נגישות', en: 'Accessibility' }, description: { he: 'חינוך סביבתי חינם לכולם', en: 'Free environmental education for all' } },
        { iconName: 'checkmark', title: { he: 'שקיפות', en: 'Transparency' }, description: { he: 'פעילות מבוססת מדע ועובדות', en: 'Science and fact-based activity' } },
    ];

    const regions = [
        { value: 'north', label: { he: 'צפון', en: 'North' } },
        { value: 'haifa', label: { he: 'חיפה והקריות', en: 'Haifa & Krayot' } },
        { value: 'center', label: { he: 'מרכז וגוש דן', en: 'Center & Tel Aviv' } },
        { value: 'jerusalem', label: { he: 'ירושלים והסביבה', en: 'Jerusalem Area' } },
        { value: 'south', label: { he: 'דרום', en: 'South' } },
        { value: 'sharon', label: { he: 'השרון', en: 'Sharon' } }
    ];

    const availabilityOptions = [
        { value: 'weekdays', label: { he: 'ימי חול (בקרים)', en: 'Weekdays (Mornings)' } },
        { value: 'afternoon', label: { he: 'אחה"צ וערב', en: 'Afternoons & Evenings' } },
        { value: 'weekends', label: { he: 'סופי שבוע', en: 'Weekends' } },
        { value: 'flexible', label: { he: 'גמיש / פרויקטלי', en: 'Flexible / Project-based' } }
    ];

    // Compact teaser version for homepage
    if (!isFullPage) {
        return (
            <Section id="volunteer" spacing="default" className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: 'url(/assets/backgrounds/bg-programs.webp)' }}
                />
                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="bg-paper rounded-3xl p-8 md:p-10 shadow-card border border-sand max-w-3xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center">
                                    <Icon name="heart" size="xl" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-2xl md:text-3xl mb-2 text-graphite">
                                    {language === 'he' ? 'גדלו איתנו' : 'Grow With Us'}
                                </h2>
                                <p className="text-graphite/70 mb-4">
                                    {language === 'he'
                                        ? 'הצטרפו לקהילת המתנדבים שלנו והפכו לחלק מהמהפכה הירוקה'
                                        : 'Join our volunteer community and be part of the green revolution'}
                                </p>
                                <Button
                                    variant="primary"
                                    className="bg-green hover:bg-green/90"
                                    onClick={() => navigate('/volunteer')}
                                >
                                    {language === 'he' ? 'למידע נוסף על התנדבות' : 'Learn About Volunteering'}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        );
    }

    // Full page version
    return (
        <Section id="volunteer" spacing="large" className="relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-programs.webp)' }}
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
                    <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-6">
                        <Icon name="heart" size="xs" inline />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'הצטרפו למשפחה' : 'Join Our Family'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'גדלו איתנו' : 'Grow With Us'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'הצטרפו לקהילת המתנדבים שלנו והפכו לחלק מהמהפכה הירוקה בחינוך הישראלי'
                            : 'Join our volunteer community and become part of the green revolution in Israeli education'}
                    </p>
                </motion.div>

                {/* Values Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-6 mb-12"
                >
                    {values.map((value, index) => (
                        <div key={index} className="flex items-center gap-3 bg-paper/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-card">
                            <Icon name={value.iconName} size="sm" />
                            <div>
                                <div className="font-display text-sm text-graphite">{value.title[language]}</div>
                                <div className="text-xs text-graphite/60">{value.description[language]}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Volunteer Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {volunteerRoles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`p-6 rounded-2xl ${role.color} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer h-full`}
                            onClick={() => {
                                handleRoleToggle(role.id);
                                setIsModalOpen(true);
                            }}
                        >
                            <div className="mb-4">
                                <Icon name={role.iconName} size="lg" />
                            </div>
                            <h3 className="font-display text-lg mb-2">{role.title[language]}</h3>
                            <p className="text-sm opacity-80">{role.description[language]}</p>
                            <div className="mt-4 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>{language === 'he' ? 'בחר תפקיד זה' : 'Select role'}</span>
                                <Icon name="checkmark" size="xs" inline />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-paper rounded-3xl p-8 md:p-12 shadow-card border border-sand text-center max-w-2xl mx-auto"
                >
                    <div className="flex justify-center mb-6">
                        <Icon name="sprout" size="xl" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl mb-4 text-graphite">
                        {language === 'he' ? 'מוכנים לצמוח איתנו?' : 'Ready to Grow With Us?'}
                    </h3>
                    <p className="text-graphite/70 mb-6">
                        {language === 'he'
                            ? 'מלאו את טופס ההתנדבות ונציג שלנו יחזור אליכם עם כל הפרטים על איך להתחיל'
                            : 'Fill out the volunteer form and our representative will get back to you with all the details on how to start'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="primary"
                            className="bg-green hover:bg-green/90 flex items-center gap-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Icon name="heart" size="xs" className="brightness-0 invert" inline />
                            {language === 'he' ? 'להרשמה להתנדבות' : 'Register to Volunteer'}
                        </Button>
                        <Button
                            variant="outline"
                            className="border-graphite/30 text-graphite"
                        >
                            {language === 'he' ? 'שאלות? דברו איתנו' : 'Questions? Contact Us'}
                        </Button>
                    </div>
                </motion.div>
            </Container>

            {/* Registration Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={language === 'he' ? 'טופס הרשמה למתנדבים' : 'Volunteer Registration Form'}
                size="large"
            >
                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                label={language === 'he' ? 'שם מלא' : 'Full Name'}
                                value={formState.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                            />
                            <Input
                                label={language === 'he' ? 'אימייל' : 'Email'}
                                type="email"
                                value={formState.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                label={language === 'he' ? 'טלפון' : 'Phone'}
                                type="tel"
                                value={formState.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                            />
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-body text-graphite/70">
                                    {language === 'he' ? 'אזור בארץ' : 'Region'}
                                </label>
                                <select
                                    className="w-full p-3 bg-paper border border-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/50 text-sm"
                                    value={formState.city}
                                    onChange={(e) => handleInputChange('city', e.target.value)}
                                >
                                    <option value="">{language === 'he' ? 'בחר אזור...' : 'Select region...'}</option>
                                    {regions.map(r => (
                                        <option key={r.value} value={r.value}>{r.label[language]}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-body text-graphite/70">
                                {language === 'he' ? 'זמינות להתנדבות' : 'Availability'}
                            </label>
                            <select
                                className="w-full p-3 bg-paper border border-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/50 text-sm"
                                value={formState.availability}
                                onChange={(e) => handleInputChange('availability', e.target.value)}
                            >
                                <option value="">{language === 'he' ? 'מתי נוח לך להתנדב?' : 'When are you available?'}</option>
                                {availabilityOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label[language]}</option>
                                ))}
                            </select>
                        </div>

                        {/* Roles Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-body text-graphite/70">
                                {language === 'he' ? 'תחומי עניין (ניתן לבחור כמה)' : 'Areas of Interest (Select multiple)'}
                            </label>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {volunteerRoles.map((role) => (
                                    <div
                                        key={role.id}
                                        onClick={() => handleRoleToggle(role.id)}
                                        className={`
                                            p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all
                                            ${formState.roles.includes(role.id)
                                                ? 'border-green bg-green/10 ring-1 ring-green'
                                                : 'border-sand hover:border-green/50 hover:bg-paper/50'}
                                        `}
                                    >
                                        <div className={`
                                            w-5 h-5 rounded-full border flex items-center justify-center
                                            ${formState.roles.includes(role.id) ? 'bg-green border-green' : 'border-sand'}
                                        `}>
                                            {formState.roles.includes(role.id) && <Icon name="checkmark" size="xs" className="text-paper w-3 h-3" inline />}
                                        </div>
                                        <span className="text-sm font-body">{role.title[language]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <Textarea
                            label={language === 'he' ? 'למה תרצה/י להתנדב איתנו? (אופציונלי)' : 'Why do you want to volunteer with us? (Optional)'}
                            rows={3}
                            value={formState.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                        />

                        {/* Submit Actions */}
                        <div className="flex items-center gap-3 pt-4 border-t border-sand/30">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1"
                            >
                                {language === 'he' ? 'ביטול' : 'Cancel'}
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                className="flex-[2] bg-green hover:bg-green/90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">{language === 'he' ? 'שולח...' : 'Sending...'}</span>
                                ) : (
                                    language === 'he' ? 'שלח טופס הרשמה' : 'Submit Registration'
                                )}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Icon name="checkmark" size="xl" className="text-green" />
                        </motion.div>
                        <h3 className="font-display text-2xl mb-3 text-graphite">
                            {language === 'he' ? 'תודה שנרשמת!' : 'Thanks for Registering!'}
                        </h3>
                        <p className="text-graphite/70 mb-8 max-w-md mx-auto">
                            {language === 'he'
                                ? 'קיבלנו את הפרטים שלך. רכז המתנדבים שלנו ייצור איתך קשר בימים הקרובים כדי לתאם שיחת היכרות.'
                                : 'We received your details. Our volunteer coordinator will contact you in the coming days to schedule an introduction.'}
                        </p>
                        <Button
                            variant="primary"
                            onClick={resetForm}
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

export default VolunteerSection;
