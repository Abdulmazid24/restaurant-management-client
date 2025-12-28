import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component
 * Modern, accessible button with multiple variants and sizes
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    onClick,
    type = 'button',
    className = '',
    ...rest
}) => {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold text-center transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-primary-500 to-primary-600
      hover:from-primary-600 hover:to-primary-700
      text-white shadow-md hover:shadow-lg
      focus:ring-primary-500
      active:scale-95
    `,
        secondary: `
      bg-gradient-to-r from-secondary-500 to-secondary-600
      hover:from-secondary-600 hover:to-secondary-700
      text-white shadow-md hover:shadow-lg
      focus:ring-secondary-500
      active:scale-95
    `,
        accent: `
      bg-gradient-to-r from-accent-500 to-accent-600
      hover:from-accent-600 hover:to-accent-700
      text-white shadow-md hover:shadow-lg
      focus:ring-accent-500
      active:scale-95
    `,
        outline: `
      bg-transparent border-2 border-primary-500
      text-primary-600 hover:bg-primary-50
      focus:ring-primary-500
    `,
        ghost: `
      bg-transparent hover:bg-neutral-100
      text-neutral-700 hover:text-neutral-900
      focus:ring-neutral-500
    `,
        danger: `
      bg-gradient-to-r from-error-500 to-error-600
      hover:from-error-600 hover:to-error-700
      text-white shadow-md hover:shadow-lg
      focus:ring-error-500
      active:scale-95
    `,
    };

    const sizes = {
        sm: 'text-sm px-3 py-1.5 rounded-lg',
        md: 'text-base px-4 py-2.5 rounded-xl',
        lg: 'text-lg px-6 py-3 rounded-xl',
        xl: 'text-xl px-8 py-4 rounded-2xl',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            {...rest}
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'outline', 'ghost', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
};

export default Button;
