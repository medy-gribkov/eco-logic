import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Share2, Mail } from 'lucide-react';
import Card from '../components/ui/Card';
import { useLanguage } from '../i18n';

const Privacy = () => {
    const { t, language } = useLanguage();

    const sections = [
        {
            icon: <Eye className="w-6 h-6 text-blue" />,
            title: t('privacy.collectTitle'),
            content: t('privacy.collectText')
        },
        {
            icon: <Shield className="w-6 h-6 text-green" />,
            title: t('privacy.useTitle'),
            content: t('privacy.useText')
        },
        {
            icon: <Share2 className="w-6 h-6 text-magenta" />,
            title: t('privacy.shareTitle'),
            content: t('privacy.shareText')
        },
        {
            icon: <Mail className="w-6 h-6 text-gray" />,
            title: t('privacy.contactTitle'),
            content: t('privacy.contactText')
        }
    ];

    return (
        <div className="py-12 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <Shield className="w-16 h-16 text-green mx-auto mb-6" />
                    <h1 className="font-display text-5xl md:text-6xl mb-4">
                        {t('privacy.title')}
                    </h1>
                    <p className="font-mono text-sm text-gray">
                        {t('privacy.lastUpdated')}: February 2026
                    </p>
                </motion.div>

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <Card>
                        <p className="text-lg leading-relaxed">
                            {t('privacy.intro')}
                        </p>
                    </Card>
                </motion.div>

                {/* Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <Card>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-paper rounded-full">
                                        {section.icon}
                                    </div>
                                    <div>
                                        <h2 className="font-display text-2xl mb-3">{section.title}</h2>
                                        <p className="text-graphite/70 leading-relaxed">{section.content}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="font-mono text-sm text-gray">
                        {language === 'he'
                            ? 'מדיניות זו עשויה להתעדכן מעת לעת. שינויים יפורסמו בעמוד זה.'
                            : 'This policy may be updated from time to time. Changes will be posted on this page.'
                        }
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
