"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart, getItemQuantity, subtotal } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoDiscount, setPromoDiscount] = useState(0)

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true)
      setPromoDiscount(subtotal * 0.1)
    }
  }

  const deliveryFee = 2.99
  const total = subtotal + deliveryFee - promoDiscount

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-10 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
            <p className="text-muted-foreground">Review your items before checkout</p>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow"
                    >
                      <img
                        src={item.image || "/placeholder.svg?height=80&width=80"}
                        alt={item.name}
                        className="h-20 w-20 rounded-md object-cover"
                      />
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="font-medium">${(item.price * getItemQuantity(item.id)).toFixed(2)}</div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                        <div className="flex justify-between items-center mt-auto">
                          <div className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => removeFromCart(item.id)}
                            >
                              {getItemQuantity(item.id) === 1 ? (
                                <Trash2 className="h-3.5 w-3.5" />
                              ) : (
                                <Minus className="h-3.5 w-3.5" />
                              )}
                            </Button>
                            <span className="font-medium w-4 text-center">{getItemQuantity(item.id)}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => addToCart(item)}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex justify-between items-center pt-4">
                  <Button variant="ghost" className="text-muted-foreground" onClick={clearCart}>
                    Clear Cart
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/restaurants">Add More Items</Link>
                  </Button>
                </div>
              </div>

              <div>
                <div className="sticky top-20 border rounded-lg p-6 space-y-4">
                  <h2 className="font-semibold text-lg">Order Summary</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Promo (WELCOME10)</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                      />
                      <Button variant="outline" onClick={handleApplyPromo} disabled={promoApplied || !promoCode}>
                        Apply
                      </Button>
                    </div>
                    <Button className="w-full" size="lg" asChild>
                      <Link href="/checkout">
                        Checkout <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground pt-4">
                    <p>
                      By proceeding to checkout, you agree to our{" "}
                      <Link href="/terms" className="underline underline-offset-2">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="underline underline-offset-2">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Browse our restaurants and discover delicious
                meals.
              </p>
              <Button size="lg" asChild>
                <Link href="/restaurants">Browse Restaurants</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

