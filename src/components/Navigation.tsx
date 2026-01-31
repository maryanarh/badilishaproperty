"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronRight } from "lucide-react"

export default function Navigation() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")
      if (!hero) return

      const heroHeight = hero.offsetHeight
      setIsScrolledPastHero(window.scrollY > heroHeight - 80)

      // Determine active section
      const sections = ["hero", "about", "services", "why-choose", "contact"]
      let current = "hero"
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId
          }
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

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
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledPastHero
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 sm:h-20">
          {/* Logo - Original styling kept */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3"
          >
            <div className="px-2 py-1 rounded-xl">
              <img
                src="/home.webp"
                alt="Badilisha Properties"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className={`hidden sm:block font-bold text-lg ${
              isScrolledPastHero ? "text-slate-800" : "text-white"
            }`}>
              Badilisha Properties
            </span>
          </button>

          {/* Centered Navigation - Desktop */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all ${
                    isScrolledPastHero
                      ? "text-slate-700 hover:text-emerald-700"
                      : "text-white/90 hover:text-white"
                  } ${
                    activeSection === link.id
                      ? isScrolledPastHero
                        ? "text-emerald-700"
                        : "text-emerald-300"
                      : ""
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                      isScrolledPastHero ? "bg-emerald-600" : "bg-emerald-400"
                    }`}></span>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center ml-auto">
            <button
              onClick={() => scrollToSection("contact")}
              className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all overflow-hidden ${
                isScrolledPastHero
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/20"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              <span>Start Your Trade-In</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ml-auto p-2 rounded-lg transition-colors ${
              isScrolledPastHero ? "text-slate-700" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        } ${
          isScrolledPastHero
            ? "bg-white shadow-lg border-t border-slate-100"
            : "bg-white/95 backdrop-blur-md border-t border-white/20"
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                activeSection === link.id
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="font-medium">{link.label}</span>
              {activeSection === link.id && (
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              )}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Start Your Trade-In
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Contact info in mobile menu */}
          <div className="pt-6 px-4 border-t border-slate-100">
            <p className="text-sm text-slate-600 text-center">
              Ready to make your move?
            </p>
            <p className="text-sm text-emerald-700 font-medium text-center mt-1">
              Let's talk about your property
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}