
export interface Product {
  id: number
  name: string
  price: number
  description: string
  imageUri: string
}

export interface OrderLocationDTO {
  latitude: number
  longitude: number
  address: string
}

interface ProductId {
  id: number
}

export interface OrderPayload extends OrderLocationDTO {
  products: ProductId[]
}
