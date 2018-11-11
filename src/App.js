import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

/**
 * App component
 */
class App extends Component {
  /**
   * it renders the App component
   * @returns {Component} The App component.
   * */
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
