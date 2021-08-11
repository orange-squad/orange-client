import React from 'react'

function Star(props) {
  return (
    <svg
      width='10rem'
      fill='none'
      overflow='visible'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 300 100'
      {...props}
    >
      <path
        d='M0 0h100v100h-100v-100m91 42a6 6 90 00-4-10l-22-1a1 1 90 01-1 0l-8-21a6 6 90 00-11 0l-8 21a1 1 90 01-1 1l-22 1a6 6 90 00-4 10l18 14a1 1 90 010 1l-6 22a6 6 90 008 6l19-13a1 1 90 011 0l19 13a6 6 90 006 0a6 6 90 002-6l-6-22a1 1 90 010-1z'
        fill='gold'
      />
    </svg>
  )
}

export default Star
