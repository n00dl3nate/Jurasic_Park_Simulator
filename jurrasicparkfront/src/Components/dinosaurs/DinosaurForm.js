import React from 'react';

const DinosaurForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    console.log(event.target.name.value,"@@@@@@@@@@@@@@")
    const dinosaur = {
        "name": event.target.name.value,
        "type": event.target.type.value,
        "gender": event.target.gender.value,
        "diet": event.target.diet.value,
        "paddock": event.target.paddock.value
      }
    console.log(dinosaur)
    props.handleDinosaurPost(dinosaur)

  }
  console.log(props.paddocks,"Paddock");
    const paddockOptions = props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <select name="type">
              <option value="Tyrannosaurus Rex">Tyrannosaurus Rex</option>
              <option value="Triceratops">Triceratops</option>
              <option value="Velociraptor">Velociraptor</option>
              <option value="Stegosaurus">Stegosaurus</option>
              <option value="Spinosaurus">Spinosaurus</option>
              <option value="Brachiosaurus">Brachiosaurus</option>
            </select>
            <select name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <select name="diet">
              <option value="Carnivore">Carnivore</option>
              <option value="Herbivore">Herbivore</option>
              <option value="Omnivore">Omnivore</option>
            </select>


            <select name="paddock">
              {paddockOptions}
            </select>

            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default DinosaurForm;
