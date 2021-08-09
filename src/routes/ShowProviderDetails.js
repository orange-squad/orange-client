import React, { useState, useEffect } from 'react'

const ShowProviderDetails = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        `https://sleepy-earth-76653.herokuapp.com/?number=${number}&enumeration_type=${enumeration_type}&taxonomy_description=${taxonomy}&first_name=${first_name}&use_first_name_alias=${use_first_name_alias}&last_name=${last_name}&organization_name=${organization_name}&address_purpose=${address_purpose}&city=${city}&state=${state}&postal_code=${postal_code}&country_code=${country_code}&limit=${limit}&skip=${skip}&version=2.1&pretty=true`
      )
      const json = await response.json()
      await setResults(json.results)
    } catch {
      console.error()
    }
  }
  return <div></div>
}

export default ShowProviderDetails
