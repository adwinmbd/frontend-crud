import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return(
      <div className="columns is-centered">
        <div className="column is-5-tablet is-10-mobile">
          <div id="nav">
            <NavLink exact activeClassName="selectedNav" to={'/'}>Home</NavLink>
            <NavLink exact activeClassName="selectedNav" to={'/about'}>About</NavLink>
          </div>
        </div>
      </div>
    )
}