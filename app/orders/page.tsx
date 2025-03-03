"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Package, CheckCircle2, MapPin, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { useAuth } from "@/lib/auth-context"

export default function OrdersPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  // Mock orders data
  const orders = [
    {
      id: "o1",
      orderNumber: "123456",
      date: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      restaurant: {
        name: "Burger Palace",
        image: "/placeholder.svg?height=80&width=80&text=BP",
      },
      items: [
        { name: "Classic Cheeseburger", quantity: 2 },
        { name: "French Fries", quantity: 1 },
        { name: "Soft Drink", quantity: 2 },
      ],
      total: 32.97,
      status: "out-for-delivery",
      estimatedDeliveryTime: 15,
    },
    {
      id: "o2",
      orderNumber: "123455",
      date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      restaurant: {
        name: "Pizza Heaven",
        image: "/placeholder.svg?height=80&width=80&text=PH",
      },
      items: [
        { name: "Margherita Pizza", quantity: 1 },
        { name: "Garlic Bread", quantity: 1 },
      ],
      total: 21.98,
      status: "delivered",
      estimatedDeliveryTime: 0,
    },
    {
      id: "o3",
      orderNumber: "123454",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      restaurant: {
        name: "Sushi Express",
        image: "/placeholder.svg?height=80&width=80&text=SE",
      },
      items: [
        { name: "Salmon Sushi Roll", quantity: 2 },
        { name: "Miso Soup", quantity: 1 },
      ],
      total: 38.97,
      status: "delivered",
      estimatedDeliveryTime: 0,
    },
  ]

  const filteredOrders = orders.filter(
    (order) =>
      order.restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderNumber.includes(searchQuery),
  )

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "confirmed":
        return <Package className="h-5 w-5 text-blue-500" />
      case "preparing":
        return <Package className="h-5 w-5 text-blue-500" />
      case "out-for-delivery":
        return <MapPin className="h-5 w-5 text-primary" />
      case "delivered":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Order Pending"
      case "confirmed":
        return "Order Confirmed"
      case "preparing":
        return "Preparing Your Food"
      case "out-for-delivery":
        return "Out for Delivery"
      case "delivered":
        return "Delivered"
      default:
        return "Processing"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-10 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Your Orders</h1>
            <p className="text-muted-foreground">Track and manage your orders</p>
          </div>

          {user ? (
            <>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search orders by restaurant or order number"
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Tabs defaultValue="active">
                <TabsList className="mb-6">
                  <TabsTrigger value="active">Active Orders</TabsTrigger>
                  <TabsTrigger value="past">Past Orders</TabsTrigger>
                </TabsList>

                <TabsContent value="active">
                  <div className="space-y-4">
                    {filteredOrders.filter((order) => order.status !== "delivered").length > 0 ? (
                      filteredOrders
                        .filter((order) => order.status !== "delivered")
                        .map((order) => (
                          <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link href={`/orders/${order.id}`}>
                              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={order.restaurant.image || "/placeholder.svg"}
                                      alt={order.restaurant.name}
                                      className="h-12 w-12 rounded-md object-cover"
                                    />
                                    <div>
                                      <h3 className="font-medium">{order.restaurant.name}</h3>
                                      <p className="text-sm text-muted-foreground">
                                        Order #{order.orderNumber} • {order.items.length} items
                                      </p>
                                    </div>
                                  </div>
                                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(order.status)}
                                    <span className="text-sm font-medium">{getStatusText(order.status)}</span>
                                  </div>
                                  <div className="text-sm">
                                    {order.status === "out-for-delivery" ? (
                                      <span className="text-primary font-medium">
                                        Arriving in {order.estimatedDeliveryTime} mins
                                      </span>
                                    ) : (
                                      <span className="text-muted-foreground">
                                        {order.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))
                    ) : (
                      <div className="text-center py-12">
                        <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <Package className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">No active orders</h3>
                        <p className="text-muted-foreground mb-6">You don't have any active orders at the moment</p>
                        <Button asChild>
                          <Link href="/restaurants">Order Now</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="past">
                  <div className="space-y-4">
                    {filteredOrders.filter((order) => order.status === "delivered").length > 0 ? (
                      filteredOrders
                        .filter((order) => order.status === "delivered")
                        .map((order) => (
                          <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link href={`/orders/${order.id}`}>
                              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={order.restaurant.image || "/placeholder.svg"}
                                      alt={order.restaurant.name}
                                      className="h-12 w-12 rounded-md object-cover"
                                    />
                                    <div>
                                      <h3 className="font-medium">{order.restaurant.name}</h3>
                                      <p className="text-sm text-muted-foreground">
                                        Order #{order.orderNumber} • {order.items.length} items
                                      </p>
                                    </div>
                                  </div>
                                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    {getStatusIcon(order.status)}
                                    <span className="text-sm font-medium">{getStatusText(order.status)}</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground">{order.date.toLocaleDateString()}</div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))
                    ) : (
                      <div className="text-center py-12">
                        <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                          <Package className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">No past orders</h3>
                        <p className="text-muted-foreground mb-6">You haven't placed any orders yet</p>
                        <Button asChild>
                          <Link href="/restaurants">Order Now</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sign in to view your orders</h3>
              <p className="text-muted-foreground mb-6">Please sign in to view and track your orders</p>
              <Button asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

