import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from '../assets/orange-wellness-logo.png'

function Footer() {
  return (
    <Navbar fixed='bottom' bg='primary'>
      <Container>
        <img
          src={logo}
          alt="Orange Wellness Logo"
          className="d-inline-block align-top"
          width="100px"
        />
      </Container>
    </Navbar>
  )
}

export default Footer
