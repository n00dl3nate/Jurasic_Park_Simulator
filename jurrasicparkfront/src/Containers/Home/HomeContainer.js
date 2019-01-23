import React, {Component} from 'react';
import Request from '../../helpers/request.js';


class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaurs: [],
                  paddocks: [],
                  visitors: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/dinosaurs').then((data) => {
      this.setState({dinosaurs: data._embedded.dinosaurs})
    })
    request.get('/paddocks').then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
    request.get('/dinosaurs').then((data) => {
      this.setState({visitors: data._embedded.visitors})
    })
  }


  render(){
    return (
      <>
      <h1 class="heading">Welcome to Jurassic Park</h1>
      <div class="grid-container">

        <div class="grid-item">
         <form action={"http://localhost:3000/dinosaurs"}><input type="submit" value="View Dinosaurs" class='Home'/> </form>
        </div>

        <div class="grid-item">
         <form action={"http://localhost:3000/paddocks"}><input type="submit" value="View Paddocks" class='Home'/> </form>
        </div>

        <div class="grid-item">
         <form action={"http://localhost:3000/visitors"}><input type="submit" value="View Visitors" class='Home'/> </form>
        </div>

      </div>

         </>

    )
  }
}

export default HomeContainer;
