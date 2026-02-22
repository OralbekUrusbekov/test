import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { categories } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CatalogHero } from "@/components/catalog-hero"

export const metadata = {
  title: "Catalog | BAMBOO URBAN",
  description: "Browse our full collection of premium bamboo products",
}

export default function CatalogPage() {
  return (
    <main>
      <Navbar />
      <CatalogHero
        title="Our Catalog"
        subtitle="Explore all categories of premium bamboo products"
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/catalog/${category.id}`}
                className="group relative block overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-xs tracking-[0.2em] text-accent uppercase mb-1 block">
                        {category.productCount} products
                      </span>
                      <h3 className="font-serif text-3xl text-secondary mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-secondary/60 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shrink-0 transition-all group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
