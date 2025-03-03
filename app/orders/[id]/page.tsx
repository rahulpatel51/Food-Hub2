"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { MapPin, Package, Truck, CheckCircle } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const steps = [
  { icon: Package, label: "Order Placed" },
  { icon: Truck, label: "Out for Delivery" },
  { icon: MapPin, label: "Near You" },
  { icon: CheckCircle, label: "Delivered" },
]

export default function OrderTrackingPage() {
  const params = useParams()
  const orderId = params.id as string
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    // Simulate order progress
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order #{orderId}</h2>
            <div className="relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.label}
                  className="flex items-center mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`rounded-full p-2 ${
                      index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted-foreground/20"
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{step.label}</p>
                    {index <= currentStep && (
                      <p className="text-sm text-muted-foreground">
                        {index === currentStep ? "In progress" : "Completed"}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-muted-foreground/20" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

