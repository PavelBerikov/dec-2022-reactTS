import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const MainLoyout:FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MainLoyout;