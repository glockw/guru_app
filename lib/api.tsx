import axios from "axios";
const API = process.env.NEXT_PUBLIC_API;
export const getBusinesses = (term, location) => {
  return axios
    .get(`${API}/business?term=${term}&location=${location}`)
    .then((data) => data.data);
};

export const getBusiness = (id) => {
  return axios.get(`${API}/business/${id}`).then((data) => data.data);
};
