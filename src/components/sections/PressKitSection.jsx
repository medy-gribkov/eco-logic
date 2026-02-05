import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Modal from '../ui/Modal';
import { useLanguage } from '../../i18n';
import DownloadButton from '../features/DownloadButton';
import MediaDownloadModal from '../features/MediaDownloadModal';
import BrandGuidelinesTemplate from '../../pdf/templates/BrandGuidelinesTemplate';
import ColorPaletteTemplate from '../../pdf/templates/ColorPaletteTemplate';
import { brandGuidelinesContent, colorPaletteContent } from '../../data/press-kit-content';

// Press Kit / Media Kit Section - Complete company information
// isFullPage: when true, shows full section (for /media-kit page)
// when false/undefined, shows compact teaser (for homepage)
const PressKitSection = ({ isFullPage = false }) => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
    const [isFullKitModalOpen, setIsFullKitModalOpen] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    // Brand assets with custom Icon component names
    const brandAssets = [
        {
            iconName: 'leaf',
            title: { he: 'לוגו EcoLogic', en: 'EcoLogic Logo' },
            description: { he: 'קבצי לוגו בפורמטים שונים (SVG, PNG)', en: 'Logo files in various formats (SVG, PNG)' },
            formats: ['SVG', 'PNG'],
            color: 'bg-green/10 hover:bg-green/20',
            type: 'direct',
            file: '/assets/logo/logo.svg'
        },
        {
            iconName: 'ideas',
            title: { he: 'פלטת צבעים', en: 'Color Palette' },
            description: { he: 'צבעי המותג הרשמיים עם קודים', en: 'Official brand colors with codes' },
            formats: ['PDF'],
            color: 'bg-magenta/10 hover:bg-magenta/20',
            type: 'pdf',
            template: ColorPaletteTemplate,
            data: colorPaletteContent,
            fileNameBase: 'EcoLogic-Color-Palette'
        },
        {
            iconName: 'book',
            title: { he: 'מדריך מותג', en: 'Brand Guidelines' },
            description: { he: 'הנחיות שימוש בזהות הויזואלית', en: 'Visual identity usage guidelines' },
            formats: ['PDF'],
            color: 'bg-sage/20 hover:bg-sage/30',
            type: 'pdf',
            template: BrandGuidelinesTemplate,
            data: brandGuidelinesContent,
            fileNameBase: 'EcoLogic-Brand-Guidelines'
        },
        {
            iconName: 'globe',
            title: { he: 'תמונות ומדיה', en: 'Photos & Media' },
            description: { he: 'תמונות ברזולוציה גבוהה לשימוש בפרסום', en: 'High-resolution images for publications' },
            formats: ['JPG', 'PNG'],
            color: 'bg-sand hover:bg-sand/70',
            type: 'media'
        }
    ];

    // Official brand colors
    const brandColors = [
        { name: 'Green', hex: '#1D7C5A', usage: { he: 'צבע ראשי', en: 'Primary' } },
        { name: 'Magenta', hex: '#FF2D7A', usage: { he: 'הדגשה', en: 'Accent' } },
        { name: 'Sand', hex: '#E8DFD0', usage: { he: 'רקע', en: 'Background' } },
        { name: 'Graphite', hex: '#111111', usage: { he: 'טקסט', en: 'Text' } },
    ];

    // Accurate fact sheet
    const factSheet = [
        { label: { he: 'שנת הקמה', en: 'Founded' }, value: '2024' },
        { label: { he: 'מיקום', en: 'Location' }, value: { he: 'חיפה, ישראל', en: 'Haifa, Israel' } },
        { label: { he: 'סוג ארגון', en: 'Organization' }, value: { he: 'עמותה רשומה', en: 'Registered Non-profit' } },
        { label: { he: 'תחום', en: 'Focus' }, value: { he: 'חינוך סביבתי', en: 'Environmental Education' } },
    ];

    // Key programs
    const keyPrograms = [
        { iconName: 'seedling', name: { he: 'ערכות שתילה', en: 'Seedling Kits' }, desc: { he: 'ערכות גידול לבתי ספר', en: 'Growing kits for schools' } },
        { iconName: 'book', name: { he: 'תכניות לימודים', en: 'Curricula' }, desc: { he: 'חומרי לימוד סביבתיים', en: 'Environmental lesson plans' } },
        { iconName: 'lightbulb', name: { he: 'סדנאות', en: 'Workshops' }, desc: { he: 'הדרכות אינטראקטיביות', en: 'Interactive training sessions' } },
        { iconName: 'forest', name: { he: 'יום שדה ירוק', en: 'Green Field Day' }, desc: { he: 'פעילות שטח לקהילות', en: 'Outdoor activities for communities' } },
    ];

    // Press contact information
    const pressContact = {
        email: 'press@ecologic.org.il',
        phone: '+972-4-XXX-XXXX',
        title: { he: 'לפניות עיתונות ומדיה', en: 'For Press & Media Inquiries' }
    };

    // Mission statement
    const mission = {
        he: 'EcoLogic היא עמותה ישראלית מחיפה, המספקת משאבי חינוך סביבתי חינמיים לבתי ספר, קהילות וארגונים ברחבי הארץ. המשימה שלנו: להעצים את הדור הבא לשמור על כדור הארץ דרך חינוך מעשי, ערכות שתילה, וסדנאות אינטראקטיביות.',
        en: 'EcoLogic is an Israeli non-profit based in Haifa, providing free environmental education resources to schools, communities, and organizations nationwide. Our mission: empowering the next generation to protect our planet through hands-on education, seedling kits, and interactive workshops.'
    };

    // Compact teaser version for homepage
    if (!isFullPage) {
        return (
            <Section id="press-kit" spacing="default" className="relative overflow-hidden bg-paper">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                    style={{ backgroundImage: 'url(/assets/backgrounds/bg-features.webp)' }}
                />
                <Container className="relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta px-4 py-2 rounded-full mb-4">
                                <Icon name="book" size="xs" inline />
                                <span className="font-body text-sm uppercase tracking-wider">
                                    {language === 'he' ? 'ערכת מדיה' : 'Media Kit'}
                                </span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl mb-3 text-graphite">
                                {language === 'he' ? 'ערכת עיתונות ומדיה' : 'Press & Media Kit'}
                            </h2>
                            <p className="text-graphite/70 max-w-xl mx-auto">
                                {language === 'he'
                                    ? 'כל מה שצריך כדי לכתוב עלינו או לשתף פעולה - לוגואים, צבעים, תמונות ועוד'
                                    : 'Everything you need to write about us or collaborate - logos, colors, images and more'}
                            </p>
                        </div>

                        {/* Preview Grid */}
                        <div className="grid md:grid-cols-4 gap-4 mb-8">
                            {/* Logo Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-paper rounded-2xl p-5 shadow-card border border-sand text-center"
                            >
                                <img
                                    src="/assets/logo/logo.svg"
                                    alt="EcoLogic Logo"
                                    className="w-16 h-16 object-contain mx-auto mb-3"
                                />
                                <div className="font-display text-sm text-graphite">
                                    {language === 'he' ? 'לוגו' : 'Logo'}
                                </div>
                                <div className="text-xs text-graphite/50">SVG, PNG</div>
                            </motion.div>

                            {/* Color Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="bg-paper rounded-2xl p-5 shadow-card border border-sand text-center"
                            >
                                <div className="flex justify-center gap-1 mb-3">
                                    {brandColors.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-12 rounded-lg first:rounded-s-xl last:rounded-e-xl shadow-sm"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                    ))}
                                </div>
                                <div className="font-display text-sm text-graphite">
                                    {language === 'he' ? 'צבעים' : 'Colors'}
                                </div>
                                <div className="text-xs text-graphite/50">PDF</div>
                            </motion.div>

                            {/* Guidelines Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-paper rounded-2xl p-5 shadow-card border border-sand text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-3 bg-sage/20 rounded-xl flex items-center justify-center">
                                    <Icon name="book" size="lg" />
                                </div>
                                <div className="font-display text-sm text-graphite">
                                    {language === 'he' ? 'מדריך מותג' : 'Guidelines'}
                                </div>
                                <div className="text-xs text-graphite/50">PDF</div>
                            </motion.div>

                            {/* Media Preview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="bg-paper rounded-2xl p-5 shadow-card border border-sand text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden">
                                    <img
                                        src="/assets/personas/persona-modal-guide.webp"
                                        alt="Media"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="font-display text-sm text-graphite">
                                    {language === 'he' ? 'תמונות' : 'Photos'}
                                </div>
                                <div className="text-xs text-graphite/50">JPG, PNG</div>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <Button
                                variant="primary"
                                size="large"
                                className="bg-magenta hover:bg-magenta/90"
                                onClick={() => navigate('/media-kit')}
                            >
                                <Icon name="download" size="xs" className="brightness-0 invert me-2" inline />
                                {language === 'he' ? 'לערכת המדיה המלאה' : 'View Full Media Kit'}
                            </Button>
                        </motion.div>
                    </motion.div>
                </Container>
            </Section>
        );
    }

    // Full page version
    return (
        <Section id="press-kit" spacing="large" className="relative overflow-hidden bg-paper">
            {/* Subtle background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-features.webp)' }}
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
                        <Icon name="book" size="xs" inline />
                        <span className="font-body text-sm uppercase tracking-wider">
                            {language === 'he' ? 'ערכת מדיה' : 'Media Kit'}
                        </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl mb-4 text-graphite">
                        {language === 'he' ? 'ערכת עיתונות ומדיה' : 'Press & Media Kit'}
                    </h2>
                    <p className="text-xl text-graphite/70 max-w-2xl mx-auto">
                        {language === 'he'
                            ? 'כל מה שצריך לכתוב עלינו או לשתף פעולה איתנו'
                            : 'Everything you need to write about us or collaborate'}
                    </p>
                </motion.div>

                {/* Main Grid: Assets + Info */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Brand Assets - 2 columns */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display text-xl mb-6 text-graphite flex items-center gap-2">
                            <Icon name="download" size="sm" inline />
                            {language === 'he' ? 'נכסי מותג להורדה' : 'Downloadable Assets'}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {brandAssets.map((asset, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-5 rounded-2xl ${asset.color} transition-all duration-300 cursor-pointer group`}
                                    onClick={() => {
                                        if (asset.type === 'pdf') {
                                            setSelectedAsset(asset);
                                            setIsModalOpen(true);
                                        } else if (asset.type === 'media') {
                                            setIsMediaModalOpen(true);
                                        } else if (asset.file) {
                                            window.open(asset.file, '_blank');
                                        }
                                    }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <Icon name={asset.iconName} size="md" />
                                        <div className="flex gap-1">
                                            {asset.formats.map((format, i) => (
                                                <span key={i} className="text-xs bg-paper/50 px-2 py-0.5 rounded text-graphite/60">
                                                    {format}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <h4 className="font-display text-lg text-graphite mb-1">{asset.title[language]}</h4>
                                    <p className="text-sm text-graphite/60">{asset.description[language]}</p>
                                    <div className="mt-3 text-sm font-body text-green flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Icon name="download" size="xs" inline />
                                        {language === 'he' ? 'הורדה' : 'Download'}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Colors, Facts, Contact */}
                    <div className="space-y-6">
                        {/* Brand Colors */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-paper rounded-2xl p-6 shadow-card border border-sand"
                        >
                            <h3 className="font-display text-lg mb-4 text-graphite flex items-center gap-2">
                                <Icon name="ideas" size="xs" inline />
                                {language === 'he' ? 'צבעי המותג' : 'Brand Colors'}
                            </h3>
                            <div className="space-y-3">
                                {brandColors.map((color, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-lg shadow-sm border border-sand/50"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <div className="flex-1">
                                            <div className="text-sm font-body text-graphite">{color.name}</div>
                                            <div className="text-xs text-graphite/50 font-mono">{color.hex}</div>
                                        </div>
                                        <div className="text-xs text-graphite/40">{color.usage[language]}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Fact Sheet */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-paper rounded-2xl p-6 shadow-card border border-sand"
                        >
                            <h3 className="font-display text-lg mb-4 text-graphite flex items-center gap-2">
                                <Icon name="checkmark" size="xs" inline />
                                {language === 'he' ? 'עובדות מהירות' : 'Quick Facts'}
                            </h3>
                            <div className="space-y-3">
                                {factSheet.map((fact, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-sand/50 pb-2 last:border-0">
                                        <span className="text-sm text-graphite/60">{fact.label[language]}</span>
                                        <span className="text-sm font-body text-graphite">{typeof fact.value === 'object' ? fact.value[language] : fact.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Press Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-magenta/10 rounded-2xl p-6"
                        >
                            <h3 className="font-display text-lg mb-3 text-graphite flex items-center gap-2">
                                <Icon name="heart" size="xs" inline />
                                {pressContact.title[language]}
                            </h3>
                            <a href={`mailto:${pressContact.email}`} className="text-magenta font-body hover:underline block mb-1">
                                {pressContact.email}
                            </a>
                            <p className="text-sm text-graphite/60">{pressContact.phone}</p>
                        </motion.div>
                    </div>
                </div>

                {/* Key Programs */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <h3 className="font-display text-xl mb-6 text-graphite text-center">
                        {language === 'he' ? 'התכניות המרכזיות שלנו' : 'Our Key Programs'}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {keyPrograms.map((program, index) => (
                            <div key={index} className="bg-paper rounded-xl p-4 text-center shadow-card border border-sand/50">
                                <div className="flex justify-center mb-3">
                                    <Icon name={program.iconName} size="lg" />
                                </div>
                                <h4 className="font-display text-sm text-graphite mb-1">{program.name[language]}</h4>
                                <p className="text-xs text-graphite/60">{program.desc[language]}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Mission / Boilerplate */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-green/5 rounded-3xl p-8 md:p-10 border border-green/20"
                >
                    <div className="flex items-start gap-6 flex-col md:flex-row">
                        <img
                            src="/assets/logo/logo.webp"
                            alt="EcoLogic"
                            className="w-20 h-20 object-contain"
                        />
                        <div className="flex-1">
                            <h3 className="font-display text-xl mb-3 text-graphite">
                                {language === 'he' ? 'על EcoLogic' : 'About EcoLogic'}
                            </h3>
                            <p className="text-graphite/70 leading-relaxed mb-4">
                                {mission[language]}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    variant="primary"
                                    className="bg-green hover:bg-green/90 flex items-center gap-2"
                                    onClick={() => setIsFullKitModalOpen(true)}
                                >
                                    <Icon name="download" size="xs" className="brightness-0 invert" inline />
                                    {language === 'he' ? 'הורד ערכת מדיה מלאה' : 'Download Full Media Kit'}
                                </Button>
                                <a href="mailto:press@ecologic.org.il">
                                    <Button variant="secondary" className="border-graphite/30">
                                        {language === 'he' ? 'צור קשר לראיונות' : 'Contact for Interviews'}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Language Selection Modal for PDF Downloads */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedAsset(null);
                    }}
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
                                {selectedAsset && selectedAsset.template && (
                                    <DownloadButton
                                        document={
                                            <selectedAsset.template
                                                data={selectedAsset.data}
                                                language="en"
                                            />
                                        }
                                        fileName={`${selectedAsset.fileNameBase}-en.pdf`}
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
                                {selectedAsset && selectedAsset.template && (
                                    <DownloadButton
                                        document={
                                            <selectedAsset.template
                                                data={selectedAsset.data}
                                                language="he"
                                            />
                                        }
                                        fileName={`${selectedAsset.fileNameBase}-he.pdf`}
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
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setSelectedAsset(null);
                                }}
                                className="text-sm text-graphite/40 hover:text-magenta transition-colors"
                            >
                                {language === 'he' ? 'ביטול' : 'Cancel'}
                            </button>
                        </div>
                    </div>
                </Modal>

                {/* Media Download Modal */}
                <MediaDownloadModal
                    isOpen={isMediaModalOpen}
                    onClose={() => setIsMediaModalOpen(false)}
                />

                {/* Full Media Kit Modal */}
                <Modal
                    isOpen={isFullKitModalOpen}
                    onClose={() => setIsFullKitModalOpen(false)}
                    title={language === 'he' ? 'ערכת מדיה מלאה' : 'Full Media Kit'}
                    size="large"
                >
                    <div className="space-y-6">
                        {/* Intro */}
                        <div className="flex items-start gap-4 bg-green/10 p-4 rounded-xl">
                            <img
                                src="/assets/personas/persona-celebration.webp"
                                alt="Celebration"
                                className="w-20 h-20 object-contain flex-shrink-0"
                            />
                            <div>
                                <p className="text-graphite/80 font-body">
                                    {language === 'he'
                                        ? 'כל מה שצריך כדי לכתוב עלינו! הורידו את המסמכים והתמונות שלנו בקליק.'
                                        : 'Everything you need to write about us! Download our documents and images with a click.'}
                                </p>
                            </div>
                        </div>

                        {/* PDF Documents */}
                        <div>
                            <h4 className="font-display text-lg text-graphite mb-4 flex items-center gap-2">
                                <Icon name="book" size="sm" inline />
                                {language === 'he' ? 'מסמכי PDF' : 'PDF Documents'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Brand Guidelines */}
                                <div className="bg-sand/30 rounded-xl p-4">
                                    <h5 className="font-display text-sm text-graphite mb-3">
                                        {language === 'he' ? 'מדריך מותג' : 'Brand Guidelines'}
                                    </h5>
                                    <div className="flex gap-2">
                                        <DownloadButton
                                            document={<BrandGuidelinesTemplate data={brandGuidelinesContent} language="en" />}
                                            fileName="EcoLogic-Brand-Guidelines-en.pdf"
                                            variant="secondary"
                                            className="flex-1 text-sm"
                                        >
                                            EN
                                        </DownloadButton>
                                        <DownloadButton
                                            document={<BrandGuidelinesTemplate data={brandGuidelinesContent} language="he" />}
                                            fileName="EcoLogic-Brand-Guidelines-he.pdf"
                                            variant="secondary"
                                            className="flex-1 text-sm"
                                        >
                                            HE
                                        </DownloadButton>
                                    </div>
                                </div>

                                {/* Color Palette */}
                                <div className="bg-sand/30 rounded-xl p-4">
                                    <h5 className="font-display text-sm text-graphite mb-3">
                                        {language === 'he' ? 'פלטת צבעים' : 'Color Palette'}
                                    </h5>
                                    <div className="flex gap-2">
                                        <DownloadButton
                                            document={<ColorPaletteTemplate data={colorPaletteContent} language="en" />}
                                            fileName="EcoLogic-Color-Palette-en.pdf"
                                            variant="secondary"
                                            className="flex-1 text-sm"
                                        >
                                            EN
                                        </DownloadButton>
                                        <DownloadButton
                                            document={<ColorPaletteTemplate data={colorPaletteContent} language="he" />}
                                            fileName="EcoLogic-Color-Palette-he.pdf"
                                            variant="secondary"
                                            className="flex-1 text-sm"
                                        >
                                            HE
                                        </DownloadButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logo Files */}
                        <div>
                            <h4 className="font-display text-lg text-graphite mb-4 flex items-center gap-2">
                                <Icon name="leaf" size="sm" inline />
                                {language === 'he' ? 'קבצי לוגו' : 'Logo Files'}
                            </h4>
                            <div className="flex gap-3">
                                <a
                                    href="/assets/logo/logo.svg"
                                    download="EcoLogic-Logo.svg"
                                    className="flex items-center gap-2 px-4 py-2 bg-sand/30 rounded-lg hover:bg-sand transition-colors"
                                >
                                    <Icon name="download" size="xs" inline />
                                    <span className="text-sm font-body">SVG</span>
                                </a>
                                <a
                                    href="/assets/logo/logo.webp"
                                    download="EcoLogic-Logo.png"
                                    className="flex items-center gap-2 px-4 py-2 bg-sand/30 rounded-lg hover:bg-sand transition-colors"
                                >
                                    <Icon name="download" size="xs" inline />
                                    <span className="text-sm font-body">PNG</span>
                                </a>
                            </div>
                        </div>

                        {/* Photos & Media Link */}
                        <div>
                            <h4 className="font-display text-lg text-graphite mb-4 flex items-center gap-2">
                                <Icon name="globe" size="sm" inline />
                                {language === 'he' ? 'תמונות ומדיה' : 'Photos & Media'}
                            </h4>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setIsFullKitModalOpen(false);
                                    setIsMediaModalOpen(true);
                                }}
                                className="flex items-center gap-2"
                            >
                                <Icon name="ideas" size="xs" inline />
                                {language === 'he' ? 'פתח גלריית מדיה' : 'Open Media Gallery'}
                            </Button>
                        </div>

                        {/* Close button */}
                        <div className="flex justify-center pt-2 border-t border-sand">
                            <button
                                onClick={() => setIsFullKitModalOpen(false)}
                                className="text-sm text-graphite/40 hover:text-magenta transition-colors pt-4"
                            >
                                {language === 'he' ? 'סגור' : 'Close'}
                            </button>
                        </div>
                    </div>
                </Modal>
            </Container>
        </Section>
    );
};

export default PressKitSection;
