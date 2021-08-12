import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { titleCase } from '../helpers/textFormatting'

const ProviderCard = ({ data }) => {
  const { credential, first_name, last_name } = data.basic

  // set address as the primary location
  const { address_1, address_2, city, state, postal_code, telephone_number } =
    data.addresses[0]
  const { rating, user_ratings_total } = data

  return (
    <Card
      as={Link}
      to={{ pathname: `/provider/${data.number}` }}
      style={{
        width: '18rem',
        textDecoration: 'none',
        color: 'black',
      }}
      className='mb-2'
    >
      <Card.Header>
        <Card.Title>
          {titleCase(first_name)} {titleCase(last_name)} {credential}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Types of Services: </Card.Subtitle>
        <ul>
          {data.taxonomies.map((taxonomy, index) => (
            <li key={taxonomy.code + index}>{taxonomy.desc}</li>
          ))}
        </ul>
        <Card.Subtitle>Address: </Card.Subtitle>
        <address>
          {address_1}
          <Card.Text>{address_2}</Card.Text>
          <Card.Text>
            {city} {state} {postal_code}
          </Card.Text>
          <Card.Text>{telephone_number}</Card.Text>
        </address>
        {user_ratings_total > 0 && (
          <>
            <Card.Subtitle>Reviews:</Card.Subtitle>
            <Card.Text>
              {rating}/5 from {user_ratings_total} reviews
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProviderCard
