import React  from 'react';
import {Link} from 'react-router-dom';

import DinosaurList from '../dinosaurs/DinosaurList.js'

const Paddock = (props) => {

  const onDelete = () => {
    props.handleDelete(props.paddock.id);
  }

  if(!props.paddock){
    return null;
  }

  let dinosaurs = 0

  if(!(!props.paddock.dinosaurs)){
    if(!props.paddock.dinosaurs.length){
      dinosaurs = 0
    }
    else{
      dinosaurs = props.paddock.dinosaurs.length
    }
  }

  if(!props.paddock.dinosaurs){
    return (
      <>

      <h1 class="heading">{props.paddock.name} Deatails</h1>
        <h2>ID:{props.paddock.id}</h2>
        <h2>Type of enclosure:{props.paddock.type}</h2>
      <hr></hr>
      </>
    )
  }

  if(props.paddock.name === "Lab"){
    return (
      <>
      <tr class="rows">
    <td>{props.paddock.name}</td>
    <td>{props.paddock.type}</td>
    <td>{dinosaurs}</td>
    <td><form action={"http://localhost:3000/paddocks/" + props.paddock.id}><input type="submit" value="Select" class='button'/> </form></td>
    <td>N/A</td>
    </tr>
    </>
    )
  }


  return (
    <>
        <tr class="rows">
          <td>{props.paddock.name}</td>
          <td>{props.paddock.type}</td>
          <td>{dinosaurs}</td>
          <td><form action={"http://localhost:3000/paddocks/" + props.paddock.id}><input type="submit" value="Select" class='button'/> </form></td>
          <td><button class='table' onClick={onDelete}>Remove</button></td>
        </tr>
    </>
  )
}
export default Paddock;
