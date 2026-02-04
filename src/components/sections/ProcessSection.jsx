import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu, ChevronDown, Sparkles } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import Card from '../ui/Card';
import { useLanguage } from '../../i18n';

const ProcessSection = () => {
    const { t, isRTL } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);

    const humanDecisions = t('process.humanList');
    const aiAssistance = t('process.aiList');

    return (
        <Section id="process" className="bg-graphite/5 border-t border-graphite/10" spacing="medium">
            <Container>
                {/* Collapsible Header */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between py-4 group"
                    aria-expanded={isExpanded}
                >
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-graphite/40" />
                        <span className="font-display text-lg uppercase tracking-wider text-graphite/60 group-hover:text-graphite transition-colors">
                            {isRTL ? 'מאחורי הקלעים' : 'Behind The Scenes'}
                        </span>
                        <span className="text-xs text-graphite/40 bg-graphite/10 px-2 py-1 rounded">
                            {isRTL ? 'הקאתון HUMAN * AI' : 'HUMAN * AI Hackathon'}
                        </span>
                    </div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown className="w-5 h-5 text-graphite/40 group-hover:text-graphite transition-colors" />
                    </motion.div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-8 pb-4">
                                {/* Section Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center mb-12"
                                >
                                    <h2 className="font-display text-3xl md:text-4xl mb-3 text-graphite/80">
                                        {t('process.title')}
                                    </h2>
                                    <p className="text-graphite/60 max-w-xl mx-auto text-sm">
                                        {t('process.subtitle')}
                                    </p>
                                </motion.div>

                                <Grid cols={2} gap="medium">
                                    {/* Human Decisions */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Card className="h-full border-l-4 border-green bg-paper/50">
                                            <div className="flex items-center gap-3 mb-5">
                                                <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center">
                                                    <User className="w-5 h-5 text-green" />
                                                </div>
                                                <h3 className="font-display text-xl text-graphite/80">
                                                    {t('process.humanDecisions')}
                                                </h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {humanDecisions.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-graphite/70">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>
                                    </motion.div>

                                    {/* AI Assistance */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Card className="h-full border-l-4 border-blue bg-paper/50">
                                            <div className="flex items-center gap-3 mb-5">
                                                <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center">
                                                    <Cpu className="w-5 h-5 text-blue" />
                                                </div>
                                                <h3 className="font-display text-xl text-graphite/80">
                                                    {t('process.aiAssistance')}
                                                </h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {aiAssistance.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-graphite/70">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>
                                    </motion.div>
                                </Grid>

                                {/* Constraint Note */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-8 text-center"
                                >
                                    <div className="inline-block max-w-xl bg-paper/50 rounded-lg px-6 py-4 border border-graphite/10">
                                        <h4 className="font-display text-lg mb-2 text-magenta/80">
                                            {t('process.constraint')}
                                        </h4>
                                        <p className="text-graphite/60 text-sm">
                                            {t('process.constraintText')}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </Section>
    );
};

export default ProcessSection;
