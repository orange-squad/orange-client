import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Switch>
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
          <Route path='/'>
            <Home
              setResults={setResults}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default App
