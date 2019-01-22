import React from 'react';
import Visitor from './Visitor.js';

const VisitorList = (props) => {
  console.log(props,"@@@@@")
	const visitors = props.visitors.map((visitor) => {
		 	return (
				<Visitor visitor={visitor} zone={visitor.zone} handleDelete={props.handleDelete}  />)
		})

    const addVisitor = () => {
      props.addVisitor();
    }




	return (
    <>
    <ul>
    <h1 class = "heading">Visitors</h1>
    <button onClick={addVisitor}>Add Visitor</button>

    <table id="dinosaurs">
      <tr class="tableHeading">
        <td>Name</td>
        <td>Age</td>
        <td>Money</td>
        <td>Remove</td>
      </tr>
	    {visitors}
      </table>
      </ul>
    </>
	)
}
 export default VisitorList;
