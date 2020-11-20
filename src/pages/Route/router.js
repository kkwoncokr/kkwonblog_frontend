import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../page/board";
import Profile from '../page/profile';
import SignIn from '../page/login';
import BoardDetail from '../page/board_detail';

const Router = () => {
    return(
        <>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/detail/:id" component={BoardDetail}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={SignIn} />
        </>
    );
}

export default Router;