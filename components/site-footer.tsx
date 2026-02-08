import Link from "next/link";
import Image from "next/image";
import { Leaf } from "@/components/icons"; // Declare the Leaf component

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Bee's Garden Service - Buzzing into a Greener Garden"
                width={200}
                height={60}
                className="h-14 w-auto rounded object-contain brightness-110"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              A full-service garden company — services, supplies, and custom
              garden products. Based in South Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Lawn Cutting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Pruning & Trimming
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  New Garden Setups
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/shop"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Seeds & Cuttings
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Garden Supplies
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-planters"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Custom 3D Planters
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  Service Add-ons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm opacity-70">hello@beezgarden.co.za</li>
              <li className="text-sm opacity-70">+27 12 345 6789</li>
              <li className="text-sm opacity-70">Pretoria, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} Beez Garden Services. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-xs opacity-50 transition-opacity hover:opacity-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xs opacity-50 transition-opacity hover:opacity-100"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
