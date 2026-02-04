import React, { forwardRef } from 'react';

const Input = forwardRef(({
    label,
    error,
    helperText,
    icon,
    type = 'text',
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
            <div className="relative">
                {icon && (
                    <span className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-gray">
                        {icon}
                    </span>
                )}
                <input
                    ref={ref}
                    type={type}
                    className={`
                        w-full px-4 py-3 rounded-lg
                        bg-paper border
                        transition-colors duration-200
                        focus:outline-none focus:ring-2 focus:ring-green/30
                        ${icon ? 'pl-10 rtl:pl-4 rtl:pr-10' : ''}
                        ${error
                            ? 'border-magenta focus:border-magenta'
                            : 'border-gray/30 hover:border-gray focus:border-green'
                        }
                    `}
                    {...props}
                />
            </div>
            {(error || helperText) && (
                <p className={`mt-1.5 text-sm ${error ? 'text-magenta' : 'text-graphite/60'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
