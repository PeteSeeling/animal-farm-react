import './AnimalCard.css';
import { Component } from 'react/cjs/react.production.min';

export default function __AnimalCard(props){
  return <div className = "animal-card">
    {props.name}
    <img src ={`./Animals/${props.type}.svg`}/>
    {props.says}
    {props.type}
    {props.top}
    {props.left}
  </div>;
}