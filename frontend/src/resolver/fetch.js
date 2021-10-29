import axios from 'axios';

const api = "http://localhost:5000"

export const fetchRandomProducts = async () => {
  return await axios.get(api + "/products/random");
}

export const fetchAllProducts = async () => {
  return await axios.get(api + "/products/every");
}