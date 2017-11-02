import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to ="/posts">Posts</NavLink>
    </div>
  );
};

export default NavBar;
