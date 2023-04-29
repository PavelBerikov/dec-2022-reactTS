import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Users from "../Components/Users";

const UsersPage:FC = () => {
    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export default UsersPage;