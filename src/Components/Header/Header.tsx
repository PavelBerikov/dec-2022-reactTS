import {FC} from 'react';
import './Header.css'
import {IUseState} from "../../Types/useState.type";
import {PageEnum} from "../../Constants/page.enum";

interface IProps {
    setChoise:IUseState<PageEnum>
}

const Header: FC<IProps> = ({setChoise}) => {
    return(
        <div className={'Header'}>
            <button onClick={() => setChoise(PageEnum.USERS)}>Users</button>
            <button onClick={() => setChoise(PageEnum.COMMENTS)}>Comments</button>
            <button onClick={() => setChoise(PageEnum.CARS)}>Cars</button>

        </div>
    );
};

export {
    Header
}