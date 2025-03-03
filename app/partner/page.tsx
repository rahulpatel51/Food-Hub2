import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Partner with Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Partner with FoodDelivery?</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Reach more customers and increase your sales</li>
                <li>Benefit from our marketing and promotional campaigns</li>
                <li>Easy-to-use restaurant dashboard for managing orders</li>
                <li>Reliable delivery network to ensure food quality</li>
                <li>24/7 support for you and your customers</li>
              </ul>
              <Button size="lg">Learn More</Button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="restaurant-name" className="block mb-1">
                    Restaurant Name
                  </label>
                  <Input id="restaurant-name" placeholder="Enter your restaurant name" />
                </div>
                <div>
                  <label htmlFor="contact-name" className="block mb-1">
                    Contact Name
                  </label>
                  <Input id="contact-name" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your restaurant" />
                </div>
                <Button type="submit" size="lg">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

