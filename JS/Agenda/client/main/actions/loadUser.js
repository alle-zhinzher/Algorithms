import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token'),
    }
};

export const loadUser = () => {
    return axios.get('api/task', config);
}