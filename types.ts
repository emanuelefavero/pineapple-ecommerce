export interface IProduct {
  details: string
  image: any[]
  name: string
  price: number
  slug: {
    current: string
  }
  _createdAt: string
  _id: string
  _updatedAt: string

  category: {
    _ref: string
  }
}

// NOTE: this is the same as IProduct but with quantity
export interface ICartItem {
  details: string
  image: any[]
  name: string
  price: number
  slug: {
    current: string
  }
  _createdAt: string
  _id: string
  _updatedAt: string

  quantity: number
}

export interface IHeroBanner {
  image: any[]
  productName: string
  slug: {
    current: string
  }
  heroText: string
  buttonText: string
  description: string
  originalPrice: number
  discounted: boolean
  discountPrice: number
  discountPercentage: number
  discountTime: string
  _createdAt: string
  _id: string
  _updatedAt: string
}
