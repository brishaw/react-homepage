import React, { Component } from 'react';
import './Style/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <article className="pane">
          <figure className="window"></figure>
          <figure className="window"></figure>
          <figure className="window"></figure>
          <figure className="window"></figure>
          <figure className="window"></figure>
          <figure className="window"></figure>
          <figure className="window"></figure>
        </article>
      </section>
    )
  }
}

export default Portfolio;