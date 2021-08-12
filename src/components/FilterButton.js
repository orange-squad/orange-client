import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'

export default function FilterButton(props) {
  return (
    <Form.Check
      value={props.name}
      label={props.name}
      type='checkbox'
      checked={props.isPressed}
      onChange={() => props.setFilter(props.name)}
    />
  )
}
