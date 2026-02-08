import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesPreview } from "@/components/services-preview";
import { ProductsPreview } from "@/components/products-preview";
import { TrustSection } from "@/components/trust-section";
import { CtaSection } from "@/components/cta-section";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesPreview />
        <ProductsPreview />
        <TrustSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
