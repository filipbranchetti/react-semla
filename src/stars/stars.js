import React, { Component } from 'react';
import './stars.css';



class Stars extends Component {
  constructor(props) {
    super(props);
    this.activeNumber = 0;
    this.savedNumber = 0;
  }

  handleClick(event) {
    event.preventDefault()
    var el = event.target
    const number =  parseInt(el.getAttribute('data-id'),10);
    this.savedNumber = number;
    this.props.voteCallback(this.props.id,number);
  }
  hoverStarEnter(event){
    var el = event.target
    var number = parseInt(el.getAttribute('data-id'),10);

    this.activeNumber =  number;
    this.forceUpdate();
  }
  hoverStarLeave(event){
    this.activeNumber =  this.savedNumber;
    this.forceUpdate();
  }
  render() {
    let rows = [], i = 0, len = this.props.stars;
    while (++i <= len){rows.push(i);}
    return (
      <div className="star-block" >
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
               onMouseLeave={this.hoverStarLeave.bind(this)}>
             </span>
          )}
        )}
        </div>
      </div>
    );
  }
}

export default Stars;
