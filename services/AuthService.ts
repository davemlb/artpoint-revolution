import axios from 'axios';
import { IUser } from '../interfaces/IUser';

export const signUp = async (user: IUser) => {
  try {
    const response = await axios.post('/api/users/signup', user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (user: IUser) => {
  try {
    const response = await axios.post('/api/users/login', user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post('/api/users/logout');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
