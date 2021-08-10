import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Button } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand as={NavLink} to='/'>
        Therapist Finder
      </Navbar.Brand>
      <Nav>
        <Button variant='outline-light'>Need Help Now?</Button>
      </Nav>
    </Navbar>
  )
}
