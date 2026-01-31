"use client"

import { ArrowRight, MessageCircle } from "lucide-react"

export default function Hero() {
  const scrollToServiceChooser = () => {
    const element = document.getElementById("scenarios")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const openContact = () => {
    const section = document.getElementById("contact")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[60vh] sm:min-h-[80vh] lg:min-h-[95vh]
        overflow-hidden
        pt-16 pb-16 sm:pt-16 sm:pb-20
        text-white
        bg-no-repeat
        bg-cover
        bg-[center_5  0%]
        sm:bg-center
      "
      style={{
        backgroundImage: "url('/Background.webp')",
      }}
    >
      {/* Overlay — slightly lighter on mobile so details show */}
      <div className="absolute inset-0 bg-black/35 sm:bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 items-start h-full">
          <div className="space-y-6 sm:space-y-7 max-w-xl">
            {/* MOVED: Trust Badge to the top */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium text-emerald-200 shadow-sm">
              🇰🇪 Trusted by homeowners across Kenya
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Stuck in a property that doesn't fit? <br />
              <span className="text-emerald-300">
                Trade, swap, or sell with confidence.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 drop-shadow">
              Badilisha Properties Limited isn’t a typical real estate agency.
              We help people move from one stage of life to the next by using
              property as a tool and not as the final goal.
            </p>

            <p className="text-base sm:text-lg text-white/90 drop-shadow">
              We start with where you’re going, not just what you’re selling.
              Badilisha bridges you to your next home through a smarter,
              calmer transition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToServiceChooser}
                className="group flex items-center justify-center gap-2 bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-xl transition-all"
              >
                <span>Find Your Next Position</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openContact}
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md text-white px-7 py-3.5 rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Talk to Us</span>
              </button>
            </div>

            {/* ADDED: Serving line with a top border (just this) */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/70">
                Serving homeowners, families, and developers across Kenya
              </p>
            </div>
          </div>

          {/* Right column left empty intentionally (same as original) */}
          <div />
        </div>
      </div>

      {/* Scroll Indicator (cursor) added at bottom center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
