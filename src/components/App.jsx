import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'ryank01',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  // Get user data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+ this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)

    });
  }

  // Get user repos from github
  getUserRepos(){
    $.ajax({
      url: 'https://api.github.com/users/'+ this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)

    });
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: 'd0316fb81a6f1f124a6c',
  clientSecret: '1e8bfd8c8ecee8524a3d6f4bc55412bca6b5bf47'
}

export default App
