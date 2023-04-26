import {FC, useEffect, useState} from 'react';
import {ICar} from "../Interfaces/car.interface";
import {carService} from "../Services/car.service";
import {CarForm} from "../Components/CarForm";
import {Cars} from "../Components/Cars";
interface IProps {

}

const CarPage: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [onChange, setOnChange] = useState<boolean>(false);
    useEffect(() => {
        carService.getAll().then(res => res.data).then(value => setCars(value))
    }, [onChange])
    return(
        <div>
            <CarForm setOnChange={setOnChange}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {
    CarPage
}