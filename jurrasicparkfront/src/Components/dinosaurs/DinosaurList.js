import React from 'react';
import Dinosaur from './Dinosaur.js';


const DinosaurList = (props) => {
	const dinosaurs = props.dinosaurs.map((dinosaur) => {
		 	return (
				<>
				<Dinosaur paddock={dinosaur.paddock} dinosaur={dinosaur} handleDelete = {props.handleDelete} handleEdit={props.handleEdit} handleFeed={props.handleFeed}/>
				</>
		)
		})

	return (
		<>
		<ul>

			<table id="dinosaurs">


			<tr class="tableHeading">
				<td>Name</td>
				<td>Type</td>
				<td>Food</td>
				<td>Paddock</td>
				<td>Select</td>
				<td>Feed</td>
				<td>Remove</td>
			</tr>
	    {dinosaurs}
			</table>
		</ul>
		</>
	)
}
 export default DinosaurList;
