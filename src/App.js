import React, { Component } from 'react';
import logo from './logo.svg';
import Stars from './stars/stars';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.overall = "overall";
    this.chops = "chops";
    this.cream = "cream";
    this.bun = "bun";
    this.vote = this.vote.bind(this);

    var vote_ids = [
      this.overall,
      this.chops,
      this.cream,
      this.bun
    ];
    var voted_values = {};
    for (var id in vote_ids) {voted_values[vote_ids[id]] = 0;}
    this.state = { votes: voted_values };
  }

  vote(id,value) {
    let voted_values = this.state.votes;
    voted_values[id] = value;
    this.setState({ votes: voted_values });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bästa semlan 2017</h1>
        </header>
        <Stars id={this.overall} title="Sammanvägt" voteCallback={this.vote} stars="8" />
        <Stars id={this.chops} title="Mandelmassa" voteCallback={this.vote} stars="10"/>
        <Stars id={this.cream}  title="Grädde" voteCallback={this.vote} stars="5"/>
        <Stars id={this.bun}  title="Brödet" voteCallback={this.vote} stars="5"/>
      </div>
    );
  }
}

export default App;
