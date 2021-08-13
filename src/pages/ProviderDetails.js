import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import { getPlaceDetails } from '../helpers/fetchGoogleData'
import { titleCase } from './../helpers/textFormatting'

function ProviderDetails({ results }) {
  let { id } = useParams()

  let provider = results.find((provider) => provider.number === parseInt(id))

  // provider = getPlaceDetails(provider)

  const { credential, first_name, last_name, gender } = provider.basic

  // set address as the primary location
  const { address_1, address_2, city, state, postal_code, telephone_number } =
    provider.addresses[0]

  return (
    <Container>
      <Link to='/search'>Back to search</Link>
      <Card>
        <Card.Header>
          <Card.Title>
            {titleCase(first_name)} {titleCase(last_name)} {credential}
          </Card.Title>
          {provider.taxonomies.map((taxonomy, index) => {
            return (
              <Card.Subtitle key={taxonomy.code + index}>
                {taxonomy.desc}
              </Card.Subtitle>
            )
          })}
        </Card.Header>

        <address>
          {address_1}
          {address_2}
          {city} {state} {postal_code}
          {telephone_number}
        </address>
        <Card.Footer>
          <Card.Text>NPI Number: {provider.number}</Card.Text>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default ProviderDetails
