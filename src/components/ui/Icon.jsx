import React from 'react';

/**
 * Custom Icon component using ONLY our illustrated PNG icon set
 * NO Lucide icons, NO emojis - brand consistency is key
 * Icons are PNG files in /assets/icons/
 */

const iconMap = {
    // Core brand icons
    checkmark: '/assets/icons/checkmark.png',
    globe: '/assets/icons/globe.png',
    ideas: '/assets/icons/ideas.png',
    leaf: '/assets/icons/leaf.png',
    lightbulb: '/assets/icons/lightbulb.png',
    'recycle-heart': '/assets/icons/recycle-heart.png',
    recycle: '/assets/icons/recycle.png',
    tree: '/assets/icons/tree.png',
    // Additional icons
    book: '/assets/icons/book.png',
    seedling: '/assets/icons/seedling.png',
    download: '/assets/icons/download.png',
    heart: '/assets/icons/heart.png',
    sprout: '/assets/icons/sprout.png',
    forest: '/assets/icons/forest.png',
};

const sizeMap = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
    '3xl': 'w-24 h-24',
};

const Icon = ({
    name,
    size = 'md',
    className = '',
    alt,
    inline = false,
    ...props
}) => {
    const src = iconMap[name];

    if (!src) {
        console.warn(`Icon "${name}" not found. Available icons: ${Object.keys(iconMap).join(', ')}`);
        return null;
    }

    const sizeClass = sizeMap[size] || sizeMap.md;

    return (
        <img
            src={src}
            alt={alt || name}
            className={`
                object-contain select-none
                ${sizeClass}
                ${inline ? 'inline-block align-middle' : ''}
                ${className}
            `}
            draggable={false}
            {...props}
        />
    );
};

// Export available icon names for reference
export const iconNames = Object.keys(iconMap);

// Export the map for specialized use cases
export { iconMap };

export default Icon;
