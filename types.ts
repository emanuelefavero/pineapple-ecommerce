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
