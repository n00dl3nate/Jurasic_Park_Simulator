import React, {Component} from 'react';

import Request from '../../helpers/request';
import DinosaurEditForm from '../../Components/dinosaurs/DinosaurEditForm.js'

class DinosaurEditContainer extends Component {
  constructor(props){
    super(props);
    this.state = {pirate: null,  paddocks: null};
    this.handleDinosaurEdit = this.handleDinosaurEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/paddocks").then((paddocks) => {
      this.setState({paddocks: paddocks._embedded.paddocks})
    });
    request.get("/dinosaurs/" + this.props.id + "?projection=embedPaddock").then((dinosaur) => {
      this.setState({dinosaur: dinosaur})
    });
  }

  handleDinosaurEdit(dinosaur){
    console.log(dinosaur,'WOOOOO')
    const request = new Request();
    request.patch('/dinosaurs/' + this.props.id, dinosaur).then(() => {
      window.location = '/dinosaurs/' + this.props.id
    })
  }

  render(){
    console.log(this.props.id)
    if(!this.state.paddocks || !this.state.dinosaur){
      return <h1>loading</h1>;
    }
    return <DinosaurEditForm paddocks = {this.state.paddocks} dinosaur={this.state.dinosaur} handleDinosaurEdit= {this.handleDinosaurEdit} />

  }
}

export default DinosaurEditContainer;
