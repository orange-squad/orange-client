import { Card } from 'react-bootstrap'

export default function ArticleCard({ url, title, author, image, text }) {
  return (
    <Card as='a' href={url} target='_blank' className='article-card'>
      {image && <Card.Img variant='top' src={image} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}
