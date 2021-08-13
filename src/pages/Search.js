import React, { useState, useEffect } from 'react'
import ProviderCard from '../components/ProviderCard'
import { Container, Row, Col } from 'react-bootstrap'
import SearchForm from '../components/SearchForm'
import Sidebar from '../components/Sidebar'

const Search = ({ results, setResults, loading, setLoading }) => {
  const [displayedResults, setDisplayedResults] = useState(results)

  useEffect(() => {
    setDisplayedResults(results)
  }, [results])

  return (
    <Container fluid>
      <Row>
        <Col lg='2'>
          <Sidebar
            setDisplayedResults={setDisplayedResults}
            displayedResults={displayedResults}
            results={results}
          />
        </Col>
        <Col lg={8}>
          <SearchForm
            setResults={setResults}
            loading={loading}
            setLoading={setLoading}
          />
          <div className='provider-grid'>
            {displayedResults &&
              displayedResults.map((provider) => {
                return <ProviderCard data={provider} key={provider.number} />
              })}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
