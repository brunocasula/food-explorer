import axios from "axios";

export const api = axios.create({
  // baseURL: "http://127.0.0.1:3333",
  baseURL: "https://food-explorer-hpr7.onrender.com",
  withCredentials: true
});