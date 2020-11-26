
import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { board_change, profile_change } from '../../modules/common/menuchange';

const MenusWrap = styled.section`
    width:100%;
    height:44px;
    padding:50px 0;
    box-sizing:border-box;
`;

const Menus = styled.article`
    width:1376px;
    height:44px;
    margin:0 auto;
    margin-top:60px;

    & > ul {
        padding:0;
    }
    & > ul > li {
        width:112px;
        height:48px;
        list-style:none;
        float:left;
        font-size:18px;
        letter-spacing:-1px;
        box-sizing:border-box;
        cursor: pointer;
    }
    & > ul > li > a {
        display:flex;
        align-items:center;
        justify-content:center;
        height:45px;
        text-decoration:none;
    }
    & svg {
        color:#333;
        margin-right:5px;
        font-size:20px;
    }
`;


const Menu = () => {
    const changeMenu = useSelector((state) => state.change);
    const dispatch = useDispatch();

   const onClickBoard = () => {
        dispatch(board_change());
    }
    const onClickProfile = () => {
        dispatch(profile_change());
    }
    return(
        <MenusWrap>
            <Menus>
                <ul>
                    <li onClick={onClickBoard}>
                        <Link to="/" style={changeMenu.board ? 
                        {borderBottom:"2px solid #333",color:"#333",fontWeight:"600"} : 
                        {borderBottom:0, color:"#ccc",fontWeight:"300"}}>
                            <DeveloperBoardIcon style={changeMenu.board ? {color:"#333"} : {color:"#ccc"}}/> 
                            게시글</Link>
                    </li>
                    <li onClick={onClickProfile}>
                    <Link to="/profile"style={changeMenu.profile ? 
                    {borderBottom:"2px solid #333",color:"#333",fontWeight:"600"} :
                    {borderBottom:0, color:"#ccc",fontWeight:"300"}}>
                        <AccountCircleIcon style={changeMenu.profile ? {color:"#333"} : {color:"#ccc"}}/>
                        프로필</Link>
                    </li>
                </ul>
            </Menus>
        </MenusWrap>
    );
}

export default Menu;