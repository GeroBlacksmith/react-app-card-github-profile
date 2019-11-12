import React, { Component } from 'react';
import { render } from 'react-dom';
import { CardList } from './CardList';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Github profile app</h1>
        <p>Es la tercera vez que estoy haciendo esta aplicacion de mierda, gracias stackblitz y github</p>
        <CardList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
