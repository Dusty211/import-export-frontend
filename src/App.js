import React, { Component } from 'react';
import MainPage from './containers/MainPage.js'
import Login from './components/Login.js'

//React router
import { Route, Switch, Redirect } from "react-router-dom";

//isEmpty
import { isEmpty } from 'lodash'

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  handleUpdateUser = (user) => {
    this.setState({user: user})
  }

  render() {

    return (
      <Switch>
      {/*below is for redirecting depeding on auth user with ternary*/}
        <Route exact path="/" render={()=> (<Redirect to="/profile" />)}/>
        <Route exact path="/profile" render={(props) => {
          return isEmpty(this.state.user) ? <Redirect to ="/login" /> :
          <MainPage {...props} user={this.state.user}/>
        }}
        />
        <Route exact path ="/login" render={(props) => {
          return isEmpty(this.state.user) ? <Login {...props} handleUpdateUser={this.handleUpdateUser}/> :
        <Redirect to="/profile" />
      }}
      />
      </Switch>
    );
  }
}

export default App;
