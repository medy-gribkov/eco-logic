import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
    const baseStyles = "font-display text-lg uppercase px-8 py-4 rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-green text-white hover:bg-opacity-90 active:scale-95 focus:ring-green",
        cta: "bg-magenta text-white hover:bg-opacity-90 active:scale-95 focus:ring-magenta", // Critical CTAs only
        secondary: "bg-transparent border-2 border-graphite text-graphite hover:bg-graphite hover:text-white active:scale-95 focus:ring-graphite",
        ghost: "bg-transparent text-graphite hover:underline active:scale-95",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default memo(Button);
