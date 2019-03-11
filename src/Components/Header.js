import React, { Component } from 'react';
import './Style/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="top-bar-links">
                <ul className="col-sm-6">
                  <li className="top-bar-email">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:support@supportmail.com">supportmail.com</a>
                  </li>
                  <li className="top-bar-phone">
                    <i className="fas fa-phone"></i>
                    <span>1-919-999-0000</span>
                  </li>
                </ul>
                <div className="col-sm-6 soc-icons text-right no-padding">
                  <a href="/">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-github-square"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-linkedin"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;