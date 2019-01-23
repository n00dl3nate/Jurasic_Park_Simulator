import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {


  return (
    <header>
      <a href="http://localhost:3000/"><img  src="/images/Jurassic_Park.png" alt="Logo"/></a>

      <ul>
        <li className="navLink">
          <Link to="/dinosaurs"><h2 class="NavBar">Dinosaurs</h2></Link>
        </li>

        <li className="navLink">
          <Link to="/paddocks"><h2 class="NavBar">Paddocks</h2></Link>
        </li>

        <li className="navLink">
          <Link to="/visitors" ><h2 class="NavBar">Visitors</h2></Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
