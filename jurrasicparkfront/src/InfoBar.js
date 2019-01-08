import React, {Component} from 'react';
import Request from './helpers/request.js';
import {Link} from 'react-router-dom';

class InfoBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      visitors: [],
      zone: null,
      rampage: false
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/visitors').then((data) => {
      this.setState({visitors: data._embedded.visitors})
    })
    request.get('/zones/1').then((data) => {
      console.log(data,"HERES you data cunt")
      this.setState({zone: data})
      this.setState({rampage: data.rampage})
    })
  }

  render(){
    return (
        <>
            <h4>Visitor Total: {this.state.visitors.length}</h4>
            <h4>Rampaging: {this.state.rampage.toString()}</h4>
            </>
    )
  }
}

export default InfoBar;
