import React, { useState } from 'react'
import { signUp } from '../api/auth'

const SignUp = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) =>
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))

  const handleSubmit = (event) => {
    event.preventDefault()
    signUp(credentials)
      .then((res) => {
        console.log(res)
        setUser(res.data.user)
      })
      .catch((error) => {
        console.error(error)
        setCredentials({ email: '', password: '', passwordConfirmation: '' })
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <div>
          <label htmlFor='passwordConfirmation'>Password: </label>
          <input
            name='passwordConfirmation'
            onChange={handleChange}
            value={credentials.passwordConfirmation}
            type='password'
            placeholder='confirm password'
          />
        </div>
        <div className='buttons'>
          <button type='submit'>Sign Up!</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
