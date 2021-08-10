import React, { useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Search from './pages/Search'
import Home from './pages/Home'
import Provider from './pages/Provider'
import Header from './components/Header'
import Footer from './components/Footer'

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
