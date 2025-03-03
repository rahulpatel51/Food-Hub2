export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Restaurant {
  id: string
  name: string
  image?: string
  cuisine: string
  rating: number
  reviewCount: number
  deliveryTime: number
  location: string
  priceLevel: number
  isPromoted?: boolean
  description?: string
}

export interface Food {
  id: string
  name: string
  description: string
  price: number
  image?: string
  restaurant: string
  restaurantId: string
  discount: number
  categoryId: string
}

export interface CartItem extends Food {
  quantity: number
}

export interface MenuCategory {
  id: string
  name: string
  items: Food[]
}

export interface Order {
  id: string
  items: CartItem[]
  restaurant: Restaurant
  status: "pending" | "confirmed" | "preparing" | "out-for-delivery" | "delivered" | "cancelled"
  total: number
  date: Date
  estimatedDeliveryTime: number
}

