import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
    children,
    className = '',
    background = 'default', // default, dark, gradient, accent
    spacing = 'default', // none, small, default, large
    id,
    animate = true
}) => {
    const backgrounds = {
        default: 'bg-transparent',  // Changed to transparent for continuous flow
        dark: 'bg-graphite text-paper',
        gradient: 'bg-gradient-to-br from-blue/5 via-transparent to-magenta/5',
        accent: 'bg-green/5',
        blue: 'bg-blue/5',
        magenta: 'bg-magenta/5',
        paper: 'bg-paper'
    };

    const spacings = {
        none: 'py-0',
        small: 'py-8 md:py-12',
        default: 'py-12 md:py-16',  // Reduced from py-12 md:py-20
        large: 'py-16 md:py-24'     // Reduced from py-20 md:py-32
    };

    const sectionContent = (
        <section
            id={id}
            className={`
                ${backgrounds[background] || backgrounds.default}
                ${spacings[spacing] || spacings.default}
                ${className}
            `}
        >
            {children}
        </section>
    );

    if (animate) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                {sectionContent}
            </motion.div>
        );
    }

    return sectionContent;
};

export default Section;
