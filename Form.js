import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
export class Form extends Component{

  state = {userName:''};
  handleSubmit =  (events)=>{
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`).then(
      resp => {
        this.props.onSubmit(resp.data);
        this.setState({userName:''});
      }
    )
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="GitHub user" 
          required
          value={this.state.userName}
          onChange={ event => this.setState({ userName: event.target.value })  } />
        <button>search</button>
      </form>
    )
  }
}