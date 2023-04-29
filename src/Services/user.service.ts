import {IUser} from "../Interfaces/user.interface";
import {IRes} from "../Types/axiosRes.type";
import {axiosService} from "./axios.service";
import {urls} from "../Interfaces/urls";
import axios from "axios";

const userService = {
    getAll:():IRes<IUser[]> => axiosService.get(urls.users.users),
    getById:(id:string):IRes<IUser> => axiosService.get(urls.users.byId(id))
    }

    export {
    userService
    }