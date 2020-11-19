import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../page/board";
import Profile from '../page/profile';
import SignIn from '../page/login';

const Router = () => {
    return(
        <>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={SignIn} />
        </>
    );
}

export default Router;