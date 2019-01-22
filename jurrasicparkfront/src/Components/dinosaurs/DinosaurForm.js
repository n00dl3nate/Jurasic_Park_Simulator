import React from 'react';

const DinosaurForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();

    let diet = "Herbivore"
    console.log(event.target.name.value,"@@@@@@@@@@@@@@")
    if(event.target.type.value === "Tyrannosaurus Rex" || event.target.type.value === "Velociraptor" || event.target.type.value === "Spinosaurus" ){
      diet = "Carnivore";
    }
    const dinosaur = {
        "name": event.target.name.value,
        "type": event.target.type.value,
        "gender": event.target.gender.value,
        "diet": diet,
        "paddock": "http://localhost:8080/paddocks/1"
      }
    console.log(dinosaur)
    props.handleDinosaurPost(dinosaur)

  }
  console.log(props.paddocks,"Paddock");
    const paddockOptions = props.paddocks.map((paddock, index) => {
      console.log(paddock._links.self.href,"Href")
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <div class="col-10">
              <label for="name">Name</label>
            </div>
            <div class="col-90">
              <input type="text" placeholder="Name" name="name"/>
            </div>

            <div class="col-10">
              <label for="type">Breed</label>
            </div>
            <div class="col-90">
            <select name="type">
              <option value="Tyrannosaurus Rex">Tyrannosaurus Rex</option>
              <option value="Triceratops">Triceratops</option>
              <option value="Velociraptor">Velociraptor</option>
              <option value="Stegosaurus">Stegosaurus</option>
              <option value="Spinosaurus">Spinosaurus</option>
              <option value="Brachiosaurus">Brachiosaurus</option>
            </select>
            </div>

            <div class="col-10">
              <label for="type">Gender</label>
            </div>
            <div class="col-90">
            <select name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default DinosaurForm;
