import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';

const useSiteAnalyticsStore = create((set) => ({
    siteAnalytics: {
        totalSites: 0,
        activeSites: 0,
        inactiveSites: 0,
    },
    error: null,
    getSiteAnalytics: async () => {
        try {
            const response = await axios.get(`${BACKEND_prod_URL}/api/sites/siteAnalytics`);
            // Assuming the backend returns the analytics in the format provided in the prompt
            set({ siteAnalytics: response.data, error: null });
        } catch (error) {
            console.error('Error fetching site analytics:', error);
            set({ error: 'Error fetching site analytics' });
        }
    }
}));

export default useSiteAnalyticsStore;
