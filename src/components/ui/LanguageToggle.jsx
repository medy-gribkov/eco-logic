import React from 'react';
import { useLanguage } from '../../i18n';

const LanguageToggle = ({ className = '' }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={`
                flex items-center gap-2 px-3 py-2
                border border-graphite rounded-sm
                font-mono text-sm uppercase tracking-wider
                hover:bg-graphite hover:text-paper
                transition-colors
                ${className}
            `}
            aria-label={language === 'he' ? 'Switch to English' : 'החלף לעברית'}
        >
            <span className={language === 'he' ? 'opacity-40' : 'font-bold'}>EN</span>
            <span className="text-gray">|</span>
            <span className={language === 'en' ? 'opacity-40' : 'font-bold'}>עב</span>
        </button>
    );
};

export default LanguageToggle;
