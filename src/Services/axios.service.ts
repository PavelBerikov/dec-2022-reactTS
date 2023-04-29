import axios from "axios";
import {baseURL} from "../Interfaces/urls";

const axiosService = axios.create({baseURL});

export {
    axiosService
}