import React from 'react';
import Dinosaur from './Dinosaur.js';


const DinosaurList = (props) => {
	const dinosaurs = props.dinosaurs.map((dinosaur) => {
		 	return (
				<li key={dinosaur.id} className="component-item">
					<div className = "component">
				<Dinosaur paddock={dinosaur.paddock} dinosaur={dinosaur} />
			     </div>
			</li>
		)
		})

	return (
		<>
		<h1>Dinosaurs</h1>
		<ul className="component-list">
	    {dinosaurs}
	  </ul>
		</>
	)
}
 export default DinosaurList;
