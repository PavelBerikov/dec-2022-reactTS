import {FC} from "react";
import {IComment} from "../Interfaces/comment.interface";

interface IProps {
    comment: IComment;
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, email, body} = comment;
    return(
        <div>
            <div>Id - {comment.id}</div>
            <div>Name - {comment.name}</div>
            <div>Email - {comment.email}</div>
            <div>Body - {comment.body}</div>


        </div>
    );
};

export {
    Comment
}