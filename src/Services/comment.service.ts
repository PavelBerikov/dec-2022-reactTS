import {IRes} from "../Types/res.type";
import {IComment} from "../Interfaces/comment.interface";
import {placeAxiosService} from "./axios.service";
import {urls} from "../Constants/urls";

const commentService ={
    getAll:():IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create:(comment:IComment):IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment)
}

export {
    commentService
}