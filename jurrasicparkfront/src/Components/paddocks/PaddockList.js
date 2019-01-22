import React from 'react';
import Paddock from './Paddock.js';


const PaddockList = (props) => {
  console.log(props,"PaddockList")
	const paddocks = props.paddocks.map((paddock) => {
		 	return (
        <>
				<Paddock paddock={paddock} handleDelete = {props.handleDelete} handleEdit={props.handleEdit}/>
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
        <td>dinosaurs</td>
        <td>Select</td>
				<td>Remove</td>
      </tr>
	    {paddocks}
    </table>
    </ul>
    </>

	)
}
 export default PaddockList;
