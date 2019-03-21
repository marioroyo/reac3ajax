import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://primera-beff6.firebaseio.com/'
});

export default instance;