import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn'
import SignOut from './routes/SignOut'
import Alert from './components/Alert'
import Search from './routes/Search'

const App = () => {
  const [user, setUser] = useState(null)
  const [alerts, setAlerts] = useState([])

  const createAlert = ({ message, variant }) => {
    const id = uuid()
    setAlerts((prev) => [...prev, { message, variant, id }])
  }

  const removeAlert = ({ id }) => {
    setAlerts((prev) => {
      prev.filter((alert) => alert.id !== id)
    })
  }

  return (
    <div>
      <Search />
      {/* {alerts.map((alert) => (
        <Alert
          key={alert.id}
          message={alert.message}
          variant={alert.variant}
          id={alert.id}
          removeAlert={removeAlert}
        />
      ))} */}
    </div>
  )
}

export default App
