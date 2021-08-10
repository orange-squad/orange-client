import React from 'react'
import Card from 'react-bootstrap/Card'
import { Route, Link } from 'react-router-dom'
import Provider from '../pages/Provider'

const ProviderCard = ({ data }) => {
  const { credential, first_name, last_name, gender } = data.basic

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }
  const { address_1, address_2, city, state, postal_code, telephone_number } =
    data.addresses[0]

  return (
    <>
      <Route path='/provider/:id'>
        <Provider data={data} />
      </Route>
      <Card
        as={Link}
        to={{ pathname: `/provider/${data.number}`, data: data }}
        style={{ width: '30rem', textDecoration: 'none', color: 'black' }}
      >
        <Card.Header>
          <Card.Title>
            {titleCase(first_name)} {titleCase(last_name)} {credential}
          </Card.Title>
          {data.taxonomies.map((taxonomy, index) => {
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
          <Card.Text>NPI Number: {data.number}</Card.Text>
        </Card.Footer>
      </Card>
    </>
  )
}

export default ProviderCard
