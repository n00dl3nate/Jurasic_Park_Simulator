import React  from 'react';
import {Link} from 'react-router-dom';

import PaddockList from '../paddocks/PaddockList.js'
import VisitorList from '../visitors/VisitorList.js'
const Paddock = (props) => {

  if(!props.zone && !props.zone.paddocks && !props.zone.paddocks){
    return null;
  }

  console.log(props)
  return (
    <>
      <ul>
      <li>Rampaging: {props.zone.rampage.toString()}</li>
      </ul>
      <PaddockList paddocks = {props.zone.paddocks}/>
      <VisitorList visitors = {props.zone.visitors}/>
      <hr></hr>
    </>
  )
}

export default Paddock;
