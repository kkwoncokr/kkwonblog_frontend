import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 320,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        padding:'16px !important',
        boxSizing:'border-box',

    },
  }));

const BoardCard = () => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/paella.jpg"
            title="name"
            />
            <CardContent className={classes.content}>
                <h2 style={{margin:0}}>title</h2>
                <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                <p style={{fontSize:12,marginTop:"10px"}}>2020년 11월 12일</p>
            </CardContent>
        </Card>
    );
}

export default BoardCard;