import React from 'react';
import PropTypes from 'prop-types';

/**
 * Badge Component
 * Small status indicator component
 */
const Badge = ({ children, variant = 'default', size = 'md', className = '' }) => {
    const baseStyles = `
    inline-flex items-center justify-center
    font-semibold rounded-full
    transition-colors duration-200
  `;

    const variants = {
        default: 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200',
        primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
        secondary: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300',
        success: 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300',
        error: 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300',
        warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300',
        info: 'bg-info-100 text-info-800 dark:bg-info-900/30 dark:text-info-300',
    };

    const sizes = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-1',
        lg: 'text-base px-3 py-1.5',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
};

export default Badge;
