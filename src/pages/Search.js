import React, { useState } from 'react'
import ProviderCard from '../components/ProviderCard'
import CardColumns from 'react-bootstrap/CardColumns'
import { Container, Row, Col } from 'react-bootstrap'
import SearchForm from '../components/SearchForm'
import Sidebar from '../components/Sidebar'

const Search = ({ results, setResults }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <SearchForm setResults={setResults} />
          <CardColumns>
            {results &&
              results.map((result) => {
                return <ProviderCard data={result} key={result.number} />
              })}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
