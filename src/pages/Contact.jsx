import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, MapPin } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Grid from '../components/layout/Grid';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Alert from '../components/ui/Alert';
import { useLanguage } from '../i18n';

const Contact = () => {
    const { t, language } = useLanguage();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formState.name.trim()) {
            newErrors.name = language === 'he' ? 'שדה חובה' : 'Required field';
        }
        if (!formState.email.trim()) {
            newErrors.email = language === 'he' ? 'שדה חובה' : 'Required field';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            newErrors.email = language === 'he' ? 'אימייל לא תקין' : 'Invalid email';
        }
        if (!formState.message.trim()) {
            newErrors.message = language === 'he' ? 'שדה חובה' : 'Required field';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', subject: '', message: '' });
            // Reset after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const socialLinks = [
        { name: 'Instagram', handle: '@ecologic_il', url: '#' },
        { name: 'Twitter', handle: '@ecologic_il', url: '#' },
        { name: 'Facebook', handle: 'EcoLogicIL', url: '#' }
    ];

    return (
        <div className="py-12">
            {/* Header */}
            <Section spacing="default" animate={false}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <Badge color="magenta" className="mb-4">
                            <Mail className="w-4 h-4 inline mr-1" />
                            {t('contact.title')}
                        </Badge>
                        <h1 className="font-display text-5xl md:text-6xl mb-4">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                            {t('contact.subtitle')}
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Contact Form & Info */}
            <Section spacing="large">
                <Container>
                    <Grid cols={2} gap="large">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="p-8">
                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <img
                                            src="/assets/personas/persona-celebration.png"
                                            alt="Success"
                                            className="w-32 h-32 object-contain mx-auto mb-4"
                                        />
                                        <h3 className="font-display text-2xl mb-2">
                                            {t('contact.successMessage')}
                                        </h3>
                                        <p className="text-graphite/70">
                                            {language === 'he'
                                                ? 'נחזור אליך בהקדם'
                                                : "We'll get back to you soon"}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <Input
                                            label={t('contact.nameLabel')}
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            error={errors.name}
                                            disabled={status === 'loading'}
                                        />
                                        <Input
                                            label={t('contact.emailLabel')}
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            error={errors.email}
                                            disabled={status === 'loading'}
                                        />
                                        <Input
                                            label={t('contact.subjectLabel')}
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            disabled={status === 'loading'}
                                        />
                                        <Textarea
                                            label={t('contact.messageLabel')}
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            error={errors.message}
                                            rows={5}
                                            disabled={status === 'loading'}
                                        />
                                        <Button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full flex items-center justify-center gap-2"
                                        >
                                            {status === 'loading' ? (
                                                <span className="animate-pulse">
                                                    {language === 'he' ? 'שולח...' : 'Sending...'}
                                                </span>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4" />
                                                    {t('contact.submitButton')}
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            {/* Email Card */}
                            <Card className="border-l-4 border-green">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl mb-1">
                                            {language === 'he' ? 'אימייל' : 'Email'}
                                        </h3>
                                        <a
                                            href={`mailto:${t('contact.info.email')}`}
                                            className="text-blue hover:underline"
                                        >
                                            {t('contact.info.email')}
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            {/* Location Card */}
                            <Card className="border-l-4 border-blue">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl mb-1">
                                            {language === 'he' ? 'מיקום' : 'Location'}
                                        </h3>
                                        <p className="text-graphite/70">
                                            {language === 'he' ? 'מכללת תילתן, ישראל' : 'Tiltan College, Israel'}
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Social Card */}
                            <Card className="border-l-4 border-magenta">
                                <h3 className="font-display text-xl mb-4">
                                    {t('contact.info.social')}
                                </h3>
                                <div className="space-y-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            className="flex items-center justify-between p-3 bg-gray/10 rounded-lg hover:bg-gray/20 transition-colors"
                                        >
                                            <span className="font-medium">{social.name}</span>
                                            <span className="text-magenta">{social.handle}</span>
                                        </a>
                                    ))}
                                </div>
                            </Card>

                            {/* Info Alert */}
                            <Alert variant="info">
                                {language === 'he'
                                    ? 'אנחנו פרויקט התנדבותי ונשתדל לענות בהקדם האפשרי.'
                                    : "We're a volunteer project and will try to respond as soon as possible."}
                            </Alert>
                        </motion.div>
                    </Grid>
                </Container>
            </Section>
        </div>
    );
};

export default Contact;
