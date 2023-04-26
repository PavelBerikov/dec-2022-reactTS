import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../Interfaces/car.interface";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../Validators/car.validator";
import {carService} from "../Services/car.service";
import {IUseState} from "../Types/useState.type";

interface IProps {
    setOnChange: IUseState<boolean>;
}

const CarForm: FC<IProps> = ({setOnChange}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm<ICar>({mode:'all', resolver:joiResolver(carValidator)})
    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setOnChange(prevState => !prevState)
        reset()
    }

    return(
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input type={"text"} placeholder={'price'} {...register('price')}/>
                <input type={"text"} placeholder={'year'} {...register('year')}/>
                <button>Save</button>
            </form>
            <div>
                {errors.brand&&<div>{errors.brand.message}</div>}
                {errors.price&&<div>{errors.price.message}</div>}
                {errors.year&&<div>{errors.year.message}</div>}

            </div>


        </div>



    );
};

export {
    CarForm
}