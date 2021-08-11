import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Search from './pages/Search'
import Home from './pages/Home'
import Provider from './pages/Provider'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Header />
      <Container>
        <Route exact path='/'>
          <Home
            setResults={setResults}
            loading={loading}
            setLoading={setLoading}
          />
        </Route>

        <Route path='/search'>
          <Search
            results={results}
            setResults={setResults}
            loading={loading}
            setLoading={setLoading}
          />
        </Route>

        <Route path='/provider/:id'>
          <Provider results={results} />
        </Route>
      </Container>
      <Footer />
    </>
  )
}

export default App
