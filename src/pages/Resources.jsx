import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ExternalLink, FileText, Image, Share2 } from 'lucide-react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Grid from '../components/layout/Grid';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Tabs from '../components/ui/Tabs';
import { useLanguage } from '../i18n';

const Resources = () => {
    const { t, language, isRTL } = useLanguage();

    const guides = [
        {
            id: 'water-guide',
            title: { he: 'מדריך לחיסכון במים', en: 'Water Saving Guide' },
            description: { he: 'טיפים מעשיים לחיסכון במים בבית ובחוץ', en: 'Practical tips for saving water at home and outdoors' },
            icon: '💧',
            type: 'PDF'
        },
        {
            id: 'carbon-guide',
            title: { he: 'הפחתת טביעת הרגל הפחמנית', en: 'Reducing Your Carbon Footprint' },
            description: { he: 'כיצד להקטין את ההשפעה על האקלים', en: 'How to reduce your impact on climate' },
            icon: '🌍',
            type: 'PDF'
        },
        {
            id: 'food-guide',
            title: { he: 'תזונה בת-קיימא', en: 'Sustainable Eating' },
            description: { he: 'בחירות מזון שטובות לך ולסביבה', en: 'Food choices that are good for you and the environment' },
            icon: '🥗',
            type: 'PDF'
        }
    ];

    const downloadables = [
        {
            id: 'social-pack',
            title: { he: 'חבילת מדיה חברתית', en: 'Social Media Pack' },
            description: { he: 'תמונות ותבניות לשיתוף ברשתות', en: 'Images and templates for social sharing' },
            icon: <Share2 className="w-6 h-6" />,
            format: 'ZIP'
        },
        {
            id: 'infographics',
            title: { he: 'אינפוגרפיקות', en: 'Infographics' },
            description: { he: 'נתונים סביבתיים בעיצוב ויזואלי', en: 'Environmental data in visual design' },
            icon: <Image className="w-6 h-6" />,
            format: 'PNG'
        },
        {
            id: 'fact-sheets',
            title: { he: 'דפי עובדות', en: 'Fact Sheets' },
            description: { he: 'עובדות מפתח על נושאים סביבתיים', en: 'Key facts on environmental topics' },
            icon: <FileText className="w-6 h-6" />,
            format: 'PDF'
        }
    ];

    const externalLinks = [
        {
            id: 'moe',
            title: { he: 'המשרד להגנת הסביבה', en: 'Ministry of Environmental Protection' },
            url: 'https://www.gov.il/he/departments/ministry_of_environmental_protection',
            description: { he: 'אתר המשרד הממשלתי לסביבה', en: 'Government environmental ministry website' }
        },
        {
            id: 'spni',
            title: { he: 'החברה להגנת הטבע', en: 'Society for Protection of Nature' },
            url: 'https://natureisrael.org',
            description: { he: 'ארגון סביבתי מוביל בישראל', en: 'Leading environmental organization in Israel' }
        },
        {
            id: 'waterfootprint',
            title: { he: 'Water Footprint Network', en: 'Water Footprint Network' },
            url: 'https://waterfootprint.org',
            description: { he: 'מידע על טביעת רגל מימית', en: 'Information on water footprint' }
        },
        {
            id: 'un-env',
            title: { he: 'UN Environment Programme', en: 'UN Environment Programme' },
            url: 'https://unep.org',
            description: { he: 'תוכנית הסביבה של האו"ם', en: 'UN environmental program' }
        }
    ];

    const tabContent = [
        {
            id: 'guides',
            label: t('resources.guides'),
            content: (
                <Grid cols={3} gap="default">
                    {guides.map((guide, index) => (
                        <motion.div
                            key={guide.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col">
                                <div className="text-4xl mb-4">{guide.icon}</div>
                                <h3 className="font-display text-xl mb-2">{guide.title[language]}</h3>
                                <p className="text-graphite/70 mb-4 flex-1">{guide.description[language]}</p>
                                <div className="flex items-center justify-between">
                                    <Badge color="gray">{guide.type}</Badge>
                                    <Button variant="outline" className="text-sm">
                                        <Download className="w-4 h-4 mr-1" />
                                        {language === 'he' ? 'הורדה' : 'Download'}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </Grid>
            )
        },
        {
            id: 'downloadables',
            label: t('resources.downloadables'),
            content: (
                <Grid cols={3} gap="default">
                    {downloadables.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col">
                                <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center text-blue mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-display text-xl mb-2">{item.title[language]}</h3>
                                <p className="text-graphite/70 mb-4 flex-1">{item.description[language]}</p>
                                <div className="flex items-center justify-between">
                                    <Badge color="blue">{item.format}</Badge>
                                    <Button variant="outline" className="text-sm">
                                        <Download className="w-4 h-4 mr-1" />
                                        {language === 'he' ? 'הורדה' : 'Download'}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </Grid>
            )
        },
        {
            id: 'links',
            label: t('resources.externalLinks'),
            content: (
                <div className="space-y-4">
                    {externalLinks.map((link, index) => (
                        <motion.div
                            key={link.id}
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-display text-lg mb-1">{link.title[language]}</h3>
                                    <p className="text-graphite/70 text-sm">{link.description[language]}</p>
                                </div>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )
        }
    ];

    return (
        <div className="py-12">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden mb-12">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/assets/backgrounds/bg-programs.webp)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/85 to-paper/60" />

                <Container className="relative z-10 pt-20 md:pt-24 pb-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.6 }}
                            className="text-start"
                        >
                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 text-graphite leading-tight">
                                {language === 'he' ? 'ספריית' : 'Library of'}
                                <span className="block text-blue">
                                    {language === 'he' ? 'הידע הירוק' : 'Green Knowledge'}
                                </span>
                            </h1>

                            <p className="text-xl text-graphite/70 mb-8 max-w-lg leading-relaxed">
                                {t('resources.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:flex justify-center"
                        >
                            <img
                                src="/assets/personas/persona-teacher-pointing.webp"
                                alt="Resources"
                                className="max-h-[500px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Tabbed Content */}
            <Section spacing="large">
                <Container>
                    <Tabs tabs={tabContent} defaultTab="guides" />
                </Container>
            </Section>

            {/* CTA */}
            <Section background="accent" spacing="default">
                <Container size="small">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-display text-3xl mb-4">
                            {language === 'he' ? 'רוצה לתרום חומרים?' : 'Want to Contribute?'}
                        </h2>
                        <p className="text-graphite/70 mb-6">
                            {language === 'he'
                                ? 'יש לך חומרים חינוכיים שתרצה לשתף? צור איתנו קשר'
                                : 'Have educational materials you want to share? Contact us'}
                        </p>
                        <Button onClick={() => window.location.href = '/contact'}>
                            {language === 'he' ? 'צור קשר' : 'Contact Us'}
                        </Button>
                    </motion.div>
                </Container>
            </Section>
        </div>
    );
};

export default Resources;
