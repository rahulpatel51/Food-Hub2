"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import type { Food } from "@/lib/types"

interface FoodCardProps {
  food: Food
}

export default function FoodCard({ food }: FoodCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart, removeFromCart, getItemQuantity } = useCart()
  const quantity = getItemQuantity(food.id)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={
            food.image ||
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" ||
            "/placeholder.svg"
          }
          alt={food.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full h-8 w-8"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
        {food.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-500/90">{food.discount}% OFF</Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-medium line-clamp-1">{food.name}</h3>
          <div className="flex items-center gap-1 whitespace-nowrap">
            {food.discount > 0 ? (
              <>
                <span className="font-medium">₹{(food.price * (1 - food.discount / 100)).toFixed(2)}</span>
                <span className="text-xs text-muted-foreground line-through">₹{food.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-medium">₹{food.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{food.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{food.restaurant}</span>
          <AnimatePresence>
            {quantity > 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 rounded-full"
                  onClick={() => removeFromCart(food.id)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-sm font-medium w-4 text-center">{quantity}</span>
                <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => addToCart(food)}>
                  <Plus className="h-3 w-3" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Button size="sm" className="rounded-full h-8 px-3" onClick={() => addToCart(food)}>
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

