import React  from 'react';
import {Link} from 'react-router-dom';

const Dinosaur = (props) => {

  const onDelete = () => {
    props.handleDelete(props.dinosaur.id);
  }

  const feed = () => {
    const dinosaur = {
        "food": (props.dinosaur.food += 10),
      }
      const id = props.dinosaur.id
    props.handleFeed(dinosaur,id)
  }


  const onEdit = () => {
    console.log(props.dinosaur,"YEOOHHH");
    props.handleEdit(props.dinosaur.id)
  }

  console.log(props,"HDE")

  if(!props.dinosaur && !props.paddock){
    return null;
  }

  if(!props.dinosaur.paddock){
    return(
      <>

    <h1 class="heading">{props.dinosaur.name} Profile</h1>

      <h2>Type: {props.dinosaur.type}</h2>
      <h2>Gender: {props.dinosaur.gender}</h2>
      <h2>Food Level: {props.dinosaur.food}</h2>
      <h2>Diet: {props.dinosaur.diet}</h2>

    <hr></hr>
    </>
  )}

  console.log(props,"fffdfdfd")
  return (
    <>
      <tr class="rows">
        <td>{props.dinosaur.name}</td>
        <td>{props.dinosaur.type}</td>
        <td>{props.dinosaur.food}/100</td>
        <td>{props.dinosaur.paddock.name}</td>
        <td><form action={"http://localhost:3000/dinosaurs/" + props.dinosaur.id}><input type="submit" value="Select" class='button'/> </form></td>

        <td><button class='table' onClick={feed}>Feed</button> </td>
        <td><button class='table' onClick={onDelete}>Kill</button></td>
      </tr>
    </>
  )
}

export default Dinosaur;
