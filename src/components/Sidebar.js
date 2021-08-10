import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

function Sidebar() {
  return (
    <Container fluid>
      <Form>
        Filter by:
        <Form.Group>
          <Form.Text>Gender</Form.Text>
          <Form.Check type='checkbox' label='Female' />
          <Form.Check type='checkbox' label='Male' />
        </Form.Group>
        <Form.Group>
          <Form.Text>Specialties</Form.Text>
          <Form.Check type='checkbox' label='Psychiatrist' />
          <Form.Check type='checkbox' label='Psychologist' />
          <Form.Check type='checkbox' label='Therapist' />
          <Form.Check type='checkbox' label='Counselor' />
          <Form.Check type='checkbox' label='Unicorn' />
        </Form.Group>
        <Form.Group>
          <Form.Text>Insurance</Form.Text>
          <Form.Check type='checkbox' label='Blue Cross Blue Shield' />
          <Form.Check type='checkbox' label='Emblem Health' />
          <Form.Check type='checkbox' label='United Healthcare' />
          <Form.Check type='checkbox' label='Medicare' />
          <Form.Check type='checkbox' label='Medicaid' />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Sidebar
