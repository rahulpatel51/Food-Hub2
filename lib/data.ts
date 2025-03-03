import type { Restaurant, Food, MenuCategory } from "./types"

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Burger Palace",
    image: "/placeholder.svg?height=300&width=400&text=Burger+Palace",
    cuisine: "American",
    rating: 4.7,
    reviewCount: 243,
    deliveryTime: 25,
    location: "123 Main St, New York, NY",
    priceLevel: 30,
    isPromoted: true,
    description:
      "Home of the juiciest burgers in town. Our patties are made from 100% Angus beef and grilled to perfection.",
  },
  {
    id: "r2",
    name: "Pizza Heaven",
    image: "/placeholder.svg?height=300&width=400&text=Pizza+Heaven",
    cuisine: "Italian",
    rating: 4.5,
    reviewCount: 187,
    deliveryTime: 30,
    location: "456 Elm St, New York, NY",
    priceLevel: 25,
    description:
      "Authentic Italian pizzas baked in a wood-fired oven. Our dough is made fresh daily and topped with the finest ingredients.",
  },
  {
    id: "r3",
    name: "Sushi Express",
    image: "/placeholder.svg?height=300&width=400&text=Sushi+Express",
    cuisine: "Japanese",
    rating: 4.8,
    reviewCount: 312,
    deliveryTime: 20,
    location: "789 Oak St, New York, NY",
    priceLevel: 45,
    isPromoted: true,
    description:
      "Fresh sushi and sashimi prepared by master chefs. We source our fish daily from the best markets to ensure quality and freshness.",
  },
  {
    id: "r4",
    name: "Taco Fiesta",
    image: "/placeholder.svg?height=300&width=400&text=Taco+Fiesta",
    cuisine: "Mexican",
    rating: 4.3,
    reviewCount: 156,
    deliveryTime: 15,
    location: "321 Pine St, New York, NY",
    priceLevel: 20,
    description:
      "Authentic Mexican street food with a modern twist. Our tacos are made with handmade tortillas and filled with flavorful meats and fresh toppings.",
  },
  {
    id: "r5",
    name: "Curry House",
    image: "/placeholder.svg?height=300&width=400&text=Curry+House",
    cuisine: "Indian",
    rating: 4.6,
    reviewCount: 201,
    deliveryTime: 35,
    location: "654 Maple St, New York, NY",
    priceLevel: 35,
    description:
      "Aromatic Indian curries and tandoori specialties. Our spices are imported directly from India to create authentic and flavorful dishes.",
  },
  {
    id: "r6",
    name: "Noodle Bar",
    image: "/placeholder.svg?height=300&width=400&text=Noodle+Bar",
    cuisine: "Chinese",
    rating: 4.4,
    reviewCount: 178,
    deliveryTime: 25,
    location: "987 Cedar St, New York, NY",
    priceLevel: 30,
    description:
      "Hand-pulled noodles and dumplings made fresh daily. Our recipes have been passed down through generations for an authentic taste of China.",
  },
  {
    id: "r7",
    name: "Mediterranean Delight",
    image: "/placeholder.svg?height=300&width=400&text=Mediterranean+Delight",
    cuisine: "Mediterranean",
    rating: 4.7,
    reviewCount: 223,
    deliveryTime: 30,
    location: "159 Olive St, New York, NY",
    priceLevel: 40,
    isPromoted: true,
    description:
      "Fresh and healthy Mediterranean cuisine featuring kebabs, falafel, and hummus. We use only the freshest ingredients and traditional cooking methods.",
  },
  {
    id: "r8",
    name: "Thai Spice",
    image: "/placeholder.svg?height=300&width=400&text=Thai+Spice",
    cuisine: "Thai",
    rating: 4.5,
    reviewCount: 167,
    deliveryTime: 25,
    location: "753 Lemon St, New York, NY",
    priceLevel: 35,
    description:
      "Authentic Thai cuisine with the perfect balance of sweet, sour, salty, and spicy flavors. Our chefs are trained in traditional Thai cooking techniques.",
  },
]

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        id: "f1",
        name: "Garlic Bread",
        description: "Freshly baked bread with garlic butter and herbs",
        price: 4.99,
        image: "/placeholder.svg?height=200&width=200&text=Garlic+Bread",
        restaurant: "Pizza Heaven",
        restaurantId: "r2",
        discount: 0,
        categoryId: "appetizers",
      },
      {
        id: "f2",
        name: "Mozzarella Sticks",
        description: "Crispy fried mozzarella sticks with marinara sauce",
        price: 6.99,
        image: "/placeholder.svg?height=200&width=200&text=Mozzarella+Sticks",
        restaurant: "Pizza Heaven",
        restaurantId: "r2",
        discount: 10,
        categoryId: "appetizers",
      },
      {
        id: "f3",
        name: "Chicken Wings",
        description: "Spicy buffalo wings with blue cheese dip",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200&text=Chicken+Wings",
        restaurant: "Burger Palace",
        restaurantId: "r1",
        discount: 0,
        categoryId: "appetizers",
      },
    ],
  },
  {
    id: "main-courses",
    name: "Main Courses",
    items: [
      {
        id: "f4",
        name: "Classic Cheeseburger",
        description: "Angus beef patty with cheddar cheese, lettuce, tomato, and special sauce",
        price: 12.99,
        image: "/placeholder.svg?height=200&width=200&text=Classic+Cheeseburger",
        restaurant: "Burger Palace",
        restaurantId: "r1",
        discount: 0,
        categoryId: "main-courses",
      },
      {
        id: "f5",
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
        price: 14.99,
        image: "/placeholder.svg?height=200&width=200&text=Margherita+Pizza",
        restaurant: "Pizza Heaven",
        restaurantId: "r2",
        discount: 15,
        categoryId: "main-courses",
      },
      {
        id: "f6",
        name: "Salmon Sushi Roll",
        description: "Fresh salmon, avocado, and cucumber wrapped in seaweed and rice",
        price: 16.99,
        image: "/placeholder.svg?height=200&width=200&text=Salmon+Sushi+Roll",
        restaurant: "Sushi Express",
        restaurantId: "r3",
        discount: 0,
        categoryId: "main-courses",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "f7",
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie with vanilla ice cream",
        price: 6.99,
        image: "/placeholder.svg?height=200&width=200&text=Chocolate+Brownie",
        restaurant: "Burger Palace",
        restaurantId: "r1",
        discount: 0,
        categoryId: "desserts",
      },
      {
        id: "f8",
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
        price: 7.99,
        image: "/placeholder.svg?height=200&width=200&text=Tiramisu",
        restaurant: "Pizza Heaven",
        restaurantId: "r2",
        discount: 0,
        categoryId: "desserts",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: "f9",
        name: "Soft Drink",
        description: "Choice of Coke, Sprite, or Fanta",
        price: 2.99,
        image: "/placeholder.svg?height=200&width=200&text=Soft+Drink",
        restaurant: "Burger Palace",
        restaurantId: "r1",
        discount: 0,
        categoryId: "drinks",
      },
      {
        id: "f10",
        name: "Iced Tea",
        description: "Freshly brewed iced tea with lemon",
        price: 3.49,
        image: "/placeholder.svg?height=200&width=200&text=Iced+Tea",
        restaurant: "Pizza Heaven",
        restaurantId: "r2",
        discount: 0,
        categoryId: "drinks",
      },
    ],
  },
]

