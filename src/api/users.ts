import axios from '@/utils/axios';
import { API_PATHS } from '@/paths';
import { NewUserData } from '@/utils/validation';

export const registerUser = async (newUserData: NewUserData) => {
  const response = await axios.post(API_PATHS.REGISTER, newUserData);
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await axios.post(API_PATHS.LOGIN, { username, password });

  if (response.data.token && response.data.id) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('id', response.data.id);
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('usertag', response.data.usertag);
  }

  return response.data;
};
