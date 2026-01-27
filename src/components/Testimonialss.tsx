"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  User
} from "lucide-react";

const testimonials = [
  {
    name: "Grace Muthoni.",
    service: "Property Trade-In & Swap",
    location: "Nairobi",
    avatar: User,
    rating: 5,
    text:
      "We needed a bigger home, but selling first felt risky. Badilisha matched our property with the right buyer, handled valuations transparently, and coordinated everything so we only moved once. The process felt calm, structured, and fair.",
    results: [
      "Single move-in window",
      "No forced sale",
      "Fair value exchange"
    ]
  },
  {
    name: "David Otieno.",
    service: "Property Trade-In",
    location: "Ruaka",
    avatar: User,
    rating: 5,
    text:
      "Our house had become too large and expensive to maintain. Badilisha helped us trade it for a smaller home without waiting months to sell or sitting on cash. Everything was practical, well explained, and efficient.",
    results: [
      "Lower upkeep costs",
      "Cash unlocked",
      "Smooth transition"
    ]
  },
  {
    name: "Aisha Noor.",
    service: "Property Sale",
    location: "Mombasa",
    avatar: User,
    rating: 5,
    text:
      "We needed liquidity fast without being taken advantage of. Badilisha priced the property realistically, screened buyers properly, and handled negotiations transparently. The sale moved quickly with zero surprises.",
    results: [
      "Transparent pricing",
      "Fast buyer match",
      "Clean settlement"
    ]
  },
  {
    name: "Jane Wambui.",
    service: "Developer Property Swap",
    location: "Nairobi",
    avatar: User,
    rating: 5,
    text:
      "We had unsold units tying up capital. Instead of waiting for buyers, Badilisha helped us exchange them for a prime parcel of land for our next project. We unlocked value immediately and moved straight into development.",
    results: [
      "Idle stock unlocked",
      "No long sales cycle",
      "Immediate reinvestment"
    ]
  }
];

export function PremiumTestimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((i) => (i + 1) % testimonials.length);
    }, 18000);

    return () => clearInterval(timer);
  }, []);

  const slide = {
    enter: (d: number) => ({
      x: d > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (d: number) => ({
      x: d < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.96
    })
  };

  const next = () => {
    setDirection(1);
    setCurrent((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const Avatar = testimonials[current].avatar;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Real Stories. Real Moves.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            How homeowners and developers move forward with clarity and confidence.
          </p>
        </div>

        {/* Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[500px] sm:min-h-[410px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="absolute inset-0"
              >
                <div className="relative h-full rounded-3xl border border-slate-200 bg-white shadow-xl px-6 py-8 sm:px-10 sm:py-10">

                  {/* Quotes */}
                  <Quote className="absolute top-6 left-6 w-8 h-8 text-emerald-100" />
                  <Quote className="absolute bottom-6 right-6 w-8 h-8 text-emerald-100 rotate-180" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-6">

                    {/* Identity */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                        <Avatar className="w-7 h-7 text-emerald-600" />
                      </div>

                      <h3 className="font-semibold text-lg text-slate-900">
                        {testimonials[current].name}
                      </h3>
                      <p className="text-emerald-600 text-sm font-medium">
                        {testimonials[current].service}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonials[current].location}
                      </p>

                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="max-w-2xl text-base sm:text-lg text-slate-700 leading-relaxed italic">
                      “{testimonials[current].text}”
                    </blockquote>

                    {/* Results */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-lg">
                      {testimonials[current].results.map((r, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-800"
                        >
                          {r}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border shadow p-3 hover:bg-slate-50 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-white border shadow p-3 hover:bg-slate-50 transition"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
