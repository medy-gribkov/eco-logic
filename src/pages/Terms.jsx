import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useLanguage } from '../i18n';
import { legalContent } from '../data/legal-content';

const Terms = () => {
    const { language, isRTL } = useLanguage();
    const content = legalContent.terms;

    return (
        <Section className="min-h-screen pt-32 pb-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto bg-paper p-8 md:p-12 rounded-3xl shadow-card border border-sand"
                >
                    <h1 className="font-display text-4xl mb-2 text-graphite">{content.title[language]}</h1>
                    <p className="text-graphite/60 text-sm mb-8 pb-4 border-b border-sand">
                        {content.lastUpdated[language]}
                    </p>

                    <div className="space-y-8 font-body">
                        {content.sections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-display text-xl mb-3 text-green">{section.heading[language]}</h3>
                                <p className="text-graphite/80 leading-relaxed text-lg">
                                    {section.text[language]}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default Terms;
