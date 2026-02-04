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
        <Section id="stats" background="accent" spacing="large">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl mb-4">
                        {t('stats.title')}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {t('stats.subtitle')}
                    </p>
                </motion.div>

                <Grid cols={variant === 'engagement' ? 3 : 4} gap="default">
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
                </Grid>

                {variant !== 'engagement' && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-sm text-graphite/50 mt-8"
                    >
                        {t('stats.sources')}
                    </motion.p>
                )}
            </Container>
        </Section>
    );
};

export default StatsSection;
