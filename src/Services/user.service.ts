import {IRes} from "../Types/res.type";
import {IUser} from "../Interfaces/user.interface";
import {placeAxiosService} from "./axios.service";
import {urls} from "../Constants/urls";

const userService = {
    getAll:():IRes<IUser[]> => placeAxiosService.get(urls.placeAPI.users),
    create:(user:IUser):IRes<IUser> => placeAxiosService.post(urls.placeAPI.users, user)
}

export {
    userService
}