import React from 'react';
import { useSelector } from 'react-redux';
import PostDetail from '../../components/board/detail';

const BoardDetail = ({match}) => {
    const {mainPosts} = useSelector((state) => state.post)
    const post = mainPosts.find((v) => v.id === parseInt(match.params.id));
    return(
        <PostDetail post={post}/>
    );
}

export default BoardDetail;