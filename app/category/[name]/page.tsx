"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FoodCard from "@/components/ui/food-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { categoryItems } from "@/lib/data"

export default function CategoryPage() {
  const params = useParams()
  const categoryName = params.name as string
  const [items, setItems] = useState(categoryItems[categoryName as keyof typeof categoryItems] || [])

  useEffect(() => {
    setItems(categoryItems[categoryName as keyof typeof categoryItems] || [])
  }, [categoryName])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FoodCard food={item} />
              </motion.div>
            ))}
          </div>
          {items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
              <Button asChild className="mt-4">
                <Link href="/">Go back to home</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

