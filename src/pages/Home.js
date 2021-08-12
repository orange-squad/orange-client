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
      <Jumbotron style={{marginBottom: '20px'}} fluid>
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
            <Card.Img variant="top" src="https://thehill.com/sites/default/files/styles/thumb_small_article/public/bilessimone_080121getty.jpg?itok=W8rU_5ew" />
            <Card.Body>
              <Card.Title>How athletes taking a stand on mental health could help the nation's mothers
              </Card.Title>
              <Card.Text>
                We’ve witnessed tremendous courage in the face of mental health challenges on the part of elite athletes recently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Img variant="top" src="https://static01.nyt.com/images/2019/09/09/smarter-living/09sl-mentalillness/00sl-mentalillness-superJumbo.jpg?quality=90&auto=webp" />
            <Card.Body>
              <Card.Title>How to Manage Your Mental Illness at Work</Card.Title>
              <Card.Text>
              If you suffer from depression, anxiety, PTSD or another mental illness, here are some real-world tips to help you stay happy and healthy at work.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Img variant="top" src="https://static01.nyt.com/images/2019/01/22/well/family/music-braunstein/music-braunstein-jumbo.jpg?quality=90&auto=webp"/>
            <Card.Body>
              <Card.Title>Fighting the Stigma of Mental Illness Through Music</Card.Title>
              <Card.Text>
              An orchestra in which musicians are dealing with mental health issues is working to harness the healing power of music.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant='top' src={image} text-muted /> */}
            <Card.Img variant="top" src="https://static01.nyt.com/images/2020/02/10/well/00well-stigma/00well-stigma-jumbo.jpg?quality=90&auto=webp"/>
            <Card.Body>
              <Card.Title>The Extra Stigma of Mental Illness for African-Americans
              </Card.Title>
              <Card.Text>
              In my Black community, therapy was stigmatized as something for people who could not handle challenges.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>Articles</Row>
    </Container>
  )
}
