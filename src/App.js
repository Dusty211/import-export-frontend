import React, { Component } from 'react';
import MainPage from './containers/MainPage.js'
import Login from './components/Login.js'
import CreateUser from './components/CreateUser.js'
import Games from './containers/Games.js'

//React router
import { Route, Switch, Redirect } from "react-router-dom";

//isEmpty
import { isEmpty } from 'lodash'

class App extends Component {

  constructor() {
    super()
    this.state = {
      firstGame: false,
      user: {},
      currentGame: 0,
      gameData: {}
    }
  }


  getGameData = () => {
    let token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/npcs',{
        headers:{
          "Authentication": `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(data => {
        console.log("GET to npcs success.")
        console.log("npcs:", data)
        this.initializeGameData(data)
      })
    }
  }

  setFirstGame = (bool) => {
    this.setState({firstGame: bool})
  }

  getUserData = () => {
    let token = localStorage.getItem('token')
    if(token){
      fetch('http://localhost:3000/api/v1/profile',{
        headers:{
          "Authentication": `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(data => {
        console.log("GET to profile success. Storing user state.")
        console.log("data:", data)
        this.handleUpdateUser(data.user)
      })
    }
  }

  setCurrentGame = (id) => {
    this.setState({currentGame: id})
  }

  handleUpdateUser = (user) => {
    this.setState({user: user})
  }

  initializeGameData = (data) => {
    this.setState({gameData: data})
  }

  handleUpdateGamestate = (gamestate) => {
    this.setState({
      user: {...this.state.user, gamestates: [...this.state.user.gamestates.filter(state => state.id !== gamestate.id), gamestate]}
    })
  }

  componentDidMount() {
    this.getGameData()
    this.getUserData()
  }


  render() {

    return (
      <Switch>
      {/*below is for redirecting depeding on auth user with ternary*/}
        <Route exact path="/" render={()=> (<Redirect to="/profile" />)}/>

        <Route exact path="/games" render={(props)=> {
          return isEmpty(this.state.user) ? <Redirect to ="/login" /> :
          <Games
            {...props}
            handleUpdateUser={this.handleUpdateUser}
            handleUpdateGamestate={this.handleUpdateGamestate}
            setCurrentGame={this.setCurrentGame}
            user={this.state.user}
            setFirstGame={this.setFirstGame} />
        }}
        />
        <Route exact path="/create" render={(props)=> {
          return isEmpty(this.state.user) ?
          <CreateUser
            {...props}
            getGameData={this.getGameData}
            handleUpdateUser={this.handleUpdateUser}/> :
          <Redirect to="/games" />
      }}
      />
        <Route exact path="/profile" render={(props) => {
          return isEmpty(this.state.user) ? <Redirect to ="/login" /> :
          <MainPage
            {...props}
            gameData={this.state.gameData}
            currentGame={this.state.currentGame}
            setCurrentGame={this.setCurrentGame}
            handleUpdateUser={this.handleUpdateUser}
            user={this.state.user}
            handleUpdateGamestate={this.handleUpdateGamestate}
            firstGame={this.state.firstGame} />
        }}
        />
        <Route exact path ="/login" render={(props) => {
          return isEmpty(this.state.user) ?
          <Login
            {...props}
            getGameData={this.getGameData}
            handleUpdateUser={this.handleUpdateUser}/> :
          <Redirect to="/games" />
      }}
      />
      </Switch>
    );
  }
}

export default App;
