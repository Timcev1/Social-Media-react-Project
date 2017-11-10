import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/home" activeStyle={{fontWeight: 'bold', color: 'blue'}}> Home </NavLink>
      <NavLink exact to ="/posts" activeStyle={{fontWeight: 'bold', color: 'blue'}}> Posts </NavLink>
      <NavLink exact to ="/users" activeStyle={{fontWeight: 'bold', color: 'blue'}}> Users </NavLink>
    </div>
  );
};

export default NavBar;
