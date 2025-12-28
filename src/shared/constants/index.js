// API Base URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
    // Auth
    AUTH: {
        REGISTER: '/api/v1/auth/register',
        LOGIN: '/api/v1/auth/login',
        FIREBASE: '/api/v1/auth/firebase',
        REFRESH: '/api/v1/auth/refresh',
        LOGOUT: '/api/v1/auth/logout',
        PROFILE: '/api/v1/auth/profile',
    },

    // Foods
    FOODS: {
        GET_ALL: '/api/v1/foods',
        GET_TOP: '/api/v1/foods/top',
        GET_BY_ID: (id) => `/api/v1/foods/${id}`,
        GET_BY_USER: (email) => `/api/v1/foods/user/${email}`,
        CREATE: '/api/v1/foods',
        UPDATE: (id) => `/api/v1/foods/${id}`,
        DELETE: (id) => `/api/v1/foods/${id}`,
    },

    // Orders
    ORDERS: {
        CREATE: '/api/v1/orders',
        GET_MY_ORDERS: '/api/v1/orders/my-orders',
        GET_BY_ID: (id) => `/api/v1/orders/${id}`,
        UPDATE_STATUS: (id) => `/api/v1/orders/${id}/status`,
        DELETE: (id) => `/api/v1/orders/${id}`,
        GET_ALL: '/api/v1/orders/admin/all',
    },

    // Backward Compatibility (old endpoints)
    LEGACY: {
        TOP_FOODS: '/top-foods',
        FOODS: '/foods',
        FOOD_BY_ID: (id) => `/foods/${id}`,
        PURCHASE: '/purchase',
        MY_FOODS: (email) => `/myfoods/${email}`,
        MY_FOOD: (id) => `/myfood/${id}`,
        ADD_FOOD: '/add-foods',
        UPDATE_FOOD: (id) => `/myfood/${id}`,
        MY_ORDERS: (email) => `/my-orders/${email}`,
        DELETE_ORDER: (id) => `/my-orders/${id}`,
    },
};

// Local Storage Keys
export const STORAGE_KEYS = {
    ACCESS_TOKEN: 'restaurant_access_token',
    REFRESH_TOKEN: 'restaurant_refresh_token',
    USER: 'restaurant_user',
    THEME: 'restaurant_theme',
};

// Food Categories
export const FOOD_CATEGORIES = [
    'Appetizer',
    'Main Course',
    'Dessert',
    'Beverage',
    'Pizza',
    'Burger',
    'Pasta',
    'Salad',
    'Soup',
    'Seafood',
    'Vegetarian',
    'Indian',
    'Chinese',
    'Japanese',
    'Italian',
    'Mexican',
    'Other',
];

// Order Status
export const ORDER_STATUS = {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    PREPARING: 'preparing',
    READY: 'ready',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled',
};

// Order Status Labels
export const ORDER_STATUS_LABELS = {
    [ORDER_STATUS.PENDING]: 'Pending',
    [ORDER_STATUS.CONFIRMED]: 'Confirmed',
    [ORDER_STATUS.PREPARING]: 'Preparing',
    [ORDER_STATUS.READY]: 'Ready',
    [ORDER_STATUS.DELIVERED]: 'Delivered',
    [ORDER_STATUS.CANCELLED]: 'Cancelled',
};

// Order Status Colors (for badges)
export const ORDER_STATUS_COLORS = {
    [ORDER_STATUS.PENDING]: 'warning',
    [ORDER_STATUS.CONFIRMED]: 'info',
    [ORDER_STATUS.PREPARING]: 'primary',
    [ORDER_STATUS.READY]: 'secondary',
    [ORDER_STATUS.DELIVERED]: 'success',
    [ORDER_STATUS.CANCELLED]: 'error',
};

// Pagination
export const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 12,
    LIMITS: [6, 12, 24, 48],
};

// Sort Options
export const SORT_OPTIONS = {
    NAME_ASC: { label: 'Name (A-Z)', value: 'name', order: 'asc' },
    NAME_DESC: { label: 'Name (Z-A)', value: 'name', order: 'desc' },
    PRICE_ASC: { label: 'Price (Low to High)', value: 'price', order: 'asc' },
    PRICE_DESC: { label: 'Price (High to Low)', value: 'price', order: 'desc' },
    NEWEST: { label: 'Newest First', value: 'createdAt', order: 'desc' },
    OLDEST: { label: 'Oldest First', value: 'createdAt', order: 'asc' },
    POPULAR: { label: 'Most Popular', value: 'purchaseCount', order: 'desc' },
};

// Toast Messages
export const TOAST_MESSAGES = {
    AUTH: {
        LOGIN_SUCCESS: 'Welcome back! Login successful.',
        LOGIN_ERROR: 'Login failed. Please check your credentials.',
        LOGOUT_SUCCESS: 'Logged out successfully.',
        REGISTER_SUCCESS: 'Account created successfully!',
        REGISTER_ERROR: 'Registration failed. Please try again.',
    },
    FOOD: {
        CREATE_SUCCESS: 'Food item added successfully!',
        CREATE_ERROR: 'Failed to add food item.',
        UPDATE_SUCCESS: 'Food item updated successfully!',
        UPDATE_ERROR: 'Failed to update food item.',
        DELETE_SUCCESS: 'Food item deleted successfully!',
        DELETE_ERROR: 'Failed to delete food item.',
    },
    ORDER: {
        CREATE_SUCCESS: 'Order placed successfully!',
        CREATE_ERROR: 'Failed to place order.',
        DELETE_SUCCESS: 'Order cancelled successfully!',
        DELETE_ERROR: 'Failed to cancel order.',
    },
    GENERAL: {
        ERROR: 'Something went wrong. Please try again.',
        NETWORK_ERROR: 'Network error. Please check your connection.',
    },
};

// Form Validation Rules
export const VALIDATION = {
    EMAIL: {
        PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        MESSAGE: 'Please enter a valid email address',
    },
    PASSWORD: {
        MIN_LENGTH: 6,
        MESSAGE: 'Password must be at least 6 characters',
    },
    REQUIRED: {
        MESSAGE: 'This field is required',
    },
    PRICE: {
        MIN: 0,
        MESSAGE: 'Price must be a positive number',
    },
    QUANTITY: {
        MIN: 0,
        MESSAGE: 'Quantity must be a non-negative number',
    },
};

// Theme Options
export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
};

export default {
    API_BASE_URL,
    API_ENDPOINTS,
    STORAGE_KEYS,
    FOOD_CATEGORIES,
    ORDER_STATUS,
    ORDER_STATUS_LABELS,
    ORDER_STATUS_COLORS,
    PAGINATION,
    SORT_OPTIONS,
    TOAST_MESSAGES,
    VALIDATION,
    THEMES,
    BREAKPOINTS,
};
