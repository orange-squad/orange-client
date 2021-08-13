import React from 'react'
import { Image, Card } from 'react-bootstrap'

function TeamCard({ image, name, url }) {
  return (
    <Card as='a' href={url} style={{ border: 'none', display: 'block' }}>
      <Image src={image} roundedCircle width='64' />
      {name}
    </Card>
  )
}

export default TeamCard
