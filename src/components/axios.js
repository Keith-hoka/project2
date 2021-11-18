import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-a4ab6.cloudfunctions.net/api",
  // "http://localhost:5001/fir-a4ab6/us-central1/api"
});

export default instance;
