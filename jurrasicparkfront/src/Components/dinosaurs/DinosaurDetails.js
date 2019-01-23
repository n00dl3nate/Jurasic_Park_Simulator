import React  from 'react';
import {Link} from 'react-router-dom';

const DinosaurDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.dinosaur.id);
  }

  const feed = () => {
    if(props.dinosaur.food <= 100) {
      const food = (100 - props.dinosaur.food)
      const dinosaur = {
          "food": (props.dinosaur.food += food)
        }
        const id = props.dinosaur.id
      props.handleFeed(dinosaur,id)
    }
  }

  const onEdit = () => {
    props.handleEdit(props.dinosaur.id)
  }

  console.log(props.paddocks);
  if(!props.paddocks){
    return null;
  }



  return (
    <React.Fragment>
    <ul>
    </ul>
    <button onClick={onDelete}>Kill Dinosaur</button>
    <button onClick={onEdit}>Edit Dinosaur</button>
    <button onClick={feed}>FeedDinosaur</button>
    </React.Fragment>
  )
}

export default DinosaurDetails;
