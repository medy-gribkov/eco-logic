import React, { forwardRef } from 'react';

const Textarea = forwardRef(({
    label,
    error,
    helperText,
    rows = 4,
    className = '',
    ...props
}, ref) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-graphite mb-1.5">
                    {label}
                </label>
            )}
            <textarea
                ref={ref}
                rows={rows}
                className={`
                    w-full px-4 py-3 rounded-lg
                    bg-paper border resize-none
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-green/30
                    ${error
                        ? 'border-magenta focus:border-magenta'
                        : 'border-gray/30 hover:border-gray focus:border-green'
                    }
                `}
                {...props}
            />
            {(error || helperText) && (
                <p className={`mt-1.5 text-sm ${error ? 'text-magenta' : 'text-graphite/60'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
