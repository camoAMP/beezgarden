import Image from "next/image";
import { Star, Shield, Truck, Users } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Star, label: "Google Reviews", value: "4.9" },
  { icon: Truck, label: "Deliveries Monthly", value: "150+" },
  { icon: Shield, label: "Years Experience", value: "5+" },
];

export function TrustSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/garden-maintenance.jpg"
              alt="Professional garden maintenance by Beez Garden Services"
              fill
              className="object-cover"
            />
          </div>

          {/* Content side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              Real garden professionals, not just another online shop
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We are a real, local garden services brand with products layered on
              top. When you buy from us, you are buying from professionals who
              maintain gardens every day. That is a credibility and trust
              advantage no generic store can match.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
