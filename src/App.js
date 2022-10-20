import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";

import {MainLayout} from "./layouts";
import {Home, Movies, SingleMovie} from "./components";
import {lightTheme, darkTheme, GlobalStyles} from "./themeSwitcher";

import './App.css';

const StyledApp = styled.div`
  display: flex;
  align-items: baseline;
`;
const App = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <button onClick={() => themeToggler()} className="modeButton">switch mode</button>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'movies'}/>}/>
                        <Route path={'home'} element={<Home/>}/>
                        <Route path={'movies'}>
                            <Route index element={<Movies/>}/>
                            <Route path={':id'} element={<SingleMovie/>}/>
                        </Route>
                        <Route path={'movies/page-:page'} element={<Movies/>}/>
                        <Route path={'movies/:genre'} element={<Movies/>}/>
                        <Route path={'movies/:genre/page-:page'} element={<Movies/>}/>
                    </Route>
                </Routes>
            </StyledApp>
        </ThemeProvider>

    );
};

export {App};