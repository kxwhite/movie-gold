import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default axios.create({
  baseURL: API_BASE_URL,
  headers: { "skip-browser-warning": "true" },
});
