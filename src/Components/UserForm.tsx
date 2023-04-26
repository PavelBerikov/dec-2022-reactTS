import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../Interfaces/user.interface";
import {userService} from "../Services/user.service";
import {IUseState} from "../Types/useState.type";

interface IProps {
    setUsers:IUseState<IUser[] >
}

const UserForm: FC<IProps> = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm<IUser>();
    const save:SubmitHandler<IUser> = async (user) => {
       const {data} = await userService.create(user)
        setUsers(prev => [...prev, data])
    };
    return(
        <form onSubmit={handleSubmit(save)}>

            <input type={"text"} placeholder={'name'} {...register('name')} />
            <input type={"text"} placeholder={'email'} {...register('email')} />
            <button>save</button>
        </form>
    );
};

export {
   UserForm
}