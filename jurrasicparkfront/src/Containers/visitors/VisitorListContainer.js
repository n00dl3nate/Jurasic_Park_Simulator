import React, {Component} from 'react';

import Request from '../../helpers/request.js';
import VisitorList from '../../Components/visitors/VisitorList.js'

class VisitorListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      visitors: [],
      newVisitor: null
    }
    this.handleVisitorPost = this.handleVisitorPost.bind(this);
    this.addVisitor = this.addVisitor.bind(this);
    this.requestNewVisitor = this.requestNewVisitor.bind(this);
  }

  componentDidMount(){
    this.requestNewVisitor()
    let request = new Request()
    request.get('/visitors').then((data) => {
      this.setState({visitors: data._embedded.visitors})
    })
  }


  randomNumber(){
    return Math.floor((Math.random() * 100) + 1)
  }

  handleVisitorPost(visitor){
    const request = new Request();
    request.post('/visitors', visitor).then(() => {
      window.location = '/visitors'
    })
  }

  requestNewVisitor(){
    const url = "https://uinames.com/api/";
    const request = new XMLHttpRequest();
    request.open('GET',url);

    request.addEventListener("load", () => {
      if (request.status !==200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({newVisitor: data})
    })
    request.send();
  }


  addVisitor(){
    this.requestNewVisitor()
    const visitor = {
      "name": this.state.newVisitor.name + " " + this.state.newVisitor.surname,
      "age": this.randomNumber(),
      "money": this.randomNumber(),
      "zone": "http://localhost:3000/zones/1"
    }
    this.handleVisitorPost(visitor)
  }

  render(){
    return (
      <>
     <VisitorList addVisitor={this.addVisitor} visitors = {this.state.visitors} />
     </>
    )
  }
}

export default VisitorListContainer;
