import React, { useState } from 'react'
import { signIn } from '../api/auth'

const SignIn = ({ setUser, createAlert }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) =>
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn(credentials)
      .then((res) => {
        setUser(res.data.user)
        createAlert({
          message: 'Signed in successfully! Welcome ',
          variant: 'success',
        })
      })

      .catch((error) => {
        setCredentials({ email: '', password: '' })
        createAlert({
          message: 'Could not sign in with error:' + error.message,
          variant: 'danger',
        })
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            name='email'
            onChange={handleChange}
            value={credentials.email}
            type='email'
            placeholder='enter email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            name='password'
            onChange={handleChange}
            value={credentials.password}
            type='password'
            placeholder='enter password'
          />
        </div>
        <div className='buttons'>
          <button type='submit'>Sign In!</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
