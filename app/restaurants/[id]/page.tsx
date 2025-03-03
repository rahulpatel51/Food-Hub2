"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock, MapPin, Info, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { restaurants, menuCategories } from "@/lib/data"
import { useCart } from "@/lib/cart-context"

export default function RestaurantPage() {
  const params = useParams()
  const restaurantId = params.id as string
  const restaurant = restaurants.find((r) => r.id === restaurantId)
  const [activeCategory, setActiveCategory] = useState("all")
  const { addToCart, removeFromCart, getItemQuantity, cartItems, subtotal } = useCart()

  if (!restaurant) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Restaurant not found</h1>
            <p className="text-muted-foreground mb-4">The restaurant you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/restaurants">Browse Restaurants</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const filteredMenu =
    activeCategory === "all"
      ? menuCategories.flatMap((category) => category.items)
      : menuCategories.find((category) => category.id === activeCategory)?.items || []

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Restaurant Header */}
        <div className="relative h-[300px] w-full">
          <img
            src={restaurant.image || "/placeholder.svg?height=300&width=1200"}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {restaurant.isPromoted && (
                    <Badge variant="secondary" className="text-xs">
                      Promoted
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {restaurant.cuisine}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold text-white">{restaurant.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{restaurant.rating}</span>
                    <span className="text-white/70">({restaurant.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="container px-4 py-6 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/4">
              {/* Menu Categories */}
              <Tabs defaultValue="menu" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>

                <TabsContent value="menu">
                  <div className="flex overflow-x-auto pb-2 mb-6 gap-2 scrollbar-hide">
                    <Button
                      variant={activeCategory === "all" ? "default" : "outline"}
                      className="rounded-full whitespace-nowrap"
                      onClick={() => setActiveCategory("all")}
                    >
                      All
                    </Button>
                    {menuCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={activeCategory === category.id ? "default" : "outline"}
                        className="rounded-full whitespace-nowrap"
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {activeCategory === "all" ? (
                        menuCategories.map((category) => (
                          <div key={category.id} className="space-y-4">
                            <h2 className="text-xl font-bold">{category.name}</h2>
                            <div className="space-y-4">
                              {category.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow"
                                >
                                  <img
                                    src={item.image || "/placeholder.svg?height=100&width=100"}
                                    alt={item.name}
                                    className="h-24 w-24 rounded-md object-cover"
                                  />
                                  <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between">
                                      <h3 className="font-medium">{item.name}</h3>
                                      <div className="flex items-center gap-1">
                                        {item.discount > 0 ? (
                                          <>
                                            <span className="font-medium">
                                              ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                                            </span>
                                            <span className="text-xs text-muted-foreground line-through">
                                              ${item.price.toFixed(2)}
                                            </span>
                                          </>
                                        ) : (
                                          <span className="font-medium">${item.price.toFixed(2)}</span>
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                                      {item.description}
                                    </p>
                                    <div className="flex justify-between items-center mt-2">
                                      {item.discount > 0 && (
                                        <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                          {item.discount}% OFF
                                        </Badge>
                                      )}
                                      <div className="ml-auto">
                                        {getItemQuantity(item.id) > 0 ? (
                                          <div className="flex items-center gap-3">
                                            <Button
                                              variant="outline"
                                              size="icon"
                                              className="h-8 w-8 rounded-full"
                                              onClick={() => removeFromCart(item.id)}
                                            >
                                              <Minus className="h-3 w-3" />
                                            </Button>
                                            <span className="font-medium">{getItemQuantity(item.id)}</span>
                                            <Button
                                              variant="outline"
                                              size="icon"
                                              className="h-8 w-8 rounded-full"
                                              onClick={() => addToCart(item)}
                                            >
                                              <Plus className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        ) : (
                                          <Button size="sm" className="rounded-full" onClick={() => addToCart(item)}>
                                            Add
                                          </Button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="space-y-4">
                          {filteredMenu.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow"
                            >
                              <img
                                src={item.image || "/placeholder.svg?height=100&width=100"}
                                alt={item.name}
                                className="h-24 w-24 rounded-md object-cover"
                              />
                              <div className="flex-1 flex flex-col">
                                <div className="flex justify-between">
                                  <h3 className="font-medium">{item.name}</h3>
                                  <div className="flex items-center gap-1">
                                    {item.discount > 0 ? (
                                      <>
                                        <span className="font-medium">
                                          ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                                        </span>
                                        <span className="text-xs text-muted-foreground line-through">
                                          ${item.price.toFixed(2)}
                                        </span>
                                      </>
                                    ) : (
                                      <span className="font-medium">${item.price.toFixed(2)}</span>
                                    )}
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{item.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                  {item.discount > 0 && (
                                    <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                                      {item.discount}% OFF
                                    </Badge>
                                  )}
                                  <div className="ml-auto">
                                    {getItemQuantity(item.id) > 0 ? (
                                      <div className="flex items-center gap-3">
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className="h-8 w-8 rounded-full"
                                          onClick={() => removeFromCart(item.id)}
                                        >
                                          <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="font-medium">{getItemQuantity(item.id)}</span>
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className="h-8 w-8 rounded-full"
                                          onClick={() => addToCart(item)}
                                        >
                                          <Plus className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    ) : (
                                      <Button size="sm" className="rounded-full" onClick={() => addToCart(item)}>
                                        Add
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-bold">{restaurant.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Based on {restaurant.reviewCount} reviews</div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          name: "John D.",
                          rating: 5,
                          date: "2 days ago",
                          comment:
                            "Amazing food and quick delivery! The pasta was perfectly cooked and the sauce was delicious.",
                        },
                        {
                          name: "Sarah M.",
                          rating: 4,
                          date: "1 week ago",
                          comment: "Great food but delivery took a bit longer than expected. Would order again though!",
                        },
                        {
                          name: "Michael T.",
                          rating: 5,
                          date: "2 weeks ago",
                          comment:
                            "Best Italian food in the area! The pizza was authentic and the tiramisu was heavenly.",
                        },
                      ].map((review, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <div className="font-medium">{review.name}</div>
                            <div className="text-sm text-muted-foreground">{review.date}</div>
                          </div>
                          <div className="flex items-center mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      See All Reviews
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="info">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">About</h3>
                      <p className="text-muted-foreground">
                        {restaurant.description ||
                          "This restaurant specializes in authentic cuisine made with fresh, locally-sourced ingredients. Our chefs have years of experience crafting delicious meals that will satisfy your cravings."}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Opening Hours</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Monday - Friday</div>
                        <div>10:00 AM - 10:00 PM</div>
                        <div>Saturday - Sunday</div>
                        <div>11:00 AM - 11:00 PM</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Address</h3>
                      <p className="text-muted-foreground mb-2">{restaurant.location}</p>
                      <div className="aspect-video w-full rounded-md overflow-hidden bg-muted">
                        <img
                          src="/placeholder.svg?height=300&width=600&text=Map"
                          alt="Restaurant location map"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Contact</h3>
                      <div className="space-y-1 text-sm">
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@{restaurant.name.toLowerCase().replace(/\s/g, "")}.com</p>
                        <p>Website: www.{restaurant.name.toLowerCase().replace(/\s/g, "")}.com</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:w-1/4 space-y-4">
              <div className="sticky top-20 border rounded-lg p-4 space-y-4">
                <h3 className="font-medium">Your Order</h3>
                {cartItems.length > 0 ? (
                  <>
                    <div className="space-y-3 max-h-[300px] overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between gap-2 text-sm">
                          <div className="flex gap-2">
                            <span>{getItemQuantity(item.id)}x</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span>${(item.price * getItemQuantity(item.id)).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery Fee</span>
                        <span>$2.99</span>
                      </div>
                      <div className="flex justify-between font-medium mt-2">
                        <span>Total</span>
                        <span>${(subtotal + 2.99).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="/checkout">Proceed to Checkout</a>
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <p className="text-xs text-muted-foreground mt-1">Add items from the menu to start your order</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

