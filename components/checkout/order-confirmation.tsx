"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OrderConfirmation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-10 h-10 text-green-600" />
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
      <p className="text-muted-foreground mb-6">
        Thank you for your order. Your food is being prepared and will be delivered soon.
      </p>
      <div className="space-y-4">
        <Button asChild className="w-full">
          <Link href="/orders">Track Your Order</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    </motion.div>
  )
}

