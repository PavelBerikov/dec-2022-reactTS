import {FC, useEffect, useState} from 'react';
import {IComment} from "../Interfaces/comment.interface";
import {commentService} from "../Services/comment.service";
import {urls} from "../Constants/urls";
import {CommentForm} from "../Components/CommentForm";
import {Comments} from "../Components/Comments";
interface IProps {

}

const CommentPage: FC<IProps> = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentService.getAll().then(res => res.data).then(value => setComments(value));
    }, [])
    return(
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
            
        </div>
    );
};

export {
    CommentPage
}