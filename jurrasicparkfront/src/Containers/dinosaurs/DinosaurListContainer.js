import React, {Component} from 'react';

import Request from '../../helpers/request.js';
import DinosaurList from '../../Components/dinosaurs/DinosaurList.js'

class DinosaurListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dinosaurs: []
    }
  }

  handleFeed(dinosaur,id){
    console.log(dinosaur,"Your DIno Kid");
    console.log(this.props,"Your Propppppsss init");
    const request = new Request();
    request.patch('/dinosaurs/' + id, dinosaur).then(() => {
      window.location = window.location.href
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/dinosaurs/' + id;
    request.delete(url).then(() => {
      window.location = window.location.href
    })
  }

  handleEdit(id){
    window.location = '/dinosaurs/edit/' + id
  }

  componentDidMount(){
    let request = new Request()
    request.get('/dinosaurs').then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })
  }

  render(){

    if(this.props.pad === true){
      return (
        <>
        <h1 class = "heading">Dinosaurs</h1>
        <h3 class="SubHeadingH3">Total Number Of Dinosaurs:
         {this.state.dinosaurs.length}</h3>
         <div class="addButton">
         <form action={"http://localhost:3000/dinosaurs/new"}><input type="submit" value="Create New Dinosaur" class='buttonAdd'/> </form>
         </div>
       <DinosaurList dinosaurs = {this.state.dinosaurs}  handleDelete = {this.handleDelete} handleEdit={this.handleEdit} handleFeed = {this.handleFeed} pad = {false}/>
       </>
      )
    }


    return (
      <>
      <h1 class = "heading">Dinosaurs</h1>
      <h3 class="SubHeadingH3">Total Number Of Dinosaurs:
       {this.state.dinosaurs.length}</h3>
       <div class="addButton">
       <form action={"http://localhost:3000/dinosaurs/new"}><input type="submit" value="Create New Dinosaur" class='buttonAdd'/> </form>
       </div>
     <DinosaurList dinosaurs = {this.state.dinosaurs}  handleDelete = {this.handleDelete} handleEdit={this.handleEdit} handleFeed = {this.handleFeed} pad = {false}/>
     </>
    )
  }
}

export default DinosaurListContainer;
