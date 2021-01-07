import axios from 'axios'

//const API_URL = 'http://localhost:8080'
const API_URL = 'https://jb-fooddeliver.herokuapp.com'

export function fetchProducts() {
  return axios.get(`${API_URL}/products`)
}