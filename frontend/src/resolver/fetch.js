import axios from 'axios';

const api = "http://localhost:5000"

export const fetchRandomProducts = async () => {
  const theFetch = await axios.get(api + "/products/random");
  return theFetch
}