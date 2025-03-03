import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function BusinessBlogPage() {
  const blogPosts = [
    {
      title: "5 Ways to Increase Your Restaurant's Online Orders",
      excerpt: "Learn how to optimize your online presence and boost your delivery sales...",
      date: "June 5, 2023",
      author: "Marketing Expert",
    },
    {
      title: "The Impact of Food Photography on Customer Orders",
      excerpt: "Discover how high-quality food photos can significantly increase your online orders...",
      date: "May 20, 2023",
      author: "Food Photographer",
    },
    {
      title: "Managing Customer Feedback: Tips for Restaurant Owners",
      excerpt: "Learn how to effectively handle customer reviews and improve your service...",
      date: "May 1, 2023",
      author: "Customer Service Specialist",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Business Blog</h1>
          <p className="text-xl mb-8">Insights and tips to help grow your restaurant business</p>
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

