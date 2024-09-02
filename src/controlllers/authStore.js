import create from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    login: async (credentials) => {
        try {
            // Make a POST request to your backend's login endpoint
            const response = await axios.post('https://825c-77-246-53-173.ngrok-free.app/admin/auth/login', credentials);
            // Assuming your backend returns a token upon successful login
            const token = response.data.token;
            // Set isAuthenticated to true and store the token
            set({ isAuthenticated: true, token });
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle login error
        }
    },
    logout: () => {
        // Clear authentication state
        set({ isAuthenticated: false, token: null });
    }
}));

export default useAuthStore;
