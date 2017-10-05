import React, { Component } from 'react';
import styled from 'styled-components';

const StarBlock = styled.div``;
const StarBlockTitle = styled.h2`
  margin-bottom: 0;
`;
const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Star = styled.span`
  padding: 20px 20px;
  cursor: pointer;
  width:50px;
  height:50px;
  overflow:hidden;
  position:relative;
  background:url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjREREREREIiBwb2ludHM9IjEwLDAgMTMuMDksNi41ODMgMjAsNy42MzkgMTUsMTIuNzY0IDE2LjE4LDIwIDEwLDE2LjU4MyAzLjgyLDIwIDUsMTIuNzY0IDAsNy42MzkgNi45MSw2LjU4MyAiLz48L3N2Zz4=');
  background-size: contain;
  background-repeat:no-repeat;

  &:hover,&.active {
    color: red;
    background:
      url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjRkZERjg4IiBwb2ludHM9IjEwLDAgMTMuMDksNi41ODMgMjAsNy42MzkgMTUsMTIuNzY0IDE2LjE4LDIwIDEwLDE2LjU4MyAzLjgyLDIwIDUsMTIuNzY0IDAsNy42MzkgNi45MSw2LjU4MyAiLz48L3N2Zz4=');
      background-size: contain;
      background-repeat:no-repeat;
  }

`;

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
      <StarBlock>
        <StarBlockTitle>{this.props.title}</StarBlockTitle>
        <StarsContainer>
        {rows.map(starNumber => {
          return(
             <Star
               className={this.activeNumber >= starNumber ? 'active' : ''}
               key={starNumber}
               data-id={starNumber}
               onClick={this.handleClick.bind(this)}
               onMouseEnter={this.hoverStarEnter.bind(this)}
               onMouseLeave={this.hoverStarLeave.bind(this)}>
             </Star>
          )}
        )}
        </StarsContainer>
      </StarBlock>
    );
  }
}

export default Stars;
