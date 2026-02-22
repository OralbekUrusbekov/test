"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Bamboo interior"
          fill
          className={`object-cover transition-all duration-[2000ms] ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-block text-xs tracking-[0.4em] text-secondary/80 uppercase mb-6 border border-secondary/30 rounded-full px-6 py-2">
            Premium Bamboo Collection
          </span>
        </div>

        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-secondary leading-[0.95] mb-8 transition-all duration-1000 delay-500 text-balance ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="block">Natural</span>
          <span className="block italic text-accent">Elegance</span>
          <span className="block">For Your Home</span>
        </h1>

        <p
          className={`max-w-xl mx-auto text-secondary/70 text-base md:text-lg mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Discover our curated collection of sustainable bamboo panels,
          furniture, and decor that transforms any space into a sanctuary.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="/catalog"
            className="group flex items-center gap-3 bg-accent text-accent-foreground rounded-full px-8 py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-all hover:scale-105"
          >
            Browse Catalog
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#categories"
            className="flex items-center gap-3 border border-secondary/30 text-secondary rounded-full px-8 py-4 text-sm tracking-wide hover:bg-secondary/10 transition-all"
          >
            View Categories
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1500ms] ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-secondary/50 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>

      {/* Decorative corners */}
      <div
        className={`absolute top-28 left-8 w-20 h-20 border-l-2 border-t-2 border-accent/30 transition-all duration-1000 delay-[1200ms] ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
      <div
        className={`absolute bottom-28 right-8 w-20 h-20 border-r-2 border-b-2 border-accent/30 transition-all duration-1000 delay-[1200ms] ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
    </section>
  )
}
