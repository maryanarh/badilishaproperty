"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")
      if (!hero) return

      const heroHeight = hero.offsetHeight
      setIsScrolledPastHero(window.scrollY > heroHeight - 80)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { label: "ABOUT", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "WHY CHOOSE US", id: "why-choose" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolledPastHero
          ? "bg-[#f6f4ef]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3"
          >
            {<div className="px-2 py-1 rounded-xl">
              <img
                src="/home.webp"
                alt="Badilisha Properties"
                className="h-12 w-auto object-contain"
              />
            </div>}
          </button>

          {/* Centered Nav */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-10 font-serif tracking-wide">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm transition-colors ${
                    isScrolledPastHero
                      ? "text-slate-700 hover:text-emerald-700"
                      : "text-white/90 hover:text-emerald-300"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                isScrolledPastHero
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              Start Your Trade-In
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ml-auto p-2 rounded-lg transition-colors ${
              isScrolledPastHero ? "text-slate-700" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-[#f6f4ef] px-6 py-6 space-y-4 shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-center text-slate-700 font-serif tracking-wide text-lg hover:text-emerald-700 transition"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-xl font-semibold"
          >
            Start Your Trade-In
          </button>
        </div>
      </div>
    </header>
  )
}
