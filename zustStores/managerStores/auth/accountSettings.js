import create from 'zustand';
import axios from 'axios';
import managerAuthStore from '/managerAuthStore';
import { BACKEND_URL } from '../apiUrls';

const useAccountSettingsStore = create(() => ({
    updatePassword: async (email, oldPassword, newPassword) => {
      try {
        // Retrieve the authentication token from the authStore
        const { token } = managerAuthStore.getState();
  
        // Set up headers with the authentication token
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
  
        // Make a POST request to your backend API to update the password
        const response = await axios.post(
            BACKEND_URL,
          { email, oldPassword, newPassword },
          { headers }
        );
        console.log('Password updated successfully:', response.data);
  
        // Return any relevant data from the response if needed
        return response.data;
      } catch (error) {
        // Log any errors that occur during the password update process
        console.error('Error updating password:', error);
  
        // If the error response contains a message, return it
        if (error.response && error.response.data && error.response.data.error) {
          throw new Error(error.response.data.error);
        } else {
          // If no specific error message is available, throw a generic error
          throw new Error('An error occurred while updating the password.');
        }
      }
    },
  }));
  
  export default useAccountSettingsStore;