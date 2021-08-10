export async function getPlaceId(npiResults) {
  const searchResults = {}
  // turn the results array into an object with the provider's NPI number as the key
  npiResults.forEach(async function (provider) {
    searchResults[provider.number] = provider

    // fetch google place search data for each provider
    const responseData = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&inputtype=textquery&fields=place_id,rating,user_ratings_total&input=${provider.basic.first_name}%20${provider.basic.last_name}`
    )
    const response = await responseData.json()

    if (response.status === 'OK') {
      const { place_id, rating, user_ratings_total } = response.candidates[0]
      searchResults[provider.number].place_id = place_id
      searchResults[provider.number].rating = rating
      searchResults[provider.number].user_ratings_total = user_ratings_total
    }
  })
  return searchResults
}
