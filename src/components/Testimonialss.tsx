import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Jane Wambui",
    service: "Property Trade-In",
    location: "Nairobi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The property swap process was incredibly smooth. I moved from my large family home in Karen to a beautiful apartment without the stress of selling first. Badilisha handled everything.",
    results: ["300% efficiency increase", "$2M cost savings", "24/7 automation"]
  },
  {
    name: "David Omondi",
    service: "Property Sale",
    location: "Mombasa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I needed to sell my land quickly to invest in a new venture. Badilisha found a buyer within weeks and the transparent fee structure was a breath of fresh air.",
    results: ["40% satisfaction boost", "Instant responses", "Seamless integration"]
  },
  {
    name: "Sarah & Michael",
    service: "Subdivision",
    location: "Nakuru",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Subdividing our family land felt like an impossible task until we found Badilisha. They managed the legal paperwork and registration perfectly. Highly recommended!",
    results: ["Full automation", "Strategic focus", "Team productivity"]
  },
  {
    name: "David Kim",
    service: "Property sale",
    location: "BuruBuru",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The custom AI systems delivered results beyond our expectations. Revenue increased 150% while operational overhead decreased significantly.",
    results: ["150% revenue growth", "Reduced overhead", "Scalable systems"]
  },
  {
    name: "John & Lisa",
    service: "Property Trade In",
    location: "Kilimani",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional AI solutions that actually work. The implementation was smooth, and the results were immediate. Best investment we've made.",
    results: ["Immediate results", "Smooth integration", "High ROI"]
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
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
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

  return (
    
    <section id="testimonials" className="relative py-16 md:py-24 bg-white text-gray-900 overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Increased height by 10px values: 500→510, 400→410 */}
          <div className="relative min-h-[610px] md:min-h-[410px] lg:h-[410px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-white shadow-2xl rounded-3xl border border-gray-200 p-6 md:p-8 lg:p-12 overflow-hidden group hover:shadow-3xl transition-shadow duration-300">
                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-green-600" />
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                    {/* User Info */}
                    <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
                      <motion.div
                        className="relative mb-4 md:mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-green-100 relative">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-green-600 mb-1 font-medium text-sm md:text-base">
                        {testimonials[currentIndex].service}
                      </p>
                      <p className="text-gray-500 mb-3 md:mb-4 text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center lg:justify-start gap-1 mb-4 md:mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-orange-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Content - Increased width for mobile */}
                    <div className="flex-1 w-full lg:w-auto">
                      <motion.blockquote 
                        className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-4 md:mb-6 md:mb-8 font-medium italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        "{testimonials[currentIndex].text}"
                      </motion.blockquote>

                      {/* Results - Adjusted for mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-green-50 rounded-lg p-3 border border-green-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{ backgroundColor: "#dbeafe" }}
                          >
                            <span className="text-sm md:text-base text-green-800 font-medium">
                              {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-green-50 border border-green-200 text-green-600 hover:bg-green-100 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2 md:gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-green-600 scale-125' 
                      : 'bg-green-200 hover:bg-green-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-green-50 border border-green-200 text-green-600 hover:bg-green-100 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[
            { number: "200+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "Ksh2M+", label: "Cost Savings" },
            { number: "50%+", label: "Time saved" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group p-4 md:p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}