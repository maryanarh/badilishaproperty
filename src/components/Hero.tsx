"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
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

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/254700000000?text=Hello%20I%20am%20interested%20in%20a%20property%20swap",
      "_blank"
    )
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24 lg:pt-36 pb-24 text-slate-900"
    >
      {/* === SHADER BACKGROUND === */}
      <MeshGradient
        className="absolute inset-0"
        colors={[
          "#ffffff",
          "#10b981",
          "#044941",
          "#0f766e",
          "#000000",
        ]}
        speed={0.25}
        backgroundColor="#ffffff"
      />

      <MeshGradient
        className="absolute inset-0 opacity-60"
        colors={[
          "#ffffff",
          "#10b981",
          "#14b8a6",
          "#f0fdfa",
        ]}
        speed={0.15}
        backgroundColor="transparent"
      />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Trade In your home. <br />
                <span className="text-emerald-600">
                  Move forward
                </span>{" "}
                without selling first.
              </h1>

              <p className="text-xl leading-relaxed max-w-lg">
                Badilisha helps you Trade, Sell, or Partition property so life keeps moving. Simple, direct, and local.
              </p>
            </div>

            {/* Glass pill */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium text-emerald-700 shadow-sm">
              🇰🇪 Trusted by homeowners across Kenya
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServiceChooser}
                className="group flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-xl transition-all"
              >
                <span>Find Your Swap Match</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md text-emerald-700 px-8 py-4 rounded-xl font-semibold border border-white/40 hover:bg-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Talk to Us</span>
              </button>
            </div>
            
          </div>

          {/* RIGHT */}
          {/*<div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/30">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
                alt="Cozy Kenyan home interior with warm natural lighting"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}