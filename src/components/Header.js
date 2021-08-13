import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import logo from '../assets/orange-wellness-logo.png'
import HelpButton from '../shared/HelpButton'

export default function Header() {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand={'lg'}
      style={{ whiteSpace: 'nowrap' }}
    >
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Brand as={NavLink} to='/'>
          <img
            src={logo}
            alt='Orange Wellness Logo'
            // className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='#'>FIND HELP</Nav.Link>
            <Nav.Link href='#'>BLOG</Nav.Link>
            <Nav.Link href='#'>ABOUT</Nav.Link>
            <Nav.Link href='#'>FOR THERAPISTS</Nav.Link>
            <HelpButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
