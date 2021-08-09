import React, { useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [taxonomy, setTaxonomy] = useState('')

  const [results, setResults] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('I am doing a thing')
    const response = await axios({
      method: 'GET',
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
      // mode: 'no-cors',
      url: `https://npiregistry.cms.hhs.gov/api/?number=&taxonomy_description=${taxonomy}&city=${city}&state=${state}&limit=10&pretty=on&version=2.1`,
    })

    // const response = await fetch(
    //   `https://npiregistry.cms.hhs.gov/api/?number=&taxonomy_description=${taxonomy}&city=${city}&state=${state}&limit=10&pretty=on&version=2.1`,
    //   {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   }
    // )
    await console.log(response)
  }

  return (
    <div>
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
          placeholder='Enter Taxonomy Description'
        />

        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search
