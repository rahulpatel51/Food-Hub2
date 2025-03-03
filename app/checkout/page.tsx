"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import AddressForm from "@/components/checkout/address-form"
import PaymentForm from "@/components/checkout/payment-form"
import OrderConfirmation from "@/components/checkout/order-confirmation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const steps = ["Address", "Payment", "Confirmation"]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const { cartItems, subtotal, clearCart } = useCart()
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    // For now, we'll just clear the cart and move to the confirmation step
    clearCart()
    setCurrentStep(2)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
            <div className="flex justify-between items-center mt-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="ml-2 text-sm font-medium">{step}</span>
                  {index < steps.length - 1 && <ArrowRight className="w-4 h-4 mx-2 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <AddressForm
                  onNext={handleNext}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                />
              )}
              {currentStep === 1 && <PaymentForm onNext={handlePlaceOrder} onBack={handleBack} />}
              {currentStep === 2 && <OrderConfirmation />}
            </motion.div>
          </AnimatePresence>

          {currentStep < 2 && (
            <div className="mt-8 flex justify-between">
              {currentStep > 0 && (
                <Button onClick={handleBack} variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              )}
              {currentStep < 1 && (
                <Button onClick={handleNext} className="ml-auto">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

