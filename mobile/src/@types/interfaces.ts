
export interface Product {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  price: number
  description: string
  imageUri: string
}

export interface Order  {
  id: number
  createdAt: Date
  updatedAt: Date
  address: string
  latitude: number
  longitude: number
  status: number
  total: number
  products: Product[]
}
