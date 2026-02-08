import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scissors, Sprout, TreePine, Shovel, Sun, Flower2 } from "lucide-react";

const services = [
  {
    title: "Garden Maintenance",
    description: "Weekly or monthly care to keep your garden thriving year-round.",
    icon: Flower2,
  },
  {
    title: "Lawn Cutting & Edging",
    description: "Precision cuts and clean edges for a picture-perfect lawn.",
    icon: Scissors,
  },
  {
    title: "Weeding & Cleanup",
    description: "Thorough weeding and garden cleanup to restore order and beauty.",
    icon: Sprout,
  },
  {
    title: "Pruning & Trimming",
    description: "Expert shaping and health care for shrubs, hedges, and trees.",
    icon: TreePine,
  },
  {
    title: "New Garden Setups",
    description: "Complete garden design and installation from scratch.",
    icon: Shovel,
  },
  {
    title: "Seasonal Refresh",
    description: "Prepare your garden for any season with our refresh packages.",
    icon: Sun,
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Hands-on care for every garden
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-auto pt-6 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
