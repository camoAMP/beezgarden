"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Seeds & Cuttings",
  "Garden Supplies",
  "Custom Planters",
  "Service Add-ons",
];

const products = [
  {
    id: 1,
    name: "Herb Seed Collection",
    category: "Seeds & Cuttings",
    price: 85,
    rating: 4.8,
    image: "/images/seeds-product.jpg",
    description: "6 essential herb varieties for your kitchen garden.",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Wildflower Mix Seeds",
    category: "Seeds & Cuttings",
    price: 55,
    rating: 4.6,
    image: "/images/seeds-product.jpg",
    description: "Native South African wildflower blend for colour all year.",
  },
  {
    id: 3,
    name: "Vegetable Starter Pack",
    category: "Seeds & Cuttings",
    price: 120,
    rating: 4.9,
    image: "/images/seeds-product.jpg",
    description: "Tomato, pepper, spinach & more to kickstart your veggie patch.",
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Organic Compost (25L)",
    category: "Garden Supplies",
    price: 95,
    rating: 4.7,
    image: "/images/garden-supplies.jpg",
    description: "Rich, organic compost for healthier soil and stronger plants.",
  },
  {
    id: 5,
    name: "Premium Potting Soil (30L)",
    category: "Garden Supplies",
    price: 110,
    rating: 4.8,
    image: "/images/garden-supplies.jpg",
    description: "Nutrient-packed potting mix for pots, beds, and containers.",
    badge: "Popular",
  },
  {
    id: 6,
    name: "All-Purpose Fertilizer",
    category: "Garden Supplies",
    price: 75,
    rating: 4.5,
    image: "/images/garden-supplies.jpg",
    description: "Slow-release formula to feed your garden for months.",
  },
  {
    id: 7,
    name: "Geo Hex Planter",
    category: "Custom Planters",
    price: 280,
    rating: 5.0,
    image: "/images/custom-planter.jpg",
    description: "Geometric hexagonal design, 3D-printed in eco-friendly PLA.",
    badge: "Custom",
  },
  {
    id: 8,
    name: "Wave Cylinder Planter",
    category: "Custom Planters",
    price: 320,
    rating: 4.9,
    image: "/images/planters-collection.jpg",
    description: "Elegant wave-textured cylinder planter for statement plants.",
    badge: "Custom",
  },
  {
    id: 9,
    name: "Personalised Name Planter",
    category: "Custom Planters",
    price: 350,
    rating: 5.0,
    image: "/images/custom-planter.jpg",
    description: "Custom planter with your house name or family name engraved.",
    badge: "Custom",
  },
  {
    id: 10,
    name: "Lawn Feed Bundle",
    category: "Service Add-ons",
    price: 180,
    rating: 4.7,
    image: "/images/garden-supplies.jpg",
    description: "Fertilizer + weed control for clients booking lawn services.",
  },
  {
    id: 11,
    name: "Herb Planting Add-on",
    category: "Service Add-ons",
    price: 220,
    rating: 4.8,
    image: "/images/seeds-product.jpg",
    description: "We plant a herb garden during your next service visit.",
  },
  {
    id: 12,
    name: "Mulch & Compost Delivery",
    category: "Service Add-ons",
    price: 150,
    rating: 4.6,
    image: "/images/garden-supplies.jpg",
    description: "Bulk mulch and compost delivered with your next service.",
  },
];

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Page Hero */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Garden Products
            </p>
            <h1 className="mt-2 font-serif text-4xl text-primary-foreground md:text-5xl">
              Shop Our Collection
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Seeds, supplies, custom planters, and service add-ons. Everything
              your garden needs from the people who maintain gardens every day.
            </p>
          </div>
        </section>

        {/* Filters + Products */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-6">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4">
              <Filter className="mr-1 h-4 w-4 shrink-0 text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    active === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {product.category}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-card-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">
                        R{product.price}
                      </span>
                      <Button size="sm" className="gap-1.5">
                        <ShoppingCart className="h-3.5 w-3.5" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Upsell Banner */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-2xl text-secondary-foreground md:text-3xl">
              Already a service client?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Add products to your next visit and we deliver and install at zero
              extra delivery cost. Ask us about bundled pricing for long-term
              clients.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/services#book">Book a Service</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
