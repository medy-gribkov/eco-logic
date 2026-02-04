import React from 'react';

const Container = ({
    children,
    className = '',
    size = 'default' // small, default, large, full
}) => {
    const sizes = {
        small: 'max-w-3xl',
        default: 'max-w-6xl',
        large: 'max-w-7xl',
        full: 'max-w-full'
    };

    return (
        <div className={`
            mx-auto px-4 md:px-8
            ${sizes[size] || sizes.default}
            ${className}
        `}>
            {children}
        </div>
    );
};

export default Container;
