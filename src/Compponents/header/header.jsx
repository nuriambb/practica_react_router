import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home{' '}
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
            <NavLink to='/contact/contact' activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
