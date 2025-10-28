import { Link } from 'gatsby'
import React from 'react'
import "../styles/navbar.module.css"

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about">My Trips</Link>
        <Link to="/about" className='signin'>Sign In</Link>
        <Link to="/about" className='signup'>Sign Up</Link>
    </nav>
  )
}
