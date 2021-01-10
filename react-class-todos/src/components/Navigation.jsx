import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return(
        <div className="row is-center">
            <div className="col">
                <nav className="tabs is-center">
                    <NavLink exact activeClassName="selectedNav" to={'/'}>Home</NavLink>
                    <NavLink exact activeClassName="selectedNav" to={'/about'}>About</NavLink>
                </nav>
            </div>
        </div>
    )
}