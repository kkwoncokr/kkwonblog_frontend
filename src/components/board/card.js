import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        overflow:"hidden"
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

const BoardCard = ({post}) => {
    const classes = useStyles();

    return(
        
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={post.Images[0].src}
            title="name"
            />
            <CardContent className={classes.content}>
                <h2 style={{marginTop:0,marginBottom:10}}>{post.head}</h2>
                <Typography variant="body2" color="textSecondary" component="p" style={{height:80, overflow:"hidden"}}>
                {post.content}
                </Typography>
            </CardContent>
            <CardContent className={classes.content2}>
            <span>2020년 11월 12일</span>
            <span>작성자 : <strong>{post.User.nickname}</strong></span>
            </CardContent>
        </Card>
        
    );
}

export default BoardCard;