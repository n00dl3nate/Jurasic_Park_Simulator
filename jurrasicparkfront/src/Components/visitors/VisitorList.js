import React from 'react';
import Visitor from './Visitor.js';

const VisitorList = (props) => {
  console.log(props,"@@@@@")
	const visitors = props.visitors.map((visitor) => {
		 	return (
				<li key={visitor.id} className="component-item">
					<div className = "component">
				<Visitor visitor={visitor} zone={visitor.zone} />
			     </div>
			</li>
		)
		})

    const addVisitor = () => {
      props.addVisitor();
    }

	return (
    <>
    <h1>Visitors</h1>
    <button onClick={addVisitor}>Add Visitor</button>
		<ul className="component-list">
	    {visitors}
	  </ul>
    </>
	)
}
 export default VisitorList;
