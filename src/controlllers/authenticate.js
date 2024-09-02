import callApi from './callApi';

export const authenticate = async (email, password) => {
    try {
        // Make a POST request to the authentication endpoint
        const response = await callApi('/auth/login', 'POST', { email, password });
        // If authentication is successful, return the response
        return response;
    } catch (error) {
        // If there's an error, handle it appropriately (e.g., display error message)
        console.error('Authentication error:', error.message);
        throw error;
    }
};