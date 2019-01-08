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
    console.log(this.state,"this.State edit form");
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

 handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    const dinosaur = {
        "name": event.target.name.value,
        "type": event.target.type.value,
        "gender": event.target.gender.value,
        "diet": event.target.diet.value,
        "paddock": event.target.paddock.value
      }
      console.log(dinosaur,"DINOOOO")
    this.props.handleDinosaurEdit(dinosaur)
  }


render(){
     const paddockOptions = this.props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })



  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>

        <select name="type" selected={this.state.type} onChange={e => this.setState({ type: e.target.value })}>
          <option value="Tyrannosaurus Rex">Tyrannosaurus Rex</option>
          <option value="Triceratops">Triceratops</option>
          <option value="Velociraptor">Velociraptor</option>
          <option value="Stegosaurus">Stegosaurus</option>
          <option value="Spinosaurus">Spinosaurus</option>
          <option value="Brachiosaurus">Brachiosaurus</option>
        </select>


        <select name="gender" onChange={e => this.setState({ gender: e.target.value })}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select name="diet" onChange={e => this.setState({ diet: e.target.value })}>
          <option value="Carnivore">Carnivore</option>
          <option value="Herbivore">Herbivore</option>
          <option value="Omnivore">Omnivore</option>
        </select>

        <select name="paddock" onChange={e => this.setState({ paddock: e.target.value })}>
          {paddockOptions}
        </select>

        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

  export default DinosaursEditForm;
