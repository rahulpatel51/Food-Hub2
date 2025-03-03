import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const jobOpenings = [
    { title: "Software Engineer", department: "Engineering", location: "Mumbai" },
    { title: "UX Designer", department: "Design", location: "Bangalore" },
    { title: "Marketing Manager", department: "Marketing", location: "Delhi" },
    { title: "Customer Support Specialist", department: "Customer Service", location: "Remote" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Careers at FoodDelivery</h1>
          <p className="text-xl mb-8">Join our team and help shape the future of food delivery!</p>

          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <div className="grid gap-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="text-muted-foreground">
                  {job.department} • {job.location}
                </p>
                <Button className="mt-2">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

