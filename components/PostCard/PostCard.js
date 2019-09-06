import { observer, inject } from 'mobx-react'; 
import withStyles from "@material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'; 
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography'
import { memo } from 'react'

const styles = theme => ({
  card: {
    maxWidth: 320,
  },
  title:{
    [theme.breakpoints.up('xs')]: {
      fontSize:11.5,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:12.5,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:14,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:15.5,
    },
  },
  subHeader:{
    [theme.breakpoints.up('xs')]: {
      fontSize:10.5,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:11,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:13,
    },
    // fontWeight:'bold',
    color:'#f35012',
    marginTop:3,
  },
  media: {
    height: 0,
    paddingTop:'55%',
  },
  contentTop:{
    [theme.breakpoints.up('xs')]: {
      fontSize:11,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:12,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:13,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:14,
    },
    marginTop:0,
    marginBottom:5,
  },
  contentText:{
    [theme.breakpoints.up('xs')]: {
      fontSize:9.5,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize:10.5,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:12,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:13,
    },
  }
 
});

function PostCard({ classes }){

    return (
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Card className={classes.card}>
          <CardHeader classes={{
            title: classes.title,
            subheader: classes.subHeader,
          }}
          action={
            <IconButton aria-label="Settings">
              <FavoriteBorderIcon />
            </IconButton>
          }
          title="경성대 근사한 중식, 중찬"
          subheader="부산 남구"
          />
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/paella.jpg"
          title="Paella dish"
          />
          <CardContent>
            <h3 className={classes.contentTop}>5일 남음</h3>
            <Typography className={classes.contentText} color="textSecondary" component="p">
              경성대에 위치한 중찬에서 고급스러운 중식을 체험해보세요!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    
    )
}
export default memo(withStyles(styles)(PostCard))