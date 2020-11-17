
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const MenusWrap = styled.section`
    width:100%;
    height:48px;
`;

const Menus = styled.article`
    width:1376px;
    height:48px;
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
        font-size:20px;
        letter-spacing:1.5px;
        box-sizing:border-box;
        cursor: pointer;
    }
    & > ul > li > a {
        display:flex;
        align-items:center;
        justify-content:center;
        height:48px;
        text-decoration:none;
    }
    & svg {
        color:#333;
        margin-right:5px;
        font-size:24px;
    }
`;


const Menu = () => {
    const [onBoard, setonBoard] = useState(true);
    const [onProfile, setonProfile] = useState(false);

    const onClickBoard = () => {
        setonBoard((prev)=> true);
        setonProfile(false)
    }
    const onClickProfile = () => {
        setonProfile((prev) => true);
        setonBoard(false)
    }
    return(
        <MenusWrap>
            <Menus>
                <ul>
                    <li onClick={onClickBoard}>
                        <Link to="/" style={onBoard ? 
                        {borderBottom:"2px solid #333",color:"#333",fontWeight:"600"} : 
                        {borderBottom:0, color:"#ccc",fontWeight:"300"}}>
                            <DeveloperBoardIcon style={onBoard ? {color:"#333"} : {color:"#ccc"}}/> 
                            게시글</Link>
                    </li>
                    <li onClick={onClickProfile}>
                    <Link to="/profile"style={onProfile ? 
                    {borderBottom:"2px solid #333",color:"#333",fontWeight:"600"} :
                    {borderBottom:0, color:"#ccc",fontWeight:"300"}}>
                        <AccountCircleIcon style={onProfile ? {color:"#333"} : {color:"#ccc"}}/>
                        프로필</Link>
                    </li>
                </ul>
            </Menus>
        </MenusWrap>
    );
}

export default Menu;