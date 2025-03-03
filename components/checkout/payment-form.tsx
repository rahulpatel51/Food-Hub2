"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

interface PaymentFormProps {
  onNext: () => void
  onBack: () => void
}

export default function PaymentForm({ onNext, onBack }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically validate the form and process the payment
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit/Debit Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upi" id="upi" />
          <Label htmlFor="upi">UPI</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cod" id="cod" />
          <Label htmlFor="cod">Cash on Delivery</Label>
        </div>
      </RadioGroup>

      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" name="cardNumber" value={cardDetails.cardNumber} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input id="cardName" name="cardName" value={cardDetails.cardName} onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                type="password"
                maxLength={3}
                value={cardDetails.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "upi" && (
        <div>
          <Label htmlFor="upiId">UPI ID</Label>
          <Input id="upiId" name="upiId" placeholder="yourname@upi" required />
        </div>
      )}

      <div className="flex justify-between mt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Place Order</Button>
      </div>
    </form>
  )
}

