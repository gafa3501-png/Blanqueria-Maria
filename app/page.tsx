import { AboutSection } from '@/components/about-section'
import { CategoriesSection } from '@/components/categories-section'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { LocationSection } from '@/components/location-section'
import { ProductsSection } from '@/components/products-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <ProductsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
