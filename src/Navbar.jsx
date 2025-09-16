import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <NavLink to="/" className="navbar-brand fw-bold">
        CRUD App
      </NavLink>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active fw-bold text-warning' : '')
              }
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/userdata"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active fw-bold text-warning' : '')
              }
            >
              User Data
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
