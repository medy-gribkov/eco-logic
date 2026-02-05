import React from 'react';

/**
 * Custom Icon component using ONLY our illustrated PNG icon set
 * NO Lucide icons, NO emojis - brand consistency is key
 * Icons are PNG files in /assets/icons/
 */

const iconMap = {
    // Core brand icons
    checkmark: '/assets/icons/checkmark.webp',
    globe: '/assets/icons/globe.webp',
    ideas: '/assets/icons/ideas.webp',
    leaf: '/assets/icons/leaf.webp',
    lightbulb: '/assets/icons/lightbulb.webp',
    'recycle-heart': '/assets/icons/recycle-heart.webp',
    recycle: '/assets/icons/recycle.webp',
    tree: '/assets/icons/tree.webp',
    // Additional icons
    book: '/assets/icons/book.webp',
    seedling: '/assets/icons/seedling.webp',
    download: '/assets/icons/download.webp',
    heart: '/assets/icons/heart.webp',
    sprout: '/assets/icons/sprout.webp',
    forest: '/assets/icons/forest.webp',
    // Alias for nature-related content
    nature: '/assets/icons/leaf.webp',
    water: '/assets/icons/globe.webp',
};

const sizeMap = {
    xs: 'w-5 h-5', // bumped from 4
    sm: 'w-7 h-7', // bumped from 6
    md: 'w-10 h-10', // bumped from 8 (standard)
    lg: 'w-14 h-14', // bumped from 12
    xl: 'w-20 h-20', // bumped from 16
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32',
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
