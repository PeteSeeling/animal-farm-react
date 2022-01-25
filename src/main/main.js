import React from 'react';
import backgroundImg from '../background.png';
import AnimalCard from '../AnimalCard/AnimalCard';
import './Main.css';

export default function Main(props){
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.animals.map((animal, i)=>
        <AnimalCard key ={animal + i} name={animal.name} type={animal.type} says={animal.says}/>)}


    </main>
  );
}

