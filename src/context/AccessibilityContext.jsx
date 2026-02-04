import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

const defaultSettings = {
    // Vision Tab
    fontSize: 'normal',
    highContrast: false,
    focusIndicators: false,
    linkHighlighting: false,
    colorBlindMode: 'none', // 'none', 'protanopia', 'deuteranopia', 'tritanopia'

    // Motor Tab
    reducedMotion: false,
    largeCursor: false,
    largeClickTargets: false,
    keyboardNavigation: false,

    // Cognitive Tab
    dyslexiaFont: false,
    readingGuide: false,
    simplifiedLayout: false,
    contentHighlighting: false,
};

export const AccessibilityProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('ecologic-accessibility');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Merge with defaults to handle new settings
                return { ...defaultSettings, ...parsed };
            } catch {
                return defaultSettings;
            }
        }
        return defaultSettings;
    });

    useEffect(() => {
        localStorage.setItem('ecologic-accessibility', JSON.stringify(settings));

        const root = document.documentElement;

        // Vision: Font size
        const fontSizes = {
            'normal': '16px',
            'large': '18px',
            'x-large': '20px'
        };
        root.style.fontSize = fontSizes[settings.fontSize];

        // Vision: High contrast
        root.classList.toggle('high-contrast', settings.highContrast);

        // Vision: Focus indicators
        root.classList.toggle('focus-indicators', settings.focusIndicators);

        // Vision: Link highlighting
        root.classList.toggle('link-highlighting', settings.linkHighlighting);

        // Vision: Color blind modes
        root.classList.remove('color-blind-protanopia', 'color-blind-deuteranopia', 'color-blind-tritanopia');
        if (settings.colorBlindMode !== 'none') {
            root.classList.add(`color-blind-${settings.colorBlindMode}`);
        }

        // Motor: Reduced motion
        root.classList.toggle('reduce-motion', settings.reducedMotion);

        // Motor: Large cursor
        root.classList.toggle('large-cursor', settings.largeCursor);

        // Motor: Large click targets
        root.classList.toggle('large-click-targets', settings.largeClickTargets);

        // Motor: Keyboard navigation
        root.classList.toggle('keyboard-navigation', settings.keyboardNavigation);

        // Cognitive: Dyslexia font
        root.classList.toggle('dyslexia-font', settings.dyslexiaFont);

        // Cognitive: Reading guide
        root.classList.toggle('reading-guide', settings.readingGuide);

        // Cognitive: Simplified layout
        root.classList.toggle('simplified-layout', settings.simplifiedLayout);

        // Cognitive: Content highlighting
        root.classList.toggle('content-highlighting', settings.contentHighlighting);

    }, [settings]);

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const resetSettings = () => {
        setSettings(defaultSettings);
    };

    return (
        <AccessibilityContext.Provider value={{
            settings,
            updateSetting,
            resetSettings,
        }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};

export default AccessibilityContext;
