import React from 'react'
import { signOut } from '../api/auth'

const SignOut = ({ user, setUser }) => {
  const handleSubmit = () => {
    signOut(user)
      // .finally(() => history.push('/'))
      .finally(() => setUser(null))
      .catch(console.error)
  }
  return (
    <div>
      <button onclick={handleSubmit}>Sign Out</button>
    </div>
  )
}

export default SignOut
