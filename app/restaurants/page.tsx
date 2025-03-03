"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import RestaurantCard from "@/components/ui/restaurant-card"
import { restaurants } from "@/lib/data"

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("recommended")
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([])

  const cuisines = ["Italian", "Chinese", "Mexican", "Indian", "Japanese", "Thai", "American", "Mediterranean"]

  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Search filter
    if (searchQuery && !restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Cuisine filter
    if (cuisineFilters.length > 0 && !cuisineFilters.includes(restaurant.cuisine)) {
      return false
    }

    // Price range filter
    if (restaurant.priceLevel < priceRange[0] || restaurant.priceLevel > priceRange[1]) {
      return false
    }

    return true
  })

  // Sort restaurants
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "delivery-time":
        return a.deliveryTime - b.deliveryTime
      case "price-low":
        return a.priceLevel - b.priceLevel
      case "price-high":
        return b.priceLevel - a.priceLevel
      default:
        return 0
    }
  })

  const handleCuisineChange = (cuisine: string) => {
    setCuisineFilters((prev) => (prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Restaurants</h1>
              <p className="text-muted-foreground">Discover the best food in your area</p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search restaurants or cuisines"
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="delivery-time">Delivery Time</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Refine your restaurant search</SheetDescription>
                    </SheetHeader>
                    <div className="py-6 space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium">Price Range</h3>
                        <Slider
                          defaultValue={[0, 100]}
                          max={100}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between">
                          <span className="text-xs">$</span>
                          <span className="text-xs">$$$$</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium">Cuisines</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {cuisines.map((cuisine) => (
                            <div key={cuisine} className="flex items-center space-x-2">
                              <Checkbox
                                id={`cuisine-${cuisine}`}
                                checked={cuisineFilters.includes(cuisine)}
                                onCheckedChange={() => handleCuisineChange(cuisine)}
                              />
                              <Label htmlFor={`cuisine-${cuisine}`}>{cuisine}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-sm font-medium">Dietary</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {["Vegetarian", "Vegan", "Gluten-Free", "Halal"].map((diet) => (
                            <div key={diet} className="flex items-center space-x-2">
                              <Checkbox id={`diet-${diet}`} />
                              <Label htmlFor={`diet-${diet}`}>{diet}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            setPriceRange([0, 100])
                            setCuisineFilters([])
                          }}
                        >
                          Reset
                        </Button>
                        <Button className="flex-1">Apply Filters</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Results */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">{sortedRestaurants.length} restaurants found</p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {sortedRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <RestaurantCard restaurant={restaurant} />
                </motion.div>
              ))}
            </motion.div>

            {sortedRestaurants.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No restaurants found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

