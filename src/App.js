import React, { Component } from 'react';
import MainPage from './containers/MainPage.js'
import Login from './components/Login.js'

//React router
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {

  render() {

    return (
      <Switch>
      {/*below is for redirecting depeding on auth user with ternary*/}
        <Route exact path="/" render={()=> (<Redirect to="/login" />)}/>
        <Route path="/main" render={(props) => (<MainPage {...props} testprop={'this is a test'}/>)}/>
        <Route path="/login" render={(props) => (<Login {...props} testprop={'this is lgin prop'}/>)}/>
      </Switch>
    );
  }
}

export default App;
