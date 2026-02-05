import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n';
import { mediaAssetsManifest } from '../../data/press-kit-content';

const MediaDownloadModal = ({ isOpen, onClose }) => {
    const { language } = useLanguage();
    const [expandedCategory, setExpandedCategory] = useState(null);

    const t = (obj) => obj?.[language] || obj?.['en'] || obj;

    const toggleCategory = (categoryId) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };

    const getCategoryIcon = (categoryId) => {
        const icons = {
            logos: 'leaf',
            heroes: 'globe',
            personas: 'heart',
            social: 'ideas',
            products: 'seedling'
        };
        return icons[categoryId] || 'download';
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={language === 'he' ? 'תמונות ומדיה' : 'Photos & Media'}
            size="large"
        >
            <div className="space-y-4">
                {/* Intro */}
                <div className="flex items-start gap-4 bg-sand/30 p-4 rounded-xl">
                    <img
                        src="/assets/personas/persona-modal-guide.webp"
                        alt="Guide"
                        className="w-16 h-16 object-contain flex-shrink-0"
                    />
                    <div>
                        <p className="text-graphite/80 font-body text-sm">
                            {language === 'he'
                                ? 'לחצו על קטגוריה כדי לראות את הקבצים הזמינים להורדה. כל הקבצים פתוחים לשימוש בכתבות ופרסומים על EcoLogic.'
                                : 'Click a category to see available files for download. All files are free to use in articles and publications about EcoLogic.'}
                        </p>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-2">
                    {mediaAssetsManifest.categories.map((category) => (
                        <div key={category.id} className="border border-sand rounded-xl overflow-hidden">
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="w-full flex items-center justify-between p-4 bg-paper hover:bg-sand/30 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon name={getCategoryIcon(category.id)} size="sm" />
                                    <span className="font-display text-lg text-graphite">
                                        {t(category.title)}
                                    </span>
                                    <span className="text-xs text-graphite/50 bg-sand px-2 py-0.5 rounded">
                                        {category.files.length} {language === 'he' ? 'קבצים' : 'files'}
                                    </span>
                                </div>
                                <span className={`transform transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-graphite/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            {/* Category Files */}
                            {expandedCategory === category.id && (
                                <div className="border-t border-sand bg-sand/10 p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {category.files.map((file) => (
                                            <a
                                                key={file.name}
                                                href={file.path}
                                                download={file.name}
                                                className="flex items-center gap-3 p-3 bg-paper rounded-lg border border-sand hover:border-magenta/30 hover:shadow-sm transition-all group"
                                            >
                                                {/* Thumbnail preview for images */}
                                                <div className="w-12 h-12 rounded bg-sand/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                    {file.path.match(/\.(png|jpg|jpeg|svg)$/i) ? (
                                                        <img
                                                            src={file.path}
                                                            alt={file.name}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'flex';
                                                            }}
                                                        />
                                                    ) : null}
                                                    <Icon name="download" size="sm" className={file.path.match(/\.(png|jpg|jpeg|svg)$/i) ? 'hidden' : ''} />
                                                </div>

                                                {/* File info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-body text-sm text-graphite truncate">
                                                        {file.name}
                                                    </div>
                                                    <div className="text-xs text-graphite/50">
                                                        {file.size}
                                                    </div>
                                                </div>

                                                {/* Download icon */}
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Icon name="download" size="xs" className="text-magenta" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="text-center pt-4 border-t border-sand">
                    <p className="text-xs text-graphite/50">
                        {language === 'he'
                            ? 'לבקשות מיוחדות או רזולוציות גבוהות יותר, פנו אלינו: press@ecologic.org.il'
                            : 'For special requests or higher resolutions, contact us: press@ecologic.org.il'}
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default MediaDownloadModal;
