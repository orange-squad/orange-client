import React, { useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import FilterButton from './FilterButton'
const FILTER_MAP = {
  All: () => true,
  Female: (provider) => provider.basic.gender === 'F',
  Male: (provider) => provider.basic.gender === 'M',
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function Sidebar({ results, setDisplayedResults }) {
  const [filter, setFilter] = useState('All')
  useEffect(() => {
    setDisplayedResults(results.filter(FILTER_MAP[filter]))
  }, [results, filter, setDisplayedResults])
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))
  return <Container fluid>{filterList}</Container>
}

export default Sidebar
