import React, { Component } from 'react';
import './Style/Header.css';
import logo from './Images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="top-bar hidden-xs">
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
        </div> {/* // top-bar */}
        <nav className="navbar navbar-static-top">
          <div className="navigation">
            <div className="container relative">
              <form method="get" className="search-wrap">
                <input type="search" className="form-control" placeholder="Type &amp; Hit Enter" />
              </form>
              <div className="row flex">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="logo-container">
                  <div className="logo-wrap">
                    <a href="/">
                      <img className="logo" src={logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-md-9 nav-wrap flex">
                  <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="dropdown active">
                        <a href="/" className="dropdown-toggle">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="/" className="dropdown-toggle">Portfolio</a>
                      </li>
                      <li className="dropdown">
                        <a href="/" className="dropdown-toggle">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="/" className="dropdown-toggle">Contact</a>
                      </li>
                      <li>
                        <a href="/" className="nav-search">
                          <i className="fa fa-search search-trigger"></i>
                          <i className="fa fa-times search-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav> {/* // nav */}
      </header>
    )
  }
}

export default Header;