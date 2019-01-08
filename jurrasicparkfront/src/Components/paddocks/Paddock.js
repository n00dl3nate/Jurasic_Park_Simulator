import React  from 'react';
import {Link} from 'react-router-dom';

import DinosaurList from '../dinosaurs/DinosaurList.js'

const Paddock = (props) => {

  if(!props.paddock){
    return null;
  }


  if(!props.paddock.dinosaurs){
    return (
      <>
        <p>ID:{props.paddock.id}</p>
        <p>Name:{props.paddock.name}</p>
        <p>Type of enclosure:{props.paddock.type}</p>
        <hr></hr>
      </>
    )

  }
  return (
    <>
      <ul>

      <Link to = {"/paddocks/" + props.paddock.id} className="name">
          <h3>{props.paddock.name}</h3>
      </Link>
      <li>Type of enclosure:{props.paddock.type}</li>
      <li>Zone:{props.paddock.zone.name}</li>
      </ul>
      <hr></hr>
    </>
  )
}

export default Paddock;
