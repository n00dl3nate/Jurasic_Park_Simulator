import React  from 'react';
import {Link} from 'react-router-dom';
import DinosaurList from '../dinosaurs/DinosaurList.js'

const PaddockDetails = (props) => {
console.log(props,"YEOOOOO")

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

    if(!props.paddock._embedded.dinosaurs){
      return null
    }
    else {
      return (
      <>
      <h3>Dinosaurs in Paddock</h3>
      <DinosaurList dinosaurs =
     {props.paddock._embedded.dinosaurs} handleDelete = {props.handleDeleteDino} handleEdit= {props.handleEditDino} handleFeed= {props.handleFeedDino} />
     </>
   )
    }
  }

  if(!props.paddock._embedded.dinosaurs){
    return (
      <React.Fragment>
      <button onClick={onDelete}>Destroy Paddock</button>
      </React.Fragment>
    )
  }

  console.log(props.handleDeleteDino,"ugyuyuyuyuygg")

  return (
    <React.Fragment>
    <button onClick={onDelete}>Destroy Paddock</button>
    <h2 class = "subHeading">Dinosaurs in Paddock</h2>
    <DinosaurList dinosaurs = {props.paddock._embedded.dinosaurs} handleDelete = {props.handleDeleteDino} handleEdit= {props.handleEditDino} handleFeed= {props.handleFeedDino}/>
    </React.Fragment>
  )
}

export default PaddockDetails;
