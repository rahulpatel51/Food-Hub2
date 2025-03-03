"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin, Edit2 } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth-context"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "1234567890", // Mock phone number
    address: "123 Main St, City, Country", // Mock address
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the user profile
    setIsEditing(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.email}</p>
                </div>
              </div>
              <Button onClick={() => setIsEditing(!isEditing)}>
                <Edit2 className="w-4 h-4 mr-2" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-muted-foreground" />
                  <Label htmlFor="name" className="w-24">
                    Name
                  </Label>
                  <Input id="name" name="name" value={profile.name} onChange={handleChange} disabled={!isEditing} />
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-muted-foreground" />
                  <Label htmlFor="email" className="w-24">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-muted-foreground" />
                  <Label htmlFor="phone" className="w-24">
                    Phone
                  </Label>
                  <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} disabled={!isEditing} />
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-muted-foreground" />
                  <Label htmlFor="address" className="w-24">
                    Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <Button type="submit">Save Changes</Button>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

