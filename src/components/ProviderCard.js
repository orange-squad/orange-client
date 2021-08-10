import React from 'react'
import Card from 'react-bootstrap/Card'

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
    <Card style={{ width: '30rem' }}>
      <Card.Header>
        <Card.Title>
          {titleCase(first_name)} {titleCase(last_name)} {credential}
        </Card.Title>
        {data.taxonomies.map((taxonomy) => {
          return (
            <Card.Subtitle key={taxonomy.code}>{taxonomy.desc}</Card.Subtitle>
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
  )
}

export default ProviderCard
