import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return(
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
            <a className="navbar-brand" href="/">NexGen Calc</a>
        </div>

        <ul className="nav navbar-nav">
        <li>
          <NavLink to="/FlightPlan" 
            activeClassName="is-active">Flight Plan
          </NavLink>
        </li>
        <li>
          <NavLink to="/TOLDreview" 
            activeClassName="is-active">TOLD Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/TOLD-Card" 
            activeClassName="is-active">TOLD Card
          </NavLink>
        </li>            
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to="/Login" activeClassName="is-active">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
