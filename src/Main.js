import React, { Component } from 'react';
import backgroundImg from './background.png';
import AnimalCard from './AnimalCard.js';
import './Main.css';

export default function __Main(props) {
  render (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.animals.map((animal, i)=>
        <AnimalCard key ={animal + i} name={animal.name} type={animal.type} says={animal.says}/>)}


    </main>
  );
}

