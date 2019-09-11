import { observer, inject } from 'mobx-react'; 
import withStyles from "@material-ui/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import GoogleLogin from 'react-google-login';
import Router from 'next/router'
import R from "../repositories/auth"

const styles = {
  
};

@withStyles(styles)
@inject('AuthStore', 'PostStore')
@observer

class Home extends React.Component {

  responseGoogle = async (response) => {
    const { accessToken, profileObj = {} } = response ;
    const { email } = profileObj ;
    const result = await R.submitGoogleAccessToken(accessToken)
    console.log(result)
    Router.push('/');
   
  }
  render() {  
    const { PostStore } = this.props
    return (
    <div> 
      <Grid container spacing={2}>
        <TextField
          id="outlined-adornment-weight"
          variant="outlined"
          label="이메일"
          value={""}
          onChange={()=>{}}
          // helperText="Weight"
          InputProps={{
          }}
        />
          <GoogleLogin
            clientId="86040286020-ao9epkmparq5r0r4952pruqjibdcp4qh.apps.googleusercontent.com"
            buttonText="로그인"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />,
      </Grid>
    </div>
    )
  }
}

export default Home;