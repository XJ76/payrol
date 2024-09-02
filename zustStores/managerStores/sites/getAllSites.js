import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../../apiUrls'

const useAllSitesStore = create((set) => ({
    Sites: [],
    error: null,
    getAllSites: async () => {
        try {
            // Make a GET request to fetch all sites
            const response = await axios.get(`${BACKEND_prod_URL}/api/sites/allSites`);
            // Set the Sites in the store state
            set({ Sites: response.data, error: null });
        } catch (error) {
            console.error('Error fetching sites:', error);
            // Set the error in the store state
            set({ error: 'Error fetching sites' });
        }
    }
}));

export default useAllSitesStore;
