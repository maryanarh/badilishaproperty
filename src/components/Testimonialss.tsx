"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  User,
  CheckCircle,
  MapPin,
  Home
} from "lucide-react";

const testimonials = [
  {
    name: "Grace Muthoni",
    service: "Property Trade-In Exchange",
    location: "Nairobi",
    avatar: User,
    rating: 5,
    text: "We needed a bigger home, but selling first felt risky. Badilisha matched our property with the right buyer, handled valuations transparently, and coordinated everything so we only moved once.",
    results: [
      "Single move-in window",
      "No forced sale",
      "Fair value exchange"
    ]
  },
  {
    name: "David Otieno",
    service: "Property Trade-In",
    location: "Ruaka",
    avatar: User,
    rating: 5,
    text: "Our house had become too large and expensive to maintain. Badilisha helped us trade it for a smaller home without waiting months to sell or sitting on cash. Everything was practical, fair, well explained, and efficient.",
    results: [
      "Lower upkeep costs",
      "Cash unlocked",
      "Smooth transition"
    ]
  },
  {
    name: "Aisha Noor",
    service: "Property Sale",
    location: "Mombasa",
    avatar: User,
    rating: 5,
    text: "We needed liquidity fast without being taken advantage of. Badilisha priced the property realistically, screened buyers properly, and handled negotiations transparently. The sale moved quickly with zero surprises.",
    results: [
      "Transparent pricing",
      "Fast buyer match",
      "Clean settlement"
    ]
  },
  {
    name: "Jane Nganga",
    service: "Developer Property Trade-In",
    location: "Nairobi",
    avatar: User,
    rating: 5,
    text: "We had unsold units tying up capital. Instead of waiting for buyers, Badilisha helped us exchange them for a prime parcel of land for our next project. We unlocked value immediately and moved straight into development.",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Real Stories. Real Moves.
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            How homeowners and developers move forward with clarity and confidence.
          </p>
        </div>

        {/* Card Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[590px] md:min-h-[420px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-3 h-full">
                    
                    {/* Left Panel - User Info */}
                    <div className="md:col-span-1 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Service Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-emerald-100 mb-6">
                          <Home className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-800">
                            {testimonials[current].service}
                          </span>
                        </div>

                        {/* Avatar & Name */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center">
                            <Avatar className="w-7 h-7 text-emerald-700" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-900">
                              {testimonials[current].name}
                            </h3>
                            <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                              <MapPin className="w-4 h-4" />
                              {testimonials[current].location}
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-slate-600 mb-8">Perfect 5/5 rating</p>
                      </div>

                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-emerald-200/80" />
                    </div>

                    {/* Right Panel - Testimonial Content */}
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
                      {/* Testimonial Text */}
                      <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow min-h-[160px] md:min-h-[200px]">
                        <span className="text-2xl text-emerald-500 font-serif leading-none mr-1">"</span>
                        {testimonials[current].text}
                        <span className="text-2xl text-emerald-500 font-serif leading-none ml-1">"</span>
                      </blockquote>

                      {/* Divider */}
                      <div className="w-full h-px bg-slate-100 mb-6" />

                      {/* Results Section */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                          Key Results
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {testimonials[current].results.map((result, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 p-3 rounded-lg bg-slate-50/80 hover:bg-slate-100/80 transition-colors"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium text-slate-800">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Navigation */}
          <div className="flex items-center justify-center mt-8 gap-6">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-300 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-slate-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-emerald-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-300 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center">
            <span className="text-sm font-medium text-slate-700">
              {current + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}