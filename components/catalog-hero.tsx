"use client"

import { useEffect, useState } from "react"

export function CatalogHero({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative pt-32 pb-16 bg-primary overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1
          className={`font-serif text-4xl md:text-6xl text-primary-foreground mb-4 transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-primary-foreground/60 text-lg max-w-xl mx-auto transition-all duration-700 delay-200 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
