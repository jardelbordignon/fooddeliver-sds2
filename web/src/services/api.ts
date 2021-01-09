import axios from 'axios'

//const API_URL = 'http://localhost:8080'
const API_URL = 'https://jb-fooddeliver.herokuapp.com'
const mapboxToken = ''

export function fetchProducts() {
  return axios.get(`${API_URL}/products`)
}

export function fetchLocalMapBpx(local: string) {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}