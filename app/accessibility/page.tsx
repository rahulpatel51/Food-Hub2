import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function AccessibilityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
          <div className="prose max-w-none">
            <p>
              FoodDelivery is committed to ensuring digital accessibility for people with disabilities. We are
              continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>
            <h2>Measures to support accessibility</h2>
            <p>
              FoodDelivery takes the following measures to ensure accessibility of our website and mobile application:
            </p>
            <ul>
              <li>Include accessibility as part of our mission statement.</li>
              <li>Integrate accessibility into our procurement practices.</li>
              <li>Provide continual accessibility training for our staff.</li>
              <li>Include people with disabilities in our design personas.</li>
            </ul>
            <h2>Conformance status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level
              AA, and Level AAA. FoodDelivery is partially conformant with WCAG 2.1 level AA. Partially conformant means
              that some parts of the content do not fully conform to the accessibility standard.
            </p>
            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of FoodDelivery. Please let us know if you encounter
              accessibility barriers on FoodDelivery:
            </p>
            <ul>
              <li>Phone: [Your phone number]</li>
              <li>E-mail: [Your accessibility email]</li>
              <li>Visitor address: [Your office address]</li>
            </ul>
            <p>We try to respond to feedback within 5 business days.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

