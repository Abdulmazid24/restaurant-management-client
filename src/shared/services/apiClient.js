import axios from 'axios';
import { API_BASE_URL, STORAGE_KEYS } from '../constants';

/**
 * Create Axios instance with base configuration
 */
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Send cookies with requests
});

/**
 * Request Interceptor
 * Add auth token to requests
 */
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor
 * Handle common response scenarios
 */
apiClient.interceptors.response.use(
    (response) => {
        // Return response data directly
        return response.data;
    },
    async (error) => {
        const originalRequest = error.config;

        // If 401 and not already retried, try to refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Try to refresh the token
                const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

                if (refreshToken) {
                    const response = await axios.post(
                        `${API_BASE_URL}/api/v1/auth/refresh`,
                        { refreshToken },
                        { withCredentials: true }
                    );

                    const { accessToken } = response.data.data;
                    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);

                    // Retry the original request with new token
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return apiClient(originalRequest);
                }
            } catch (refreshError) {
                // Refresh failed, clear auth data and redirect to login
                localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.USER);
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        // Handle other errors
        const errorMessage = error.response?.data?.message || error.message || 'An error occurred';

        return Promise.reject({
            message: errorMessage,
            status: error.response?.status,
            data: error.response?.data,
        });
    }
);

export default apiClient;
