"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "500+", label: "Products" },
  { value: "12", label: "Years" },
  { value: "10K+", label: "Clients" },
  { value: "98%", label: "Satisfaction" },
]

export function AboutSection() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/about.jpg"
                alt="Bamboo grove"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl max-w-[200px]">
              <span className="font-serif text-4xl text-primary block">12+</span>
              <span className="text-sm text-muted-foreground">
                Years of crafting premium bamboo products
              </span>
            </div>
          </div>

          {/* Text content */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 delay-300 ${
              textVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            <span className="text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
              Crafting Nature
              <br />
              <span className="italic text-primary">Into Design</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              We believe that the best designs are inspired by nature. Our bamboo
              products are crafted with care, combining traditional techniques with
              modern aesthetics to create pieces that are both beautiful and sustainable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
              Each product in our collection tells a story of craftsmanship, from
              the carefully selected bamboo stems to the final polished piece
              delivered to your home.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="font-serif text-3xl text-primary block">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
