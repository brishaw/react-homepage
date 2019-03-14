import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Jumbo from './Components/Jumbo';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
