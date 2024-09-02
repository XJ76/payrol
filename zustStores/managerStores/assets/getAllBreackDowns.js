import create from 'zustand';
import axios from 'axios';

import { BACKEND_prod_URL } from '../../apiUrls';

// Creating a store using Zustand for managing breakdowns state
const useBreakdownStore = create((set) => ({
  breakdowns: [],
  error: null,
  // Asynchronous function to fetch breakdowns from the backend
  fetchBreakdowns: async () => {
    try {
      // Attempting to fetch breakdowns data from the backend
      const response = await axios.get(`${BACKEND_prod_URL}/api/plant/plantManagers/allAssets`);
      // Filtering the response to get only the assets with a statusCode of '2' indicating a breakdown
      const breakdowns = response.data.filter(asset => asset.statusCode === '2');
      // Updating the store with the fetched breakdowns and resetting any errors
      set({ breakdowns: breakdowns, error: null });
    } catch (error) {
      // Logging the error to the console for debugging purposes
      console.error('Error occurred while fetching breakdowns:', error);
      // Comprehensive error handling to update the store based on the type of error encountered
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        set({ error: `Server-side error: ${error.response.status} - ${error.response.data}`, breakdowns: [] });
      } else if (error.request) {
        // The request was made but no response was received, indicating a network or server issue
        set({ error: 'No response received: Failed to fetch breakdowns.', breakdowns: [] });
      } else {
        // An error occurred in setting up the request, indicating a potential issue on the client side
        set({ error: 'Client-side error: Failed to fetch breakdowns.', breakdowns: [] });
      }
    }
  },
}));

export default useBreakdownStore;
