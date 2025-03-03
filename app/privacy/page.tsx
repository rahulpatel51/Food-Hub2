import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>
              At FoodDelivery, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our mobile application.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, place an
              order, or contact our customer support. This may include your name, email address, phone number, delivery
              address, and payment information.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              send you notifications, and communicate with you about promotions and updates.
            </p>
            <h2>Sharing of Information</h2>
            <p>
              We may share your information with restaurants to fulfill your orders, and with service providers who
              perform services on our behalf. We do not sell your personal information to third parties.
            </p>
            <h2>Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please note that no method of transmission over the Internet or electronic storage
              is 100% secure.
            </p>
            <h2>Your Choices</h2>
            <p>
              You can access, update, or delete your account information at any time by logging into your account
              settings. You may also opt-out of receiving promotional communications from us by following the
              instructions in those messages.
            </p>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>Last Updated: June 1, 2023</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

