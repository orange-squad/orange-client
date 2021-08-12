import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Button } from 'react-bootstrap'
import logo from "../assets/orange-wellness-logo.png"

export default function Header() {
  return (
    <Navbar bg='primary' variant='light'>
      <Navbar.Brand as={NavLink} to='/'>
        <img
          src={logo}
          alt="Orange Wellness Logo"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav.Link href="#" style={{color:"white"}}>FIND HELP</Nav.Link>
      <Nav.Link href="#" style={{color:"white"}}>BLOG</Nav.Link>
      <Nav.Link href="#" style={{color:"white"}}>ABOUT</Nav.Link>
      <Nav.Link href="#" style={{color:"white"}}>FOR THERAPISTS</Nav.Link>
      <Nav className="justify-content-end">
        <Button variant='outline-light'>Need Help Now?</Button>
      </Nav>
    </Navbar>
  )
}
