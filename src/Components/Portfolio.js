import React, { Component } from 'react';
import './Style/Portfolio.css';
import ben from './Images/ben.png';

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <article className="pane">
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
          <figure className="window">
            <img className="port-element" src={ben} alt="Ben 10" />
          </figure>
        </article>
      </section>
    )
  }
}

export default Portfolio;