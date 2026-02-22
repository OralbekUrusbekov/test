"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-secondary/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="font-serif text-lg text-primary-foreground">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
                  Bamboo
                </span>
                <span className="text-[10px] tracking-[0.3em] text-secondary/60 uppercase">
                  Urban
                </span>
              </div>
            </div>
            <p className="text-sm text-secondary/50 leading-relaxed">
              Premium bamboo products for sustainable modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-secondary uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/catalog" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Catalog
              </Link>
              <Link href="/#about" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/#categories" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Categories
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-secondary uppercase mb-4">
              Categories
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/catalog/panels" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Bamboo Panels
              </Link>
              <Link href="/catalog/furniture" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Urban Furniture
              </Link>
              <Link href="/catalog/decor" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Home Decor
              </Link>
              <Link href="/catalog/outdoor" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                Outdoor
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-secondary uppercase mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-secondary/60">Almaty, Kazakhstan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <a href="tel:+77001234567" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                  +7 700 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:info@bamboo-urban.kz" className="text-sm text-secondary/60 hover:text-accent transition-colors">
                  info@bamboo-urban.kz
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/10 mt-12 pt-8 text-center">
          <p className="text-xs text-secondary/40">
            &copy; 2026 Bamboo Urban. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
