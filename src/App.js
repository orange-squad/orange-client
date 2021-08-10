import React, { useState } from 'react'
import Search from './pages/Search'
import Home from './pages/Home'
import Provider from './pages/Provider'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/search'>
          <Search />
        </Route>

        <Route path='/provider/:id'>
          <Provider />
        </Route>
      </Container>
      <Footer />
    </>
  )
}

export default App
