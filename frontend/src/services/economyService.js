import axios from 'axios';

const API_URL = '/api/economy';

const getEconomy = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createEconomy = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export default {
  getEconomy,
  createEconomy,
};
