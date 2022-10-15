import axios from "axios";

export const getAllShows = () => {
  return axios.get(`https://api.tvmaze.com/shows`);
};

export const getShow = (show) => {
  return axios.get(`https://api.tvmaze.com/shows/${show}`);
};

export const getShowSearch = (term) => {
  return axios.get(`https://api.tvmaze.com/search/shows?q=${term}`);
};
