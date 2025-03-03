"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import FoodCard from "@/components/ui/food-card"
import { popularFoods } from "@/lib/data"

interface CategorySectionProps {
  category: string
  onClose: () => void
}

export default function CategorySection({ category, onClose }: CategorySectionProps) {
  const categoryFoods = popularFoods.filter((food) => food.categoryId.toLowerCase() === category.toLowerCase())

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-background z-50 overflow-y-auto"
    >
      <div className="container px-4 py-8 md:px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{category}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        {categoryFoods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

