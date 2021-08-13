import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import image from '../assets/image.svg'
import hero from '../assets/hero-image.jpeg'
import SearchForm from '../components/SearchForm'
import ArticleCard from '../components/ArticleCard'

export default function Home({ setResults, loading, setLoading }) {
  return (
    <>
      <Jumbotron fluid>
        <h2>Find a licensed therapist near you</h2>
        <SearchForm
          setResults={setResults}
          loading={loading}
          setLoading={setLoading}
        />
      </Jumbotron>

      <Container>
        <Row>
          <h2>Trending Articles</h2>
          <Col>
            <ArticleCard
              title='How Athletes Taking a Stand on Mental Health Could Help the
          Nation’s Mothers'
              image='https://thehill.com/sites/default/files/styles/thumb_small_article/public/bilessimone_080121getty.jpg?itok=W8rU_5ew'
              text='We’ve witnessed tremendous courage in the face of mental health
            challenges on the part of elite athletes recently.'
              url='https://thehill.com/blogs/congress-blog/healthcare/567478-how-athletes-taking-a-stand-on-mental-health-could-help-the?rl=1'
            />
          </Col>
          <Col>
            <ArticleCard
              title='How to Manage Your Mental Illness at Work'
              image='https://static01.nyt.com/images/2019/09/09/smarter-living/09sl-mentalillness/00sl-mentalillness-superJumbo.jpg?quality=90&auto=webp'
              text='If you suffer from depression, anxiety, PTSD or another mental
            illness, here are some real-world tips to help you stay happy
            and healthy at work.'
            />
          </Col>
          <Col>
            <ArticleCard
              title='Fighting the Stigma of Mental Illness Through Music'
              image='https://static01.nyt.com/images/2019/01/22/well/family/music-braunstein/music-braunstein-jumbo.jpg?quality=90&auto=webp'
              text='An orchestra in which musicians are dealing with mental health
            issues is working to harness the healing power of music.'
            />
          </Col>
          <Col>
            <ArticleCard
              title='The Extra Stigma of Mental Illness for African-Americans'
              image='https://static01.nyt.com/images/2020/02/10/well/00well-stigma/00well-stigma-jumbo.jpg?quality=90&auto=webp'
              text='In my Black community, therapy was stigmatized as something for
            people who could not handle challenges.'
            />
          </Col>
        </Row>
      </Container>

      <Row>
        <Col>Stuff</Col>
        <Col>Featured Article</Col>
        <Col>Top Therapists</Col>
      </Row>
    </>
  )
}
