import React, { useState } from 'react'
import ProviderCard from '../components/ProviderCard'
import CardColumns from 'react-bootstrap/CardColumns'
import { Container } from 'react-bootstrap'

const Search = () => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [taxonomy, setTaxonomy] = useState('')

  const [results, setResults] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        `https://npi-registry-proxy.herokuapp.com/?taxonomy_description=${taxonomy}&city=${city}&state=${state}`
      )
      const json = await response.json()
      await setResults(json.results)
    } catch {
      console.error()
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter City'
        />
        <input
          type='text'
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder='Enter State'
        />
        <input
          type='text'
          value={taxonomy}
          onChange={(e) => setTaxonomy(e.target.value)}
          placeholder='Enter Taxonomy'
        />

        <button type='submit'>Search</button>
      </form>
      <CardColumns>
        {results.map((result, index) => {
          return <ProviderCard data={result} key={index} />
        })}
      </CardColumns>
    </Container>
  )
}

export default Search
