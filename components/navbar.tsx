"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
              <span className="font-serif text-lg text-primary-foreground">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
                Bamboo
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Urban
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm tracking-wide text-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/catalog"
              className="text-sm tracking-wide text-foreground transition-colors hover:text-primary"
            >
              Catalog
            </Link>
            <Link
              href="/#about"
              className="text-sm tracking-wide text-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <a
              href="tel:+77001234567"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <Phone className="h-3.5 w-3.5" />
              +7 700 123 45 67
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wide text-foreground py-2 border-b border-border"
          >
            Home
          </Link>
          <Link
            href="/catalog"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wide text-foreground py-2 border-b border-border"
          >
            Catalog
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wide text-foreground py-2 border-b border-border"
          >
            About
          </Link>
          <a
            href="tel:+77001234567"
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            +7 700 123 45 67
          </a>
        </div>
      </div>
    </nav>
  )
}
