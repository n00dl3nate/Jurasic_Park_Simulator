import React  from 'react';
import {Link} from 'react-router-dom';

const Paddock = (props) => {

  const onDelete = () => {
    props.handleDelete(props.dinosaur.id);
  }

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
    <tr class="rows">
        <td>{props.visitor.name}</td>
        <td>{props.visitor.age}</td>
        <td>{props.visitor.money}</td>
    </tr>
    </>
  )
}

export default Paddock;
