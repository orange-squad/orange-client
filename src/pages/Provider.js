import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

function Provider({ results }) {
  let { id } = useParams()

  const provider = results.find((provider) => provider.number === parseInt(id))
  const { credential, first_name, last_name, gender } = provider.basic

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }
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

export default Provider
