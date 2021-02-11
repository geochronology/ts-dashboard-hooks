import React from 'react'
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">

        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/users'} className="nav-link">
              Users
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  )
}
