import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card Component
 * Flexible card component with hover effects and variants
 */
const Card = ({
    children,
    variant = 'default',
    hoverable = true,
    padding = 'md',
    className = '',
    onClick,
    ...rest
}) => {
    const baseStyles = `
    bg-white dark:bg-neutral-800
    rounded-2xl
    transition-all duration-300
    ${onClick ? 'cursor-pointer' : ''}
  `;

    const variants = {
        default: `
      border border-neutral-200 dark:border-neutral-700
      shadow-md
      ${hoverable ? 'hover:shadow-xl hover:-translate-y-1' : ''}
    `,
        elevated: `
      shadow-lg
      ${hoverable ? 'hover:shadow-2xl hover:-translate-y-2' : ''}
    `,
        outlined: `
      border-2 border-primary-300 dark:border-primary-700
      ${hoverable ? 'hover:border-primary-500 hover:shadow-lg' : ''}
    `,
        glass: `
      backdrop-blur-lg bg-white/10 dark:bg-black/30
      border border-white/20 dark:border-white/10
      ${hoverable ? 'hover:bg-white/20 hover:shadow-xl' : ''}
    `,
        gradient: `
      bg-gradient-to-br from-primary-50 to-secondary-50
      dark:from-primary-900/20 dark:to-secondary-900/20
      border border-primary-200 dark:border-primary-800
      ${hoverable ? 'hover:shadow-xl hover:-translate-y-1' : ''}
    `,
    };

    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
    };

    return (
        <div
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${paddings[padding]}
        ${className}
      `}
            onClick={onClick}
            {...rest}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'elevated', 'outlined', 'glass', 'gradient']),
    hoverable: PropTypes.bool,
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

/**
 * CardHeader Component
 */
export const CardHeader = ({ children, className = '' }) => (
    <div className={`mb-4 ${className}`}>{children}</div>
);

CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

/**
 * CardTitle Component
 */
export const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-2xl font-bold text-neutral-900 dark:text-neutral-50 ${className}`}>
        {children}
    </h3>
);

CardTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

/**
 * CardDescription Component
 */
export const CardDescription = ({ children, className = '' }) => (
    <p className={`text-sm text-neutral-600 dark:text-neutral-400 ${className}`}>{children}</p>
);

CardDescription.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

/**
 * CardContent Component
 */
export const CardContent = ({ children, className = '' }) => (
    <div className={`${className}`}>{children}</div>
);

CardContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

/**
 * CardFooter Component
 */
export const CardFooter = ({ children, className = '' }) => (
    <div className={`mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 ${className}`}>
        {children}
    </div>
);

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Card;
