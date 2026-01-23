import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, User } from 'lucide-react';

const testimonials = [
  {
    name: "Jane Wambui",
    service: "Property Trade-In",
    location: "Nairobi",
    avatar: User,
    rating: 5,
    text: "We moved into our new home without selling first — no pressure, no chaos. Badilisha structured the property Trade-In from valuation to handover, handled the legal coordination, and aligned both timelines so nothing stalled. What stood out most was the calm confidence of the process; every step was explained, priced fairly, and executed exactly as agreed.",
    results: ["Zero selling stress", "All paperwork handled", "Weeks saved"]
  },
  {
    name: "John & Lisa",
    service: "Property Trade-In",
    location: "Kilimani",
    avatar: User,
    rating: 5,
    text: "Instead of waiting months to sell, we moved straight into the right home for our family. Badilisha matched us with a compatible property, balanced the values transparently, and coordinated the transfer so we never felt exposed. The Trade-In and Exchange model was practical, structured, and delivered exactly what we needed at that stage of life.",
    results: ["Immediate move-in", "Seamless transition", "Strong value exchange"]
  },
  {
    name: "David Omondi",
    service: "Property Sale",
    location: "Mombasa",
    avatar: User,
    rating: 5,
    text: "We needed liquidity fast without being taken advantage of. Badilisha priced the property realistically, screened buyers properly, and handled negotiations with transparency. The sale closed quickly, the numbers made sense, and there were no surprises at settlement.",
    results: ["Fast buyer match", "Transparent pricing", "Quick settlement"]
  },
  {
    name: "Aisha Noor",
    service: "Property Trade-In",
    location: "Westlands",
    avatar: User,
    rating: 5,
    text: "The idea of property Trading in homes and getting the balannce on top sounded risky until we experienced it. Badilisha broke the process down clearly, verified every detail, and managed the exchange as one coordinated transaction. Instead of stress, we felt guided and protected throughout.",
    results: ["Guided process", "Risk reduced", "Confidence restored"]
  },
  {
    name: "Sarah & Michael",
    service: "Subdivision",
    location: "Nakuru",
    avatar: User,
    rating: 5,
    text: "What felt like a legal maze became a clear, guided process. Badilisha assessed the land, advised on the best subdivision approach, and managed surveys, approvals, and registration without delays. We ended up with clean titles and a clear plan for how to use the land going forward.",
    results: ["Clear legal process", "Faster approvals", "Land value unlocked"]
  },
  {
    name: "Kelvin Mwangi",
    service: "Subdivision",
    location: "Thika",
    avatar: User,
    rating: 5,
    text: "Badilisha helped us unlock value we didn’t even know we had. They advised on how much land to release, coordinated registration, and ensured the titles were clean and transferable. The outcome wasn’t just higher value — it was clarity and long-term flexibility.",
    results: ["Strategic planning", "On-time delivery", "Higher land value"]
  }
];


export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const AvatarIcon = testimonials[currentIndex].avatar;

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Real Stories. Real Moves.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          How homeowners used Badilisha to move forward with confidence.
        </p>
      </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[750px] sm:min-h-[440px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-white shadow-xl rounded-3xl border border-gray-200 px-6 py-10 md:px-12">

                  <Quote className="absolute top-6 left-6 w-10 h-10 text-green-200" />
                  <Quote className="absolute bottom-6 right-6 w-10 h-10 text-green-200 rotate-180" />

                  <div className="relative z-10 flex flex-col items-center text-center gap-6">

                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center border-4 border-green-200 mb-3">
                        <AvatarIcon className="w-9 h-9 text-green-600" />
                      </div>

                      <h3 className="text-xl font-bold">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-green-600 font-medium text-sm">
                        {testimonials[currentIndex].service}
                      </p>
                      <p className="text-gray-500 text-xs mb-2">
                        {testimonials[currentIndex].location}
                      </p>

                      <div className="flex gap-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-orange-400"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="max-w-3xl text-lg italic text-gray-700">
                      “{testimonials[currentIndex].text}”
                    </blockquote>

                    {/* ✅ RESPONSIVE RESULTS LAYOUT */}
                    <div
                      className="
                        flex gap-3 justify-center
                        flex-wrap
                        max-w-md
                        lg:max-w-none
                        lg:flex-nowrap
                      "
                    >
                      {testimonials[currentIndex].results.map((result, i) => (
                        <div
                          key={i}
                          className="bg-green-50 border border-green-100 rounded-full px-4 py-2 text-sm text-green-800 font-medium whitespace-nowrap"
                        >
                          {result}
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white border shadow"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white border shadow"
          >
            <ArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
}
