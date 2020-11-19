import React, { useCallback } from 'react';
import styled from 'styled-components';
import logo from '../../styles/images/simbol.png';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../../modules/user/user';
import { Form, Input, Button } from 'antd';


const LoginWrap = styled.section`
    width:100%;
    /* height:100vh; */
    background-color:rgb(248,249,250);
    position:relative;
    z-index:10000;
    padding:100px 0;
    box-sizing:border-box;
`;

const LoginBox = styled.article`
    width:500px;
    height:400px;
    padding:30px 20px;
    box-sizing:border-box;
    background-color:#fff;
    margin:0 auto;
    border-radius:10px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    & img {
        display:block;
        margin:0 auto;
        width:40px;
    }
    & div {
        margin-bottom:30px;
    }
    & label {
        margin-left:5px;
        letter-spacing:-1px;
    }
    & input {
        display:block;
        width:100%;
        height:40px;
        padding:10px;
        box-sizing:border-box;
        font-size:16px;
        border:none;
        border-bottom:1px solid #eee;
        outline:none;
        transition:all 0.3s;
    }
    & input:focus {
        border-bottom:2px solid #333;
    }
    & button {
        width:100%;
        height:60px;
        border:none;
        border-radius:10px;
        outline:none;
        cursor: pointer;
        background-color:#3f51b5;
        color:#fff;
        font-size:18px;
        letter-spacing:-1px;
    }
`;


const Login = () => {
    const dispatch = useDispatch();
    const [email,onChangeEmail] = useInput('');
    const [password,onChangePassword] = useInput('');

    const onSubmitForm = useCallback(()=> {
        console.debug(email,password);
        console.debug(loginRequestAction())
        dispatch(loginRequestAction({email,password}))
    },[email,password,dispatch])
    return(
        <LoginWrap>
            <LoginBox>
                <h2><img src={logo} alt="로고" /></h2>
                <Form
                name="basic"
                initialValues={{remember : true}}
                onFinish={onSubmitForm}
                >
            <div>
                <label htmlFor="user-email">아이디</label>
                <br/>
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
            <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input 
                name="user-password" 
                value={password} 
                type="password" 
                onChange={onChangePassword} 
                required/>
            </div>
            <Button type="primary" htmlType="submit">로그인</Button>
                </Form>
            </LoginBox>
        </LoginWrap>
    );
}

export default Login;