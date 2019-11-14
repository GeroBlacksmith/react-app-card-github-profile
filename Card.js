import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export class Card extends Component{
  render(){
  // const profile = testData[0];
  const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div clasName="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}