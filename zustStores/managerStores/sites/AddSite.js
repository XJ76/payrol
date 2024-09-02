import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../../apiUrls';

const useCreateSiteStore = create((set) => ({
  siteCreationStatus: null,
  error: null,
  createSite: async ({ siteID, projectManager, siteRefKey, site, siteStatus }) => {
    try {
      // Ensure all required fields are present
      if (!siteID || !projectManager || !siteRefKey || !site || !siteStatus) {
        console.log('All fields are mandatory this a store error ');
      }
      const siteData = { siteID, projectManager, siteRefKey, site, siteStatus };
      const response = await axios.post(`${BACKEND_prod_URL}/api/sites/register`, siteData);
      console.log(siteID,siteRefKey,site,siteStatus)
      set({ siteCreationStatus: response.data, error: null });
      console.log(`Site registered: ${response.data}`);
      return { success: true, message: 'Site created successfully', siteData: response.data };
    } catch (error) {
        console.log(siteID,siteRefKey,site,siteStatus)
      console.error('Error creating site:', error);
      set({ error: `Error creating site: ${error.response?.data?.error || error.message}` });
      return { success: false, message: error.response?.data?.error || 'Failed to create site' };
    }
  },
}));

export default useCreateSiteStore;
