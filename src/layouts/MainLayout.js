import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import './MainLayout.css';

const MainLayout = () => {

    return (
        <div className="main">
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};