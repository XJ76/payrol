import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';

const useUpdateAssetStore = create((set) => ({
    updateStatus: null,
    error: null,
    updateAsset: async ({ fltNumber, statusCode, repairCode }) => {
        try {
            const response = await axios.patch(`${BACKEND_prod_URL}/api/asset/updateAsset`, { fltNumber, statusCode, repairCode });
            set({ updateStatus: `Asset updated with Fleet Number: ${response.data._id} and Status Code: ${response.data.code}`, error: null });
        } catch (error) {
            console.error('Error updating asset:', error);
            set({ error: 'Failed to update asset.' });
        }
    }
}));

export default useUpdateAssetStore;
