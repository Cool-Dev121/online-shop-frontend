import { LOCAL_STORAGE_KEY_TOKEN } from '../../shared';
import { HttpClass } from './HttpClass';
import { getValueFromLocalStorage } from '../localStorage';

const getHeaders = () => {
  const token = getValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

const getHeadersFormDataContent = () => {
  const token = getValueFromLocalStorage(LOCAL_STORAGE_KEY_TOKEN);
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const http = new HttpClass(
  process.env.REACT_APP_SERVER_URL!,
  getHeaders(),
  getHeadersFormDataContent(),
);
