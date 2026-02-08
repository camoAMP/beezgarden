"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "Custom Planters", href: "/custom-planters" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu when navigating between routes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 relative">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex h-full items-center">
            <Image
              src={withBasePath("/images/logo.png")}
              alt="Bee's Garden Service - Buzzing into a Greener Garden"
              width={240}
              height={72}
              className="h-full w-auto max-w-[60vw] object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/services#book">Book a Service</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="absolute left-0 right-0 top-full border-t border-border bg-background/95 px-4 pb-6 pt-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden sm:px-6"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link href="/services#book" onClick={() => setMobileOpen(false)}>
                  Book a Service
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
