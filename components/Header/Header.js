import { observer, inject } from 'mobx-react'; 
import withStyles from "@material-ui/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Link from 'next/link';


const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
  },
  logo_container:{

  },
  header_left:{
    display:'flex',
    justifyContent:'flex-start'
  },
  header_center:{
    display:'flex',
    alignItems:'center',
    fontSize:25,
    justifyContent:'center',
  },
  header_right:{
    display:'flex',
    justifyContent:'flex-end'
  },
  iconButton:{
    '& span' :{
      fontSize:12,
      marginLeft:3
    }
  }
 
};

@withStyles(styles)
@inject('AuthStore')
@observer

class Header extends React.Component {

  
  render() {  
    const { classes } = this.props
    return (
    <div className={classes.container}> 
      <Grid container spacing={3}>
        <Grid className={classes.header_left} item xs={3} sm={3} md={3} lg={3}>
          검색
        </Grid>
        <Grid className={classes.header_center} item xs={6} sm={6} md={6} lg={6}>
          로고
        </Grid>
        <Grid className={classes.header_right} item xs={3} sm={3} md={3} lg={3}>
          <Link href="/login" as="/login">
            <IconButton aria-label="Login" className={classes.iconButton}>
              <PersonIcon />
              <span>로그인</span>
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Header;