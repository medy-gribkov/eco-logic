import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart, Users, MessageCircle, Palette, Shield, Share2, AlertTriangle, Mic, CheckCircle } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Grid from '../components/layout/Grid';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';
import FeatureCard from '../components/ui/FeatureCard';
import { useLanguage } from '../i18n';
import { volunteerContent } from '../data/volunteer-content';

const Volunteer = () => {
    const { t, language } = useLanguage();
    const content = volunteerContent;

    const sectionIcons = {
        whoWeAre: <Users className="w-6 h-6" />,
        values: <Heart className="w-6 h-6" />,
        yourRole: <CheckCircle className="w-6 h-6" />,
        communication: <MessageCircle className="w-6 h-6" />,
        brand: <Palette className="w-6 h-6" />,
        ethics: <Shield className="w-6 h-6" />,
        social: <Share2 className="w-6 h-6" />,
        troubleshooting: <AlertTriangle className="w-6 h-6" />,
        elevator: <Mic className="w-6 h-6" />
    };

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
                            <Users className="w-4 h-4 inline mr-1" />
                            {t('volunteer.title')}
                        </Badge>
                        <h1 className="font-display text-5xl md:text-6xl mb-4">
                            {t('volunteer.title')}
                        </h1>
                        <p className="text-xl text-graphite/70 max-w-2xl mx-auto mb-8">
                            {t('volunteer.subtitle')}
                        </p>
                        <Button className="flex items-center gap-2 mx-auto">
                            <Download className="w-5 h-5" />
                            {t('volunteer.downloadKit')}
                        </Button>
                    </motion.div>
                </Container>
            </Section>

            {/* Section 1: Who We Are */}
            <Section background="accent" spacing="default">
                <Container>
                    <div className="flex items-center gap-3 mb-6">
                        {sectionIcons.whoWeAre}
                        <h2 className="font-display text-3xl">{content.whoWeAre.title[language]}</h2>
                    </div>
                    <Card className="mb-4">
                        <p className="text-lg leading-relaxed mb-4">{content.whoWeAre.content[language]}</p>
                        <p className="text-green font-display text-xl">{content.whoWeAre.mission[language]}</p>
                    </Card>
                </Container>
            </Section>

            {/* Section 2: Our Values */}
            <Section spacing="large">
                <Container>
                    <div className="flex items-center gap-3 mb-8">
                        {sectionIcons.values}
                        <h2 className="font-display text-3xl">{t('volunteer.sections.values')}</h2>
                    </div>
                    <Grid cols={3} gap="default">
                        {content.values.map((value, index) => (
                            <motion.div
                                key={value.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <FeatureCard
                                    icon={value.icon}
                                    title={value.title[language]}
                                    description={value.description[language]}
                                    color={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'blue' : 'magenta'}
                                />
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* Section 3: Your Role */}
            <Section background="gradient" spacing="default">
                <Container size="small">
                    <div className="flex items-center gap-3 mb-6">
                        {sectionIcons.yourRole}
                        <h2 className="font-display text-3xl">{content.volunteerRoles.title[language]}</h2>
                    </div>
                    <Card>
                        <p className="text-lg mb-4">{content.volunteerRoles.intro[language]}</p>
                        <ul className="space-y-3">
                            {content.volunteerRoles.roles.map((role, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-green mt-1">✓</span>
                                    <span>{role[language]}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </Container>
            </Section>

            {/* Section 4: Communication Guidelines */}
            <Section spacing="large">
                <Container>
                    <div className="flex items-center gap-3 mb-8">
                        {sectionIcons.communication}
                        <h2 className="font-display text-3xl">{content.communication.title[language]}</h2>
                    </div>
                    <Grid cols={2} gap="large">
                        <Card className="border-2 border-green">
                            <h3 className="font-display text-xl text-green mb-4">{content.communication.do.title[language]}</h3>
                            <ul className="space-y-2">
                                {content.communication.do.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-green">✓</span>
                                        <span>{item[language]}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                        <Card className="border-2 border-magenta">
                            <h3 className="font-display text-xl text-magenta mb-4">{content.communication.dont.title[language]}</h3>
                            <ul className="space-y-2">
                                {content.communication.dont.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-magenta">✗</span>
                                        <span>{item[language]}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Grid>
                </Container>
            </Section>

            {/* Sections 5-8 as Accordion */}
            <Section background="accent" spacing="large">
                <Container size="small">
                    <h2 className="font-display text-3xl text-center mb-8">
                        {language === 'he' ? 'מידע נוסף' : 'Additional Information'}
                    </h2>
                    <Accordion
                        items={[
                            {
                                id: 'brand',
                                title: (
                                    <span className="flex items-center gap-2">
                                        {sectionIcons.brand}
                                        {content.brandBasics.title[language]}
                                    </span>
                                ),
                                content: (
                                    <div>
                                        <p className="mb-4">{content.brandBasics.content[language]}</p>
                                        <ul className="space-y-2">
                                            {content.brandBasics.guidelines.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-blue">•</span>
                                                    <span>{item[language]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                id: 'ethics',
                                title: (
                                    <span className="flex items-center gap-2">
                                        {sectionIcons.ethics}
                                        {content.ethics.title[language]}
                                    </span>
                                ),
                                content: (
                                    <div>
                                        <p className="mb-4">{content.ethics.content[language]}</p>
                                        <ul className="space-y-2">
                                            {content.ethics.principles.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-green">•</span>
                                                    <span>{item[language]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                id: 'social',
                                title: (
                                    <span className="flex items-center gap-2">
                                        {sectionIcons.social}
                                        {content.socialMedia.title[language]}
                                    </span>
                                ),
                                content: (
                                    <div>
                                        <ul className="space-y-2 mb-4">
                                            {content.socialMedia.tips.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-magenta">•</span>
                                                    <span>{item[language]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <h4 className="font-display text-lg mb-2">{content.socialMedia.templates.title[language]}</h4>
                                        <div className="space-y-2">
                                            {content.socialMedia.templates.items.map((template, index) => (
                                                <div key={index} className="bg-gray/10 p-3 rounded-lg text-sm">
                                                    {template[language]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'troubleshooting',
                                title: (
                                    <span className="flex items-center gap-2">
                                        {sectionIcons.troubleshooting}
                                        {content.troubleshooting.title[language]}
                                    </span>
                                ),
                                content: (
                                    <div>
                                        <p className="mb-4">{content.troubleshooting.content[language]}</p>
                                        <ol className="space-y-2 mb-4">
                                            {content.troubleshooting.steps.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="font-display text-blue">{index + 1}.</span>
                                                    <span>{item[language]}</span>
                                                </li>
                                            ))}
                                        </ol>
                                        <p className="text-sm text-graphite/70">{content.troubleshooting.contact[language]}</p>
                                    </div>
                                )
                            }
                        ]}
                        allowMultiple
                    />
                </Container>
            </Section>

            {/* Section 9: How to Describe EcoLogic */}
            <Section spacing="large">
                <Container size="small">
                    <div className="flex items-center gap-3 mb-6">
                        {sectionIcons.elevator}
                        <h2 className="font-display text-3xl">{content.elevator.title[language]}</h2>
                    </div>
                    <Card className="mb-6">
                        <Badge color="green" className="mb-3">
                            {language === 'he' ? 'משפט אחד' : 'One Sentence'}
                        </Badge>
                        <p className="text-xl font-display">{content.elevator.short[language]}</p>
                    </Card>
                    <Card className="mb-6">
                        <Badge color="blue" className="mb-3">
                            {language === 'he' ? 'תיאור מלא' : 'Full Description'}
                        </Badge>
                        <p className="text-lg leading-relaxed">{content.elevator.medium[language]}</p>
                    </Card>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {content.elevator.taglines.map((tagline, index) => (
                            <Badge key={index} color={index === 0 ? 'green' : index === 1 ? 'blue' : 'magenta'} variant="outline">
                                {tagline[language]}
                            </Badge>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Section 10: Thank You */}
            <Section background="dark" spacing="large">
                <Container size="small">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <span className="text-6xl mb-4 block">💚</span>
                        <h2 className="font-display text-4xl mb-4">{content.thankYou.title[language]}</h2>
                        <p className="text-lg text-paper/80 leading-relaxed mb-6">
                            {content.thankYou.content[language]}
                        </p>
                        <p className="font-display text-xl text-green">
                            — {content.thankYou.signature[language]}
                        </p>
                    </motion.div>
                </Container>
            </Section>
        </div>
    );
};

export default Volunteer;
