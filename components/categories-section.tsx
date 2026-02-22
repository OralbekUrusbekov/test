"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { categories } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const CategoryCard = memo(function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link
        href={`/catalog/${category.id}`}
        className="group relative block overflow-hidden rounded-2xl aspect-[3/4]"
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs tracking-[0.2em] text-accent uppercase mb-1 block">
                {category.productCount} products
              </span>
              <h3 className="font-serif text-2xl text-secondary mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-secondary/60 max-w-[200px] leading-relaxed">
                {category.description}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all group-hover:scale-110 group-hover:bg-accent/90">
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
})

export function CategoriesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="categories" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-1000 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
            Our Collections
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Explore by
              <br />
              <span className="italic text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
              From elegant wall panels to handcrafted furniture, discover
              bamboo products that bring nature into your everyday life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {categories.slice(3).map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
