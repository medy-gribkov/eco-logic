import React from 'react';

const Grid = ({
    children,
    className = '',
    cols = 3, // 1, 2, 3, 4
    gap = 'default' // small, default, large
}) => {
    const colClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    const gapClasses = {
        small: 'gap-4',
        default: 'gap-6 md:gap-8',
        large: 'gap-8 md:gap-12'
    };

    return (
        <div className={`
            grid
            ${colClasses[cols] || colClasses[3]}
            ${gapClasses[gap] || gapClasses.default}
            ${className}
        `}>
            {children}
        </div>
    );
};

export default Grid;
