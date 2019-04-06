import React, { Component } from 'react';
import Header from './containers/Header.js'
import ArtPane from './containers/ArtPane.js'
import DialogPane from './containers/DialogPane.js'
import InfoPane from './containers/InfoPane.js'
import ActionPane from './containers/ActionPane.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        < Header />
        < ArtPane />
        < DialogPane />
        < InfoPane />
        < ActionPane />
      </div>
    );
  }
}

export default App;
