import React from 'react'
import { Container, Row, Col, Jumbotron, Media, Button } from 'react-bootstrap'
import SearchForm from '../components/SearchForm'
import ArticleCard from '../components/ArticleCard'
import TeamCard from '../components/TeamCard'

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
              author='The Hill'
            />
          </Col>
          <Col>
            <ArticleCard
              title='How to Manage Your Mental Illness at Work'
              image='https://static01.nyt.com/images/2019/09/09/smarter-living/09sl-mentalillness/00sl-mentalillness-superJumbo.jpg?quality=90&auto=webp'
              text='If you suffer from depression, anxiety, PTSD or another mental
            illness, here are some real-world tips to help you stay happy
            and healthy at work.'
              url='https://www.nytimes.com/2019/08/29/smarter-living/how-to-manage-mental-illness-at-work.html'
              author='The New York Times'
            />
          </Col>
          <Col>
            <ArticleCard
              title='Fighting the Stigma of Mental Illness Through Music'
              image='https://static01.nyt.com/images/2019/01/22/well/family/music-braunstein/music-braunstein-jumbo.jpg?quality=90&auto=webp'
              text='An orchestra in which musicians are dealing with mental health
            issues is working to harness the healing power of music.'
              url='https://www.nytimes.com/2019/01/29/well/mind/fighting-the-stigma-of-mental-illness-through-music.html'
              author='The New York Times'
            />
          </Col>
          <Col>
            <ArticleCard
              title='The Extra Stigma of Mental Illness for African-Americans'
              image='https://static01.nyt.com/images/2020/02/10/well/00well-stigma/00well-stigma-jumbo.jpg?quality=90&auto=webp'
              text='In my Black community, therapy was stigmatized as something for
            people who could not handle challenges.'
              url='https://www.nytimes.com/2020/08/25/well/mind/black-mental-health.html'
              author='The New York Times'
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>News</h2>
            <ArticleCard
              title='Fighting the Stigma of Mental Illness Through Music'
              image='https://static01.nyt.com/images/2019/01/22/well/family/music-braunstein/music-braunstein-jumbo.jpg?quality=90&auto=webp'
              text='An orchestra in which musicians are dealing with mental health
            issues is working to harness the healing power of music.'
              url='https://www.nytimes.com/2019/01/29/well/mind/fighting-the-stigma-of-mental-illness-through-music.html'
              author='The New York Times'
            />
            <ArticleCard
              title='The Extra Stigma of Mental Illness for African-Americans'
              text='In my Black community, therapy was stigmatized as something for
            people who could not handle challenges.'
              url='https://www.nytimes.com/2020/08/25/well/mind/black-mental-health.html'
              author='The New York Times'
            />
            <ArticleCard
              title='How to Manage Your Mental Illness at Work'
              text='If you suffer from depression, anxiety, PTSD or another mental
            illness, here are some real-world tips to help you stay happy
            and healthy at work.'
              url='https://www.nytimes.com/2019/08/29/smarter-living/how-to-manage-mental-illness-at-work.html'
              author='The New York Times'
            />
          </Col>
          <Col>
            <h2>Featured Article</h2>
          </Col>
          <Col>
            <h2>The Team</h2>
            <h3>SEI</h3>
            <TeamCard
              name='Brady Gerber'
              image='https://avatars.githubusercontent.com/u/65798147?v=4'
              url='https://github.com/bg-write'
            />
            <TeamCard
              name='Mike Van Le'
              image='https://avatars.githubusercontent.com/u/81662646?v=4'
              url='https://github.com/miketocoding'
            />
            <TeamCard
              name='Amalia Advincula-Roye'
              image='https://avatars.githubusercontent.com/u/80241026?v=4'
              url='https://github.com/amaliaroye'
            />
            <h3>UX/UI</h3>
            <TeamCard name='Romani Poole' />
            <TeamCard name='Deepika Mohanty' />
            <TeamCard name='Katherine Gomez' />
          </Col>
        </Row>
      </Container>
    </>
  )
}
