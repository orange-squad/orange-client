import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const ProviderCard = ({ data }) => {
  const { credential, name, gender } = data.basic

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Header>
        <Card.Title>
          {titleCase(name)} {credential}
        </Card.Title>
      </Card.Header>
      <ListGroup>
        {data.taxonomies.map((taxonomy) => {
          return (
            <ListGroup.Item key={taxonomy.code}>{taxonomy.desc}</ListGroup.Item>
          )
        })}
      </ListGroup>

      {data.addresses.map((address, index) => {
        const {
          address_purpose,
          address_1,
          address_2,
          city,
          state,
          postal_code,
          telephone_number,
        } = address
        return (
          <address key={index}>
            {address_purpose}:{address_1}
            {address_2}
            {city} {state} {postal_code}
            {telephone_number}
          </address>
        )
      })}
      <Card.Footer></Card.Footer>
    </Card>
  )
}

export default ProviderCard
