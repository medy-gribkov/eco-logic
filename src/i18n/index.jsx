import React, { createContext, useContext, useState, useEffect } from 'react';
import he from './he.json';
import en from './en.json';

const translations = { he, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default to Hebrew
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('ecologic-language');
        return saved || 'he';
    });

    useEffect(() => {
        localStorage.setItem('ecologic-language', language);
        // Set document direction based on language
        document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value || key;
    };

    // Template function for strings with placeholders
    const tTemplate = (key, params = {}) => {
        let text = t(key);
        if (typeof text === 'string') {
            Object.entries(params).forEach(([param, value]) => {
                text = text.replace(`{${param}}`, value);
            });
        }
        return text;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'he' ? 'en' : 'he');
    };

    const isRTL = language === 'he';

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            toggleLanguage,
            t,
            tTemplate,
            isRTL
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
