'use latest'

require('isomorphic-fetch')

const ACCESS_TOKEN = '__API_KEY__'
const api = 'https://api.openweathermap.org/data/2.5/forecast'
const units = 'metric' //or 'standard', or 'imperial'

module.exports = (event) => {
  const { zip } = event.data

  const endpoint = `${api}?zip=${zip}&units=${units}&appid=${ACCESS_TOKEN}`

  return fetch(endpoint)
    .then(response => response.json())
  	.then(data =>
      (data.cod == 200)
        ? {data: data}
        : {error: data}
    )
}
