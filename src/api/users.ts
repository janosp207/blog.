import axios from '@/utils/axios';
import { API_PATHS } from '@/paths';
import { NewUserData } from '@/utils/validation';

export const registerUser = async (newUserData: NewUserData) => {
  const response = await axios.post(API_PATHS.REGISTER, newUserData);
  return response.data;
}