import axios from 'axios';
import create from 'zustand';
import { BACKEND_prod_URL } from '../../apiUrls';

const useAddPlantStore = create((set) => ({
    plantCreationStatus: null,
    error: null,
    addPlant: async ({ plantName, makeType, fltNumber, regNumber, chasisNumber, value, statusCode, repairCode, mileage, siteID, dateAdded }) => {
      try {
        // Ensure all required fields are present
        // if (!plantName || !makeType || !fltNumber || !regNumber || !chasisNumber || !value || !statusCode || !repairCode || !mileage || !siteID || !dateAdded) {
        //   set({ error: 'All fields are mandatory store error' });
        //   return { success: false, message: 'All fields are mandatory site erro' };
        // }
        const plantData = { plantName, makeType, fltNumber, regNumber, chasisNumber, value, statusCode, repairCode, mileage, siteID, dateAdded };
        const response = await axios.post(`${BACKEND_prod_URL}/api/assets/register`, plantData);
        set({ plantCreationStatus: response.data, error: null });
        console.log(`Asset registered: ${response.data}`);
        return { success: true, message: 'Asset created successfully', plantData: response.data };
      } catch (error) {
        console.error('Error creating asset:', error);
        set({ error: `Error creating asset: ${error.response?.data?.error || error.message}` });
        return { success: false, message: error.response?.data?.error || 'Failed to create asset' };
      }
    },
}));

export default useAddPlantStore;
