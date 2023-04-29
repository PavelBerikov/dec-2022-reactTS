import React, {FC} from 'react';
import {IUser} from "../Interfaces/user.interface";
import user from "./User";

interface IProps {
    user:IUser;
}

const UserDetail:FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>UserName - {username}</div>
            <div>Email - {email}</div>
        </div>
    );
};

export default UserDetail;