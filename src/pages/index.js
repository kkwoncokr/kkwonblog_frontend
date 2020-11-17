import React from 'react';
import Header from '../components/header';
import Menus from '../components/menus';
import GlobalStyle from '../styles/globalstyle';
import Router from './Route/router';

const Kblog = () => {
    return(
        <>
        <GlobalStyle/>
        <Header/>
        <Menus/>
        <Router/>
        </>
    );
}

export default Kblog;