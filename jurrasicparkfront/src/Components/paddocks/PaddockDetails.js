import React  from 'react';
import {Link} from 'react-router-dom';
import DinosaurList from '../dinosaurs/DinosaurList.js'

const PaddockDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.paddock.id);
  }

  const onEdit = () => {
    props.handleEdit(props.paddock)
  }

  if(!props.paddock){
    return null;
  }

  console.log(props.paddock,"More of your data dick")

  return (
    <React.Fragment>
    <ul>
    </ul>
    <button onClick={onDelete}>Destroy Paddock</button>
    <button onClick={onEdit}>Edit Paddock</button>
    <DinosaurList dinosaurs = {props.paddock._embedded.dinosaurs}/>
    </React.Fragment>


  )
}

export default PaddockDetails;
