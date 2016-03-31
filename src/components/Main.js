require('normalize.css');
require('styles/App.css');
require('styles/css/materialize.css');
import Rebase from 're-base';
import GroupPostings from './GroupPostings/GroupPostings';
import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import CircularProgress from 'material-ui/lib/circular-progress';
import Paper from 'material-ui/lib/paper';

const base = Rebase.createClass('https://vivid-fire-8661.firebaseio.com/');

class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      appData: [],
      loading: true
    }
  }

  componentDidMount(){
    this.ref = base.syncState('/', {
      context: this,
      state: 'appData',
      asArray: false,
      then(){
        this.setState({loading: false})
      }
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render(){
    return (
      <div>
        <AppBar
          className="white"
          title="WarframeLFG.io"
          titleStyle={{color: "#00bcd4", fontWeight: 100}}
          />
        <div className="hero-div">
          <div className="row center container white-text">
            <h1 className="center">WarframeLFG</h1>
            <h5 className="thinnest">
              A simple app to post and search for groups in Warframe.
            </h5>
          </div>
        </div>
        <Paper zDepth={1} rounded={false}>
          <div className="content-div">
            {this.state.loading ? <div className="center"> <CircularProgress size={2} /> </div> : <GroupPostings appData={this.state.appData} />}
          </div>
        </Paper>
        <div className="row footer-div">
          <div className="col s6">
            <div className="center">
              Twitter and Stuff
            </div>
          </div>
          <div className="col s6">
              Digital Extreme Ltd, Warframe and the logo Warframe are registered trademarks.
              All rights are reserved worldwide. This site has no official link with Digital Extremes Ltd or Warframe.
              All artwork, screenshots, characters or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of Digital Extreme Ltd.
          </div>
        </div>
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

module.exports = AppComponent;