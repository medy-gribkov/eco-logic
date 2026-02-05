import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n';

const NavDropdown = ({
    label,
    items,
    isActive = false,
    onNavigate
}) => {
    const { language, isRTL } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const t = (obj) => obj?.[language] || obj?.['en'] || obj;

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Hover handlers for desktop (with delay to prevent flicker)
    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = () => {
        setIsOpen(false);
        onNavigate?.();
    };

    return (
        <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Trigger Button */}
            <button
                onClick={handleClick}
                className={`
                    px-4 py-2 rounded-full text-sm font-body transition-all duration-200
                    flex items-center gap-1.5
                    ${isActive || isOpen
                        ? 'bg-magenta/10 text-magenta'
                        : 'text-graphite/70 hover:text-graphite hover:bg-sand/50'
                    }
                `}
            >
                <span>{t(label)}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className={`
                            absolute top-full mt-2 min-w-[180px]
                            bg-paper rounded-xl shadow-lg border border-sand
                            overflow-hidden z-50
                            ${isRTL ? 'right-0' : 'left-0'}
                        `}
                    >
                        <div className="py-2">
                            {items.map((item, index) => (
                                <Link
                                    key={item.path || index}
                                    to={item.path}
                                    onClick={handleItemClick}
                                    className="
                                        block px-4 py-2.5 text-sm font-body
                                        text-graphite/80 hover:text-graphite
                                        hover:bg-sand/50 transition-colors
                                    "
                                >
                                    {t(item.label)}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavDropdown;
