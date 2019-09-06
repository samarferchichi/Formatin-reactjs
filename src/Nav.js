import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle = {
      color: 'white'
    };


    return (
      <nav>
       <div className=""><h3>Logo</h3></div>
        <ul className="nav-links">
          <Link style={navStyle} to="/recipes1">
            <li> Foods 1 </li>
          </Link>
          <Link style={navStyle} to="/recipes2">
            <li> Foods 2 </li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li> Fortnite </li>
          </Link>
          <Link style={navStyle} to="/meteo">
            <li> Meteo </li>
          </Link>
          <Link style={navStyle} to="/exemple">
            <li> Exemple </li>
          </Link>
          <Link style={navStyle} to="/convertisseur">
            <li> Convertisseur de devise </li>
          </Link>
        </ul>
      </nav>
    );
  }

      
export default Nav;
