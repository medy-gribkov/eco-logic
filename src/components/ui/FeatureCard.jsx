import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({
    iconSrc,
    title,
    description,
    color = 'green', // green, blue, magenta
    className = '',
    onClick
}) => {
    const colors = {
        green: {
            bg: 'bg-green/10',
            border: 'hover:border-green/30'
        },
        blue: {
            bg: 'bg-blue/10',
            border: 'hover:border-blue/30'
        },
        magenta: {
            bg: 'bg-magenta/10',
            border: 'hover:border-magenta/30'
        }
    };

    const colorSet = colors[color] || colors.green;

    return (
        <motion.div
            whileHover={{ y: -4 }}
            onClick={onClick}
            className={`
                bg-paper border border-gray/20 rounded-xl p-8
                transition-all duration-300
                ${colorSet.border}
                ${onClick ? 'cursor-pointer' : ''}
                ${className}
            `}
        >
            <div className={`
                w-16 h-16 rounded-lg flex items-center justify-center mb-6
                ${colorSet.bg}
            `}>
                {iconSrc && (
                    <img
                        src={iconSrc}
                        alt=""
                        className="w-10 h-10 object-contain"
                    />
                )}
            </div>
            <h3 className="font-display text-2xl mb-3">{title}</h3>
            <p className="text-graphite/70 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default FeatureCard;
