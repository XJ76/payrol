import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';

const useTransferAssetStore = create((set) => ({
    transferStatus: null,
    error: null,
    transferAsset: async ({ fltNumber, siteID }) => {
        try {
            await axios.put(`${BACKEND_prod_URL}/api/asset/transferAsset`, { fltNumber, siteID });
            set({ transferStatus: `Asset with Fleet Number: ${fltNumber} transferred successfully to Site ID: ${siteID}`, error: null });
        } catch (error) {
            console.error('Error transferring asset:', error);
            set({ error: 'Failed to transfer asset.' });
        }
    }
}));

export default useTransferAssetStore;
