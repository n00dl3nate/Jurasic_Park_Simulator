import React from 'react';

const PaddockForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const paddock = {
        "type": event.target.type.value,
        "name": event.target.name.value,
        "zone": event.target.zone.value
      }
      console.log(paddock,"ggggggggggg");
    props.handlePaddockPost(paddock)

  }
    const zoneOptions = props.zones.map((zone, index) => {
      return <option key={index} value={zone._links.self.href}>{zone.name}</option>
    })

      return (
        <div>
          <form onSubmit={handleSubmit}>

          <div class="col-10">
            <label for="type">Type</label>
          </div>
          <div class="col-90">
              <select name="type">
                <option value="Carnivore">Carnivore</option>
                <option value="Herbivore">Herbivore</option>
              </select>
            </div>

            <div class="col-10">
              <label for="name">Name</label>
            </div>
            <div class="col-90">
              <input type="text" placeholder="Name" name="name"/>
            </div>

            <div class="col-10">
              <label for="name">Zone</label>
            </div>

            <div class="col-90">
            <select name="zone">
              {zoneOptions}
            </select>
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
    )
}

export default PaddockForm;
