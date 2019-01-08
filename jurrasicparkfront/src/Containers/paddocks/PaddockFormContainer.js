import React, {Component} from 'react';

import Request from '../../helpers/request';
import PaddockForm from '../../Components/paddocks/PaddockForm.js'

class PaddockFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {zones: []};
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/zones").then((data) => {
      this.setState({zones: data._embedded.zones})
    })
    }

  handlePaddockPost(dinosaur, paddockId){
    const request = new Request();
    request.post('/paddocks', dinosaur).then(() => {
      window.location = '/paddocks'
    })


  }

  render(){

    return <PaddockForm
      zones ={this.state.zones}
      handlePaddockPost={this.handlePaddockPost}

      />

  }
}

export default PaddockFormContainer;
