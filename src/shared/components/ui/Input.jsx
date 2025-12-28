import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Input Component
 * Accessible input field with validation states
 */
const Input = forwardRef(
    (
        {
            type = 'text',
            label,
            placeholder,
            error,
            helperText,
            leftIcon,
            rightIcon,
            fullWidth = true,
            disabled = false,
            required = false,
            className = '',
            ...rest
        },
        ref
    ) => {
        const hasError = Boolean(error);

        const baseInputStyles = `
      w-full px-4 py-2.5 rounded-xl
      font-sans text-base
      bg-white dark:bg-neutral-800
      border-2 transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-1
      disabled:opacity-50 disabled:cursor-not-allowed
      ${leftIcon ? 'pl-11' : ''}
      ${rightIcon ? 'pr-11' : ''}
    `;

        const stateStyles = hasError
            ? `
        border-error-500 text-error-900
        focus:border-error-500 focus:ring-error-200
      `
            : `
        border-neutral-300 dark:border-neutral-600
        text-neutral-900 dark:text-neutral-50
        focus:border-primary-500 focus:ring-primary-200
        placeholder:text-neutral-400
      `;

        return (
            <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
                {label && (
                    <label className="block mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {label}
                        {required && <span className="text-error-500 ml-1">*</span>}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        required={required}
                        className={`
              ${baseInputStyles}
              ${stateStyles}
            `}
                        {...rest}
                    />

                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {(error || helperText) && (
                    <p
                        className={`mt-2 text-sm ${hasError
                                ? 'text-error-600 dark:text-error-400'
                                : 'text-neutral-600 dark:text-neutral-400'
                            }`}
                    >
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
};

export default Input;