export const popularFoods: Food[] = [
  {
    id: "f4",
    name: "Classic Cheeseburger",
    description: "Angus beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=200&text=Classic+Cheeseburger",
    restaurant: "Burger Palace",
    restaurantId: "r1",
    discount: 0,
    categoryId: "main-courses",
  },
  {
    id: "f5",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, fresh mozzarella, and basil",
    price: 14.99,
    image: "/placeholder.svg?height=200&width=200&text=Margherita+Pizza",
    restaurant: "Pizza Heaven",
    restaurantId: "r2",
    discount: 15,
    categoryId: "main-courses",
  },
  {
    id: "f6",
    name: "Salmon Sushi Roll",
    description: "Fresh salmon, avocado, and cucumber wrapped in seaweed and rice",
    price: 16.99,
    image: "/placeholder.svg?height=200&width=200&text=Salmon+Sushi+Roll",
    restaurant: "Sushi Express",
    restaurantId: "r3",
    discount: 0,
    categoryId: "main-courses",
  },
  {
    id: "f11",
    name: "Chicken Tikka Masala",
    description: "Tender chicken in a creamy tomato sauce with Indian spices",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200&text=Chicken+Tikka+Masala",
    restaurant: "Curry House",
    restaurantId: "r5",
    discount: 10,
    categoryId: "main-courses",
  },
  {
    id: "f12",
    name: "Beef Tacos",
    description: "Three soft corn tortillas with seasoned beef, lettuce, cheese, and salsa",
    price: 10.99,
    image: "/placeholder.svg?height=200&width=200&text=Beef+Tacos",
    restaurant: "Taco Fiesta",
    restaurantId: "r4",
    discount: 0,
    categoryId: "main-courses",
  },
  {
    id: "f13",
    name: "Pad Thai",
    description: "Stir-fried rice noodles with egg, tofu, bean sprouts, and peanuts",
    price: 13.99,
    image: "/placeholder.svg?height=200&width=200&text=Pad+Thai",
    restaurant: "Thai Spice",
    restaurantId: "r8",
    discount: 0,
    categoryId: "main-courses",
  },
  {
    id: "f14",
    name: "Greek Salad",
    description: "Fresh tomatoes, cucumbers, olives, and feta cheese with olive oil dressing",
    price: 9.99,
    image: "/placeholder.svg?height=200&width=200&text=Greek+Salad",
    restaurant: "Mediterranean Delight",
    restaurantId: "r7",
    discount: 0,
    categoryId: "appetizers",
  },
  {
    id: "f15",
    name: "Beef Chow Mein",
    description: "Stir-fried noodles with beef and vegetables in savory sauce",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=200&text=Beef+Chow+Mein",
    restaurant: "Noodle Bar",
    restaurantId: "r6",
    discount: 5,
    categoryId: "main-courses",
  },
  {
    id: "f1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurant: "Pizza Palace",
    restaurantId: "r1",
    discount: 0,
    categoryId: "pizza",
  },
  {
    id: "f2",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheese, lettuce, and tomato",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurant: "Burger Bliss",
    restaurantId: "r2",
    discount: 0,
    categoryId: "burgers",
  },
  {
    id: "f3",
    name: "Salmon Sushi Roll",
    description: "Fresh salmon roll with avocado and cucumber",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurant: "Sushi Sensation",
    restaurantId: "r3",
    discount: 0,
    categoryId: "sushi",
  },
  {
    id: "f4",
    name: "Chicken Biryani",
    description: "Aromatic rice dish with tender chicken and spices",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurant: "Biryani House",
    restaurantId: "r4",
    discount: 0,
    categoryId: "biryani",
  },
  {
    id: "f5",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey center",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurant: "Sweet Treats",
    restaurantId: "r5",
    discount: 0,
    categoryId: "desserts",
  },
  {
    id: "f6",
    name: "Vegetarian Thali",
    description: "Assorted vegetarian dishes with rice and bread",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurant: "Thali Express",
    restaurantId: "r6",
    discount: 0,
    categoryId: "thali",
  },
]

