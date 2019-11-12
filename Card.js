import React, { Component } from 'react';
import { render } from 'react-dom';
export class Card extends Component{
  render(){
    return (
      <div classname="github-profile">
        <img src="https://placehold.it/75" />
        <div clasName="info">
          <div classNmae="name">Name</div>
          <div className="company">Company</div>
        </div>
      </div>
    )
  }
}