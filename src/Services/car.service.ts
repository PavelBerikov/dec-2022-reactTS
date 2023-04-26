import {IRes} from "../Types/res.type";
import {ICar} from "../Interfaces/car.interface";
import {carsAxiosService} from "./axios.service";
import {urls} from "../Constants/urls";

const carService = {
    getAll:():IRes<ICar[]> => carsAxiosService.get(urls.carAPI.cars),
    create:(car:ICar):IRes<ICar> =>carsAxiosService.post(urls.carAPI.cars, car),
    updateById:(id:number, car:ICar):IRes<ICar> => carsAxiosService.put(urls.carAPI.byId(id), car),
    deleteById:(id:number):IRes<void> => carsAxiosService.delete(urls.carAPI.byId(id))
}
 export {
    carService
 }