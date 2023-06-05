import axios from 'axios';

const ZapateriaApi = axios.create({
    baseURL: 'http://89.117.54.151:3000/api'
});

export default ZapateriaApi