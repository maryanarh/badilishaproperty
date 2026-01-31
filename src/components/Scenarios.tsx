import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Home,
  TrendingUp,
  RefreshCcw,
  Handshake,
  Search,
  Key,
  Maximize,
  MapPin,
  Scale,
  Star,
  Home as HomeIcon,
} from "lucide-react"

// Horizontal Stacked View Component
const HorizontalStackedView: React.FC<{
  selectedStory: any;
  onClose: () => void;
  isActive: boolean;
}> = ({ selectedStory, onClose, isActive }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isActive) return;
      
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentStep(prev => Math.min(prev + 1, selectedStory.steps.length - 1));
        if (containerRef.current) {
          containerRef.current.scrollTo({
            left: (currentStep + 1) * containerRef.current.clientWidth,
            behavior: 'smooth'
          });
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentStep(prev => Math.max(prev - 1, 0));
        if (containerRef.current) {
          containerRef.current.scrollTo({
            left: (currentStep - 1) * containerRef.current.clientWidth,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose, selectedStory?.steps?.length, currentStep]);

  // Handle click outside - FIXED
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is on backdrop or outside modal
      if (backdropRef.current && backdropRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isActive, onClose]);

  if (!selectedStory) return null;

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Backdrop - FIXED: Added ref and separate click handler */}
          <motion.div
            ref={backdropRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Main container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-[75vh] sm:h-[70vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"

            >
              {/* Close button - FIXED: Proper X icon and working click */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header - Simplified for mobile */}
              <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 bg-gradient-to-b from-black/30 to-transparent">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg line-clamp-1">
                  {selectedStory.title}
                </h2>
                <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2">
                  {selectedStory.steps.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentStep(index);
                        if (containerRef.current) {
                          containerRef.current.scrollTo({
                            left: index * containerRef.current.clientWidth,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentStep 
                          ? 'bg-white sm:w-6' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Horizontal scroll container */}
              <div
                ref={containerRef}
                className="h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onScroll={() => {
                  if (!containerRef.current) return;
                  const scrollLeft = containerRef.current.scrollLeft;
                  const cardWidth = containerRef.current.clientWidth;
                  const newStep = Math.round(scrollLeft / cardWidth);
                  if (newStep !== currentStep) {
                    setCurrentStep(newStep);
                  }
                }}
              >
                {selectedStory.steps.map((step: any, index: number) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full h-full snap-center"
                  >
                    <div 
                      className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8"
                      style={{ background: selectedStory.color }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-white/20"
                      >
                        <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8">
                          {/* Icon - Responsive sizing */}
                          <div className="bg-white/20 p-3 sm:p-4 rounded-xl md:rounded-2xl w-fit">
                            <step.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-white/20 rounded-full mb-3 sm:mb-4">
                              <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                {step.step}
                              </span>
                            </div>
                            
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                              {step.title}
                            </h3>
                            
                            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                              {step.text}
                            </p>
                            
                            {/* Step indicator */}
                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                              <span className="text-white/70 text-sm">
                                Step {index + 1} of {selectedStory.steps.length}
                              </span>
                              
                              {/* Navigation buttons */}
                              <div className="flex gap-2 self-stretch sm:self-auto">
                                {index > 0 && (
                                  <button
                                    onClick={() => {
                                      setCurrentStep(index - 1);
                                      if (containerRef.current) {
                                        containerRef.current.scrollTo({
                                          left: (index - 1) * containerRef.current.clientWidth,
                                          behavior: 'smooth'
                                        });
                                      }
                                    }}
                                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                                  >
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
                                    <span className="hidden sm:inline">Previous</span>
                                    <span className="sm:hidden">Prev</span>
                                  </button>
                                )}
                                
                                {index < selectedStory.steps.length - 1 && (
                                  <button
                                    onClick={() => {
                                      setCurrentStep(index + 1);
                                      if (containerRef.current) {
                                        containerRef.current.scrollTo({
                                          left: (index + 1) * containerRef.current.clientWidth,
                                          behavior: 'smooth'
                                        });
                                      }
                                    }}
                                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
                                  >
                                    <span className="hidden sm:inline">Next</span>
                                    <span className="sm:hidden">Next</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation hints - Simplified and mobile-optimized */}
              <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="hidden md:block">
                  <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white/80 text-xs sm:text-sm">
                    Scroll or use arrow keys • Click outside to close
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Mobile Carousel Component - UPDATED: No title, better spacing
const MobileStoriesCarousel: React.FC<{
  stories: any[];
  onStorySelect: (index: number) => void;
}> = ({ stories, onStorySelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Auto-advance carousel - Disabled for better UX
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Carousel container */}
      <div 
        className="flex transition-transform duration-300 ease-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {stories.map((story, index) => (
          <div key={index} className="w-full flex-shrink-0 px-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg active:scale-[0.98] transition-transform"
              style={{ background: story.color }}
              onClick={() => onStorySelect(index)}
            >
              <div className="p-4 sm:p-5">
                {/* Story preview only - No title */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 min-h-[140px] sm:min-h-[160px] flex items-center justify-center">
                  <p className="text-white/95 text-sm sm:text-base leading-relaxed line-clamp-5 sm:line-clamp-4">
                    {story.steps[0].text}
                  </p>
                </div>
                
                {/* Action hint - Mobile optimized */}
                <div className="mt-3 sm:mt-4 flex items-center justify-center text-white/90 text-xs sm:text-sm font-medium">
                  <span>Tap to explore story</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation buttons - Better mobile positioning */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white active:scale-95"
        aria-label="Previous story"
      >
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white active:scale-95"
        aria-label="Next story"
      >
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>

      {/* Indicators - Simplified and mobile-friendly */}
      <div className="flex justify-center mt-4 sm:mt-5 space-x-1.5 sm:space-x-2">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-slate-700 w-4 sm:w-6' : 'bg-slate-300'
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Desktop Story Card Component
const DesktopStoryCard: React.FC<{
  story: any;
  index: number;
  onSelect: () => void;
}> = ({ story, index, onSelect }) => {
  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
      style={{ background: story.color }}
      onClick={onSelect}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Default state - Only title */}
      <div className="p-5 sm:p-6 md:p-8 h-32 sm:h-36 md:h-40 flex items-center justify-center">
        <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white text-center px-2 sm:px-4">
          {story.title}
        </h3>
      </div>

      {/* Hover overlay with first paragraph */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 flex flex-col justify-center">
        <div className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-3">
          {story.steps[0].text}
        </div>
        <div className="flex items-center justify-center text-white/80 text-xs sm:text-sm font-medium">
          <span>Click to explore this story</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:ml-3 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

// Stats Section Component - Updated for better mobile responsiveness
const StatsSection = () => {
  const stats = [
    {
      icon: <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-amber-500" />,
      value: "5+",
      label: "year of experience",
      description: "Trusted expertise in property solutions"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-emerald-500" />,
      value: "73+",
      label: "happy customers",
      description: "Families and individuals served"
    },
    {
      icon: <HomeIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-500" />,
      value: "35+",
      label: "Properties Exchanged",
      description: "Successful swaps and trades"
    }
  ];

  return (
    <div className="py-8 sm:py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="mb-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 mb-1">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="hidden sm:block text-xs text-slate-600 leading-relaxed mt-1">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Scenarios() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);
  const [activeStory, setActiveStory] = useState<any>(null);

  const scenarios = [
    {
      icon: Users,
      title: "Growing family? Need more space",
      text: "You need a bigger home now. You can  Trade-In your current house to someone who wants your place through us.",
      service: "Trade-In",
      stat: "Upgrade your space without the chaos",
      badge: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Home,
      title: "Kids moved out? Time to downsize",
      text: "Your current home is too big. Trade-In for a manageable space and unlock some cash.",
      service: "Trade-In",
      stat: "Right-Sized Living",
      badge: "bg-sky-100 text-sky-700",
    },
    {
      icon: TrendingUp,
      title: "Need liquidity, not another property?",
      text: "Free up capital for reinvestment or closure. A clean sale delivers certainty and speed.",
      service: "Property Sale",
      stat: "Fast Capital, Unlocked",
      badge: "bg-amber-100 text-amber-700",
    },
    {
      icon: RefreshCcw,
      title: "Need a new home but want to stay invested",
      text: "Move into a different property without exiting the market.  Trade-In your current home smoothly through us.",
      service: "Trade-In",
      stat: "Stay invested",
      badge: "bg-teal-100 text-teal-700",
    },
    {
      icon: Handshake,
      title: "Handling an estate or inherited asset?",
      text: "Resolve ownership and unlock proceeds efficiently. We simplify the sale and protect value.",
      service: "Property Sale",
      stat: "Clarity Delivered",
      badge: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: Handshake,
      title: "Own land but need clarity or funding?",
      text: "Unlock flexibility through proper subdivision and registration. Gain control for sale, inheritance, or development.",
      service: "Subdivision",
      stat: "Control Unlocked",
      badge: "bg-lime-100 text-lime-700",
    },
    {
      icon: Maximize,
      title: "Upsizing or downsizing your space?",
      text: "Trade-In your current home for one that fits your life now. We align buyers and sellers to unlock value without pressure.",
      service: "Trade-In",
      stat: "Right-size",
      badge: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: MapPin,
      title: "Relocating but don't want to sit out?",
      text: "Move to a new area without liquidating everything. We handle the transition so value stays working.",
      service: "Trade-In",
      stat: "Aligned Living",
      badge: "bg-sky-100 text-sky-700",
    },
    {
      icon: Scale,
      title: "Land ownership with complex inheritance needs?",
      text: "Create clarity while preserving long-term value. Register and structure land to suit future plans.",
      service: "Subdivision",
      stat: "Built for Tomorrow",
      badge: "bg-amber-100 text-amber-700",
    },
  ]

  const stories = [
    // Story 1 - Downsizing (Emerald)
    {
      color: "linear-gradient(135deg, #065f46 0%, #10b981 55%, #e6fff4 100%)",
      title: "Downsizing for Cash and Comfort",
      steps: [
        {
          step: "Situation",
          title: "David's Situation",
          icon: Home,
          text: "David owns a four bedroom house in Ruaka. His children have left for university, upkeep costs are rising, and the house no longer fits his daily needs.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "A growing family owns a two-bedroom apartment in Kilimani and needs more space but can't risk selling first. Badilisha verifies both properties and structures a Trade-In.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "Both households move within the same settlement window. David steps into a smaller, lower-cost home plus a defined cash balance for his retirement.",
        },
      ],
    },
    // Story 2 - Economic Relief (Orange)
    {
      color: "linear-gradient(135deg, #b45309 0%, #f59e0b 50%, #fde68a 100%)",
      title: "Economic Relief Through Strategic Swap",
      steps: [
        {
          step: "Situation",
          title: "Sarah's Situation",
          icon: Home,
          text: "Sarah runs a small business affected by economic downturn. She owns a large house in Karen but struggles with mortgage payments and maintenance costs.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha matches Sarah with a family looking to upgrade from their three-bedroom townhouse in Westlands. Both properties are verified and valued accurately.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "Sarah swaps her large house for the smaller townhouse plus receives Ksh 2.5M cash difference, which she invests in her struggling business to revive it.",
        },
      ],
    },
    // Story 3 - Rural to Urban (Dark Gray)
    {
      color: "linear-gradient(135deg, #4e5765 0%, #6b7a8a 55%, #0284c7 100%)",
      title: "Rural to Urban Professional Move",
      steps: [
        {
          step: "Situation",
          title: "James' Situation",
          icon: Home,
          text: "James inherited a large rural property in Kitengela but works in Nairobi CBD. The long commute is affecting his productivity and family time.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha finds a retiree in Lavington who wants to move to a peaceful rural setting. The retiree owns a modern two-bedroom apartment close to the city center.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "James swaps his rural property for the city apartment, cutting his commute from 2 hours to 15 minutes, while the retiree enjoys peaceful country living.",
        },
      ],
    },
    // Story 4 - Urban to Rural Retirement (Emerald Dusk)
    {
      color: "linear-gradient(135deg, #065f46 0%, #10b981 55%, #e6fff4 100%)",
      title: "Urban to Rural Retirement Swap",
      steps: [
        {
          step: "Situation",
          title: "Grace's Situation",
          icon: Home,
          text: "Grace recently retired and owns a 3-bedroom apartment in Westlands. She dreams of peaceful country living but worries about selling in a slow market.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha connects Grace with a young family in Naivasha who want to move to Nairobi for better schools. They own a charming 2-acre farmhouse perfect for retirement.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "Grace swaps her city apartment for the farmhouse, receiving Ksh 800K cash difference. She now enjoys gardening and fresh air without market uncertainty.",
        },
      ],
    },
    // Story 5 - Agricultural Expansion (Amber Harbor)
    {
      color: "linear-gradient(135deg, #b45309 0%, #f59e0b 50%, #fde68a 100%)",
      title: "Agricultural Expansion Swap",
      steps: [
        {
          step: "Situation",
          title: "Samuel's Situation",
          icon: Home,
          text: "Samuel owns 2 acres in Limuru but wants to expand his flower farming business. He needs more land but can't afford to buy additional acreage outright.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha finds a property owner with 8 acres in Thika who wants to downsize. The owner prefers Samuel's smaller, well-developed plot near amenities.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "Samuel trades his 2 acres for 5 acres of the larger property, paying only Ksh 1.2M difference. He now has room to expand his flower export business.",
        },
      ],
    },
    // Story 6 - Indivisible Property Swap (Teal Mist)
    {
      color: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 60%, #f0fdfa 100%)",
      title: "Indivisible Property to Subdivisible Swap",
      steps: [
        {
          step: "Situation",
          title: "Mwangi Family Situation",
          icon: Home,
          text: "The Mwangi family inherited a large 10-acre commercial plot in Industrial Area. The property cannot be subdivided, but they want to distribute portions to 3 children.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha matches them with a developer who owns 4 separate titled plots in Karen totaling 10 acres. The developer needs one large plot for a commercial complex.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "The Mwangis swap their indivisible plot for 4 separate titled properties. Each child gets their own parcel, and they receive Ksh 3M cash surplus.",
        },
      ],
    },
    // Story 7 - Property Subdivision for Inheritance (Slate & Sky)
    {
      color: "linear-gradient(135deg, #4e5765 0%, #6b7a8a 55%, #0284c7 100%)",
      title: "Property Subdivision for Inheritance Planning",
      steps: [
        {
          step: "Situation",
          title: "Omondi's Situation",
          icon: Home,
          text: "Omondi owns 5 acres of ancestral land in Kikuyu. He wants to leave equal portions to his 4 children but the land has no title and cannot be subdivided legally.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha's subdivision team surveys the land, processes titles, and legally subdivides it into 4 equal plots. No upfront capital required from Omondi.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "Omondi receives 4 separate title deeds for each 1.25-acre plot. He sells one plot to cover subdivision costs and distributes the remaining three to his children.",
        },
      ],
    },
    // Story 8 - Property Sale for Liquidity (Liminal Indigo)
    {
      color: "linear-gradient(135deg, #334155 0%, #475569 55%, #7c3aed 100%)",
      title: "Property Sale for Business Liquidity",
      steps: [
        {
          step: "Situation",
          title: "Fatima's Situation",
          icon: Home,
          text: "Fatima needs Ksh 8M capital to expand her restaurant chain. She owns a rental property in Parklands but traditional sale would take 6+ months with high agent fees.",
        },
        {
          step: "Match",
          title: "The Match",
          icon: Search,
          text: "Badilisha lists her property in both swap and sale markets. Within 3 weeks, a cash buyer from their investor network makes a competitive offer.",
        },
        {
          step: "Result",
          title: "The Result",
          icon: Key,
          text: "Fatima sells her property in 30 days at market value with only 1% commission. She receives Ksh 7.9M net proceeds and opens two new restaurant branches.",
        },
      ],
    },
  ]

  const scrollToServiceDropdown = (serviceName: string) => {
    const targetId = serviceName.toLowerCase().replace(/\s+/g, "-")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleStorySelect = (index: number) => {
    setSelectedStoryIndex(index);
    setActiveStory(stories[index]);
  };

  const handleCloseModal = () => {
    setSelectedStoryIndex(null);
    setActiveStory(null);
  };

  return (
    <section id="scenarios" className="bg-slate-50">
      {/* === STORIES SECTION === */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-20 sm:mt-24 md:mt-28 mb-12 sm:mb-16">
        
        {/* Stories Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
            Real Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 px-2">
            {typeof window !== 'undefined' && window.innerWidth >= 1024 
              ? "Hover over cards to preview, click to explore full story"
              : "Browse stories, tap to explore"}
          </p>
        </div>

        {/* Desktop Grid (3x3) - Show only title, hover shows first paragraph */}
        <div className="hidden lg:block mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {stories.map((story, index) => (
              <DesktopStoryCard
                key={index}
                story={story}
                index={index}
                onSelect={() => handleStorySelect(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mb-10 sm:mb-12 md:mb-16">
          <MobileStoriesCarousel
            stories={stories}
            onStorySelect={handleStorySelect}
          />
        </div>
        
        {/* === WHITE SCENARIO CARDS === */}
        <div className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
                Which service is right for me?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600">
                Common paths our clients take to move forward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
              {scenarios.map((s, index) => (
                <div key={index} className="group h-full">
                  <div className="relative h-full rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                    <s.icon className="pointer-events-none absolute -right-4 sm:-right-6 top-1/2 h-24 w-24 sm:h-32 sm:w-32 -translate-y-1/2 text-slate-900/[0.03]" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 sm:p-3 rounded-lg sm:rounded-xl w-fit">
                          <s.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        
                        <span className={`text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full ${s.badge}`}>
                          {s.stat}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl md:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">
                        {s.title}
                      </h3>
                      
                      <p className="text-slate-700 mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg leading-relaxed">
                        {s.text}
                      </p>
                      
                      <div className="mt-auto">
                        <button
                          onClick={() => scrollToServiceDropdown(s.service)}
                          className="flex items-center gap-1 sm:gap-2 text-emerald-700 text-sm font-bold hover:gap-2 sm:hover:gap-3 transition-all"
                        >
                          See {s.service} options
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Added Stats Section at the bottom */}
        <StatsSection />
      </div>

      {/* Horizontal Stacked View Modal */}
      <HorizontalStackedView
        selectedStory={activeStory}
        onClose={handleCloseModal}
        isActive={selectedStoryIndex !== null}
      />
    </section>
  )
}

// Custom CSS for hiding scrollbar
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}