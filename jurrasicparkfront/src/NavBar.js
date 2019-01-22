import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {


  return (
    <header>
      <a href="http://localhost:3000/"><img  src="/images/Jurassic_Park.png" alt="Logo"/></a>

      <ul>
        <li className="navLink">
          <Link to="/dinosaurs">Dinosaurs</Link>
        </li>

        <li className="navLink">
          <Link to="/paddocks">Paddocks</Link>
        </li>

        <li className="navLink">
          <Link to="/visitors" >Visitors</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
