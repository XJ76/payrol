import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';

const useDeleteAssetStore = create((set) => ({
    deleteStatus: null,
    error: null,
    deleteAsset: async (assetId) => {
        try {
            await axios.delete(`${BACKEND_prod_URL}/api/asset/${assetId}`);
            set({ deleteStatus: 'Asset deleted successfully.', error: null });
        } catch (error) {
            console.error('Error deleting asset:', error);
            set({ error: 'Failed to delete asset.' });
        }
    }
}));

export default useDeleteAssetStore;
