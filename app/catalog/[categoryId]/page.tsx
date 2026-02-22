import { notFound } from "next/navigation"
import { categories, getProductsByCategory, getCategoryById } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CatalogHero } from "@/components/catalog-hero"
import { ProductGrid } from "@/components/product-grid"
import { CategoryNav } from "@/components/category-nav"

export function generateStaticParams() {
  return categories.map((cat) => ({ categoryId: cat.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  if (!category) return { title: "Not Found" }
  return {
    title: `${category.name} | BAMBOO URBAN`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  if (!category) notFound()

  const products = getProductsByCategory(categoryId)

  return (
    <main>
      <Navbar />
      <CatalogHero title={category.name} subtitle={category.description} />
      <CategoryNav activeId={categoryId} />
      <ProductGrid products={products} />
      <Footer />
    </main>
  )
}
