import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, X, RotateCcw, Eye, Hand, Brain } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { useLanguage } from '../../i18n';
import Switch from './Switch';

// Tab definitions
const tabs = [
    { id: 'vision', icon: Eye },
    { id: 'motor', icon: Hand },
    { id: 'cognitive', icon: Brain },
];

// Vision Tab Component
const VisionTab = ({ settings, updateSetting, isRTL }) => {
    const fontSizeOptions = [
        { value: 'normal', label: 'A', ariaLabel: isRTL ? 'רגיל' : 'Normal' },
        { value: 'large', label: 'A+', ariaLabel: isRTL ? 'גדול' : 'Large' },
        { value: 'x-large', label: 'A++', ariaLabel: isRTL ? 'גדול מאוד' : 'Extra Large' },
    ];

    const colorBlindOptions = [
        { value: 'none', label: isRTL ? 'ללא' : 'None' },
        { value: 'protanopia', label: isRTL ? 'פרוטנופיה' : 'Protanopia' },
        { value: 'deuteranopia', label: isRTL ? 'דויטרנופיה' : 'Deuteranopia' },
        { value: 'tritanopia', label: isRTL ? 'טריטנופיה' : 'Tritanopia' },
    ];

    return (
        <div className="space-y-5">
            {/* Font Size */}
            <div>
                <label className="text-sm font-medium mb-2 block text-graphite/80">
                    {isRTL ? 'גודל טקסט' : 'Text Size'}
                </label>
                <div className="flex gap-2">
                    {fontSizeOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => updateSetting('fontSize', option.value)}
                            aria-label={option.ariaLabel}
                            className={`
                                flex-1 px-3 py-2 rounded-sm font-mono text-sm transition-colors
                                ${settings.fontSize === option.value
                                    ? 'bg-green text-paper'
                                    : 'bg-gray/20 text-graphite hover:bg-gray/30'
                                }
                            `}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'ניגודיות גבוהה' : 'High Contrast'}
                </label>
                <Switch
                    checked={settings.highContrast}
                    onChange={(value) => updateSetting('highContrast', value)}
                />
            </div>

            {/* Focus Indicators */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'מסגרות מיקוד' : 'Focus Indicators'}
                </label>
                <Switch
                    checked={settings.focusIndicators}
                    onChange={(value) => updateSetting('focusIndicators', value)}
                />
            </div>

            {/* Link Highlighting */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'הדגשת קישורים' : 'Link Highlighting'}
                </label>
                <Switch
                    checked={settings.linkHighlighting}
                    onChange={(value) => updateSetting('linkHighlighting', value)}
                />
            </div>

            {/* Color Blind Mode */}
            <div>
                <label className="text-sm font-medium mb-2 block text-graphite/80">
                    {isRTL ? 'מצב עיוורון צבעים' : 'Color Blind Mode'}
                </label>
                <select
                    value={settings.colorBlindMode}
                    onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                    className="w-full px-3 py-2 rounded-sm bg-gray/20 text-graphite text-sm border-0 focus:ring-2 focus:ring-green"
                >
                    {colorBlindOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

// Motor Tab Component
const MotorTab = ({ settings, updateSetting, isRTL }) => {
    return (
        <div className="space-y-5">
            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'הפחתת תנועה' : 'Reduce Motion'}
                </label>
                <Switch
                    checked={settings.reducedMotion}
                    onChange={(value) => updateSetting('reducedMotion', value)}
                />
            </div>

            {/* Large Cursor */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'סמן גדול' : 'Large Cursor'}
                </label>
                <Switch
                    checked={settings.largeCursor}
                    onChange={(value) => updateSetting('largeCursor', value)}
                />
            </div>

            {/* Large Click Targets */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'אזורי לחיצה גדולים' : 'Large Click Targets'}
                </label>
                <Switch
                    checked={settings.largeClickTargets}
                    onChange={(value) => updateSetting('largeClickTargets', value)}
                />
            </div>

            {/* Keyboard Navigation */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'ניווט מקלדת' : 'Keyboard Navigation'}
                </label>
                <Switch
                    checked={settings.keyboardNavigation}
                    onChange={(value) => updateSetting('keyboardNavigation', value)}
                />
            </div>

            <p className="text-xs text-graphite/50 mt-4">
                {isRTL
                    ? 'השתמשו ב-Tab לניווט ו-Enter להפעלה'
                    : 'Use Tab to navigate and Enter to activate'}
            </p>
        </div>
    );
};

// Cognitive Tab Component
const CognitiveTab = ({ settings, updateSetting, isRTL }) => {
    return (
        <div className="space-y-5">
            {/* Dyslexia Font */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'גופן לדיסלקציה' : 'Dyslexia Font'}
                </label>
                <Switch
                    checked={settings.dyslexiaFont}
                    onChange={(value) => updateSetting('dyslexiaFont', value)}
                />
            </div>

            {/* Reading Guide */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'מדריך קריאה' : 'Reading Guide'}
                </label>
                <Switch
                    checked={settings.readingGuide}
                    onChange={(value) => updateSetting('readingGuide', value)}
                />
            </div>

            {/* Simplified Layout */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'תצוגה פשוטה' : 'Simplified Layout'}
                </label>
                <Switch
                    checked={settings.simplifiedLayout}
                    onChange={(value) => updateSetting('simplifiedLayout', value)}
                />
            </div>

            {/* Content Highlighting */}
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-graphite/80">
                    {isRTL ? 'הדגשת תוכן' : 'Content Highlighting'}
                </label>
                <Switch
                    checked={settings.contentHighlighting}
                    onChange={(value) => updateSetting('contentHighlighting', value)}
                />
            </div>

            <p className="text-xs text-graphite/50 mt-4">
                {isRTL
                    ? 'הגדרות אלה מקלות על קריאה והבנה'
                    : 'These settings make reading easier'}
            </p>
        </div>
    );
};

const AccessibilityPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('vision');
    const { settings, updateSetting, resetSettings } = useAccessibility();
    const { isRTL } = useLanguage();

    const tabLabels = {
        vision: isRTL ? 'ראייה' : 'Vision',
        motor: isRTL ? 'מוטוריקה' : 'Motor',
        cognitive: isRTL ? 'קוגניטיבי' : 'Cognitive',
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'vision':
                return <VisionTab settings={settings} updateSetting={updateSetting} isRTL={isRTL} />;
            case 'motor':
                return <MotorTab settings={settings} updateSetting={updateSetting} isRTL={isRTL} />;
            case 'cognitive':
                return <CognitiveTab settings={settings} updateSetting={updateSetting} isRTL={isRTL} />;
            default:
                return null;
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-graphite text-paper flex items-center justify-center shadow-elevated hover:bg-graphite/90 transition-colors"
                aria-label={isRTL ? 'הגדרות נגישות' : 'Accessibility settings'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Accessibility className="w-6 h-6" />
            </motion.button>

            {/* Panel Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-50 bg-graphite/50"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed bottom-24 left-6 z-50 w-96 bg-paper rounded-lg shadow-elevated overflow-hidden max-h-[80vh] flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-gray/20">
                                <h2 className="font-display text-lg uppercase tracking-wider">
                                    {isRTL ? 'נגישות' : 'Accessibility'}
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-gray/20 rounded-sm transition-colors"
                                    aria-label={isRTL ? 'סגור' : 'Close'}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Tab Navigation */}
                            <div className="flex border-b border-gray/20">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`
                                                flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative
                                                ${isActive
                                                    ? 'text-green'
                                                    : 'text-graphite/60 hover:text-graphite'
                                                }
                                            `}
                                            aria-selected={isActive}
                                            role="tab"
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span className="hidden sm:inline">{tabLabels[tab.id]}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeTabIndicator"
                                                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-green rounded-full"
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Tab Content */}
                            <div className="p-5 overflow-y-auto flex-1">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {renderTabContent()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Footer */}
                            <div className="px-5 py-3 border-t border-gray/20">
                                <button
                                    onClick={resetSettings}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-graphite/70 hover:text-graphite hover:bg-gray/10 rounded-sm transition-colors"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    {isRTL ? 'איפוס הכל' : 'Reset All'}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default AccessibilityPanel;
