import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getExploreData = async () => {
  try {
    const response = await api.get('/explore');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
