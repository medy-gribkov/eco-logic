import React from 'react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';
import { freeResources } from '../../data/programs';
import Modal from '../ui/Modal';
import DownloadButton from '../features/DownloadButton';
// import { MyDocument } from '../../pdf/TestDocument';
import GuideTemplate from '../../pdf/templates/GuideTemplate';
import { waterGuideContent } from '../../data/full-content/water-guide';
const FreeResourcesSection = () => {
    const { language } = useLanguage();
    const [selectedResource, setSelectedResource] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = (resource) => {
        setSelectedResource(resource);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedResource(null);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Section id="free-resources" spacing="large" className="relative overflow-hidden">
            {/* Background illustration */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-resources.png)' }}
            />


            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full mb-6">
                        <Icon name="download" size="xs" inline />
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pb-12">
                    {freeResources.map((resource, index) => {
                        return (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                className={`h-full relative ${index === 0 ? 'lg:pb-24' : ''}`} // Add space at bottom of first column for image
                            >
                                <div className={`h-full flex flex-col group bg-paper rounded-2xl p-6 border border-sand hover:border-magenta/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden ${index === 0 ? 'lg:h-auto lg:min-h-0' : ''}`}> {/* Allow first card to be shorter */}

                                    <div className="relative z-10 flex flex-col flex-grow">
                                        {/* Icon Container */}
                                        <div className="mb-6 h-12 flex items-center">
                                            <Icon
                                                name={resource.type === 'guide' ? 'lightbulb' : (resource.type === 'water' ? 'nature' : (resource.type === 'activities' ? 'book' : 'ideas'))}
                                                size="xl"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <h3 className="font-display text-xl mb-3 text-graphite min-h-[3.5rem] flex items-end pb-1">
                                                {resource.title[language]}
                                            </h3>
                                            <p className="text-graphite/60 text-sm mb-6 leading-relaxed">
                                                {resource.description[language]}
                                            </p>
                                        </div>

                                        {/* Meta & Action */}
                                        <div className="mt-auto pt-4 border-t border-sand/50 flex flex-col gap-4">
                                            <div className="flex items-center gap-2 text-xs text-graphite/50 bg-sand/30 px-3 py-1.5 rounded-lg w-fit">
                                                <span>{resource.format}</span>
                                                <span className="w-1 h-1 rounded-full bg-graphite/30"></span>
                                                <span>{resource.pages} {language === 'he' ? 'עמ\'' : 'pgs'}</span>
                                            </div>

                                            <Button
                                                variant="outline"
                                                onClick={() => handleOpenModal(resource)}
                                                className="w-full flex items-center justify-center gap-2 border-magenta text-magenta hover:bg-magenta hover:text-paper"
                                            >
                                                <Icon name="download" size="xs" />
                                                {language === 'he' ? 'הורדה' : 'Download Guide'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Teacher Reading Persona (Decorative - Bottom Left) */}
                    <div className="absolute -bottom-8 -start-8 w-56 pointer-events-none z-20 hidden lg:block">
                        <img
                            src="/assets/personas/persona-teacher-reading.png"
                            alt={language === 'he' ? 'מורה מקריאה סיפור' : 'Teacher reading a story'}
                            className="w-full h-auto drop-shadow-2xl transform -scale-x-100"
                        />
                    </div>
                </div>

                {/* Recycled materials note */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-graphite/50 flex items-center justify-center gap-2">
                        <Icon name="recycle" size="sm" inline />
                        {language === 'he'
                            ? 'כל החומרים המודפסים שלנו מיוצרים מנייר ממוחזר 100%'
                            : 'All our printed materials are made from 100% recycled paper'}
                    </p>
                </motion.div>

                {/* Download Modal - Language Selection */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={language === 'he' ? 'בחרו שפה להורדה' : 'Select Download Language'}
                    size="small"
                >
                    <div className="space-y-6">
                        <div className="bg-sand/20 p-4 rounded-xl">
                            <p className="text-graphite/80 text-center font-body mb-2">
                                {language === 'he'
                                    ? 'אנחנו מחויבים להנגיש את התכנים שלנו לכל הקהילות.'
                                    : 'We are committed to making our content accessible to all communities.'}
                            </p>
                            <p className="text-graphite/60 text-center text-sm">
                                {language === 'he'
                                    ? 'כל התכנים זהים לחלוטין בכל השפות.'
                                    : 'All content is exactly the same across all languages.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* English Option */}
                            <div className="text-center space-y-3">
                                <div className="font-display text-lg text-graphite">English</div>
                                {selectedResource && (
                                    <DownloadButton
                                        document={
                                            <GuideTemplate
                                                data={selectedResource.id === 'water-guide' ? waterGuideContent : {
                                                    ...waterGuideContent,
                                                    title: selectedResource.title,
                                                    subtitle: { he: 'בקרוב: המדריך המלא', en: 'Coming Soon: Full Guide' },
                                                    intro: {
                                                        he: 'אנו עובדים על הכנת מדריך זה. בינתיים, הנה טעימה מהתכנים שלנו.',
                                                        en: 'We are working on this guide. In the meantime, here is a taste of our content.'
                                                    }
                                                }}
                                                language="en"
                                            />
                                        }
                                        fileName={`EcoLogic-${selectedResource.id}-en.pdf`}
                                        className="w-full flex items-center justify-center gap-2 py-3"
                                        variant="primary"
                                    >
                                        Download
                                    </DownloadButton>
                                )}
                            </div>

                            {/* Hebrew Option */}
                            <div className="text-center space-y-3">
                                <div className="font-display text-lg text-graphite">עברית</div>
                                {selectedResource && (
                                    <DownloadButton
                                        document={
                                            <GuideTemplate
                                                data={selectedResource.id === 'water-guide' ? waterGuideContent : {
                                                    ...waterGuideContent,
                                                    title: selectedResource.title,
                                                    subtitle: { he: 'בקרוב: המדריך המלא', en: 'Coming Soon: Full Guide' },
                                                    intro: {
                                                        he: 'אנו עובדים על הכנת מדריך זה. בינתיים, הנה טעימה מהתכנים שלנו.',
                                                        en: 'We are working on this guide. In the meantime, here is a taste of our content.'
                                                    }
                                                }}
                                                language="he"
                                            />
                                        }
                                        fileName={`EcoLogic-${selectedResource.id}-he.pdf`}
                                        className="w-full flex items-center justify-center gap-2 py-3"
                                        variant="primary"
                                    >
                                        הורדה
                                    </DownloadButton>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center pt-2">
                            <button
                                onClick={handleCloseModal}
                                className="text-sm text-graphite/40 hover:text-magenta transition-colors"
                            >
                                {language === 'he' ? 'ביטול' : 'Cancel'}
                            </button>
                        </div>
                    </div>
                </Modal>
            </Container>
        </Section>
    );
};

export default FreeResourcesSection;
