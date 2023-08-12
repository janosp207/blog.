import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3030',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
  withCredentials: true,
});

export default axios