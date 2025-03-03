import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p>
              Welcome to FoodDelivery. By using our website and mobile application, you agree to comply with and be
              bound by the following terms and conditions of use. Please review these terms carefully before using our
              service.
            </p>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the FoodDelivery platform, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any part of these terms, you may not use our
              service.
            </p>
            <h2>2. Use of Service</h2>
            <p>
              You may use FoodDelivery to browse available restaurants, place orders, and arrange for delivery. You
              agree to provide accurate and complete information when creating an account or placing an order.
            </p>
            <h2>3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept
              responsibility for all activities that occur under your account.
            </p>
            <h2>4. Ordering and Payment</h2>
            <p>
              When you place an order through FoodDelivery, you agree to pay the full amount charged for your order,
              including any applicable taxes and delivery fees. All payments are processed securely through our
              platform.
            </p>
            <h2>5. Delivery and Cancellation</h2>
            <p>
              Delivery times are estimates and may vary based on factors outside of our control. Cancellation policies
              may vary by restaurant and are clearly communicated at the time of ordering.
            </p>
            <h2>6. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, and other matters related to FoodDelivery are protected under
              applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication of any
              such matters or any part of the platform is strictly prohibited.
            </p>
            <h2>7. Limitation of Liability</h2>
            <p>
              FoodDelivery shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages
              resulting from your use of the service.
            </p>
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify users of any significant
              changes by posting a notice on our website.
            </p>
            <p>Last Updated: June 1, 2023</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

