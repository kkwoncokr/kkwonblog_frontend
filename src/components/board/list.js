import React from 'react';
import BoardCard from '../../components/board/card';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
    const { mainPosts } = useSelector((state) => state.post)
    return(
        <>
        {mainPosts.map((v) =>{
            return (
            <Grid item xs={3} key={v.id}>
            <Link to={`post/${v.id}`}>
                <BoardCard post={v} key={v.id}/>
            </Link>
            </Grid>   
            );
        })
        }
        </>
    );
}

export default List;