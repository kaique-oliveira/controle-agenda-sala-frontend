import axios from "axios";

const Api = axios.create({
  baseURL: 'https://localhost:7075/',
});


export default Api;