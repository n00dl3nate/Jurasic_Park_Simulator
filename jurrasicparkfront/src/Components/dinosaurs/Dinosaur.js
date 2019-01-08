import React  from 'react';
import {Link} from 'react-router-dom';

const Dinosaur = (props) => {

  if(!props.dinosaur && !props.paddock){
    return null;
  }

  if(!props.dinosaur.paddock){
    return(
      <>
    <ul>
    <Link to = {"/dinosaurs/" + props.dinosaur.id} className="name">
        <h3>{props.dinosaur.name}</h3>
    </Link>
    <li>Type:{props.dinosaur.type}</li>
    <li>Gender:{props.dinosaur.gender}</li>
    <li>Food Level:{props.dinosaur.food}</li>
    <li>Diet:{props.dinosaur.diet}</li>
    </ul>
    <hr></hr>
    </>
  )

  }
  console.log(props)
  return (
    <>
      <ul>
      <Link to = {"/dinosaurs/" + props.dinosaur.id} className="name">
            <h3>{props.dinosaur.name}</h3>
      </Link>

      <li>Type:{props.dinosaur.type}</li>
      <li>Gender:{props.dinosaur.gender}</li>
      <li>Food Level:{props.dinosaur.food}</li>
      <li>Diet:{props.dinosaur.diet}</li>
      <li>Paddock Type:{props.dinosaur.paddock.type}</li>
      </ul>
      <hr></hr>
    </>
  )
}

export default Dinosaur;
// <Link to = {"/dinosaurs/" + props.dinosaur.id} className="name">
//   {props.dinosaur.name} {props.dinosaur.type}
// </Link>
