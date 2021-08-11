import React, { useState } from 'react'
import {
  Container,
  InputGroup,
  Button,
  FormControl,
  Form,
  Spinner,
} from 'react-bootstrap'
import { useLocation, useHistory } from 'react-router-dom'

import { getPlaceId } from '../helpers/fetchGoogleData'

const SearchForm = ({ setResults, loading, setLoading }) => {
  // TODO: Add pagination?
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(200)

  // TODO: Pre-set search values?
  const [taxonomy, setTaxonomy] = useState('psych*')

  // Search only certain types of addresses: LOCATION, MAILING, PRIMARY, or SECONDARY
  const [addressType, setAddressType] = useState('LOCATION')
  const [city, setCity] = useState('')

  //! cannot be used as the only input
  const [USState, setUSState] = useState('')
  // can be used as the only input ONLY if the value is not `US`
  const [countryCode, setCountryCode] = useState('')

  // There is an implied trailing '*' wildcard and will auto-fill 5-digit zips to 9-digits
  const [postalCode, setPostalCode] = useState('')
  // 10-digit National Provider Identifier assigned to the provider
  const [npiNumber, setNpiNumber] = useState('')

  // NPI-1: Individual Providers, NPI-2: Organizational Providers
  const [providerType, setProviderType] = useState('NPI-1')

  //! only applies to organizational providers
  const [organizationName, setOrganizationName] = useState('')

  //! only applies to individual providers
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // When searching by Individual Providers, return providers with similar names
  const [searchAliases, setSearchAliases] = useState(true)

  let location = useLocation()
  let history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      // fetch care provider data from npi registry via proxy
      const response = await fetch(
        `https://sleepy-earth-76653.herokuapp.com/?number=${npiNumber}&enumeration_type=${providerType}&taxonomy_description=${taxonomy}&first_name=${firstName}&use_first_name_alias=${searchAliases}&last_name=${lastName}&organization_name=${organizationName}&address_purpose=${addressType}&city=${city}&state=${USState}&postal_code=${postalCode}&country_code=${countryCode}&limit=${limit}&skip=${skip}&version=2.1&pretty=true`
      )
      const json = await response.json()
      // const finalResults = await getPlaceId(json.results)
      // await setResults(Object.values(finalResults))
      await setResults(json.results)
    } catch (error) {
      console.error(error)
    }
    if (location.pathname !== '/search') history.push('/search')
    setLoading(false)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter City'
          />
          {loading ? (
            <Button variant='primary' disabled>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Loading...
            </Button>
          ) : (
            <Button type='submit'>Search</Button>
          )}
        </InputGroup>
      </Form>
    </Container>
  )
}

export default SearchForm
