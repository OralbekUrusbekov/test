import { notFound } from "next/navigation"
import { products, getProductById, getCategoryById } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export function generateStaticParams() {
  return products.map((p) => ({ productId: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params
  const product = getProductById(productId)
  if (!product) return { title: "Not Found" }
  return {
    title: `${product.name} | BAMBOO URBAN`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params
  const product = getProductById(productId)
  if (!product) notFound()

  const category = getCategoryById(product.category)

  return (
    <main>
      <Navbar />
      <ProductDetail product={product} categoryName={category?.name || ""} />
      <Footer />
    </main>
  )
}
