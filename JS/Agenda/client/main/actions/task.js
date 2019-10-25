import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};


export const createNewTask = (title, description, gitLink) => {
    const body = JSON.stringify({ title, description, gitLink, userID: 14 });
    return axios.post('api/task', body, config);
}
