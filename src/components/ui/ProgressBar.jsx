import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ value, max = 100, label, color = 'var(--color-green)', className = '' }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <div className="flex justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
                    <span className="font-mono text-xs font-bold">{Math.round(percentage)}%</span>
                </div>
            )}
            <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
