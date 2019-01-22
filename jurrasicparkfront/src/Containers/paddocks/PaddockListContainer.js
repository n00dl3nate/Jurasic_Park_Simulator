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

  handleDelete(id){

    const request = new Request();
    const url = '/paddocks/' + id;
    request.delete(url).then(() => {
      window.location = '/paddocks'
    })
  }

  handleEdit(id){
    window.location = '/paddocks/edit/' + id
  }

  render(){
    return (
      <>
      <h1 class="heading">Paddocks</h1>
      <div class="addButton">
      <form action={"http://localhost:3000/paddocks/new"}><input type="submit" value="Build New Paddock" class='buttonAdd'/></form>
      </div>
     <PaddockList paddocks = {this.state.paddocks} handleDelete = {this.handleDelete} handleEdit={this.handleEdit} />
     </>
    )
  }
}

export default PaddockListContainer;
