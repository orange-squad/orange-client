import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import logo from '../assets/orange-wellness-logo.png'
import HelpButton from '../shared/HelpButton'

export default function Header() {
  return (
    <Navbar bg='primary' variant='dark' expand={'lg'}>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Brand as={NavLink} to='/'>
          <img src={logo} alt='Orange Wellness Logo' className='nav-logo' />
        </Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='#'>BLOG</Nav.Link>
            <Nav.Link href='#'>ABOUT</Nav.Link>
            <Nav.Link href='#'>FOR THERAPISTS</Nav.Link>
            <HelpButton className='align-self-flex-end' />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
