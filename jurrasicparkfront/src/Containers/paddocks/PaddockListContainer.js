import React, {Component} from 'react';

import Request from '../../helpers/request.js';
import PaddockList from '../../Components/paddocks/PaddockList.js'

class PaddockListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      paddocks: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/paddocks').then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }


  render(){
    console.log(this.state.paddocks,"@@@#@")
    // return ( <h1> hi</h1>)
    return (
     <PaddockList paddocks = {this.state.paddocks} />
    )
  }
}

export default PaddockListContainer;
