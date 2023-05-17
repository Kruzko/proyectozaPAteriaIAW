import axios from 'axios';

const ZapateriaApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export default ZapateriaApi