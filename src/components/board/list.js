import React from 'react';
import BoardCard from '../../components/board/card';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

const List = () => {
    const { mainPosts } = useSelector((state) => state.post)
    return(
        <>
        {mainPosts.map((v) =>{
            return (
            <Grid item xs={3} key={v.id}>
                <BoardCard post={v} key={v.id}/>
            </Grid>   
            );
        })
        }
        </>
    );
}

export default List;