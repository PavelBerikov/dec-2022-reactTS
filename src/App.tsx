import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLoyout from "./Loyouts/MainLoyout";
import Users from "./Components/Users";
import UsersPage from "./Pages/UsersPage";
import UsersDetailsPage from "./Pages/UsersDetailsPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLoyout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UsersDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;