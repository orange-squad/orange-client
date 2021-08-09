import React, { useState } from 'react'
import ProviderCard from '../components/ProviderCard'
import CardColumns from 'react-bootstrap/CardColumns'
import { Container } from 'react-bootstrap'

const Search = () => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [taxonomy, setTaxonomy] = useState('')
  const number = ''
  const enumeration_type = 'NPI-1'
  const country_code = ''
  const postal_code = ''
  const address_purpose = ''
  const first_name = ''
  const last_name = ''
  const organization_name = ''
  const limit = 10
  const skip = 0
  const use_first_name_alias = true

  const [results, setResults] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        `https://sleepy-earth-76653.herokuapp.com/?number=${number}&enumeration_type=${enumeration_type}&taxonomy_description=${taxonomy}&first_name=${first_name}&use_first_name_alias=${use_first_name_alias}&last_name=${last_name}&organization_name=${organization_name}&address_purpose=${address_purpose}&city=${city}&state=${state}&postal_code=${postal_code}&country_code=${country_code}&limit=${limit}&skip=${skip}&version=2.1&pretty=true`
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
        {results.map((result) => {
          return <ProviderCard data={result} key={result.number} />
        })}
      </CardColumns>
    </Container>
  )
}

export default Search
