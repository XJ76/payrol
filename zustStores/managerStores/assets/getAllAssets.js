import create from 'zustand';
import axios from 'axios';

import { BACKEND_prod_URL } from '../../apiUrls';

const useAssetStore = create((set) => ({
  assets: [],
  error: null,
  fetchAssets: async () => {
    try {
      const response = await axios.get(`${BACKEND_prod_URL}/api/assets/allAssets`);
      set({ assets: response.data, error: null });
    } catch (error) {
      // Logging the error to the console for debugging purposes
      console.error('Client-side error occurred while fetching assets from production:', error);

      // Industry-grade error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        set({ error: `Server-side error: ${error.response.status} - ${error.response.data}`, assets: [] });
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        set({ error: 'No response received: Failed to fetch assets.', assets: [] });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        set({ error: 'Client-side error: Failed to fetch assets.', assets: [] });
      }
    }
  },
}));

export default useAssetStore