export const categoryItems = {
  pizza: [
    {
      id: "p1",
      name: "Margherita",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Classic cheese and tomato pizza",
    },
    {
      id: "p2",
      name: "Pepperoni",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Spicy pepperoni with mozzarella",
    },
    {
      id: "p3",
      name: "Vegetarian",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Assorted vegetables on a cheese base",
    },
    {
      id: "p4",
      name: "BBQ Chicken",
      price: 279,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Grilled chicken with BBQ sauce",
    },
    {
      id: "p5",
      name: "Hawaiian",
      price: 259,
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Ham and pineapple tropical delight",
    },
    {
      id: "p6",
      name: "Mushroom",
      price: 239,
      image:
        "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Assorted mushrooms on a cheese base",
    },
    {
      id: "p7",
      name: "Four Cheese",
      price: 269,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Blend of four different cheeses",
    },
    {
      id: "p8",
      name: "Meat Lovers",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Assorted meats for the carnivore",
    },
    {
      id: "p9",
      name: "Spinach and Feta",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Spinach and feta cheese combination",
    },
    {
      id: "p10",
      name: "Supreme",
      price: 319,
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "The works - a bit of everything",
    },
  ],
  burgers: [
    {
      id: "b1",
      name: "Classic Beef",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Juicy beef patty with fresh veggies",
    },
    {
      id: "b2",
      name: "Chicken Deluxe",
      price: 169,
      image:
        "https://images.unsplash.com/photo-1615297928064-24977384d0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Grilled chicken with special sauce",
    },
    {
      id: "b3",
      name: "Veggie Supreme",
      price: 139,
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Plant-based patty with fresh toppings",
    },
    {
      id: "b4",
      name: "Spicy Jalapeno",
      price: 179,
      image:
        "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Beef patty with spicy jalapenos",
    },
    {
      id: "b5",
      name: "Mushroom Swiss",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Beef patty with mushrooms and Swiss cheese",
    },
    {
      id: "b6",
      name: "BBQ Bacon",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Beef patty with bacon and BBQ sauce",
    },
    {
      id: "b7",
      name: "Fish Fillet",
      price: 159,
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Crispy fish fillet with tartar sauce",
    },
    {
      id: "b8",
      name: "Double Cheese",
      price: 209,
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Double beef patty with extra cheese",
    },
    {
      id: "b9",
      name: "Avocado Ranch",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Chicken patty with avocado and ranch dressing",
    },
    {
      id: "b10",
      name: "Breakfast Burger",
      price: 179,
      image:
        "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Beef patty with fried egg and bacon",
    },
  ],
  sushi: [
    {
      id: "s1",
      name: "Salmon Nigiri",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Fresh salmon on seasoned rice",
    },
    {
      id: "s2",
      name: "Tuna Roll",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Tuna and cucumber roll",
    },
    {
      id: "s3",
      name: "California Roll",
      price: 79,
      image:
        "https://images.unsplash.com/photo-1558985250-27a406d64cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Crab, avocado, and cucumber roll",
    },
    {
      id: "s4",
      name: "Shrimp Tempura Roll",
      price: 109,
      image:
        "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Crispy shrimp tempura roll",
    },
    {
      id: "s5",
      name: "Vegetarian Roll",
      price: 69,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Assorted vegetables roll",
    },
    {
      id: "s6",
      name: "Eel Nigiri",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Grilled eel on seasoned rice",
    },
    {
      id: "s7",
      name: "Rainbow Roll",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "California roll topped with assorted sashimi",
    },
    {
      id: "s8",
      name: "Spicy Tuna Roll",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Spicy tuna and cucumber roll",
    },
    {
      id: "s9",
      name: "Salmon Sashimi",
      price: 119,
      image:
        "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Fresh sliced salmon sashimi",
    },
    {
      id: "s10",
      name: "Dragon Roll",
      price: 139,
      image:
        "https://images.unsplash.com/photo-1617196034584-69860a628297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Eel and cucumber roll topped with avocado",
    },
  ],
  biryani: [
    {
      id: "br1",
      name: "Chicken Biryani",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Aromatic rice with tender chicken and spices",
    },
    {
      id: "br2",
      name: "Mutton Biryani",
      price: 269,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Rich biryani with succulent mutton pieces",
    },
    {
      id: "br3",
      name: "Vegetable Biryani",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Fragrant rice with mixed vegetables",
    },
    {
      id: "br4",
      name: "Prawn Biryani",
      price: 289,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Delicious biryani with juicy prawns",
    },
    {
      id: "br5",
      name: "Egg Biryani",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1630409351217-bc61f8f15322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Flavorful rice with boiled eggs",
    },
    {
      id: "br6",
      name: "Hyderabadi Biryani",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Authentic Hyderabadi style chicken biryani",
    },
    {
      id: "br7",
      name: "Fish Biryani",
      price: 259,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Aromatic rice with marinated fish pieces",
    },
    {
      id: "br8",
      name: "Paneer Biryani",
      price: 219,
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Vegetarian biryani with soft paneer cubes",
    },
    {
      id: "br9",
      name: "Keema Biryani",
      price: 239,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Spicy biryani with minced meat",
    },
    {
      id: "br10",
      name: "Mushroom Biryani",
      price: 209,
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Fragrant rice with sautéed mushrooms",
    },
  ],
  desserts: [
    {
      id: "d1",
      name: "Chocolate Lava Cake",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Warm chocolate cake with a gooey center",
    },
    {
      id: "d2",
      name: "New York Cheesecake",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Classic creamy cheesecake",
    },
    {
      id: "d3",
      name: "Tiramisu",
      price: 139,
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Italian coffee-flavored dessert",
    },
    {
      id: "d4",
      name: "Apple Pie",
      price: 119,
      image:
        "https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Homestyle apple pie with a flaky crust",
    },
    {
      id: "d5",
      name: "Crème Brûlée",
      price: 159,
      image:
        "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Rich custard topped with caramelized sugar",
    },
    {
      id: "d6",
      name: "Strawberry Shortcake",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Light cake with fresh strawberries and cream",
    },
    {
      id: "d7",
      name: "Banana Split",
      price: 139,
      image:
        "https://images.unsplash.com/photo-1570727624862-3008fe67a6be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Classic ice cream dessert with bananas and toppings",
    },
    {
      id: "d8",
      name: "Panna Cotta",
      price: 119,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Italian dessert of sweetened cream thickened with gelatin",
    },
    {
      id: "d9",
      name: "Fruit Tart",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Buttery tart crust filled with custard and fresh fruits",
    },
    {
      id: "d10",
      name: "Mochi Ice Cream",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Japanese rice cake filled with ice cream",
    },
  ],
  thali: [
    {
      id: "t1",
      name: "Vegetarian Thali",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Assorted vegetarian dishes with rice and bread",
    },
    {
      id: "t2",
      name: "Non-Veg Thali",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Assorted non-vegetarian dishes with rice and bread",
    },
    {
      id: "t3",
      name: "Gujarati Thali",
      price: 219,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Traditional Gujarati dishes in a thali",
    },
    {
      id: "t4",
      name: "Rajasthani Thali",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Authentic Rajasthani cuisine in a thali",
    },
    {
      id: "t5",
      name: "South Indian Thali",
      price: 209,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Variety of South Indian dishes in a thali",
    },
    {
      id: "t6",
      name: "Punjabi Thali",
      price: 239,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Rich and flavorful Punjabi dishes in a thali",
    },
    {
      id: "t7",
      name: "Bengali Thali",
      price: 229,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Traditional Bengali cuisine in a thali",
    },
    {
      id: "t8",
      name: "Maharashtrian Thali",
      price: 219,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Authentic Maharashtrian dishes in a thali",
    },
    {
      id: "t9",
      name: "Jain Thali",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Jain-friendly dishes in a thali",
    },
    {
      id: "t10",
      name: "Fusion Thali",
      price: 259,
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Modern twist on traditional thali with fusion dishes",
    },
  ],
}

