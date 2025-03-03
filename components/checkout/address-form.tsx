"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  zipCode: string
  phone: string
}

interface AddressFormProps {
  onNext: () => void
  selectedAddress: string | null
  setSelectedAddress: (id: string | null) => void
}

export default function AddressForm({ onNext, selectedAddress, setSelectedAddress }: AddressFormProps) {
  const [showNewAddressForm, setShowNewAddressForm] = useState(false)
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "Home",
      street: "123 Main St",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      phone: "9876543210",
    },
    {
      id: "2",
      name: "Work",
      street: "456 Office Park",
      city: "Bangalore",
      state: "Karnataka",
      zipCode: "560001",
      phone: "9876543211",
    },
  ])
  const [newAddress, setNewAddress] = useState<Omit<Address, "id">>({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  })

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewAddress((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddNewAddress = () => {
    const id = (savedAddresses.length + 1).toString()
    setSavedAddresses([...savedAddresses, { ...newAddress, id }])
    setSelectedAddress(id)
    setShowNewAddressForm(false)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
      {savedAddresses.length > 0 && (
        <RadioGroup value={selectedAddress || ""} onValueChange={setSelectedAddress} className="mb-4">
          {savedAddresses.map((address) => (
            <div key={address.id} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={address.id} id={`address-${address.id}`} />
              <Label htmlFor={`address-${address.id}`}>
                {address.name} - {address.street}, {address.city}, {address.state} {address.zipCode}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}
      {!showNewAddressForm && (
        <Button onClick={() => setShowNewAddressForm(true)} className="mb-4">
          <Plus className="mr-2 h-4 w-4" /> Add New Address
        </Button>
      )}
      {showNewAddressForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAddNewAddress()
          }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="name">Address Name</Label>
            <Input id="name" name="name" value={newAddress.name} onChange={handleAddressChange} required />
          </div>
          <div>
            <Label htmlFor="street">Street Address</Label>
            <Input id="street" name="street" value={newAddress.street} onChange={handleAddressChange} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={newAddress.city} onChange={handleAddressChange} required />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" value={newAddress.state} onChange={handleAddressChange} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input id="zipCode" name="zipCode" value={newAddress.zipCode} onChange={handleAddressChange} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={newAddress.phone}
                onChange={handleAddressChange}
                required
              />
            </div>
          </div>
          <Button type="submit">Save Address</Button>
        </form>
      )}
      <Button onClick={onNext} className="mt-4" disabled={!selectedAddress}>
        Proceed to Payment
      </Button>
    </div>
  )
}

