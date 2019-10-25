import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const registerUser = (username, email, password) => {
    const body = JSON.stringify({ username, email, password });
    return axios.post('/api/users', body, config);
};

const loginUser = (email, password) => {
    const body = JSON.stringify({ email, password });
    return axios.post('/api/auth', body, config);
};

const loadUser = (email, password) => {
    const body = JSON.stringify({ email, password });
    return axios.post('/api/auth', body, config);
};

export {
    registerUser,
    loginUser,
    loadUser,
};