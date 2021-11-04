import axios from 'axios';

const api = "http://localhost:5000"

export const fetchRandomProducts = async () => {
  return await axios.get(api + "/products/random");
}

export const fetchAllProducts = async () => {
  return await axios.get(api + "/products/every");
}

export const login = async (object) => {
  return await axios.post(api + "/users/login", object);
}

export const checkExists = async (username) => {
  return await axios.get(api + "/users/" + username);
}

export const fetchUserProducts = async (username) => {
  return await axios.get(api + "/products/user/" + username);
}