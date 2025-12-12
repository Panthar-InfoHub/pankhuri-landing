import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyPankhuri } from "@/components/why-pankhuri"
import { CourseCurriculum } from "@/components/course-curriculum"
import { HowItWorks } from "@/components/how-it-works"
import { CertificateSection } from "@/components/certificate-section"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyPankhuri />
      <CourseCurriculum />
      <HowItWorks />
      <CertificateSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
