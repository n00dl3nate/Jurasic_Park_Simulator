import React, {Component} from 'react';

import Request from '../../helpers/request';
import DinosaurForm from '../../Components/dinosaurs/DinosaurForm.js'

class DinosaurFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks: []};
    this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/paddocks").then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
    }

  handleDinosaurPost(dinosaur, paddockId){
    const request = new Request();
    request.post('/dinosaurs', dinosaur).then(() => {
      window.location = '/dinosaurs'
    })
  }

  render(){
    return <DinosaurForm
      paddocks ={this.state.paddocks}
      handleDinosaurPost={this.handleDinosaurPost}
      />
  }
}

export default DinosaurFormContainer;
