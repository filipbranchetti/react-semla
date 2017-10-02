import React, { Component } from 'react';
import './stars.css';



class Stars extends Component {
  constructor() {
    super();
    this.activeNumber = 0;
    this.savedNumber = 0;
  }
  handleClick(event) {
    event.preventDefault()
    var el = event.target
    this.savedNumber = parseInt(el.getAttribute('data-id'),10),el.getAttribute('data-id');
  }
  hoverStarEnter(event){
    var el = event.target
    var number = parseInt(el.getAttribute('data-id'),10);

    this.activeNumber =  number;
    this.forceUpdate();
    //this.setState({});
  }
  hoverStarLeave(event){
    this.activeNumber =  this.savedNumber;
    this.forceUpdate();
    //this.setState({});
  }
  render() {
    let rows = [], i = 0, len = this.props.stars;
    while (++i <= len){rows.push(i);}
    return (
      <div className="star-block" id={this.props.id}>
        <h2 className="star-block__title">{this.props.title}</h2>
        <div className="star-block__stars">
        {rows.map(starNumber => {
          return(
             <span
               className={this.activeNumber >= starNumber ? 'star-block__stars__star star-block__stars__star--active' : 'star-block__stars__star'}
               key={starNumber}
               data-id={starNumber}
               onClick={this.handleClick.bind(this)}
               onMouseEnter={this.hoverStarEnter.bind(this)}
               onMouseLeave={this.hoverStarLeave.bind(this)}>{starNumber}
             </span>
          )}
        )}
        </div>
      </div>
    );
  }
}

export default Stars;
