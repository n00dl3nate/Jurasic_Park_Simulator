import React  from 'react';
import {Link} from 'react-router-dom';

const Visitor = (props) => {

  const onDelete = () => {
    props.handleDelete(props.visitor.id);
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
        <td><button class='table' onClick={onDelete}>Remove</button></td>
    </tr>
    </>
  )
}

export default Visitor;
