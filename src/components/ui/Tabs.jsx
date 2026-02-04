import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({
    tabs, // [{ id, label, content }]
    defaultTab,
    className = ''
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    return (
        <div className={className}>
            {/* Tab Headers */}
            <div className="flex border-b border-gray/20 mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            relative px-4 py-3 font-medium whitespace-nowrap
                            transition-colors duration-200
                            ${activeTab === tab.id
                                ? 'text-green'
                                : 'text-graphite/60 hover:text-graphite'
                            }
                        `}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {activeContent}
            </motion.div>
        </div>
    );
};

export default Tabs;
