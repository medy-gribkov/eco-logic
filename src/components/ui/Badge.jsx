import React from 'react';

const Badge = ({
    children,
    variant = 'default', // default, outline, solid
    color = 'green', // green, blue, magenta, gray
    size = 'default', // small, default
    className = ''
}) => {
    const colors = {
        green: {
            default: 'bg-green/10 text-green',
            outline: 'border border-green text-green',
            solid: 'bg-green text-paper'
        },
        blue: {
            default: 'bg-blue/10 text-blue',
            outline: 'border border-blue text-blue',
            solid: 'bg-blue text-paper'
        },
        magenta: {
            default: 'bg-magenta/10 text-magenta',
            outline: 'border border-magenta text-magenta',
            solid: 'bg-magenta text-paper'
        },
        gray: {
            default: 'bg-gray/20 text-graphite/70',
            outline: 'border border-gray text-graphite/70',
            solid: 'bg-gray text-graphite'
        }
    };

    const sizes = {
        small: 'px-2 py-0.5 text-xs',
        default: 'px-3 py-1 text-sm'
    };

    const colorStyle = colors[color]?.[variant] || colors.green.default;

    return (
        <span className={`
            inline-flex items-center rounded-full font-medium
            ${colorStyle}
            ${sizes[size] || sizes.default}
            ${className}
        `}>
            {children}
        </span>
    );
};

export default Badge;
