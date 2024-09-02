import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';

const hrAuthStore = create((set) => ({
    isAuthenticated: false,
    token: localStorage.getItem('token'), // Initialize token from local storage
    hr: null, // Add hr property to store hr information

    login: async ({ email, password }) => {
        try {
            const response = await axios.post(`${BACKEND_prod_URL}/api/HR/hrManagers/HRlogin`, { email, password });
            const { accessToken, hr } = response.data;
    
            // Store the token in local storage for persistence across sessions
            localStorage.setItem('token', accessToken);
    
            // Update Zustand store with the token, authentication status, and hr details
            set({ isAuthenticated: true, token: accessToken, hr });
            return response;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    },
    
    logout: () => {
        // Remove the token from local storage and update Zustand store
        localStorage.removeItem('token');
        set({ isAuthenticated: false, token: null, hr: null });
    },
    checkAuthentication: async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                // Verify token and retrieve hr details
                const response = await axios.get(`${BACKEND_prod_URL}/api/HR/HRcurrent`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { hr } = response.data;
                // If token is valid, update Zustand store with hr details and return true
                set({ isAuthenticated: true, token, hr });
                return true;
            } catch (error) {
                console.error('Error verifying token:', error);
                // If token is invalid, clear it from local storage and Zustand store
                localStorage.removeItem('token');
                set({ isAuthenticated: false, token: null, hr: null });
                return false;
            }
        } else {
            return false;
        }
    }
}));

export default hrAuthStore;
