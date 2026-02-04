import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray/20 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-4 text-right rtl:text-right ltr:text-left"
            >
                <span className="font-display text-lg">{title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-gray" />
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-graphite/70 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({
    items, // [{ id, title, content }]
    allowMultiple = false,
    className = ''
}) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (id) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(id)
                    ? prev.filter(item => item !== id)
                    : [...prev, id]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(id) ? [] : [id]
            );
        }
    };

    return (
        <div className={`bg-paper border border-gray/20 rounded-xl ${className}`}>
            <div className="p-4 md:p-6">
                {items.map((item) => (
                    <AccordionItem
                        key={item.id}
                        title={item.title}
                        isOpen={openItems.includes(item.id)}
                        onToggle={() => toggleItem(item.id)}
                    >
                        {item.content}
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
