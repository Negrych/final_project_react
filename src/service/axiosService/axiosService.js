import axios from "axios";
import baseURL from "../../confirm/confirm";

export const axiosService = axios.create({baseURL})