import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { useLanguage } from '../../i18n';
import { partners } from '../../data/testimonials';

const PartnersSection = () => {
    const { t, language } = useLanguage();

    return (
        <Section spacing="default">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h3 className="font-display text-2xl text-graphite/70">
                        {t('partners.title')}
                    </h3>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={language === 'he' ? partner.nameHe : partner.name}
                                    className="h-12 md:h-16 object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                                />
                            ) : (
                                <div className="px-6 py-3 bg-gray/10 rounded-lg">
                                    <span className="font-display text-lg text-graphite/50">
                                        {language === 'he' ? partner.nameHe : partner.name}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default PartnersSection;
