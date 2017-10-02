import React, { Component } from 'react';
import logo from './logo.svg';
import Stars from './stars/stars';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bästa semlan 2017</h1>
        </header>
        <Stars id="overall" title="Sammanvägt" stars="5" />
        <Stars id="cream" title="Grädde" stars="5"/>
        <Stars id="chops" title="Mandelmassa" stars="10"/>
        <Stars id="bun" title="Brödet" stars="5"/>
      </div>
    );
  }
}

export default App;
