```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MessageCircle, Share2, Heart, Bookmark } from 'lucide-react';
import { useLanguage } from '../../i18n';

const SocialPost = ({ type, data, onShare }) => {
    const { language } = useLanguage();

    // Platform configurations
    const platforms = {
        instagram: {
            name: 'Instagram',
            Icon: Instagram,
            color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
            textColor: 'text-white'
        },
        facebook: {
            name: 'Facebook',
            Icon: Facebook,
            color: 'bg-[#1877F2]',
            textColor: 'text-white'
        },
        twitter: {
            name: 'Twitter', // X
            Icon: Twitter,
            color: 'bg-black',
            textColor: 'text-white'
        },
        whatsapp: {
            name: 'WhatsApp',
            Icon: MessageCircle,
            color: 'bg-[#25D366]',
            textColor: 'text-white'
        }
    };

    const platform = platforms[type] || platforms.instagram;
    const PlatformIcon = platform.Icon;

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-sand/50">
            {/* Post Header */}
            <div className="flex items-center gap-3 p-3 border-b border-sand/30 bg-paper/30">
                <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
                    <img src="/assets/logo/logo-icon.svg" alt="EcoLogic" className="w-5 h-5 brightness-0 invert" />
                </div>
                <div className="flex-grow">
                    <div className="font-bold text-xs text-graphite">EcoLogic Education</div>
                    <div className="text-[10px] text-graphite/60">Sponsored • 🌍</div>
                </div>
                <div className="text-graphite/40">•••</div>
            </div>

            {/* Post Image Area - Dynamic Content */}
            <div className="relative aspect-square bg-[#F5F9F6] flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                {/* Decorative Background Patterns */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-magenta/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                {/* Central Stat/Content */}
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-green uppercase mb-4 border border-green/20">
                        {language === 'he' ? 'הידעת?' : 'DID YOU KNOW?'}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-graphite mb-2 leading-tight">
                        {data.savedAmount}
                    </h3>
                    <p className="font-handwriting text-magenta text-lg mb-4 -rotate-2">
                        {data.equivalent}
                    </p>
                    <p className="text-xs text-graphite/70 max-w-[200px] mx-auto leading-relaxed">
                        {data.fact}
                    </p>
                </div>

                {/* Watermark */}
                <div className="absolute bottom-3 right-3 opacity-20">
                    <img src="/assets/logo/logo-icon.svg" alt="" className="w-6 h-6 grayscale" />
                </div>
            </div>

            {/* Post Footer (Actions) */}
            <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-4">
                        <Heart className="w-6 h-6 text-magenta fill-magenta" />
                        <MessageCircle className="w-6 h-6 text-graphite/60" />
                        <Share2 className="w-6 h-6 text-graphite/60" />
                    </div>
                    <Bookmark className="w-6 h-6 text-graphite/60" />
                </div>

                <div className="text-xs font-bold text-graphite mb-1">
                    {language === 'he' ? '5,432 אנשים אהבו את זה' : '5,432 likes'}
                </div>

                <div className="text-xs text-graphite/80">
                    <span className="font-bold mr-1">EcoLogic</span>
                    {language === 'he'
                        ? 'בואו נשמור על המים שלנו ביחד! 💧 #קיימות #חינוך'
                        : 'Let\'s save our water together! 💧 #Sustainability #Education'}
                </div>
            </div>

            {/* Share CTA Overlay */}
            <div className="bg-sand/20 p-3 border-t border-sand/50">
                <button
                    onClick={() => onShare(type)}
                    className={`w - full py - 2 ${ platform.color } ${ platform.textColor } rounded - lg text - sm font - bold shadow - md hover: opacity - 90 transition - opacity flex items - center justify - center gap - 2`}
                >
                    {language === 'he' ? `שתפו ב - ${ platform.name } ` : `Share on ${ platform.name } `}
                    <PlatformIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default SocialPost;
