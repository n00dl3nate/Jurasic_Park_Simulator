import React, {Component} from 'react';
import Paddock from '../../Components/paddocks/Paddock.js';
import PaddockDetails from '../../Components/paddocks/PaddockDetails.js';

import Request from '../../helpers/request.js';

class PaddockSingleContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      paddock: null
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit= this.handleEdit.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/paddocks/' + this.props.id + '?projection=embedZone';
    request.get(url).then((data) => {
      this.setState({paddock: data})
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
    if(!this.state.paddock){
      return null;
    }

    return (
      <>
        <Paddock paddock = {this.state.paddock} />
        <PaddockDetails paddock = {this.state.paddock} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
      </>
    )

  }
}

export default PaddockSingleContainer;
