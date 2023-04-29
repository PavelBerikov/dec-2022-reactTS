import React, {FC, useEffect, useState} from 'react';
import {useAppLocation} from "../Hooks/router.hooks";
import {IUser} from "../Interfaces/user.interface";
import UserDetail from "../Components/UserDetail";
import {useParams} from "react-router-dom";
import {userService} from "../Services/user.service";

const UsersDetailsPage:FC = () => {
    const {id} = useParams()
    const {state} = useAppLocation<IUser>();
    const [user, setUser] = useState<IUser>(null);
    useEffect(() => {
        if (!state) {
            userService.getById(id).then(value => value.data).then(value => setUser(value));
        }else {
            setUser(state)
        }
    }, [id])
    return (
        <div>
            {user && <UserDetail user={user}/>}
        </div>
    );
};

export default UsersDetailsPage;