import {FC, useEffect, useState} from 'react';
import {IUser} from "../Interfaces/user.interface";
import {UserForm} from "../Components/UserForm";
import {userService} from "../Services/user.service";
import {IUseState} from "../Types/useState.type";
import {Users} from "../Components/Users";
interface IProps {

}

const UserPage: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    },[])
    return(
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {
    UserPage
}