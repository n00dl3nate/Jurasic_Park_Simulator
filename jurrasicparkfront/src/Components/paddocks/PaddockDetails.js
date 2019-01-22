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

  if(props.paddock.name === 'Lab'){
    if(!(!props.paddock._embedded.dinosaur)){
      return null
    }
    else{
      return <DinosaurList dinosaurs = {props.paddock._embedded.dinosaurs}/>
    }
  }

  if(!props.paddock._embedded.dinosaurs){
    return (
      <React.Fragment>
      <button onClick={onDelete}>Destroy Paddock</button>
      <button onClick={onEdit}>Edit Paddock</button>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
    <button onClick={onDelete}>Destroy Paddock</button>
    <button onClick={onEdit}>Edit Paddock</button>
    <DinosaurList dinosaurs = {props.paddock._embedded.dinosaurs} pad = {true}/>
    </React.Fragment>


  )
}

export default PaddockDetails;
