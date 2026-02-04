import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, Users, Share2 } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';

const CTASection = () => {
    const navigate = useNavigate();
    const { t, isRTL } = useLanguage();
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const actions = [
        {
            id: 'quiz',
            icon: <Icon name="leaf" size="lg" />,
            title: t('cta.quizTitle'),
            description: t('cta.quizDesc'),
            buttonText: t('cta.quizButton'),
            onClick: () => navigate('/quiz'),
            color: 'green'
        },
        {
            id: 'volunteer',
            icon: <Users className="w-8 h-8" />,
            title: t('cta.volunteerTitle'),
            description: t('cta.volunteerDesc'),
            buttonText: t('cta.volunteerButton'),
            onClick: () => navigate('/volunteer'),
            color: 'blue'
        },
        {
            id: 'share',
            icon: <Share2 className="w-8 h-8" />,
            title: t('cta.shareTitle'),
            description: t('cta.shareDesc'),
            buttonText: t('cta.shareButton'),
            onClick: () => {
                if (navigator.share) {
                    navigator.share({
                        title: 'EcoLogic',
                        text: t('hero.subtitle'),
                        url: window.location.origin
                    });
                }
            },
            color: 'magenta'
        }
    ];

    const colors = {
        green: 'border-green/30 hover:border-green',
        blue: 'border-blue/30 hover:border-blue',
        magenta: 'border-magenta/30 hover:border-magenta'
    };

    const iconColors = {
        green: 'text-green',
        blue: 'text-blue',
        magenta: 'text-magenta'
    };

    return (
        <Section background="accent" spacing="large">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-4xl md:text-5xl mb-4">
                        {t('cta.title')}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {t('cta.subtitle')}
                    </p>
                </motion.div>

                <Grid cols={3} gap="large">
                    {actions.map((action, index) => (
                        <motion.div
                            key={action.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`h-full border-2 ${colors[action.color]} transition-colors`}>
                                <div className={`mb-4 ${iconColors[action.color]}`}>
                                    {action.icon}
                                </div>
                                <h3 className="font-display text-2xl mb-2">{action.title}</h3>
                                <p className="text-graphite/70 mb-6">{action.description}</p>
                                <Button
                                    onClick={action.onClick}
                                    variant={action.id === 'quiz' ? 'primary' : 'outline'}
                                    className="w-full flex items-center justify-center gap-2"
                                >
                                    {action.buttonText}
                                    <Arrow className="w-4 h-4" />
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default CTASection;
