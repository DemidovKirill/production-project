import axios from 'axios';
import { LOCAL_STORAGE_USER_DATA_KEY } from 'shared/constants/local-storage-keys';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY) || '',
  },
});
