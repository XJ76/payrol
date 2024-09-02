
import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';


const plantManagerAuthStore = create((set) => ({
    isAuthenticated: false,
    token: localStorage.getItem('token'), // Initialize token from local storage
    plantManager: null, // Add plantManager property to store plantManager information

    plantLogin: async ({ email, password }) => {
        try {
            const response = await axios.post(`${BACKEND_prod_URL}/api/plant/plantManagers/PMLogin`, { email, password });
            const plantManagerAuthToken = response.data;
    
            // Store the token in local storage for persistence across sessions
            localStorage.setItem('token', plantManagerAuthToken);
    
            // Update Zustand store with the token and authentication status
            set({ isAuthenticated: true, token: plantManagerAuthToken });
            return response;
        } catch (error) {
            console.error('Error logging in:', error);
           // tplantManagerow error;
        }
    },
    
    logout: () => {
        // Remove the token from local storage and update Zustand store
        localStorage.removeItem('token');
        set({ isAuthenticated: false, token: null });
    },
    checkAuthentication: () => {
        const token = localStorage.getItem('token');
        if (token) {
            // If token exists in local storage, update Zustand store and return true
            set({ isAuthenticated: true, token });
            return true;
        } else {
            return false;
        }
    }
}));

export default plantManagerAuthStore;
