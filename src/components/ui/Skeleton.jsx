import React from 'react';

const Skeleton = ({
    variant = 'text', // text, circular, rectangular, card
    width,
    height,
    className = ''
}) => {
    const baseClasses = 'animate-pulse bg-gray/30';

    const variants = {
        text: `${baseClasses} h-4 rounded`,
        circular: `${baseClasses} rounded-full`,
        rectangular: `${baseClasses} rounded-lg`,
        card: `${baseClasses} rounded-xl`
    };

    const style = {
        width: width || (variant === 'text' ? '100%' : undefined),
        height: height || (variant === 'circular' ? width : undefined)
    };

    return (
        <div
            className={`${variants[variant] || variants.text} ${className}`}
            style={style}
        />
    );
};

// Pre-built skeleton patterns
export const SkeletonCard = ({ className = '' }) => (
    <div className={`bg-paper border border-gray/20 rounded-xl p-6 ${className}`}>
        <Skeleton variant="rectangular" height={48} className="mb-4" />
        <Skeleton variant="text" className="mb-2" />
        <Skeleton variant="text" width="80%" className="mb-4" />
        <Skeleton variant="text" width="60%" />
    </div>
);

export const SkeletonStat = ({ className = '' }) => (
    <div className={`bg-paper border border-gray/20 rounded-xl p-6 text-center ${className}`}>
        <Skeleton variant="circular" width={48} height={48} className="mx-auto mb-3" />
        <Skeleton variant="text" width="60%" className="mx-auto mb-2" />
        <Skeleton variant="text" width="40%" className="mx-auto" />
    </div>
);

export const SkeletonTestimonial = ({ className = '' }) => (
    <div className={`bg-paper border border-gray/20 rounded-xl p-6 ${className}`}>
        <Skeleton variant="text" className="mb-2" />
        <Skeleton variant="text" className="mb-2" />
        <Skeleton variant="text" width="70%" className="mb-6" />
        <div className="flex items-center gap-3">
            <Skeleton variant="circular" width={48} height={48} />
            <div className="flex-1">
                <Skeleton variant="text" width="40%" className="mb-1" />
                <Skeleton variant="text" width="30%" />
            </div>
        </div>
    </div>
);

export default Skeleton;
