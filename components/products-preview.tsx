import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";

const categories = [
  {
    title: "Seeds & Cuttings",
    description: "Locally sourced herb, flower, and vegetable seeds for every garden.",
    image: withBasePath("/images/seeds-product.jpg"),
    href: "/shop",
  },
  {
    title: "Garden Supplies",
    description: "Premium fertilizers, compost, soil, and tools of the trade.",
    image: withBasePath("/images/garden-supplies.jpg"),
    href: "/shop",
  },
  {
    title: "Custom 3D Planters",
    description:
      "Designed, printed, and delivered by your local garden professionals.",
    image: withBasePath("/images/custom-planter.jpg"),
    href: "/custom-planters",
  },
];

export function ProductsPreview() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Shop Garden Products
          </p>
          <h2 className="mx-auto mt-2 max-w-xl font-serif text-3xl text-secondary-foreground md:text-4xl">
            Everything your garden needs, delivered
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Browse
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/shop">View Full Shop</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
