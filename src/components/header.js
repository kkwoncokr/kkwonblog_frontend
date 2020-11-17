import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../styles/images/favicon.png';

import {Button,Menu,MenuItem} from '@material-ui/core';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import { makeStyles } from '@material-ui/core/styles';

const MenuWrap = styled.header`
    width:100%;
    height:64px;
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
        width:40px;
    }
`;

const useStyles = makeStyles({
    loginBtn: {
      color: "#666",
      fontSize:"30px",
    },
  })
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    }
    const classes = useStyles()
    return(
        <MenuWrap>
            <Menus>
                <img src={logo} alt="로고"/>
                {/* <b style={{fontWeight:"bold", letterSpacing:"2px", color:"#666"}}>K BLOG</b> */}
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{position:"absolute", right:"0"}}>
                    <LockOpenRoundedIcon className={classes.loginBtn}/>
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Menus>
        </MenuWrap>
    );
}

export default Header;