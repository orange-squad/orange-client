import React, { useState } from 'react'
import Search from './routes/Search'

const App = () => {
  // const [alerts, setAlerts] = useState([])

  // const createAlert = ({ message, variant }) => {
  //   const id = uuid()
  //   setAlerts((prev) => [...prev, { message, variant, id }])
  // }

  // const removeAlert = ({ id }) => {
  //   setAlerts((prev) => {
  //     prev.filter((alert) => alert.id !== id)
  //   })
  // }

  return (
    <div>
      <Search />
    </div>
  )
}

export default App
