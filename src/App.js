import React, { Component } from 'react';
import MainPage from './containers/MainPage.js'
import Login from './components/Login.js'

//React router
import { Route, Switch } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" render={(props) => (<MainPage {...props} testprop={'this is a test'}/>)}/>
        <Route path="/login" render={(props) => (<Login {...props} testprop={'this is lgin prop'}/>)}/>
      </Switch>
    );
  }
}

export default App;
