import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Carousel,
  InputGroup,
  FormControl,
  Jumbotron,
} from 'react-bootstrap'
import image from '../assets/image.svg'
import hero from '../assets/hero-image.jpeg'
import SearchForm from '../components/SearchForm'

export default function Home({ setResults, loading, setLoading }) {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <SearchForm
          setResults={setResults}
          loading={loading}
          setLoading={setLoading}
        />
      </Jumbotron>
      <Row>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} thumbnail /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Header>Image!</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>I made a thing</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>Articles</Row>
    </Container>
  )
}
