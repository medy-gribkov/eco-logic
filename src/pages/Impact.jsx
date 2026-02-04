import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, MapPin, Users } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Grid from '../components/layout/Grid';
import StatCard from '../components/ui/StatCard';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useLanguage } from '../i18n';
import { impactStats, quickFacts } from '../data/stats';

const Impact = () => {
    const { t, language } = useLanguage();

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
                        <Badge color="green" className="mb-4">
                            <TrendingUp className="w-4 h-4 inline mr-1" />
                            {t('impact.title')}
                        </Badge>
                        <h1 className="font-display text-5xl md:text-6xl mb-4">
                            {t('impact.title')}
                        </h1>
                        <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                            {t('impact.subtitle')}
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Global Stats */}
            <Section background="accent" spacing="large">
                <Container>
                    <div className="flex items-center gap-3 mb-8">
                        <Globe className="w-6 h-6 text-blue" />
                        <h2 className="font-display text-3xl">{t('impact.globalTitle')}</h2>
                    </div>
                    <Grid cols={4} gap="default">
                        {impactStats.global.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <StatCard
                                    number={stat.number}
                                    suffix={stat.suffix}
                                    label={stat.label[language]}
                                    icon={stat.icon}
                                    color={stat.color}
                                />
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* Israel Stats */}
            <Section spacing="large">
                <Container>
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin className="w-6 h-6 text-green" />
                        <h2 className="font-display text-3xl">{t('impact.israelTitle')}</h2>
                    </div>
                    <Grid cols={3} gap="default">
                        {impactStats.israel.map((stat, index) => (
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
                                    icon={stat.icon}
                                    color={stat.color}
                                />
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* Our Reach */}
            <Section background="gradient" spacing="large">
                <Container>
                    <div className="flex items-center gap-3 mb-8">
                        <Users className="w-6 h-6 text-magenta" />
                        <h2 className="font-display text-3xl">{t('impact.engagementTitle')}</h2>
                    </div>
                    <Grid cols={3} gap="default">
                        {impactStats.engagement.map((stat, index) => (
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
                                    icon={stat.icon}
                                    color={stat.color}
                                />
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* Quick Facts */}
            <Section spacing="large">
                <Container size="small">
                    <h2 className="font-display text-3xl text-center mb-8">
                        {language === 'he' ? 'עובדות מפתיעות' : 'Surprising Facts'}
                    </h2>
                    <div className="space-y-4">
                        {quickFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="border-l-4 border-green">
                                    <p className="text-lg mb-2">{fact[language]}</p>
                                    <p className="text-sm text-graphite/50">
                                        {language === 'he' ? 'מקור' : 'Source'}: {fact.source}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
};

export default Impact;
