import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Home from './templates/Home'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <nav>
          <h1><Link to="/home">Home</Link></h1>
        </nav>
        {this.props.children || <Home />}
      </div> 
    );
  }
}

export default App;
