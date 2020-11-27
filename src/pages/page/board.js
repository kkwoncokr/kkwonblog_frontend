import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import List from '../../components/board/list';
import { useSelector } from 'react-redux';


const BoardWrap = styled.section`
    width:100%;
    & > article {
        width:1376px;
        margin:0 auto;
        padding:100px 0;
        box-sizing:border-box;
    }
`;

const Home = () => {
    const {mainPosts} =useSelector((state)=> state.post)
    return(
        <BoardWrap>
            <article>
                <Grid container spacing={3}>
                    {mainPosts.length ?
                    <List/> : <div>게시글이 없습니다.</div>
                    }
                </Grid>
            </article>
        </BoardWrap>
    );
}

export default Home;