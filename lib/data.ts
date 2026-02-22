export interface ColorVariant {
  name: string
  hex: string
  images: string[]
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  specs: { label: string; value: string }[]
  colors: ColorVariant[]
  badge?: string
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "panels",
    name: "Bamboo Panels",
    description: "Premium wall and ceiling panels crafted from natural bamboo",
    image: "/images/category-panels.jpg",
    productCount: 12,
  },
  {
    id: "furniture",
    name: "Urban Furniture",
    description: "Modern minimalist furniture made with sustainable bamboo",
    image: "/images/category-furniture.jpg",
    productCount: 8,
  },
  {
    id: "decor",
    name: "Home Decor",
    description: "Elegant bamboo accessories and decorative elements",
    image: "/images/category-decor.jpg",
    productCount: 15,
  },
  {
    id: "outdoor",
    name: "Outdoor Collection",
    description: "Weather-resistant bamboo products for gardens and terraces",
    image: "/images/category-outdoor.jpg",
    productCount: 6,
  },
  {
    id: "flooring",
    name: "Bamboo Flooring",
    description: "Durable and beautiful bamboo flooring solutions",
    image: "/images/category-flooring.jpg",
    productCount: 10,
  },
]

export const products: Product[] = [
  {
    id: "panel-natural-classic",
    name: "Natural Classic Panel",
    category: "panels",
    price: 12500,
    description:
      "Our signature bamboo wall panel in natural light finish. Perfect for living rooms and bedrooms, this panel brings warmth and organic texture to any interior space. Each panel is carefully selected and treated for long-lasting beauty.",
    specs: [
      { label: "Material", value: "100% Natural Bamboo" },
      { label: "Dimensions", value: "2400 x 600 x 12mm" },
      { label: "Weight", value: "3.2 kg per panel" },
      { label: "Coverage", value: "1.44 m2 per panel" },
      { label: "Finish", value: "Matte lacquer" },
      { label: "Installation", value: "Click-lock system" },
    ],
    colors: [
      {
        name: "Natural",
        hex: "#d4b896",
        images: ["/images/product-panel-1.jpg", "/images/category-panels.jpg"],
      },
      {
        name: "Carbonized",
        hex: "#8b6914",
        images: ["/images/product-panel-2.jpg", "/images/category-panels.jpg"],
      },
      {
        name: "Tiger",
        hex: "#a0522d",
        images: ["/images/product-panel-3.jpg", "/images/category-panels.jpg"],
      },
      {
        name: "White Wash",
        hex: "#e8dcc8",
        images: ["/images/product-panel-1.jpg", "/images/category-panels.jpg"],
      },
    ],
    badge: "Bestseller",
  },
  {
    id: "panel-carbonized-dark",
    name: "Carbonized Dark Panel",
    category: "panels",
    price: 14800,
    description:
      "Rich, deep tones created through a specialized carbonization process. These panels bring sophistication and drama to modern interiors with their distinctive dark finish.",
    specs: [
      { label: "Material", value: "Carbonized Bamboo" },
      { label: "Dimensions", value: "2400 x 600 x 12mm" },
      { label: "Weight", value: "3.4 kg per panel" },
      { label: "Coverage", value: "1.44 m2 per panel" },
      { label: "Finish", value: "Semi-gloss lacquer" },
      { label: "Installation", value: "Click-lock system" },
    ],
    colors: [
      {
        name: "Dark Brown",
        hex: "#3e2723",
        images: ["/images/product-panel-2.jpg", "/images/category-panels.jpg"],
      },
      {
        name: "Espresso",
        hex: "#4e342e",
        images: ["/images/product-panel-3.jpg", "/images/category-panels.jpg"],
      },
      {
        name: "Walnut",
        hex: "#5d4037",
        images: ["/images/product-panel-1.jpg", "/images/category-panels.jpg"],
      },
    ],
    badge: "New",
  },
  {
    id: "panel-tiger-stripe",
    name: "Tiger Stripe Panel",
    category: "panels",
    price: 16200,
    description:
      "A stunning pattern that showcases the natural variations in bamboo. The tiger stripe effect is achieved through careful heat treatment, creating a unique and eye-catching finish.",
    specs: [
      { label: "Material", value: "Heat-treated Bamboo" },
      { label: "Dimensions", value: "2400 x 600 x 14mm" },
      { label: "Weight", value: "3.6 kg per panel" },
      { label: "Coverage", value: "1.44 m2 per panel" },
      { label: "Finish", value: "Oil finish" },
      { label: "Installation", value: "Tongue & groove" },
    ],
    colors: [
      {
        name: "Tiger Natural",
        hex: "#c68642",
        images: ["/images/product-panel-3.jpg", "/images/category-panels.jpg"],
      },
      {
        name: "Tiger Dark",
        hex: "#8b5e3c",
        images: ["/images/product-panel-2.jpg", "/images/category-panels.jpg"],
      },
    ],
  },
  {
    id: "dining-table-modern",
    name: "Urban Dining Table",
    category: "furniture",
    price: 89000,
    description:
      "A statement piece for your dining room. This table combines the natural beauty of bamboo with clean, modern lines. Seats 6-8 comfortably with its generous proportions.",
    specs: [
      { label: "Material", value: "Solid Bamboo" },
      { label: "Dimensions", value: "180 x 90 x 75cm" },
      { label: "Weight", value: "35 kg" },
      { label: "Seats", value: "6-8 persons" },
      { label: "Finish", value: "Water-resistant lacquer" },
      { label: "Assembly", value: "Easy 4-bolt assembly" },
    ],
    colors: [
      {
        name: "Natural",
        hex: "#d4b896",
        images: [
          "/images/product-furniture-1.jpg",
          "/images/category-furniture.jpg",
        ],
      },
      {
        name: "Dark Oak",
        hex: "#5c4033",
        images: [
          "/images/product-furniture-2.jpg",
          "/images/category-furniture.jpg",
        ],
      },
      {
        name: "Honey",
        hex: "#c4a265",
        images: [
          "/images/product-furniture-3.jpg",
          "/images/category-furniture.jpg",
        ],
      },
    ],
    badge: "Popular",
  },
  {
    id: "bookshelf-open",
    name: "Open Bamboo Bookshelf",
    category: "furniture",
    price: 45000,
    description:
      "An elegant open bookshelf designed to display your books and treasures. The open design creates a light, airy feel that perfectly complements modern interiors.",
    specs: [
      { label: "Material", value: "Laminated Bamboo" },
      { label: "Dimensions", value: "120 x 35 x 180cm" },
      { label: "Weight", value: "22 kg" },
      { label: "Shelves", value: "5 adjustable shelves" },
      { label: "Max Load", value: "15 kg per shelf" },
      { label: "Assembly", value: "Wall mount included" },
    ],
    colors: [
      {
        name: "Natural",
        hex: "#d4b896",
        images: [
          "/images/product-furniture-2.jpg",
          "/images/category-furniture.jpg",
        ],
      },
      {
        name: "Charcoal",
        hex: "#36454f",
        images: [
          "/images/product-furniture-3.jpg",
          "/images/category-furniture.jpg",
        ],
      },
    ],
  },
  {
    id: "side-table-minimal",
    name: "Minimal Side Table",
    category: "furniture",
    price: 22000,
    description:
      "A compact side table with clean geometry. Perfect next to a sofa or as a nightstand. The minimal design lets the natural bamboo grain take center stage.",
    specs: [
      { label: "Material", value: "Solid Bamboo" },
      { label: "Dimensions", value: "45 x 45 x 55cm" },
      { label: "Weight", value: "5.5 kg" },
      { label: "Finish", value: "Matte lacquer" },
      { label: "Max Load", value: "20 kg" },
      { label: "Assembly", value: "Pre-assembled" },
    ],
    colors: [
      {
        name: "Natural",
        hex: "#d4b896",
        images: [
          "/images/product-furniture-3.jpg",
          "/images/category-furniture.jpg",
        ],
      },
      {
        name: "Black Wash",
        hex: "#2c2c2c",
        images: [
          "/images/product-furniture-1.jpg",
          "/images/category-furniture.jpg",
        ],
      },
      {
        name: "Olive",
        hex: "#556b2f",
        images: [
          "/images/product-furniture-2.jpg",
          "/images/category-furniture.jpg",
        ],
      },
    ],
  },
  {
    id: "pendant-lamp-woven",
    name: "Woven Pendant Lamp",
    category: "decor",
    price: 18500,
    description:
      "Hand-woven bamboo pendant lamp that creates beautiful light patterns on walls and ceilings. Each lamp is unique due to the artisanal weaving process.",
    specs: [
      { label: "Material", value: "Hand-woven Bamboo" },
      { label: "Dimensions", value: "40cm diameter, 35cm height" },
      { label: "Bulb", value: "E27, max 60W (LED recommended)" },
      { label: "Cord Length", value: "150cm adjustable" },
      { label: "Weight", value: "1.2 kg" },
      { label: "Certification", value: "CE certified" },
    ],
    colors: [
      {
        name: "Natural",
        hex: "#d4b896",
        images: ["/images/product-decor-1.jpg", "/images/category-decor.jpg"],
      },
      {
        name: "Black",
        hex: "#1a1a1a",
        images: ["/images/product-decor-2.jpg", "/images/category-decor.jpg"],
      },
    ],
    badge: "Handmade",
  },
  {
    id: "storage-baskets-set",
    name: "Storage Basket Set",
    category: "decor",
    price: 8500,
    description:
      "A set of three nesting storage baskets in graduated sizes. Perfect for organizing living spaces while adding natural texture and warmth.",
    specs: [
      { label: "Material", value: "Woven Bamboo" },
      { label: "Set Contents", value: "3 baskets (S, M, L)" },
      { label: "Large Size", value: "35 x 25 x 20cm" },
      { label: "Medium Size", value: "30 x 20 x 17cm" },
      { label: "Small Size", value: "25 x 15 x 14cm" },
      { label: "Care", value: "Wipe with damp cloth" },
    ],
    colors: [
      {
        name: "Natural",
        hex: "#d4b896",
        images: ["/images/product-decor-2.jpg", "/images/category-decor.jpg"],
      },
      {
        name: "White",
        hex: "#f0ece4",
        images: ["/images/product-decor-1.jpg", "/images/category-decor.jpg"],
      },
      {
        name: "Grey",
        hex: "#9e9e9e",
        images: ["/images/product-decor-2.jpg", "/images/category-decor.jpg"],
      },
    ],
  },
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("kk-KZ").format(price) + " tg"
}
