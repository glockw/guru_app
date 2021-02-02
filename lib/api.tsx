import axios from "axios";
const API = process.env.NEXT_PUBLIC_API;
export const getBusinesses = (term, location, offset = 0) => {
  let route = `${API}/business?term=${term}&location=${location}&offset=${offset}`; 
  return axios.get(route).then((data) => data.data);
};

export const getBusiness = (id) => {
  return axios.get(`${API}/business/${id}`).then((data) => data.data);
};
