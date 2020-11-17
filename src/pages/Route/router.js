import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../page/board";
import Profile from '../page/profile';

const Router = () => {
    return(
        <>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/profile" component={Profile}/>
        </>
    );
}

export default Router;