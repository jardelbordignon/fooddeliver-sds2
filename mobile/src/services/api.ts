import axios from 'axios';

const API_URL = 'https://jb-fooddeliver.herokuapp.com'

export function fetchOrders() {
  return axios.get(`${API_URL}/orders`)
}

export function confirmDelivery(id: number) {
  return axios.put(`${API_URL}/orders/${id}/delivered`)
}
