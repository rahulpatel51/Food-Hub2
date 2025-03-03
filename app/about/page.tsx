import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p>
              FoodDelivery is a leading online food delivery platform, connecting hungry customers with their favorite
              local restaurants. Our mission is to make food ordering and delivery as seamless and enjoyable as
              possible.
            </p>
            <p>
              Founded in 2020, we've quickly grown to become one of the most trusted food delivery services in the
              country. We partner with thousands of restaurants to bring you a wide variety of cuisines, from comfort
              food to gourmet meals.
            </p>
            <p>
              Our team is passionate about food and technology, and we're constantly innovating to improve our service.
              Whether it's developing new features for our app or expanding our network of restaurant partners, we're
              always working to enhance your dining experience.
            </p>
            <p>
              At FoodDelivery, we believe that good food has the power to bring people together. We're not just
              delivering meals; we're delivering moments of joy, comfort, and connection.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

