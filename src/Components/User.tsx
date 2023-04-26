import {FC} from "react";
import {IUser} from "../Interfaces/user.interface";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email} = user;
    return(
        <div>
            <div>ID - {user.id}</div>
            <div>NAME - {user.name}</div>
            <div>EMAIL - {user.email}</div>
        </div>
    );
};

export {
    User
}