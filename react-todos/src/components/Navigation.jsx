import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return(
        <div className="tabs is-centered">
        <ul id="nav">
          <li>
            <NavLink to={'/'} activeClassName="selectedNav">Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} activeClassName="selectedNav">About</NavLink>
          </li>
        </ul>
      </div>
    )
}