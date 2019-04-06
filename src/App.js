import React, { Component } from 'react';
import Header from './containers/Header.js'
import ArtPane from './containers/ArtPane.js'
import DialogPane from './containers/DialogPane.js'
import InfoPane from './containers/InfoPane.js'
import ActionPane from './containers/ActionPane.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          < Header />
          < ArtPane />
          < DialogPane />
          < InfoPane />
          < ActionPane />
        </div>
      </ React.Fragment>
    );
  }
}

export default App;
