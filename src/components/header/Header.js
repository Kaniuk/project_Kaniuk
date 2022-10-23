import React from 'react';
import {NavLink} from "react-router-dom";

import {UserPicture} from "../userPicture/UserPicture";
import {AsyncSearch} from "../asyncSearch/AsyncSearch";
import {Genres} from "../genres/Genres";
import './Header.css';


const Header = () => {

    return (
        <div>
            <header className="header">
                <NavLink to={'/movies'}><h1>TMDB</h1></NavLink>
                <div className="links">
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/movies'}>Movies</NavLink>
                </div>
                <Genres/>
                <AsyncSearch/>
                <div>
                    <UserPicture width={40} stroke="white" fill="darkgray"/>
                </div>
            </header>

        </div>


    );
};

export {Header};