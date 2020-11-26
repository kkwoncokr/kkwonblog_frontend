import React, { useCallback } from 'react';
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'antd';
import { Link } from 'react-router-dom';
import { REMOVE_POST_REQUEST } from '../../modules/post/post';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        overflow:"hidden",
        position:"relative",
    },
    media: {
        height: '180px',
        // paddingTop: '56.25%', // 16:9
        width:'100%',
        backgroundSize:'cover'
    },
    content: {
        padding:'16px !important',
        boxSizing:'border-box',

    },
    content2: {
        display:'flex',
        justifyContent:'space-between',
        fontSize:12

    },
  }));
const Cards = styled(Card)`
  &  a {
    color:#000;
  }
`;
const Buttons = styled(Button)`
    position:absolute;
    top:10px;
    right:10px;
    background-color:rgba(255,255,255,0.5);
    border:0;
    border-radius:5px;
    padding:5px 8px;
    box-sizing:border-box;
    letter-spacing:-1px;
    color:#333;
    cursor: pointer;
    &:hover {
        background-color:#000;
        color:#fff;
        transition:all 0.3;
    }
`;

const BoardCard = ({post}) => {
    const classes = useStyles();
    const ptn = /<\/?[^>]*>/gi;
    const dispatch = useDispatch();
    const { me } = useSelector((state)=> state.user)
    const onRemove = useCallback(()=> {
        dispatch({
            type:REMOVE_POST_REQUEST,
            data:{PostId : post.id}
        })
    },[])
    return(    
        <Cards className={classes.root}>
            <Link to={`post/${post.id}`}>
                <CardMedia
                className={classes.media}
                image={post.Images[0].src}
                title="name"
                />
                <CardContent className={classes.content}>
                    <h2 style={{marginTop:0,marginBottom:10,overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{post.head}</h2>
                    <Typography variant="body2" color="textSecondary" component="div" style={{height:80, overflow:"hidden"}}>
                    {post.content.replace(ptn,"")}
                    </Typography>
                </CardContent>
                <CardContent className={classes.content2}>
                <span>2020년 11월 12일</span>
                <span>작성자 : <strong>{post.User.nickname}</strong></span>
            </CardContent>
            </Link>
            {me ? (
            me.id === post.User.id ?
            (
                <Buttons onClick={onRemove}>삭제</Buttons>
            )
            :null
            )
            :null}
        </Cards>
        
    );
}

export default BoardCard;