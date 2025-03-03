import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function AppsPage() {
  const features = [
    { title: "Order Management", description: "Easily manage incoming orders in real-time" },
    { title: "Menu Updates", description: "Update your menu items and prices instantly" },
    { title: "Performance Analytics", description: "Track your restaurant's performance with detailed analytics" },
    { title: "Customer Insights", description: "Gain valuable insights about your customers' preferences" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Apps for Restaurants</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Streamline Your Operations</h2>
              <p className="mb-6">
                Our restaurant app is designed to help you manage orders, update menus, and track performance with ease.
                Stay connected with your customers and grow your business with FoodDelivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <h3 className="font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <img
                src="/placeholder.svg?height=400&width=400&text=App+Screenshot"
                alt="Restaurant App Screenshot"
                className="mx-auto mb-6 rounded-lg shadow-lg"
              />
              <div className="space-x-4">
                <Button size="lg">
                  <img src="/placeholder.svg?height=24&width=24&text=A" alt="App Store" className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button size="lg">
                  <img src="/placeholder.svg?height=24&width=24&text=G" alt="Google Play" className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

