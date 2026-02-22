"use client"

import Link from "next/link"
import Image from "next/image"
import { memo, useState, useCallback } from "react"
import { ArrowRight } from "lucide-react"
import { type Product, formatPrice } from "@/lib/data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ProductCard = memo(function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const { ref, isVisible } = useScrollAnimation(0.1)

  const handleColorChange = useCallback(
    (i: number) => {
      if (i === selectedColor) return
      setTransitioning(true)
      setTimeout(() => {
        setSelectedColor(i)
        setTimeout(() => setTransitioning(false), 50)
      }, 150)
    },
    [selectedColor]
  )

  const mainImage =
    product.colors[selectedColor]?.images[0] ?? "/images/hero.jpg"

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image */}
        <Link
          href={`/catalog/product/${product.id}`}
          className="relative block overflow-hidden aspect-[4/3]"
        >
          <div
            className={`h-full w-full transition-opacity duration-200 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={mainImage}
              alt={`${product.name} - ${product.colors[selectedColor]?.name ?? ""}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {product.badge && (
            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs tracking-wider uppercase px-3 py-1.5 rounded-full font-medium z-10">
              {product.badge}
            </span>
          )}
        </Link>

        {/* Content */}
        <div className="p-6">
          <Link href={`/catalog/product/${product.id}`}>
            <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Price and colors */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              {formatPrice(product.price)}
            </span>
            <div className="flex items-center gap-2">
              {product.colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(i)}
                  className={`h-6 w-6 rounded-full border-2 transition-all hover:scale-110 ${
                    selectedColor === i
                      ? "border-primary scale-110"
                      : "border-border"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href={`/catalog/product/${product.id}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
})

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl text-muted-foreground">
            Products coming soon...
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This category is being prepared. Check back later for amazing bamboo
            products.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
