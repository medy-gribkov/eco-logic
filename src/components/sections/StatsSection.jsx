import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import StatCard from '../ui/StatCard';
import { useLanguage } from '../../i18n';
import { impactStats } from '../../data/stats';

const StatsSection = ({ variant = 'global' }) => {
    const { t, language } = useLanguage();

    const stats = impactStats[variant] || impactStats.global;

    return (
        <Section id="stats" className="relative overflow-hidden py-12 md:py-16">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-features.png)' }}
            />
            {/* Soft overlay to ensure readability */}
            <div className="absolute inset-0 bg-paper/60 backdrop-blur-[2px]" />

            <Container className="relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 bg-blue/10 text-blue px-4 py-2 rounded-full mb-4">
                        <img src="/assets/icons/globe.png" alt="" className="w-4 h-4" />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {t('stats.impact', 'Our Impact')}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-2 text-graphite">
                        {t('stats.title')}
                    </h2>
                    <p className="text-lg text-graphite/70 max-w-2xl mx-auto">
                        {t('stats.subtitle')}
                    </p>
                </motion.div>

                <div className={`grid ${variant === 'engagement' ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'} gap-3 md:gap-6`}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <StatCard
                                number={stat.number}
                                suffix={stat.suffix}
                                label={stat.label[language]}
                                iconSrc={stat.iconSrc}
                                color={stat.color}
                            />
                        </motion.div>
                    ))}
                </div>

                {variant !== 'engagement' && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-graphite/50 mt-12 mix-blend-multiply"
                    >
                        {t('stats.sources')}
                    </motion.p>
                )}
            </Container>
        </Section>
    );
};

export default StatsSection;
