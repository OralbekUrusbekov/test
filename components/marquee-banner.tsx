"use client"

const items = [
  "Bamboo Panels",
  "Urban Furniture",
  "Home Decor",
  "Sustainable Design",
  "Natural Materials",
  "Modern Living",
  "Eco-Friendly",
  "Handcrafted",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm tracking-[0.3em] text-primary-foreground/80 uppercase"
          >
            {item}
            <span className="mx-8 text-accent">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
