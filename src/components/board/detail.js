import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import {removePost, REMOVE_POST_REQUEST}  from '../../modules/post/post';
import { withRouter } from 'react-router-dom';

const Wrap = styled.section`
    width:100%;
    background-color:rgb(248,249,250);
    position:relative;
    z-index:10000;
    top:0;
    padding:0px 0;
    box-sizing:border-box;
`;
const Post = styled.article`
    width:768px;
    margin:0 auto;
    background-color:#fff;
    padding:5px 50px;
    box-sizing:border-box;
    border-radius:10px;
    box-shadow:rgba(0,0,0,0.08) 0px 0px 8px;
    color:#333;
    position: relative;
    & > h2 {
        font-size:40px;
        letter-spacing:-2px;
        font-weight:800;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    & > p {
    }
    & > .separator {
        margin:0 0.5rem;
    }
    & > div {
        margin-bottom:20px;
    }
    & > .notfound {
        width:100%;
        height:80vh;
        line-height:80vh;
        display:flex;
        justify-content:center;
        justify-items:center;
        color:#666;
        letter-spacing:-1px;
    }
    & > .notfound > p {
        font-size:40px;
    }
`;
const ButtonWrap = styled.div`
    position:absolute;
    top:40px;
    right:20px;
`;
const Buttons = styled(Button) `
    width:80px;
    height:35px;
    font-size:15px;
    background-color:#666;
    color:#fff;
    border:0;
    border-radius:5px;
    outline:none;
    margin-right:10px;
    cursor: pointer;
`;

const PostDetail = ({post,history}) => {
    const { me } = useSelector((state) => state.user)
    const {removePostLoading} = useSelector((state)=> state.post)
    const dispatch = useDispatch();

    const onRemove = useCallback(()=> {
        dispatch({
            type:REMOVE_POST_REQUEST,
            data:{PostId : post.id}
        })
    },[])
    return(
        <Wrap>
            {post ?
            (<Post>
                <h2>{post.head}</h2>
                <div>
                    <strong>{post.User.nickname}</strong>
                    <span style={{margin:"0 0.5rem"}}>·</span>
                    <span>2020년 11월 20일</span>
                </div>
                <img src={post.Images[0].src} alt={post.Image}/>
                <p dangerouslySetInnerHTML={{__html : post.content }}></p>
                {me ?
                (post.User.id === me.id ? 
                (<ButtonWrap>
                <Buttons type="primary">수정</Buttons>
                <Buttons type="primary" onClick={onRemove} loading={removePostLoading}>삭제</Buttons>
                </ButtonWrap>
                ):null
                ):null}
            </Post>)
            :<Post><div className="notfound"><p>존재하지 않는 게시글 입니다.</p></div></Post>}
        </Wrap>
    );
}

export default withRouter(PostDetail);