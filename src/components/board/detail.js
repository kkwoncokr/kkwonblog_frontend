import React from 'react';
import styled from 'styled-components';

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

    & > h2 {
        font-size:40px;
        letter-spacing:-2px;
        font-weight:800;
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

const PostDetail = ({post}) => {
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
            </Post>):<Post><div className="notfound"><p>존재하지 않는 게시글 입니다.</p></div></Post>}
        </Wrap>
    );
}

export default PostDetail;