import React, {Component} from 'react';

import Request from '../../helpers/request.js';
import ZoneList from '../../Components/zones/ZoneList.js'

class ZoneListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      zones: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/zones').then((data) => {
      this.setState({zones: data._embedded.zones})
    })
  }


  render(){
    console.log(this.state.zones,":::::::")
    // return ( <h1> hi</h1>)
    return (
     <ZoneList zones = {this.state.zones} />
    )
  }
}

export default ZoneListContainer;
