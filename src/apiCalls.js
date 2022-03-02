const fetchYears = () => {
  return fetch('https://phish.in/api/v1/years.json?include_show_counts=true', {
      headers: {
        'Accept': 'application/json', 
        'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
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

const fetchYearData = year => {
  return fetch(`https://phish.in/api/v1/years/${year}.json`, {
    headers: {
      'Accept': 'application/json', 
      'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
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

const fetchShowData = id => {
  return fetch(`https://phish.in/api/v1/shows/${id}.json`, {
    headers: {
      'Accept': 'application/json', 
      'Authorization': 'Bearer a2079c6b7e26152391f7dca8b63851357fa5d24e23ce7a263fd37bece859dd215d1e1fd8effedda6ca91bcff64e2f797'
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

export { fetchYears, fetchYearData, fetchShowData }