import './AnimalCard.css';

export default function AnimalCard(props){
  return <div className = "animal-card">
    {props.name}
    <img src ={`./Animals/${props.type}.svg`}/>
    {props.says}
    {props.type}
    {props.top}
    {props.left}
  </div>;
}