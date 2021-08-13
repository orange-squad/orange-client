import { Card } from 'react-bootstrap'

export default function ArticleCard({ url, title, author, image, text }) {
  return (
    <Card as='a' href={url} style={{ border: 'none' }}>
      <Card.Img variant='top' src={image} style={{ borderRadius: '8px' }} />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: '600', fontSize: '24px', lineHeight: '24px' }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <Card.Text style={{ fontSize: '20px', lineHeight: '20px' }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
