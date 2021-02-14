import React from 'react'
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">

        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={'/'} exact className="nav-link">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/users'} className="nav-link">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/roles'} className="nav-link">
              Roles
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  )
}
