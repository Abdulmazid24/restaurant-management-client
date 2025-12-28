import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

/**
 * Modal Component
 * Accessible modal dialog with backdrop overlay
 */
const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    closeOnOutsideClick = true,
    showCloseButton = true,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        full: 'max-w-full mx-4',
    };

    const modalContent = (
        <div
            className="fixed inset-0 z-[1050] flex items-center justify-center p-4 animate-fade-in"
            onClick={(e) => {
                if (closeOnOutsideClick && e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className={`
          relative w-full ${sizes[size]}
          bg-white dark:bg-neutral-800
          rounded-2xl shadow-2xl
          max-h-[90vh] overflow-hidden
          flex flex-col
          animate-scale-in
        `}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
                        {title && (
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="ml-auto p-2 rounded-lg text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Close modal"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>

                {/* Footer */}
                {footer && (
                    <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
    closeOnOutsideClick: PropTypes.bool,
    showCloseButton: PropTypes.bool,
};

export default Modal;
