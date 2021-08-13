import Button from 'react-bootstrap/Button'
export default function HelpButton() {
  return (
    <Button
      variant='outline-light'
      style={{ whiteSpace: 'nowrap' }}
      href='https://suicidepreventionlifeline.org/talk-to-someone-now/'
      target="_blank"
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        id='telephone'
        viewBox='0 0 16 16'
      >
        <path d='M 3.7 1.3 a 0.7 0.7 0 0 0 -1 -0.1 L 1.6 2.3 c -0.5 0.5 -0.7 1.2 -0.5 1.8 a 17.6 17.6 0 0 0 4.2 6.6 a 17.6 17.6 0 0 0 6.6 4.2 c 0.6 0.2 1.3 0 1.8 -0.5 l 1 -1 a 0.7 0.7 0 0 0 -0.1 -1 l -2.3 -1.8 a 0.7 0.7 0 0 0 -0.6 -0.1 l -2.2 0.5 a 1.7 1.7 0 0 1 -1.7 -0.5 L 5.5 8.1 a 1.7 1.7 0 0 1 -0.5 -1.7 l 0.5 -2.2 a 0.7 0.7 0 0 0 -0.1 -0.6 L 3.7 1.3 z M 1.9 0.5 a 1.7 1.7 0 0 1 2.6 0.2 L 6.3 3 c 0.3 0.4 0.4 1 0.3 1.5 l -0.5 2.2 a 0.7 0.7 0 0 0 0.2 0.6 l 2.5 2.5 a 0.7 0.7 0 0 0 0.6 0.2 l 2.2 -0.5 a 1.7 1.7 0 0 1 1.5 0.3 l 2.3 1.8 c 0.8 0.6 0.9 1.9 0.2 2.6 l -1 1 c -0.7 0.7 -1.8 1.1 -2.9 0.7 a 18.6 18.6 0 0 1 -7 -4.4 a 18.6 18.6 0 0 1 -4.4 -7 c -0.4 -1 0 -2.1 0.7 -2.9 L 1.9 0.5 z' />
      </svg>{' '}
      Need Help Now?
    </Button>
  )
}
