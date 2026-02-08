import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Printer,
  Leaf,
  Palette,
  Ruler,
  Package,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Custom 3D Planters | Beez Garden Services",
  description:
    "Unique 3D-printed garden planters designed, printed, and delivered by real garden professionals. Personalise with your name, colour, and style.",
};

const planters = [
  {
    name: "Geo Hex Planter",
    price: 280,
    description:
      "Geometric hexagonal design that catches the light beautifully. Perfect for succulents and small herbs.",
    image: "/images/custom-planter.jpg",
    sizes: ["Small (10cm)", "Medium (15cm)", "Large (20cm)"],
  },
  {
    name: "Wave Cylinder Planter",
    price: 320,
    description:
      "Elegant wave-textured cylinder for statement plants. A modern touch for any patio or windowsill.",
    image: "/images/planters-collection.jpg",
    sizes: ["Medium (15cm)", "Large (20cm)", "XL (25cm)"],
  },
  {
    name: "Personalised Name Planter",
    price: 350,
    description:
      "Custom planter engraved with your house name, family name, or any text you choose. A truly unique gift.",
    image: "/images/custom-planter.jpg",
    sizes: ["Medium (15cm)", "Large (20cm)"],
  },
  {
    name: "Spiral Succulent Pot",
    price: 240,
    description:
      "Spiral design that creates a dramatic visual effect. Ideal for small succulents and cacti.",
    image: "/images/planters-collection.jpg",
    sizes: ["Small (10cm)", "Medium (15cm)"],
  },
  {
    name: "Terrace Stack Planter",
    price: 420,
    description:
      "Multi-tier stacking planter for growing herbs vertically. Saves space and looks incredible.",
    image: "/images/custom-planter.jpg",
    sizes: ["3-Tier", "5-Tier"],
  },
  {
    name: "Minimalist Cube Planter",
    price: 260,
    description:
      "Clean, modern cube design. Pairs beautifully in sets of 3 along a windowsill or shelf.",
    image: "/images/planters-collection.jpg",
    sizes: ["Small (8cm)", "Medium (12cm)", "Large (16cm)"],
  },
];

const process = [
  {
    icon: Palette,
    title: "Choose Your Design",
    description:
      "Browse our collection or tell us your vision. We can customise colours, shapes, and engravings.",
  },
  {
    icon: Ruler,
    title: "Select Size & Details",
    description:
      "Pick the perfect size for your space. Add personalised text, drainage holes, or matching saucers.",
  },
  {
    icon: Printer,
    title: "We Print It",
    description:
      "Each planter is 3D-printed in eco-friendly PLA material, right here in South Africa.",
  },
  {
    icon: Package,
    title: "Delivered or Installed",
    description:
      "We ship nationwide or hand-deliver during your next garden service visit at no extra cost.",
  },
];

export default function CustomPlantersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/planters-collection.jpg"
              alt="Collection of custom 3D-printed garden planters"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/65" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40">
            <p className="text-sm font-semibold uppercase tracking-widest text-background/60">
              Custom 3D-Printed Planters
            </p>
            <h1 className="mt-2 max-w-2xl font-serif text-4xl leading-tight text-background md:text-5xl lg:text-6xl">
              Designed, printed, and delivered by your local garden
              professionals
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
              Unique planters you cannot find anywhere else. Made with care in
              South Africa, by the same team that maintains your garden.
            </p>
            <Button asChild size="lg" className="mt-10 gap-2">
              <a href="#collection">
                Browse Collection
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                How It Works
              </p>
              <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                From idea to your garden in 4 steps
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planter Collection */}
        <section id="collection" className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Our Collection
                </p>
                <h2 className="mt-2 font-serif text-3xl text-secondary-foreground md:text-4xl">
                  Choose your style
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Every planter can be customised with your choice of colour,
                size, and personalised text. Prices shown are starting from.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {planters.map((planter) => (
                <div
                  key={planter.name}
                  className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={planter.image || "/placeholder.svg"}
                      alt={planter.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {planter.name}
                      </h3>
                      <span className="shrink-0 text-lg font-bold text-primary">
                        From R{planter.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {planter.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {planter.sizes.map((size) => (
                        <span
                          key={size}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                    <Button className="mt-5 w-full gap-2 bg-transparent" variant="outline">
                      Enquire Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Custom */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Why Custom Planters
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                  Not mass-produced. Made for you.
                </h2>
                <div className="mt-8 flex flex-col gap-6">
                  {[
                    {
                      title: "Eco-Friendly Material",
                      text: "Printed in PLA, a plant-based biodegradable plastic. Better for your garden and the planet.",
                    },
                    {
                      title: "Truly Personalised",
                      text: "Add names, dates, house numbers, or custom text. Choose from our colour palette or request your own.",
                    },
                    {
                      title: "Made by Garden Pros",
                      text: "We understand plants. Our designs include proper drainage and sizing for real plant care.",
                    },
                    {
                      title: "Free Delivery with Service",
                      text: "Order a planter and we install it during your next garden visit. No shipping fee.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Leaf className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/custom-planter.jpg"
                  alt="Close-up of a custom 3D-printed garden planter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl text-primary-foreground md:text-4xl">
              Have a custom idea in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/80">
              We love custom projects. Send us a sketch, a photo, or just
              describe what you want, and we will bring it to life.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/services#book">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent"
              >
                <Link href="/shop">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
