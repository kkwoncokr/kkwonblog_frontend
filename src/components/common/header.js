import React, { useCallback } from 'react';
import styled from 'styled-components';
import logo from '../../styles/images/simbol.png';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { board_change } from '../../modules/common/menuchange';
import { logoutRequestAction } from '../../modules/user/user';

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
        border-radius:40px;
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
                <Button variant="outlined" color="primary" onClick={onLogOut}>로그아웃</Button>
                </>
                }
            </Menus>

        </MenuWrap>
    );
}

export default withRouter(Header);