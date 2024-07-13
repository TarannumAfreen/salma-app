import axios from 'axios';

const API_URL = '/api/data';

const getData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createData = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export default {
  getData,
  createData,
};
