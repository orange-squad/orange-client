import React, { useState, useEffect } from 'react'
import { Alert as BootstrapAlert } from 'react-bootstrap'

const Alert = ({ id, message, variant, removeAlert }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(setShow(false), 5000)
    return clearTimeout(timeoutId)
  }, [])

  if (!show) {
    setTimeout(() => {
      removeAlert(id)
    }, 300)
  }

  return (
    <BootstrapAlert
      dismissible
      show={show}
      variant={variant}
      onClose={() => setShow(false)}
    >
      <p className='alert-body'>{message}</p>
    </BootstrapAlert>
  )
}

export default Alert
