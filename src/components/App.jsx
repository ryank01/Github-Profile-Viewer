import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
  render(){
    return(
      <div>
        {this.props.clientId}
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
