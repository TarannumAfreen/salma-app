import axios from 'axios';

const API_URL = '/api/intelligence';

const getIntelligence = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createIntelligence = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export default {
  getIntelligence,
  createIntelligence,
};
