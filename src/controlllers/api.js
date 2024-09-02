import axios from 'axios';

const backend_api = 'https://noqapp-api-oitk6.ondigitalocean.app/';

const callApi = async (endpoint, method, initialData) => {
    const url = `${backend_api}${endpoint}`;

    const headers = {
        'Content-Type': 'application/json',
        // Add any other headers you need, such as authentication tokens.
    };

    try {
        const response = await axios({
            method,
            url,
            headers,
            data: initialData, // Axios automatically stringifies JSON data
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export default callApi;
