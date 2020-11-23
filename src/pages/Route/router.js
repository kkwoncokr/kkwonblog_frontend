import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../page/board";
import Profile from '../page/profile';
import SignIn from '../page/login';
import BoardDetail from '../page/board_detail';
import TextEditor from '../../components/board/texteditor';

const Router = () => {
    return(
        <>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/post/:id" component={BoardDetail}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={SignIn} />
        <Route path="/write" component={TextEditor} />
        </>
    );
}

export default Router;