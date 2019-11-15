import React, { Component } from 'react';
import { render } from 'react-dom';
import { CardList } from './CardList';
import { Form } from './Form';
import './style.css';

class App extends Component {
  state = {
      profiles:[]
  }
  addNewProfile = (profileData) => {
    this.setState( prevState => ({
        profiles:[...prevState.profiles,profileData]
      })
    )
  }
  render() {
    return (
      <div>
        <h1>Github profile app</h1>
        <p>Es la tercera vez que estoy haciendo esta aplicacion de mierda, gracias stackblitz y github</p>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
