import React, { Component } from 'react';
import './Style/Jumbo.css';
import techie from './Images/techie.jpg';

class Jumbo extends Component {
  render() {
    return (
      <section className="jumbo">
        <img src={techie} alt="Techie mother board" />
      </section>
    )
  }
}

export default Jumbo;
