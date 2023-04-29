import React, {FC} from 'react';
import {IUser} from "../Interfaces/user.interface";
import {useNavigate} from "react-router-dom";

interface IProps {
    user:IUser
}

const User:FC<IProps> = ({user}) => {
    const navigator = useNavigate();
    const {id, name} = user;
    return (
        <div>
            <div>ID - {id}</div>
            <div>Name - {name}</div>
            <button onClick={() => navigator(`${id}`, {state:{...user}})}>User Details</button>
        </div>
    );
};

export default User;