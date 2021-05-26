import axios from "axios";

const instance = axios.create({
  baseURL: "http://202.131.251.211:7008/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
