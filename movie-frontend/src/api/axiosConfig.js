// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080",
//   headers: { "skip-browser-warning": "true" },
// });

import axios from "axios";

const API_BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8080";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: { "skip-browser-warning": "true" },
});
