import React from 'react';
import styled from 'styled-components';
import BoardCard from '../../components/board/card';
import Grid from '@material-ui/core/Grid';

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
    return(
        <BoardWrap>
            <article>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                    <Grid item xs={3}>
                    <BoardCard/>
                    </Grid>
                </Grid>
            </article>
        </BoardWrap>
    );
}

export default Home;