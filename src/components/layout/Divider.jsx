import React from 'react';

const Divider = ({
    className = '',
    variant = 'line', // line, dots, wave
    color = 'default' // default, light, accent
}) => {
    const colors = {
        default: 'border-gray/30',
        light: 'border-gray/10',
        accent: 'border-green/30'
    };

    if (variant === 'dots') {
        return (
            <div className={`flex justify-center items-center gap-2 py-8 ${className}`}>
                <span className="w-2 h-2 rounded-full bg-green/40"></span>
                <span className="w-2 h-2 rounded-full bg-blue/40"></span>
                <span className="w-2 h-2 rounded-full bg-magenta/40"></span>
            </div>
        );
    }

    if (variant === 'wave') {
        return (
            <div className={`py-8 ${className}`}>
                <svg viewBox="0 0 1200 40" className="w-full h-8 text-gray/20">
                    <path
                        fill="currentColor"
                        d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,40 L0,40 Z"
                    />
                </svg>
            </div>
        );
    }

    return (
        <hr className={`
            border-t
            ${colors[color] || colors.default}
            my-8 md:my-12
            ${className}
        `} />
    );
};

export default Divider;
