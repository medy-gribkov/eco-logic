import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { useLanguage } from '../i18n';

const NotFound = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* 404 with Ocean Waves Effect */}
                <div className="relative mb-8">
                    <h1 className="font-display text-[10rem] md:text-[15rem] leading-none text-blue/20">
                        {t('notFound.title')}
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">🌊</span>
                    </div>
                </div>

                <h2 className="font-display text-4xl md:text-5xl mb-4">
                    {t('notFound.subtitle')}
                </h2>

                <p className="text-xl text-graphite/70 max-w-md mx-auto mb-8">
                    {t('notFound.message')}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Button onClick={() => navigate('/')} className="px-12">
                        {t('notFound.backHome')}
                    </Button>
                </motion.div>
            </motion.div>

            {/* Floating Plastic Bottles Animation */}
            <div className="absolute bottom-20 left-0 right-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: ['0%', '100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="flex gap-16 text-4xl opacity-20"
                >
                    🥤 🧴 🥤 🧴 🥤 🧴 🥤 🧴 🥤 🧴
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
