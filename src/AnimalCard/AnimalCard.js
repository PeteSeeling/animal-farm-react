import './AnimalCard.css';

export default function AnimalCard(props){
  return <div className = "animal-card">
    {props.name}
    <img src ={`/animals/${props.type}.png`}/>
    {props.says}
    {props.type}
  </div>;
}