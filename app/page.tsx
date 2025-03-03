"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Search, MapPin, Navigation, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FoodCard from "@/components/ui/food-card"
import { popularFoods } from "@/lib/data"
import CategorySection from "@/components/category-section"

export default function Home() {
  const [location, setLocation] = useState("Mumbai")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)

  const popularLocations = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai"]

  const categories = [
    {
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sushi",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Thali",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
    },
  ]

  const cities = [
    {
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Bangalore",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Hyderabad",
      image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=300&q=80",
    },
  ]

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation("Current Location")
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  }

  const featuredRestaurants = [
    {
      id: "r1",
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "r2",
      name: "Burger Bliss",
      cuisine: "American",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "r3",
      name: "Sushi Sensation",
      cuisine: "Japanese",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "r4",
      name: "Tandoori Treats",
      cuisine: "Indian",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&q=80",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container h-full flex flex-col justify-center items-center text-white text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Delicious Food, Delivered to You</h1>
              <p className="text-xl md:text-2xl mb-8">Order from your favorite restaurants and enjoy at home</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search for food or restaurants"
                    className="pl-10 bg-white text-black w-full"
                  />
                </div>
                <DropdownMenu open={showLocationDropdown} onOpenChange={setShowLocationDropdown}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto justify-between gap-2 bg-white text-black">
                      <MapPin className="h-4 w-4" />
                      {location}
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuItem onSelect={getCurrentLocation}>
                      <Navigation className="mr-2 h-4 w-4" />
                      <span>Use current location</span>
                    </DropdownMenuItem>
                    {popularLocations.map((loc) => (
                      <DropdownMenuItem key={loc} onSelect={() => setLocation(loc)}>
                        {loc}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem onSelect={() => setShowLocationDropdown(false)}>
                      <Input
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-2"
                      />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Popular Categories</h2>
              <p className="text-muted-foreground">Explore our most ordered food categories</p>
            </div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={`/category/${category.name.toLowerCase()}`}>
                    <div className="bg-muted/50 hover:bg-muted rounded-xl p-4 text-center transition-all hover:shadow-md">
                      <div className="mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium">{category.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Section */}
        <AnimatePresence>
          {selectedCategory && (
            <CategorySection category={selectedCategory} onClose={() => setSelectedCategory(null)} />
          )}
        </AnimatePresence>

        {/* Featured Restaurants */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Featured Restaurants</h2>
                <p className="text-muted-foreground">Our partners with the best reviews</p>
              </div>
              <Button variant="ghost" className="gap-1" asChild>
                <Link href="/restaurants">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {featuredRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={`/restaurants/${restaurant.id}`}>
                    <div className="group rounded-xl overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                        <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Popular Dishes */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Popular Dishes</h2>
                <p className="text-muted-foreground">Most ordered dishes from our users</p>
              </div>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {popularFoods.map((food, index) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <FoodCard food={food} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cities We Deliver To */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Cities We Deliver To</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden group">
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={city.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-2xl font-bold">{city.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight mb-2">How It Works</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Order your favorite food in just a few simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Choose a Restaurant",
                  description: "Browse through our extensive list of partner restaurants",
                  icon: "🍽️",
                },
                {
                  title: "Select Your Meal",
                  description: "Explore menus and choose your favorite dishes",
                  icon: "🍕",
                },
                {
                  title: "Fast Delivery",
                  description: "Track your order in real-time until it arrives at your door",
                  icon: "🚚",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

