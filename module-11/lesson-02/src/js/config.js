import axios from 'axios';
import { BASE_URL } from './services';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['x-api-key'] = import.meta.env.VITE_API_KEY;
