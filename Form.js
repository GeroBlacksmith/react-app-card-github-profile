import React, { Component } from 'react';
import { render } from 'react-dom';
export class Form extends Component{
  userNameInput = React.createRef();
  handleSubmit =  (events)=>{
    event.preventDefault();
    console.log(
      this.userNameInput.current.value
    );
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="GitHub user" 
          ref={this.userNameInput}
          required />
        <button>search</button>
      </form>
    )
  }
}