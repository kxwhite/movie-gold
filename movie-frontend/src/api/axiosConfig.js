import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: { "skip-browser-warning": "true" },
});
// export default axios.create({
//   baseURL: "https://c1a6-2a01-4b00-8321-200-710b-681e-f1bd-aca7.ngrok-free.app",
//   headers: { "ngrok-skip-browser-warning": "true" },
// });
// export default axios.create({
//   baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//   headers: {"ngrok-skip-browser-warning": "true"}
// });
