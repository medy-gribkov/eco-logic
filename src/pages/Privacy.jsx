import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Icon from '../components/ui/Icon';
import { useLanguage } from '../i18n';
import { legalContent } from '../data/legal-content';

const Privacy = () => {
    const { language } = useLanguage();
    const content = legalContent.privacy;

    return (
        <Section className="min-h-screen pt-32 pb-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="bg-paper p-8 md:p-12 rounded-3xl shadow-card border border-sand mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-green/10 p-3 rounded-full text-green">
                                <Icon name="checkmark" size="lg" />
                            </div>
                            <div>
                                <h1 className="font-display text-4xl text-graphite">{content.title[language]}</h1>
                                <p className="text-graphite/60 text-sm">
                                    {language === 'he' ? 'עודכן לאחרונה: פברואר 2026' : 'Last Updated: February 2026'}
                                </p>
                            </div>
                        </div>

                        <p className="text-xl leading-relaxed text-graphite/80">
                            {language === 'he'
                                ? 'פרטיותך חשובה לנו. להלן המידע על אופן השימוש והשמירה על המידע שלך.'
                                : 'Your privacy is important to us. Below is information about how we use and protect your data.'}
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-6">
                        {/* Cookies Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-paper p-6 rounded-2xl shadow-sm border border-sand"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-sage/20 p-2 rounded-full">
                                    <Icon name="globe" size="sm" className="text-green" />
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl mb-3 text-graphite">
                                        {language === 'he' ? 'עוגיות (Cookies)' : 'Cookies'}
                                    </h2>
                                    <p className="text-graphite/70 leading-relaxed">{content.cookies[language]}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Data Protection Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-paper p-6 rounded-2xl shadow-sm border border-sand"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-sage/20 p-2 rounded-full">
                                    <Icon name="heart" size="sm" className="text-green" />
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl mb-3 text-graphite">
                                        {language === 'he' ? 'הגנה על מידע אישי' : 'Personal Data Protection'}
                                    </h2>
                                    <p className="text-graphite/70 leading-relaxed">{content.data[language]}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Your Rights Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-paper p-6 rounded-2xl shadow-sm border border-sand"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-sage/20 p-2 rounded-full">
                                    <Icon name="recycle" size="sm" className="text-green" />
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl mb-3 text-graphite">
                                        {language === 'he' ? 'זכויותיך' : 'Your Rights'}
                                    </h2>
                                    <p className="text-graphite/70 leading-relaxed">
                                        {language === 'he'
                                            ? 'יש לך זכות לבקש גישה למידע שאנו מחזיקים עליך, לתקנו או למחקו. פנה אלינו בכל שאלה.'
                                            : 'You have the right to request access to, correction of, or deletion of your personal data. Contact us with any questions.'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 bg-green/5 border border-green/20 p-8 rounded-3xl"
                    >
                        <h3 className="font-display text-2xl mb-4 text-green">
                            {language === 'he' ? 'צור קשר' : 'Contact Us'}
                        </h3>
                        <p className="text-lg text-graphite/80">
                            {language === 'he'
                                ? 'לשאלות בנושא פרטיות, ניתן לפנות אלינו בדוא"ל: privacy@ecologic.org.il'
                                : 'For privacy inquiries, contact us at: privacy@ecologic.org.il'}
                        </p>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default Privacy;
