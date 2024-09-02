import create from 'zustand';
import axios from 'axios';
import { BACKEND_prod_URL } from '../apiUrls';

const getAllEmployees = create((set) => ({
    Employees: [],
    error: null,
    getAllEmployees: async () => {
        try {
            // Make a GET request to fetch all Employees
            const response = await axios.get(`${BACKEND_prod_URL}/api/employees/allEmployees`);
            // Set the Employees in the store state
            set({ Employees: response.data, error: null });
        } catch (error) {
            console.error('Error fetching Employees:', error);
            // Set the error in the store state
            set({ error: 'Error fetching Employees' });
        }
    }
}));

export default getAllEmployees;
