import React from 'react'
import { Container, Navbar, Nav, Col } from 'react-bootstrap'
import logo from '../assets/orange-wellness-logo.png'
import HelpButton from '../shared/HelpButton'

export default function Footer() {
  return (
    <Navbar sticky='bottom' bg='primary' variant='dark'>
      <Container className='align-content-flex-start'>
        <Col>
          <Navbar.Brand>
            <img src={logo} alt='Orange Wellness Logo' width='230px' />
          </Navbar.Brand>
          <Navbar.Text>© Orange Wellness 2021</Navbar.Text>
          <HelpButton />
        </Col>

        <Col as={Nav} className='flex-column'>
          <Navbar.Text>Privacy</Navbar.Text>
          <Nav.Link>Account Info</Nav.Link>
          <Nav.Link>Data Storage</Nav.Link>
          <Nav.Link>Location Services</Nav.Link>
        </Col>

        <Col as={Nav} className='flex-column'>
          <Navbar.Text>Terms</Navbar.Text>
          <Nav.Link>Pricing</Nav.Link>
          <Nav.Link>FAQ</Nav.Link>
        </Col>

        <Col as={Nav} className='flex-column'>
          <Navbar.Text>Accessibility</Navbar.Text>
          <Nav.Link>Support</Nav.Link>
        </Col>

        <Col as={Nav} className='flex-column'>
          <Navbar.Text>Company</Navbar.Text>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
          <Nav.Link>Careers</Nav.Link>
        </Col>
      </Container>
    </Navbar>
  )
}
