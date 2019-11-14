import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card} from './Card';
const testData = [{
  name: "Gero",
  company:"Nrwl",
  avatar_url:"https://avatars3.githubusercontent.com/u/7440621?v=4"
},{
  name: "Juan F. Gabriel",
  company:"www.andes.gob.ar",
  avatar_url:"https://avatars3.githubusercontent.com/u/16528734?v=4"
}];

export const CardList=(props)=>(
  <div>
    { 
      testData.map( 
        profile => <Card {...profile}/> 
      ) 
    }
  </div>
)