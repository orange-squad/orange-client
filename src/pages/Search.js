import React, { useState, useEffect } from 'react'
import ProviderCard from '../components/ProviderCard'
import CardColumns from 'react-bootstrap/CardColumns'
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
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <SearchForm
            setResults={setResults}
            loading={loading}
            setLoading={setLoading}
          />

          <CardColumns>
            {displayedResults &&
              displayedResults.map((provider) => {
                return <ProviderCard data={provider} key={provider.number} />
              })}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
