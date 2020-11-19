import React, { useCallback } from 'react';
import styled from 'styled-components';
import logo from '../../styles/images/simbol.png';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { board_change } from '../../modules/common/menuchange';
import { logoutRequestAction } from '../../modules/user/user';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MenuWrap = styled.header`
    width:100%;
    height:64px;
    background-color:#fff;
    position:fixed;
    top:0;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;

`;
const Menus = styled.article`
    width:1376px;
    height:64px;
    margin:0 auto;
    display:flex;
    align-items:center;
    position:relative;
   // justify-content:center;
    & > img {
        display:block;
        width:22px;
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        cursor: pointer;
    }
    & button {
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:10px;
        border-radius:10px;
        border:none;
        background-color:#ccc;
        color:#fff;
        font-size:15px;
        letter-spacing:-1px;
    }
    & button:hover {
        background-color:#333;
        border:none;
    }
`;

const Header = ({history}) => {
    const { me } = useSelector((state) => state.user) 
    //const changeMenu = useSelector((state) => state.change);
    const dispatch = useDispatch();
    const goHome = () => {
        dispatch(board_change());
        history.push('/')
    }

    const onLogOut = useCallback(()=> {
        dispatch(logoutRequestAction());
        dispatch(board_change());
    },[])
    return(
        <MenuWrap>
            <Menus>
               <img src={logo} alt="로고" onClick={goHome}/>
               { !me ?
                (<Link to="/login">
                    <Button variant="outlined" color="primary">로그인</Button>
                </Link>
                ) 
                : 
                <>
                <div style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>
                    <Avatar 
                    shape="square" 
                    style={{backgroundColor:"#333",textAlign:"center",color:"#fff", borderRadius:64,margin:"16px 10px",marginRight:10}} 
                    size={32} 
                    icon={<UserOutlined />} />
                    <p style={{fontSize:16,color:"#333",lineHeight:"32px"}}><strong>{me.nickname}</strong>님</p>
                </div>
                <Button variant="outlined" color="primary" onClick={onLogOut}>로그아웃</Button>
                </>
                }
            </Menus>

        </MenuWrap>
    );
}

export default withRouter(Header);