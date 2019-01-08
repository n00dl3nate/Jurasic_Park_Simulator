import React from 'react';
import Zone from './Zone.js';


const ZoneList = (props) => {
  console.log(props,"UUUUUU")
	const zones = props.zones.map((zone) => {
		 	return (
				<li key={zone.id} className="component-item">
					<div className = "component">
				<Zone zone={zone}/>
			     </div>
			</li>
		)
		})
	return (
    <>
    <h1>ParkView</h1>
		<ul className="component-list">
	    {zones}
	  </ul>
    </>

	)
}
 export default ZoneList;
