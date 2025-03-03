import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top 10 Street Foods You Must Try",
      excerpt: "Discover the most delicious street foods from around the world...",
      date: "May 15, 2023",
      author: "Foodie Explorer",
    },
    {
      title: "The Rise of Plant-Based Restaurants",
      excerpt: "How plant-based cuisine is revolutionizing the restaurant industry...",
      date: "April 28, 2023",
      author: "Vegan Voyager",
    },
    {
      title: "Behind the Scenes: A Day in the Life of a Food Delivery Driver",
      excerpt: "Experience the challenges and rewards of being a food delivery hero...",
      date: "April 10, 2023",
      author: "Delivery Insider",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">FoodDelivery Blog</h1>
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="border p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    By {post.author} on {post.date}
                  </span>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

