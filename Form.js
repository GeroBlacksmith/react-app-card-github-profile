import React, { Component } from 'react';
import { render } from 'react-dom';
export class Form extends Component{

  state = {userName:''};
  handleSubmit =  (events)=>{
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`).then(
      resp => {
        this.props.onSubmit(resp.data);
      }
    )
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
          required
          value={this.state.userName}
          onChange={ event => this.state({ userName: event.target.value })  } />
        <button>search</button>
      </form>
    )
  }
}