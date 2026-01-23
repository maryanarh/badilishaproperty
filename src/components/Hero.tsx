"use client"

import { ArrowRight, MessageCircle, Repeat, Search, Home } from "lucide-react"
import { MeshGradient } from "@paper-design/shaders-react"

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
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    };


  return (
    <section
      id="hero"
      className="relative min-h-[75vh] lg:min-h-[90vh] overflow-hidden pt-24 pb-24 text-slate-900"
    >
      {/* === SHADER BACKGROUND === */}
      <MeshGradient
        className="absolute inset-0"
        colors={["#7bd0df", "#10b981", "#016b31", "#488a12"]}
        speed={0.25}
      />

      <MeshGradient
        className="absolute inset-0 opacity-60"
        colors={["#067768", "#e2e9e8", "#aecec6"]}
        speed={0.15}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* LEFT */}
          <div className="space-y-7">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Property isn’t just something you sell. <br />
              <span className="text-emerald-700">
                It’s where your life is positioned.
              </span>
            </h1>

            <p className="text-x1 max-w-xl text-slate-900">
              Badilisha Properties Limited is not a traditional real estate agency.
              We help people move from one life position to another through using property
              as the engine, not the end goal.
            </p>

            <p className="text-base max-w-lg text-slate-800">
              Instead of asking how much a property can sell for, we focus on where
              you need to go next—and how to get you there without breaking your
              capital, timeline, or peace of mind.
            </p>

            {/* Trust pill */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-sm font-medium text-emerald-700 shadow-sm">
              🇰🇪 Trusted by homeowners across Kenya
            </div>

            {/* CTAs */}
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
                  className="flex items-center justify-center gap-2 
                            bg-white/80 backdrop-blur-md 
                            text-emerald-700 
                            px-7 py-3.5 rounded-xl font-semibold 
                            border border-white/40 
                            hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200
                            transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Talk to Us</span>
                </button>

            </div>
          </div>

          {/* RIGHT – PROOF + FLOW */}
          <div className="hidden lg:block">
            <div className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl p-8 space-y-6">
              {/* Flow */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <Repeat className="w-6 h-6 mx-auto text-emerald-600" />
                  <p className="text-sm font-medium">Reposition</p>
                </div>
                <div className="space-y-2">
                  <Search className="w-6 h-6 mx-auto text-emerald-600" />
                  <p className="text-sm font-medium">Match</p>
                </div>
                <div className="space-y-2">
                  <Home className="w-6 h-6 mx-auto text-emerald-600" />
                  <p className="text-sm font-medium">Move Forward</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-emerald-600/20" />

              {/* Proof */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-emerald-700">100+</p>
                  <p className="text-2x1 text-slate-600">
                    Successful property transitions
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-700">Fair Value</p>
                  <p className="text-2x1 text-slate-600">
                    Transparent pricing & execution
                  </p>
                </div>
              </div>

              {/* Micro testimonial */}
              <p className="text-base italic text-slate-700">
                “We didn’t just sell a house. We moved forward.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
