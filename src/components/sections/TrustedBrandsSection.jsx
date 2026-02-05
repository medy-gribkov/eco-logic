import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n';

const TrustedBrandsSection = () => {
    const { language, isRTL } = useLanguage();

    const partners = [
        {
            id: 'nature-parks',
            name: { he: 'רשות הטבע והגנים', en: 'Nature & Parks Authority' },
            logo: '/assets/logos/nature-parks-authority.webp',
        },
        {
            id: 'kkl-jnf',
            name: { he: 'קרן קיימת לישראל', en: 'KKL-JNF' },
            logo: '/assets/logos/kkl-jnf.webp',
        },
        {
            id: 'env-ministry',
            name: { he: 'המשרד להגנת הסביבה', en: 'Ministry of Environment' },
            logo: '/assets/logos/env-ministry.webp',
        },
    ];

    return (
        <section className="py-10 bg-gradient-to-b from-paper to-sand/20 overflow-hidden relative">
            {/* Background image - subtle, behind everything */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
                style={{ backgroundImage: 'url(/assets/backgrounds/bg-collaborate.webp)' }}
            />

            {/* Large persona - above bg, full opacity */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <img
                    src="/assets/personas/persona-modal-guide.webp"
                    alt=""
                    className="w-64 md:w-80 h-auto object-contain"
                />
            </div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 relative z-10"
            >
                <p className="text-sm text-graphite/50 font-body mb-1">
                    {language === 'he' ? 'בשיתוף עם' : 'In Partnership With'}
                </p>
                <h3 className="font-display text-xl text-graphite/70">
                    {language === 'he' ? 'גופים מובילים בסביבה' : 'Leading Environmental Bodies'}
                </h3>
            </motion.div>

            {/* Partner Logos - Glassmorphic Cards */}
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative"
                        >
                            {/* Glassmorphic card */}
                            <div className="
                                relative px-6 py-4 
                                bg-paper/60 backdrop-blur-sm
                                border border-sand/50 
                                rounded-2xl shadow-sm
                                hover:shadow-lg hover:border-green/30
                                transition-all duration-300
                                cursor-pointer
                            ">
                                {/* Logo */}
                                <img
                                    src={partner.logo}
                                    alt={partner.name[language]}
                                    className="h-12 md:h-14 w-auto object-contain 
                                               filter grayscale opacity-60 
                                               group-hover:grayscale-0 group-hover:opacity-100
                                               transition-all duration-300"
                                />

                                {/* Hover tooltip with name */}
                                <div className="
                                    absolute -bottom-8 left-1/2 -translate-x-1/2
                                    px-3 py-1 
                                    bg-graphite text-paper text-xs font-body
                                    rounded-full whitespace-nowrap
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-200
                                    pointer-events-none
                                ">
                                    {partner.name[language]}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle decoration line */}
            <div className="mt-10 flex items-center justify-center gap-3 opacity-30 relative z-10">
                <div className="w-12 h-px bg-graphite/30" />
                <div className="w-2 h-2 rounded-full bg-green/50" />
                <div className="w-12 h-px bg-graphite/30" />
            </div>
        </section>
    );
};

export default TrustedBrandsSection;
