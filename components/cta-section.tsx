import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl text-primary-foreground md:text-4xl">
          Ready to transform your garden?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80">
          Whether you need regular maintenance, a garden refresh, or custom
          planters, we have you covered. Book a service or browse our shop
          today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/services#book">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
          >
            <Link href="/shop">Shop Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
