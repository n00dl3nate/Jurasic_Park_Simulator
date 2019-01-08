import React from 'react';
import Paddock from './Paddock.js';


const PaddockList = (props) => {
  console.log(props,"PaddockList")
	const paddocks = props.paddocks.map((paddock) => {
		 	return (
				<li key={paddock.id} className="component-item">
					<div className = "component">
				<Paddock paddock={paddock}/>
			     </div>
			</li>
		)
		})
	return (
    <>
    <h1>Paddocks</h1>
		<ul className="component-list">
	    {paddocks}
	  </ul>
    </>

	)
}
 export default PaddockList;
