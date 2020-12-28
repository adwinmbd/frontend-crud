import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return(
      // <nav className="">
      //   <ul id="nav">
      //     <li>
      //       <NavLink exact activeClassName="selectedNav" to={'/'}>Home</NavLink>
      //     </li>
      //     <li>
      //       <NavLink exact activeClassName="selectedNav" to={'/about'}>About</NavLink>
      //     </li>
      //   </ul>
      // </nav>
      <div id="nav">
        <NavLink exact activeClassName="selectedNav" to={'/'}>Home</NavLink>
        <NavLink exact activeClassName="selectedNav" to={'/about'}>About</NavLink>
      </div>
    )
}