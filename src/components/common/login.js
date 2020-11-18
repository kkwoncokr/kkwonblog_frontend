import React from 'react';
import styled from 'styled-components';
import logo from '../../styles/images/simbol.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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
`;
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width:'100%',
        marginBottom:'20px',
        letterSpacing:'-1px'
      },
      '& > Button': {
          height:'56px',
          backgroundColor:'#2364AA',
          color:'#fff',
          fontSize:'18px',
          marginTop:20
      },
      '& > Button:hover':{
          backgroundColor:'#fff',
          border:'1px solid #2364aa',
          color:'#2365aa'
      },
    },
  }));

const Login = () => {
    const classes = useStyles();
    return(
        <LoginWrap>
            <LoginBox>
                <h2><img src={logo} alt="로고" /></h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="아이디" variant="outlined" autoFocus={true}/>
                    <TextField id="outlined-basic" label="비밀번호" variant="outlined" type="password"/>
                    <Button variant="contained">로그인</Button>
                </form>
            </LoginBox>
        </LoginWrap>
    );
}

export default Login;