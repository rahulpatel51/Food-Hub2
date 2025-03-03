"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FoodCard from "@/components/ui/food-card"
import { popularFoods } from "@/lib/data"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(popularFoods.slice(0, 4)) // Mock favorite foods

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((food) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FoodCard food={food} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
              <p className="text-muted-foreground">Start adding your favorite foods to see them here!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

