import axios from 'axios';

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await axios.post('/api/users/register', { username, password }); // replace with your endpoint
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
