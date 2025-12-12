import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubscriptionHero } from "@/components/subscription-hero"
import { SubscriptionReasons } from "@/components/subscription-reasons"
import { SubscriptionStats } from "@/components/subscription-stats"
import { SubscriptionPricing } from "@/components/subscription-pricing"

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SubscriptionHero />
      <SubscriptionStats />
      <SubscriptionReasons />
      <SubscriptionPricing />
      <Footer />
    </main>
  )
}
