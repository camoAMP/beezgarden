import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sprout,
  TreePine,
  Shovel,
  Sun,
  Flower2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services | Beez Garden Services",
  description:
    "Professional garden maintenance, lawn care, pruning, new setups and seasonal refresh services in South Africa.",
};

const services = [
  {
    title: "Garden Maintenance",
    description:
      "Keep your garden looking its best all year round with our regular maintenance plans. We handle watering, feeding, weeding, and general upkeep on a weekly or monthly schedule.",
    icon: Flower2,
    image: "/images/garden-maintenance.jpg",
    includes: [
      "Watering & feeding schedule",
      "Regular weeding",
      "Plant health monitoring",
      "Seasonal adjustments",
    ],
    recommended: ["Fertilizer blends", "Compost & soil", "Custom planters"],
  },
  {
    title: "Lawn Cutting & Edging",
    description:
      "Precision cuts and clean edges that make your lawn the envy of the neighbourhood. We use professional equipment to ensure a consistent, healthy cut every time.",
    icon: Scissors,
    image: "/images/lawn-service.jpg",
    includes: [
      "Precision mowing",
      "Clean edging & borders",
      "Clipping removal",
      "Lawn health assessment",
    ],
    recommended: ["Lawn fertilizer", "Grass seed", "Soil amendments"],
  },
  {
    title: "Weeding & Cleanup",
    description:
      "Thorough weeding and garden cleanup to restore order and beauty. We remove invasive plants and debris to give your garden a fresh start.",
    icon: Sprout,
    image: "/images/hero-garden.jpg",
    includes: [
      "Full bed weeding",
      "Debris removal",
      "Invasive plant control",
      "Mulch application",
    ],
    recommended: ["Mulch & compost", "Weed barrier fabric", "New seedlings"],
  },
  {
    title: "Pruning & Trimming",
    description:
      "Expert shaping and health care for your shrubs, hedges, and trees. Proper pruning promotes healthy growth and keeps your garden looking tidy.",
    icon: TreePine,
    image: "/images/garden-maintenance.jpg",
    includes: [
      "Hedge shaping",
      "Tree limb trimming",
      "Dead-heading flowers",
      "Shape maintenance",
    ],
    recommended: ["Growth fertilizer", "Pruning tools", "Soil & compost"],
  },
  {
    title: "New Garden Setups",
    description:
      "Complete garden design and installation from scratch. We plan the layout, prepare the soil, and install plants, borders, and features to create your dream garden.",
    icon: Shovel,
    image: "/images/new-garden.jpg",
    includes: [
      "Design consultation",
      "Soil preparation",
      "Plant selection & install",
      "Border & path creation",
    ],
    recommended: [
      "Custom 3D planters",
      "Premium soil & compost",
      "Starter plant bundles",
    ],
  },
  {
    title: "Seasonal Garden Refresh",
    description:
      "Prepare your garden for any season with our tailored refresh packages. We swap out seasonal plants, add colour, and ensure everything is ready for the months ahead.",
    icon: Sun,
    image: "/images/hero-garden.jpg",
    includes: [
      "Seasonal plant swap",
      "Colour planning",
      "Soil rejuvenation",
      "Protective treatments",
    ],
    recommended: [
      "Seasonal seed packs",
      "Organic fertilizer",
      "Decorative planters",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Page Hero */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              What We Do
            </p>
            <h1 className="mt-2 font-serif text-4xl text-primary-foreground md:text-5xl">
              Our Garden Services
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              From regular maintenance to full garden setups, we offer hands-on,
              professional care for every garden in South Africa.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-24">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:[direction:ltr]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:[direction:ltr]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* What's included */}
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        {"What's Included"}
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended products */}
                    <div className="mt-6 rounded-md bg-secondary p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Recommended Products
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {service.recommended.map((prod) => (
                          <Link
                            key={prod}
                            href="/shop"
                            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                          >
                            {prod}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="book" className="bg-secondary py-24">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-serif text-3xl text-secondary-foreground md:text-4xl">
              Book a Service
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Get in touch to schedule a garden service. We will get back to you
              within 24 hours with a quote.
            </p>
            <form className="mt-10 flex flex-col gap-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+27 ..."
                    className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your garden and what you need..."
                  className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button type="submit" size="lg" className="mt-2 gap-2">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
