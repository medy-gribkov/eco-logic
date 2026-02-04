import React from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

const Alert = ({
    children,
    variant = 'info', // info, success, warning, error
    title,
    onClose,
    className = ''
}) => {
    const variants = {
        info: {
            bg: 'bg-blue/10',
            border: 'border-blue/30',
            icon: <Info className="w-5 h-5 text-blue" />,
            title: 'text-blue'
        },
        success: {
            bg: 'bg-green/10',
            border: 'border-green/30',
            icon: <CheckCircle className="w-5 h-5 text-green" />,
            title: 'text-green'
        },
        warning: {
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/30',
            icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
            title: 'text-yellow-600'
        },
        error: {
            bg: 'bg-magenta/10',
            border: 'border-magenta/30',
            icon: <AlertCircle className="w-5 h-5 text-magenta" />,
            title: 'text-magenta'
        }
    };

    const style = variants[variant] || variants.info;

    return (
        <div className={`
            ${style.bg} ${style.border}
            border rounded-lg p-4
            ${className}
        `}>
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
                <div className="flex-1">
                    {title && (
                        <h4 className={`font-display text-lg mb-1 ${style.title}`}>
                            {title}
                        </h4>
                    )}
                    <div className="text-graphite/80">{children}</div>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="flex-shrink-0 p-1 hover:bg-graphite/10 rounded transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Alert;
