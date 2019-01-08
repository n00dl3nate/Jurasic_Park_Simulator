import React, {Component} from 'react';
import Dinosaur from '../../Components/dinosaurs/Dinosaur.js';
import DinosaurDetails from '../../Components/dinosaurs/DinosaurDetails.js';

import Request from '../../helpers/request.js';

class DinosaurSingleContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaur: null}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/dinosaurs/' + this.props.id + '?projection=embedPaddock';
    request.get(url).then((data) => {
      this.setState({dinosaur: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/dinosaurs/' + id;
    request.delete(url).then(() => {
      window.location = '/dinosaurs'
    })
  }

  handleEdit(id){
    console.log(id,"yeoooooooo");
    window.location = '/dinosaurs/edit/' + id
  }

  handleFeed(dinosaur,id){
    console.log(dinosaur,"Your DIno Kid");
    console.log(this.props,"Your Propppppsss init");
    const request = new Request();
    request.patch('/dinosaurs/' + id, dinosaur).then(() => {
      window.location = '/dinosaurs/' + id
    })
  }


  render(){
    if(!this.state.dinosaur){
      return null;
    }

    return (
      <div className="component">
       <Dinosaur paddock = {this.state.dinosaur._embedded.paddock} dinosaur = {this.state.dinosaur} />
       <DinosaurDetails dinosaur = {this.state.dinosaur} handleDelete = {this.handleDelete} handleEdit={this.handleEdit} paddocks = {this.state.dinosaur._embedded.paddock} handleFeed = {this.handleFeed}/>
     </div>
    )

  }
}

export default DinosaurSingleContainer;
