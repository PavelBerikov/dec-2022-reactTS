import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../Interfaces/user.interface";
import {userService} from "../Services/user.service";
import User from "./User";



const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;