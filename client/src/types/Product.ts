import { Comment } from './Comment'

export interface ProductType {
  productRating: {
    voteCount: {
      five: number
      four: number
      three: number
      two: number
      one: number
    }
    rating: number
  }
  _id: string
  images: string[]
  title: string
  price: number
  parentCategory:
    | 'fruits'
    | 'vegetables'
    | 'coffee&tea'
    | 'diary&eggs'
    | 'meat'
    | 'honey'
    | 'flowers'
    | 'driedFruits'
  category:
    | 'Bananas'
    | 'Oranges'
    | 'Apples'
    | 'Mangoes'
    | 'Pinapples'
    | 'Strawberries'
    | 'Potatoes'
    | 'Onions'
    | 'Tomatoes'
    | 'Brinjals'
    | 'Cauliflower'
    | 'Spinach'
    | 'Carrots'
    | 'Tea'
    | 'Coffee'
    | 'Milk'
    | 'Butter'
    | 'Cheese'
    | 'Eggs'
    | 'Goat'
    | 'Sheep'
    | 'Chicken'
    | 'Honey'
    | 'Beewax'
    | 'Pollen'
    | 'Rose'
    | 'Orchids'
    | 'Sunflowers'
    | 'Lillies'
    | 'Tulips'
    | 'Dahlia'
    | 'Pistachios'
    | 'Apricot'
    | 'Dates'
    | 'Cashew'
    | 'Almonds'
  farmerID: string
  farmerName: string
  isVisible: boolean
}

export interface ProductDetailType {
  productRating: {
    voteCount: {
      five: number
      four: number
      three: number
      two: number
      one: number
    }
    rating: number
  }
  _id: string
  images: string[]
  title: string
  price: number
  parentCategory:
    | 'fruits'
    | 'vegetables'
    | 'coffee&tea'
    | 'diary&eggs'
    | 'meat'
    | 'honey'
    | 'flowers'
    | 'driedFruits'
  category:
    | 'Bananas'
    | 'Oranges'
    | 'Apples'
    | 'Mangoes'
    | 'Pinapples'
    | 'Strawberries'
    | 'Potatoes'
    | 'Onions'
    | 'Tomatoes'
    | 'Brinjals'
    | 'Cauliflower'
    | 'Spinach'
    | 'Carrots'
    | 'Tea'
    | 'Coffee'
    | 'Milk'
    | 'Butter'
    | 'Cheese'
    | 'Eggs'
    | 'Goat'
    | 'Sheep'
    | 'Chicken'
    | 'Honey'
    | 'Beewax'
    | 'Pollen'
    | 'Rose'
    | 'Orchids'
    | 'Sunflowers'
    | 'Lillies'
    | 'Tulips'
    | 'Dahlia'
    | 'Pistachios'
    | 'Apricot'
    | 'Dates'
    | 'Cashew'
    | 'Almonds'
  farmerID: string
  farmerName: string
  isVisible: boolean
  delivery: boolean
  organic: boolean
  transaction: boolean
  cashOnDelivery: boolean
  returnableChoice: boolean
  hasDiscount: boolean
  onSiteShopping: boolean
  comments: Comment[]
}

export interface ProductDetailForOrder {
  _id: string
  images: string[]
  title: string
  price: number
  quantity: number
  category:
    | 'Bananas'
    | 'Oranges'
    | 'Apples'
    | 'Mangoes'
    | 'Pinapples'
    | 'Strawberries'
    | 'Potatoes'
    | 'Onions'
    | 'Tomatoes'
    | 'Brinjals'
    | 'Cauliflower'
    | 'Spinach'
    | 'Carrots'
    | 'Tea'
    | 'Coffee'
    | 'Milk'
    | 'Butter'
    | 'Cheese'
    | 'Eggs'
    | 'Goat'
    | 'Sheep'
    | 'Chicken'
    | 'Honey'
    | 'Beewax'
    | 'Pollen'
    | 'Rose'
    | 'Orchids'
    | 'Sunflowers'
    | 'Lillies'
    | 'Tulips'
    | 'Dahlia'
    | 'Pistachios'
    | 'Apricot'
    | 'Dates'
    | 'Cashew'
    | 'Almonds'
  parentCategory:
    | 'fruits'
    | 'vegetables'
    | 'coffee&tea'
    | 'diary&eggs'
    | 'meat'
    | 'honey'
    | 'flowers'
    | 'driedFruits'
  farmerID: string
  farmerName: string
}
