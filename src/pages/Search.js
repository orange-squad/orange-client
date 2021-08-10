import React, { useState } from 'react'
import ProviderCard from '../components/ProviderCard'
import CardColumns from 'react-bootstrap/CardColumns'
import { Container } from 'react-bootstrap'
import SearchForm from '../components/SearchForm'

const Search = () => {
  const [searchResults, setSearchResults] = useState([])

  return (
    <Container>
      <SearchForm setSearchResults={setSearchResults} />
      <CardColumns>
        {searchResults &&
          searchResults.map((result) => {
            return <ProviderCard data={result} key={result.number} />
          })}
      </CardColumns>
    </Container>
  )
}

export default Search
