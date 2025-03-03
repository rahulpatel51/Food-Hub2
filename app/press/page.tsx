import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function PressPage() {
  const pressReleases = [
    {
      title: "FoodDelivery Expands to 10 New Cities",
      date: "June 1, 2023",
      excerpt:
        "FoodDelivery announces its expansion into 10 new cities, bringing its total coverage to 50 cities nationwide...",
    },
    {
      title: "FoodDelivery Partners with Local Charities to Fight Hunger",
      date: "May 15, 2023",
      excerpt:
        "In a move to give back to the community, FoodDelivery launches a new initiative partnering with local food banks...",
    },
    {
      title: "FoodDelivery Introduces Eco-Friendly Packaging",
      date: "April 22, 2023",
      excerpt:
        "On Earth Day, FoodDelivery announces its commitment to sustainability with the introduction of biodegradable packaging...",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Press Releases</h1>
          <div className="grid gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="border p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">{release.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{release.date}</p>
                <p className="mb-4">{release.excerpt}</p>
                <Button variant="outline">Read Full Release</Button>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Media Contact</h2>
            <p>For press inquiries, please contact:</p>
            <p className="font-medium">press@fooddelivery.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

