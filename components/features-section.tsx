"use client"

import { Leaf, Shield, Truck, Recycle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "All products made from sustainably sourced bamboo",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Quality guaranteed with our comprehensive warranty",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on all orders within the country",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Zero-waste production with recyclable packaging",
  },
]

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-secondary">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-5">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
