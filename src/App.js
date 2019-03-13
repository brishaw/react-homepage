import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Jumbo from './Components/Jumbo';
import Portfolio from './Components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Portfolio />
      </div>
    );
  }
}

export default App;
