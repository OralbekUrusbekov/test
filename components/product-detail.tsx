"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Check,
  ArrowLeft,
  Package,
  Ruler,
  Palette,
} from "lucide-react"
import { type Product, formatPrice } from "@/lib/data"

export function ProductDetail({
  product,
  categoryName,
}: {
  product: Product
  categoryName: string
}) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [imageTransitioning, setImageTransitioning] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const currentColorImages = product.colors[selectedColor]?.images ?? []

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % currentColorImages.length)
  }, [currentColorImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentColorImages.length) % currentColorImages.length
    )
  }, [currentColorImages.length])

  const handleColorChange = useCallback((index: number) => {
    if (index === selectedColor) return
    setImageTransitioning(true)
    setTimeout(() => {
      setSelectedColor(index)
      setCurrentImageIndex(0)
      setTimeout(() => setImageTransitioning(false), 50)
    }, 200)
  }, [selectedColor])

  return (
    <section className="pt-28 pb-20 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className={`flex items-center gap-2 text-sm text-muted-foreground mb-8 transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/catalog"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Catalog
          </Link>
          <span>/</span>
          <Link
            href={`/catalog/${product.category}`}
            className="hover:text-primary transition-colors"
          >
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden bg-secondary aspect-square mb-4 group">
              <div
                className={`h-full w-full transition-opacity duration-300 ${
                  imageTransitioning ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
                }`}
              >
                <Image
                  src={currentColorImages[currentImageIndex] ?? "/images/hero.jpg"}
                  alt={`${product.name} - ${product.colors[selectedColor]?.name ?? "view"}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-6 left-6 bg-accent text-accent-foreground text-xs tracking-wider uppercase px-4 py-2 rounded-full font-medium z-10">
                  {product.badge}
                </span>
              )}

              {/* Navigation arrows */}
              {currentColorImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-card z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </>
              )}

              {/* Image counter */}
              {currentColorImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-secondary z-10">
                  {currentImageIndex + 1} / {currentColorImages.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {currentColorImages.map((img, i) => (
                <button
                  key={`${selectedColor}-${i}`}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`relative rounded-xl overflow-hidden w-20 h-20 border-2 transition-all ${
                    currentImageIndex === i
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              loaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            {/* Category tag */}
            <span className="inline-block text-xs tracking-[0.3em] text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">
              {categoryName}
            </span>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight text-balance">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-primary mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
                <Palette className="h-4 w-4 text-primary" />
                Color:{" "}
                <span className="text-primary font-semibold">
                  {product.colors[selectedColor]?.name}
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(i)}
                    className={`relative flex items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all hover:scale-[1.02] ${
                      selectedColor === i
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className="h-8 w-8 rounded-full border border-border shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm text-foreground">{color.name}</span>
                    {selectedColor === i && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground mb-4">
                <Ruler className="h-4 w-4 text-primary" />
                Specifications
              </h3>
              <div className="rounded-2xl border border-border overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-5 py-3.5 ${
                      i % 2 === 0 ? "bg-secondary/50" : "bg-card"
                    }`}
                  >
                    <span className="text-sm text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+77001234567"
                className="flex items-center justify-center gap-3 bg-primary text-primary-foreground rounded-full px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Order Now
              </a>
              <a
                href="https://wa.me/77001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-primary text-primary rounded-full px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Package className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent" />
                Free Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent" />
                5-Year Warranty
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent" />
                Easy Returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
