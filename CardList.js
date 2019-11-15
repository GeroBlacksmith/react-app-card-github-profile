import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card} from './Card';


export const CardList=(props)=>(
  <div>
    { 
      props.profiles.map( 
        profile => <Card key={profile.id} {...profile}/> 
      ) 
    }
  </div>
)