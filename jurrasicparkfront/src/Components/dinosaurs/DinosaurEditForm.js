import React, {Component} from 'react';

class DinosaursEditForm extends Component {
  constructor(props){
    console.log(props,"GGGGGGGGG");
    super(props);
    this.state = {
      name: props.dinosaur.name,
      type: props.dinosaur.type,
      gender: props.dinosaur.gender,
      diet: props.dinosaur.diet,
      paddock: props.dinosaur._embedded.paddock._links.self.href.replace("{?projection}", "")
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props) {
  }

 handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    const dinosaur = {
        "name": event.target.name.value,
        "type": this.state.type,
        "gender": this.state.gender,
        "diet": this.state.diet,
        "paddock": event.target.paddock.value
      }
    this.props.handleDinosaurEdit(dinosaur)
  }


render(){
     const paddockOptions = this.props.paddocks.map((paddock, index) => {
       if(paddock.type === this.state.diet){
        return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
      }
    })

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
      <div class="col-10">
        <label for="name">Name</label>
      </div>
      <div class="col-90">
        <input type="text" value={this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
      </div>

      <div class="col-10">
        <label for="paddock">Paddock</label>
      </div>
      <div class="col-90">
        <select name="paddock" onChange={e => this.setState({ paddock: e.target.value })}>
          {paddockOptions}
        </select>
      </div>

        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

  export default DinosaursEditForm;
