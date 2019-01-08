import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {


  return (
    <header>
      <img src="/images/Jurassic_Park.png" alt="Logo"/>

      <ul>
        <li className="navLink">
          <Link to="/dinosaurs">Dinosaurs</Link>
        </li>
        <li className="navLink">
          <Link to="/dinosaurs/new">New Dinosaurs</Link>
        </li>
        <li className="navLink">
          <Link to="/paddocks">Paddocks</Link>
        </li>
        <li className="navLink">
          <Link to="/paddocks/new">Paddock new</Link>
        </li>
        <li className="navLink">
          <Link to="/zones">ParkView</Link>
        </li>
        <li className="navLink">
          <Link to="/visitors" >Visitors</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
