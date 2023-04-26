import React, {useState} from 'react';
import {PageEnum} from "./Constants/page.enum";
import {UserPage} from "./Pages/user.page";
import {CommentPage} from "./Pages/comment.page";
import {CarPage} from "./Pages/car.page";
import {Header} from "./Components/Header/Header";


const App = () => {
    const [choise, setChoise] = useState<PageEnum>(PageEnum.USERS);
    return (
        <div>
            <Header setChoise={setChoise}/>
            {choise === PageEnum.USERS && <UserPage/>}
            {choise === PageEnum.COMMENTS && <CommentPage/>}
            {choise === PageEnum.CARS && <CarPage/>}
          
        </div>
    );
};

export default App;