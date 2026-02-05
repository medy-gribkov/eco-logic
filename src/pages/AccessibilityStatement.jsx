import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Icon from '../components/ui/Icon';
import { useLanguage } from '../i18n';
import { legalContent } from '../data/legal-content';

const AccessibilityStatement = () => {
    const { language } = useLanguage();
    const content = legalContent.accessibility;

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
                                <Icon name="recycle-heart" size="lg" />
                            </div>
                            <div>
                                <h1 className="font-display text-4xl text-graphite">{content.title[language]}</h1>
                                <p className="text-graphite/60 text-sm">{content.lastUpdated[language]}</p>
                            </div>
                        </div>

                        <p className="text-xl leading-relaxed text-graphite/80 mb-6">
                            {content.intro[language]}
                        </p>

                        <div className="bg-sand/30 p-4 rounded-xl border border-sand">
                            <h3 className="font-display text-lg mb-2 text-graphite">{language === 'he' ? 'תקינה' : 'Standard'}</h3>
                            <p className="text-graphite/80">{content.standard[language]}</p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {content.features.map((feature, index) => (
                            <div key={index} className="bg-paper p-6 rounded-2xl shadow-sm border border-sand flex items-center gap-4">
                                <div className="text-green"><Icon name="checkmark" size="sm" /></div>
                                <span className="font-body text-graphite/80">{feature[language]}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="bg-green/5 border border-green/20 p-8 rounded-3xl">
                        <h3 className="font-display text-2xl mb-4 text-green">{content.contact.title[language]}</h3>
                        <p className="text-lg text-graphite/80">
                            {content.contact.details[language]}
                        </p>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default AccessibilityStatement;
