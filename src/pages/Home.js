import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import SearchForm from '../components/SearchForm'
import ArticleCard from '../components/ArticleCard'
import TeamCard from '../components/TeamCard'
import deepika from '../assets/deepika.jpeg'

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
          <Col lg>
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
          <Col lg>
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
          <Col lg>
            <ArticleCard
              title='Fighting the Stigma of Mental Illness Through Music'
              image='https://static01.nyt.com/images/2019/01/22/well/family/music-braunstein/music-braunstein-jumbo.jpg?quality=90&auto=webp'
              text='An orchestra in which musicians are dealing with mental health
            issues is working to harness the healing power of music.'
              url='https://www.nytimes.com/2019/01/29/well/mind/fighting-the-stigma-of-mental-illness-through-music.html'
              author='The New York Times'
            />
          </Col>
          <Col lg>
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
          <Col lg='3'>
            <h2>News</h2>
            <ArticleCard
              title='How Do I Know if I Have Adult A.D.H.D.?'
              image='https://static01.nyt.com/images/2021/08/10/well/06ASKWELL-ADHD1/06ASKWELL-ADHD1-jumbo.jpg?quality=90&auto=webp'
              text='The signs and symptoms that you might need an evaluation.'
              url='https://www.nytimes.com/2021/08/06/well/mind/adult-adhd.html'
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
            <ArticleCard
              title='Build Mental Endurance Like a Pro'
              image='https://static01.nyt.com/images/2020/11/08/multimedia/08ah-athlete-advice01/merlin_179520366_fb5c57ec-212d-4197-bec4-c034c4c9b04f-jumbo.jpg?quality=90&auto=webp'
              text='Athletes who have endured the most grueling tests have a lot to tell us about how to thrive in the pandemic.'
              url='https://www.nytimes.com/2020/11/07/well/mind/athletes-pandemic-advice.html'
              author='The New York Times'
            />
          </Col>
          <Col lg='3'>
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
            <TeamCard
              name='Romani Poole'
              image='https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-7.jpg'
            />
            <TeamCard name='Deepika Mohanty' image={deepika} />
            <TeamCard
              name='Katherine Gomez'
              image='https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-7.jpg'
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
