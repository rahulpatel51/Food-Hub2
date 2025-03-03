"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Restaurant } from "@/lib/types"

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link href={`/restaurants/${restaurant.id}`}>
        <div className="group rounded-xl overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={
                restaurant.image ||
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" ||
                "/placeholder.svg"
              }
              alt={restaurant.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg line-clamp-1">{restaurant.name}</h3>
              {restaurant.isPromoted && (
                <Badge variant="secondary" className="text-xs">
                  Promoted
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <MapPin className="h-3.5 w-3.5" />
              <span className="line-clamp-1">{restaurant.location}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{restaurant.rating}</span>
                <span className="text-muted-foreground">({restaurant.reviewCount})</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{restaurant.deliveryTime} min</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

