import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../components/common/login';
import { board_change } from '../../modules/common/menuchange';

const SignIn = ({history}) => {
    const { me } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(()=> {
        if(me) {
            history.push('/')
            dispatch(board_change());
        }
    },[me,dispatch,history])
    return(
        <Login/>
    );
}

export default SignIn;