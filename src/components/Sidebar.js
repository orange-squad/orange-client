import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import FilterButton from './FilterButton'

const FILTER_MAP = {
  All: () => true,
  Female: (provider) => provider.basic.gender === 'F',
  Male: (provider) => provider.basic.gender === 'M',
  Ratings: (provider) => provider?.rating > 0,
  Medicaid: (provider) =>
    provider.identifiers.find((identifier) => identifier.desc === 'MEDICAID'),
  Aetna: (provider) =>
    provider.identifiers.find((identifier) => identifier.issuer === 'AETNA'),
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function Sidebar({ results, setDisplayedResults }) {
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    setDisplayedResults(Object.values(results).filter(FILTER_MAP[filter]))
  }, [results, filter, setDisplayedResults])

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  return (
    <Container>
      <h2>Filters</h2>
      {filterList}
    </Container>
  )
}

export default Sidebar
