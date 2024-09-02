import axios from 'axios';

import { BACKEND_URL } from './apiUrls';

const callApi = async (endpoint, method, initialData) => {
    const url = `${BACKEND_URL}${endpoint}`;

    const headers = {
        'Content-Type': 'application/json',
        // Add any other headers you need, such as authentication tokens.
    };

    const response = await axios({
        method,
        url,
        headers,
        data: initialData, // Axios automatically stringifies JSON data
    });

    return response.data;
};

export default callApi;
