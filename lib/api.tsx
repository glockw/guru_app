import axios from "axios";
const API = process.env.NEXT_PUBLIC_API;
export const getBusiness = (term, location) => {
  return axios
    .get(`${API}/businness?term=${term}&location=${location}`)
    .then((data) => data.data);
};
