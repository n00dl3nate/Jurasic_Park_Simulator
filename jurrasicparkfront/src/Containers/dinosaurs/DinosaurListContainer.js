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

  componentDidMount(){
    let request = new Request()
    request.get('/dinosaurs').then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })
  }


  render(){
    console.log(this.state.dinosaurs)
    return (
     <DinosaurList dinosaurs = {this.state.dinosaurs} />
    )
  }
}

export default DinosaurListContainer;
