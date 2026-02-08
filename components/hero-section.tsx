import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/images/hero-garden.jpg")}
          alt="Lush South African garden maintained by Beez Garden Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-32 md:py-44">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-background/70">
          Based in South Africa
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-background md:text-6xl lg:text-7xl">
          Professional Garden Services & Custom Garden Products
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
          A full-service garden company with local, hands-on expertise and
          online convenience. We maintain your garden and craft custom products
          you will love.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="/services#book">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent"
          >
            <Link href="/shop">Shop Garden Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
