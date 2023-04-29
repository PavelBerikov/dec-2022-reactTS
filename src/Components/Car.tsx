import {FC} from "react";
import {ICar} from "../Interfaces/car.interface";

interface IProps {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
    return(
        <div>
            <div>
                <div>Id - {car.id}</div>
                <div>brand - {car.brand}</div>
                <div>Price - {car.price}$</div>
                <div>Year - {car.year}</div>
            </div>
            <div style={{display:"flex", margin:'5px'}}>
                <button>update</button>
                <button>delete</button>
            </div>


        </div>
    );
};

export {
    Car
}