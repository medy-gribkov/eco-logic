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
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-resources.webp)' }}
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

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 pb-12 items-start">

                    {/* Left Column: Resources (Span 8) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">

                        {/* Featured Resource Card (Seedling Starter) */}
                        {freeResources.filter(r => r.id === 'seedling-starter').map((resource) => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-paper rounded-3xl p-6 md:p-8 border-2 border-green/20 shadow-elevated relative overflow-hidden group"
                            >
                                {/* Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-sand/20 opacity-50" />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    {/* Text Content */}
                                    <div className="flex-1 text-center md:text-start">
                                        <div className="inline-flex items-center gap-2 bg-green/10 text-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                            <Icon name="star" size="xs" inline />
                                            {language === 'he' ? 'מומלץ למתחילים' : 'Best for Beginners'}
                                        </div>
                                        <h3 className="font-display text-2xl md:text-3xl mb-3 text-graphite">
                                            {resource.title[language]}
                                        </h3>
                                        <p className="text-graphite/70 mb-6 text-lg leading-relaxed">
                                            {resource.description[language]}
                                        </p>

                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm text-graphite/60">
                                            <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1.5 rounded-lg border border-sand">
                                                <Icon name="book" size="xs" />
                                                <span>{resource.pages} {language === 'he' ? 'עמ\'' : 'pgs'}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1.5 rounded-lg border border-sand">
                                                <span>PDF</span>
                                            </div>
                                        </div>

                                        <Button
                                            variant="primary"
                                            onClick={() => handleOpenModal(resource)}
                                            className="w-full md:w-auto bg-green hover:bg-green/90 text-white shadow-lg shadow-green/20"
                                        >
                                            <Icon name="download" size="sm" className="me-2" inline />
                                            {language === 'he' ? 'הורדת המדריך' : 'Download Guide'}
                                        </Button>
                                    </div>

                                    {/* Image */}
                                    <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
                                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-sand shadow-inner relative">
                                            <img
                                                src={resource.image || "/assets/images/starter-seedling.webp"}
                                                alt={resource.title[language]}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Secondary Resources Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {freeResources.filter(r => r.id !== 'seedling-starter').map((resource, index) => (
                                <motion.div
                                    key={resource.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-full"
                                >
                                    <div className="h-full flex flex-col bg-paper/80 backdrop-blur-sm rounded-2xl p-6 border border-sand hover:border-magenta/30 hover:shadow-card hover:bg-paper transition-all duration-300 group">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-xl bg-sand/30 text-graphite/80 group-hover:bg-magenta/10 group-hover:text-magenta transition-colors">
                                                <Icon
                                                    name={
                                                        resource.type === 'guide' ? 'lightbulb' :
                                                            resource.type === 'water' ? 'water' :
                                                                resource.type === 'activities' ? 'book' :
                                                                    resource.type === 'seedling' ? 'seedling' :
                                                                        resource.type === 'infographics' ? 'ideas' : 'ideas'
                                                    }
                                                    size="lg"
                                                />
                                            </div>
                                            <div className="text-xs font-mono text-graphite/60 bg-sand/40 px-2 py-1 rounded">
                                                {resource.format}
                                            </div>
                                        </div>

                                        <h3 className="font-display text-xl mb-2 text-graphite group-hover:text-magenta transition-colors">
                                            {resource.title[language]}
                                        </h3>
                                        <p className="text-graphite/80 text-sm mb-6 flex-grow font-medium leading-relaxed">
                                            {resource.description[language]}
                                        </p>

                                        <Button
                                            variant="outline"
                                            onClick={() => handleOpenModal(resource)}
                                            size="small"
                                            className="w-full justify-between group-hover:border-magenta group-hover:text-magenta bg-white/50 hover:bg-white"
                                        >
                                            <span>{language === 'he' ? 'הורדה' : 'Download'}</span>
                                            <Icon name="download" size="xs" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Persona & Community (Span 4) */}
                    <div className="lg:col-span-4 flex flex-col items-center h-full mt-12 lg:mt-0 lg:pt-12">
                        <div className="lg:sticky lg:top-24 w-full text-center space-y-8">
                            {/* Persona Group */}
                            <div className="relative">
                                {/* Decorative elements behind persona */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-magenta/5 rounded-full blur-3xl animate-pulse" />

                                <img
                                    src="/assets/personas/persona-teacher-reading.webp"
                                    alt="Teacher"
                                    className="w-full max-w-[280px] lg:max-w-[320px] mx-auto drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
                                />

                                <div className="mt-6 bg-paper border border-sand p-4 rounded-xl shadow-card max-w-[280px] mx-auto relative z-20">
                                    <div className="text-4xl text-magenta mb-2">❝</div>
                                    <p className="text-graphite/80 italic text-sm mb-3">
                                        {language === 'he'
                                            ? 'התלמידים שלי מחכים כל שבוע לפעילות החדשה. החומרים האלו פשוט עובדים!'
                                            : 'My students look forward to the new activity every week. These materials just work!'}
                                    </p>
                                    <div className="text-xs font-bold text-graphite/60 uppercase tracking-wider">
                                        {language === 'he' ? '– שרה, מורה למדעים' : '– Sarah, Science Teacher'}
                                    </div>
                                </div>
                            </div>

                            {/* New Community Card for spacing */}
                            <div className="bg-sand/20 rounded-2xl p-6 border border-sand/50 max-w-[320px] mx-auto text-start">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-green/10 p-2 rounded-lg text-green">
                                        <Icon name="heart" size="sm" />
                                    </div>
                                    <h4 className="font-display text-lg text-graphite">
                                        {language === 'he' ? 'הצטרפו לקהילה' : 'Join the Community'}
                                    </h4>
                                </div>
                                <p className="text-graphite/70 text-sm mb-4">
                                    {language === 'he'
                                        ? 'אלפי מורים והורים כבר משתפים רעיונות בקבוצה שלנו.'
                                        : 'Thousands of teachers and parents are already sharing ideas in our group.'}
                                </p>
                                <Button variant="outline" size="small" className="w-full justify-between bg-paper hover:bg-white text-xs">
                                    {language === 'he' ? 'הצטרפות לקבוצה' : 'Join Group'}
                                    <Icon name="arrow-right" size="xs" />
                                </Button>
                            </div>
                        </div>
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
                        <div className="flex items-start gap-4 bg-sand/20 p-4 rounded-xl">
                            <img
                                src="/assets/personas/persona-modal-guide.webp"
                                alt="Guide"
                                className="w-20 h-20 object-contain flex-shrink-0"
                            />
                            <div>
                                <p className="text-graphite/80 font-body mb-1">
                                    {language === 'he'
                                        ? 'אנחנו מחויבים להנגיש את התכנים שלנו לכל הקהילות.'
                                        : 'We are committed to making our content accessible to all communities.'}
                                </p>
                                <p className="text-graphite/60 text-sm">
                                    {language === 'he'
                                        ? 'כל התכנים זהים לחלוטין בכל השפות.'
                                        : 'All content is exactly the same across all languages.'}
                                </p>
                            </div>
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
                                        <Icon name="download" size="xs" className="me-2" inline />
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
                                        <Icon name="download" size="xs" className="me-2" inline />
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
