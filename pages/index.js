import { observer, inject } from 'mobx-react'; 
import withStyles from "@material-ui/styles/withStyles";
import Header from '../components/Header/Header'
import PostCard from '../components/PostCard/PostCard'
import Grid from '@material-ui/core/Grid';


const styles = {
  root: {
    backgroundColor: 'red',
  },
};

@withStyles(styles)
@inject('AuthStore', 'PostStore')
@observer

class Home extends React.Component {

  static async getInitialProps(appContext) {
    
    return {
      'hello': 'world'
    };
  }
  componentDidMount(){
    // this.props.PostStore.findAllPublicPosts()
  }

  render() {  
    const {PostStore} = this.props
    return (
    <div> 
    {/* {PostStore.campaigns.slice()[0] && PostStore.campaigns.slice()[0].host_name} */}
      <Header/>
      <Grid container spacing={2}>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </Grid>
    </div>
    )
    // return <div className={this.props.classes.root}> {toJS(PostStore.hello)}</div>;
  }
}

export default Home;