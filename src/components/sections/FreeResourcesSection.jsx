import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, Image } from 'lucide-react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { useLanguage } from '../../i18n';
import { freeResources } from '../../data/programs';

const ResourceCard = ({ resource, index }) => {
    const { language, isRTL } = useLanguage();

    const iconMap = {
        '💧': <span className="text-3xl">💧</span>,
        '📚': <BookOpen className="w-8 h-8 text-green" />,
        '📊': <Image className="w-8 h-8 text-sage" />,
        '🎯': <FileText className="w-8 h-8 text-burgundy" />,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-paper rounded-2xl p-6 border border-sand hover:border-green/30 hover:shadow-lg transition-all duration-300"
        >
            {/* Icon */}
            <div className="w-16 h-16 bg-sand/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green/10 transition-colors">
                {iconMap[resource.icon] || <span className="text-3xl">{resource.icon}</span>}
            </div>

            {/* Content */}
            <h3 className="font-display text-xl mb-2 text-graphite">
                {resource.title[language]}
            </h3>
            <p className="text-graphite/60 text-sm mb-4 leading-relaxed">
                {resource.description[language]}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-graphite/50">
                    <span className="bg-sand px-2 py-1 rounded">{resource.format}</span>
                    <span>{resource.pages} {language === 'he' ? 'עמודים' : 'pages'}</span>
                </div>
                <Button
                    variant="outline"
                    className="text-sm py-2 px-4 border-green text-green hover:bg-green hover:text-paper"
                >
                    <Download className="w-4 h-4 me-1" />
                    {language === 'he' ? 'הורדה' : 'Download'}
                </Button>
            </div>
        </motion.div>
    );
};

const FreeResourcesSection = () => {
    const { language, isRTL } = useLanguage();

    return (
        <Section id="free-resources" spacing="large" className="bg-gradient-to-b from-paper via-sand/30 to-paper">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-6">
                        <Download className="w-4 h-4" />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'חינם לגמרי' : 'Completely Free'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'משאבים חינוכיים חינם' : 'Free Educational Resources'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'הורידו, הדפיסו ושתפו. הכל פתוח לשימוש חינוכי.'
                            : 'Download, print, and share. Everything is open for educational use.'}
                    </p>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {freeResources.map((resource, index) => (
                        <ResourceCard key={resource.id} resource={resource} index={index} />
                    ))}
                </div>

                {/* Recycled materials note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-graphite/50 flex items-center justify-center gap-2">
                        <span>♻️</span>
                        {language === 'he'
                            ? 'כל החומרים המודפסים שלנו מיוצרים מנייר ממוחזר 100%'
                            : 'All our printed materials are made from 100% recycled paper'}
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
};

export default FreeResourcesSection;
