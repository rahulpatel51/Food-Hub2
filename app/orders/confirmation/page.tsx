"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function OrderConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [estimatedTime, setEstimatedTime] = useState(0)

  useEffect(() => {
    // Generate random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)

    // Random delivery time between 25-45 minutes
    const randomTime = Math.floor(25 + Math.random() * 20)
    setEstimatedTime(randomTime)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-10 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">Your order has been received and is being processed.</p>

            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="text-sm text-muted-foreground">Order Number</div>
                <div className="font-medium">{orderNumber}</div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Estimated Delivery</div>
                  <div className="font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {estimatedTime} minutes
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Delivery Address</div>
                  <div className="font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Home
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                You will receive an email confirmation at your registered email address.
              </div>
            </div>

            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/orders">
                  Track Your Order <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

