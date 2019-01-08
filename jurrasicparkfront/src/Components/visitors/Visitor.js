import React  from 'react';
import {Link} from 'react-router-dom';

const Paddock = (props) => {

  if(!props.visitor && !props.zone){
    return null;
  }

  if(!props.visitor.zone){
    return (
      <>
        <ul>
          <li>Name:{props.visitor.name}</li>
        </ul>
      </>
    )
  }

  console.log(props)
  return (
    <>
      <ul>
        <li>Name:{props.visitor.name}</li>
        <li>Age:{props.visitor.age}</li>
        <li>Money:{props.visitor.money}</li>
        <li>Zone:{props.visitor.zone.name}</li>
      </ul>
      <hr></hr>
    </>
  )
}

export default Paddock;
