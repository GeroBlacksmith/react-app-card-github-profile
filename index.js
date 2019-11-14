import React, { Component } from 'react';
import { render } from 'react-dom';
import { CardList } from './CardList';
import { Form } from './Form';
import './style.css';
const testData = [{
  name: "Gero",
  company:"Nrwl",
  avatar_url:"https://avatars3.githubusercontent.com/u/7440621?v=4"
},{
  name: "Juan F. Gabriel",
  company:"www.andes.gob.ar",
  avatar_url:"https://avatars3.githubusercontent.com/u/16528734?v=4"
},{
  name: "Julian B",
  company:"PatagonianIT",
  avatar_url:"https://avatars3.githubusercontent.com/u/22307049?v=4"
}];
class App extends Component {
  /* constructor(props){
    super(props);
    this.state = {
      profiles:testData
    };
  } */
  state = {
      profiles:testData
  }
  render() {
    return (
      <div>
        <h1>Github profile app</h1>
        <p>Es la tercera vez que estoy haciendo esta aplicacion de mierda, gracias stackblitz y github</p>
        <Form />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
