const fetchData = path => {
  return fetch(`https://phish.in/api/v1/${path}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': process.env.REACT_APP_API_KEY
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong.')
      }
    })
}

console.log(typeof process.env.REACT_APP_API_KEY)

export { fetchData }