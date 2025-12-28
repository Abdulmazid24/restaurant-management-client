import React from 'react';
import PropTypes from 'prop-types';

/**
 * Skeleton Loading Component
 * Show loading state with shimmer effect
 */
const Skeleton = ({ variant = 'text', width, height, className = '', count = 1 }) => {
    const baseStyles = 'skeleton animate-pulse bg-neutral-200 dark:bg-neutral-700';

    const variants = {
        text: 'h-4 rounded',
        title: 'h-8 rounded',
        circle: 'rounded-full',
        rectangle: 'rounded-lg',
        card: 'h-64 rounded-2xl',
    };

    const skeletonElement = (
        <div
            className={`${baseStyles} ${variants[variant]} ${className}`}
            style={{
                width: width || (variant === 'circle' ? height : '100%'),
                height: height || undefined,
            }}
        />
    );

    if (count === 1) {
        return skeletonElement;
    }

    return (
        <div className="space-y-3">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index}>{skeletonElement}</div>
            ))}
        </div>
    );
};

Skeleton.propTypes = {
    variant: PropTypes.oneOf(['text', 'title', 'circle', 'rectangle', 'card']),
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    count: PropTypes.number,
};

/**
 * Skeleton Card for food items
 */
export const SkeletonCard = () => (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md">
        <Skeleton variant="rectangle" height="200px" className="mb-4" />
        <Skeleton variant="title" className="mb-2" />
        <Skeleton variant="text" width="60%" className="mb-4" />
        <div className="flex justify-between items-center">
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="rectangle" width="80px" height="36px" />
        </div>
    </div>
);

/**
 * Skeleton List for multiple items
 */
export const SkeletonList = ({ count = 6 }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
            <SkeletonCard key={index} />
        ))}
    </div>
);

SkeletonList.propTypes = {
    count: PropTypes.number,
};

export default Skeleton;
