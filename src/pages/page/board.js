import React from 'react';
import styled from 'styled-components';
import BoardCard from '../../components/board/card';
import Grid from '@material-ui/core/Grid';
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
    const { mainPosts } = useSelector((state) => state.post)
    return(
        <BoardWrap>
            <article>
                <Grid container spacing={3}>
                    {mainPosts.map((v) =>{
                        return (
                        <Grid item xs={3} key={v.id}>
                        <BoardCard post={v} key={v.id}/>
                        </Grid>   
                        );
                    })
                    }
                </Grid>
            </article>
        </BoardWrap>
    );
}

export default Home;