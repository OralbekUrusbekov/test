"use client"

import Link from "next/link"
import { categories } from "@/lib/data"

export function CategoryNav({ activeId }: { activeId: string }) {
  return (
    <div className="bg-secondary border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
          <Link
            href="/catalog"
            className="shrink-0 rounded-full px-5 py-2 text-sm tracking-wide text-muted-foreground hover:text-foreground hover:bg-background transition-all"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog/${cat.id}`}
              className={`shrink-0 rounded-full px-5 py-2 text-sm tracking-wide transition-all ${
                activeId === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-background"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
