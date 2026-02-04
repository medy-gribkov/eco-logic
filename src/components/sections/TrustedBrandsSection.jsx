import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n';

const TrustedBrandsSection = () => {
    const { isRTL } = useLanguage();

    // Placeholder brand logos - in production, replace with actual partner logos
    const brands = [
        { name: 'EcoTech', color: '#1D7C5A' },
        { name: 'GreenLife', color: '#2F6BFF' },
        { name: 'NatureCare', color: '#FF2D7A' },
        { name: 'EarthFirst', color: '#1D7C5A' },
        { name: 'CleanFuture', color: '#2F6BFF' },
        { name: 'BioPlanet', color: '#FF2D7A' },
        { name: 'EcoWave', color: '#1D7C5A' },
        { name: 'GreenPath', color: '#2F6BFF' },
    ];

    return (
        <section className="py-12 bg-paper overflow-hidden border-y border-gray/10">
            <div className="max-w-7xl mx-auto px-6 md:px-8 mb-6">
                <p className="text-center text-sm text-graphite/50 uppercase tracking-wider font-body">
                    {isRTL ? 'שותפים ותומכים' : 'Trusted Partners'}
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-paper to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-paper to-transparent z-10" />

                {/* Scrolling content */}
                <div className="flex animate-marquee">
                    {/* First set */}
                    <div className="flex items-center gap-16 px-8">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={`brand-1-${index}`}
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-gray/5 rounded-full cursor-pointer hover:bg-gray/10 transition-colors"
                            >
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-paper font-display text-sm"
                                    style={{ backgroundColor: brand.color }}
                                >
                                    {brand.name.charAt(0)}
                                </div>
                                <span className="font-body text-graphite/70 whitespace-nowrap">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex items-center gap-16 px-8">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={`brand-2-${index}`}
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-gray/5 rounded-full cursor-pointer hover:bg-gray/10 transition-colors"
                            >
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-paper font-display text-sm"
                                    style={{ backgroundColor: brand.color }}
                                >
                                    {brand.name.charAt(0)}
                                </div>
                                <span className="font-body text-graphite/70 whitespace-nowrap">
                                    {brand.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrandsSection;
