import axios from "axios";
import config from "./config";

const requester = axios.create({
  baseURL: config.baseURL,
  responseType: "json",
  validateStatus: (status) => status === 200,
});
export default requester;
