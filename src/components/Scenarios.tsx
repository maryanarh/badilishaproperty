import { cn } from "../lib/cn";
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
  Scale
} from "lucide-react";

export default function Scenarios() {
  const scenarios = [
    {
      icon: Users,
      title: "Growing family? Need more space",
      text: "You need a bigger home now. You can trade In your current house to someone who wants your place through us.",
      service: "Trade-In",
    },
    {
      icon: Home,
      title: "Kids moved out? Time to downsize",
      text: "Your current home is too big. Trade-In for a manageable space and unlock some cash.",
      service: "Trade-In",
    },
    {
      icon: TrendingUp,
      title: "Need liquidity, not another property?",
      text: "Free up capital for reinvestment or closure. A clean sale delivers certainty and speed.",
      service: "Property Sale",
    },
    {
      icon: RefreshCcw,
      title: "Need a new home but want to stay invested",
      text: "Move into a different property without exiting the market. Trade in your current home smoothly through us.",
      service: "Trade-In",
    },
    {
      icon: Handshake,
      title: "Handling an estate or inherited asset?",
      text: "Resolve ownership and unlock proceeds efficiently. We simplify the sale and protect value.",
      service: "Property Sale",
    },
    {
      icon: Handshake,
      title: "Own land but need clarity or funding?",
      text: "Unlock flexibility through proper subdivision and registration. Gain control for sale, inheritance, or development",
      service: "Subdivision",
    },
    {
      icon: Maximize,
      title: "Upsizing or downsizing your space?",
      text: "Trade-In your current home for one that fits your life now. We align buyers and sellers to unlock value without pressure.",
      service: "Trade-In",
    },
    {
      icon: MapPin,
      title: "Relocating but don’t want to sit out?",
      text: "Move to a new area without liquidating everything. We handle the transition so value stays working",
      service: "Trade-In",
    },
    {
      icon: Scale,
      title: "Land ownership with complex inheritance needs?",
      text: "Create clarity while preserving long-term value. Register and structure land to suit future plans.",
      service: "Subdivision",
    },
  ];

  const stories = [
    {
      step: "Situation",
      title: "David's Situation",
      icon: Home,
      text: "David owns a four bedroom house in Ruaka. His children have left for university, upkeep costs are rising, and the house no longer fits his daily needs.",
      details: [
        "Avoids sitting on cash while searching",
        "Reduces high maintenance costs",
        "Transitions to right-sized living"
      ]
    },
    {
      step: "Match",
      title: "The Match",
      icon: Search,
      text: "A growing family owns a two-bedroom apartment in Kilimani and needs more space but can’t risk selling first. Badilisha verifies both properties and structures a swap.",
      details: [
        "Direct property-to-property match",
        "Verified property valuations",
        "Structured cash top-up balance"
      ]
    },
    {
      step: "Resolution",
      title: "The Result",
      icon: Key,
      text: "Both households move within the same settlement window. David steps into a smaller, lower-cost home plus a defined cash balance.",
      details: [
        "Single move-in/move-out window",
        "Zero duplicated transaction costs",
        "Value locked in real estate"
      ]
    },
  ];

  // Helper function to scroll to the specific service dropdown
  const scrollToServiceDropdown = (serviceName: string) => {
    // Converts "Trade-In" to "trade-in" and "Property Sale" to "property-sale"
    const targetId = serviceName.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Logic if specific ID isn't found: find the main services section
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="scenarios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Which service is right for me?
          </h2>
          <p className="text-xl text-slate-600">
            Common paths our clients take to move forward.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="relative z-10 mb-24 bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 group/grid">
            {scenarios.map((s, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col py-12 relative group transition-all duration-300",
                  "hover:bg-slate-50/50",
                  index % 3 !== 2 && "lg:border-r border-slate-100",
                  index % 2 !== 1 && "md:border-r border-slate-100",
                  index < 6 && "lg:border-b border-slate-100",
                  index < 8 && "md:border-b border-slate-100",
                  "border-b md:border-b-0 last:border-b-0 border-slate-100"
                )}
              >
                {/* Accent rail */}
                <div className="absolute left-0 inset-y-0 w-1 bg-slate-100 group-hover:bg-emerald-500 transition-colors duration-300" />
                
                {/* Watermark icon */}
                <s.icon className="pointer-events-none absolute -right-4 top-1/2 h-32 w-32 -translate-y-1/2 text-slate-900/[0.02] group-hover:text-emerald-500/[0.04] transition-colors" />

                <div className="mb-6 relative z-10 px-10">
                  <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <s.icon className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>

                <div className="text-xl font-bold mb-3 relative z-10 px-10 text-slate-900 leading-tight">
                  <span className="group-hover:translate-x-1 transition duration-300 inline-block">
                    {s.title}
                  </span>
                </div>

                <p className="text-slate-700 mb-8 max-w-xs relative z-10 px-10 text-lg leading-relaxed">
                  {s.text}
                </p>

                <div className="mt-auto relative z-10 px-10">
                  <button
                    onClick={() => scrollToServiceDropdown(s.service)}
                    className="flex items-center gap-2 text-emerald-700 text-sm font-bold hover:gap-3 transition-all"
                  >
                    See {s.service} options <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-8 md:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.15),transparent_50%)]" />

          <h3 className="relative z-10 text-3xl font-bold text-white text-center mb-16">
            A Real Badilisha Scenario
          </h3>

          <div className="grid md:grid-cols-3 gap-8 relative group">
            {stories.map((step, i) => (
              <div key={i} className="relative z-10">
                <div className="relative h-full overflow-hidden rounded-3xl bg-emerald-800/40 p-8 backdrop-blur-xl border border-emerald-700/50 shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-400/60 via-emerald-300/30 to-transparent rounded-l-3xl" />
                  <step.icon className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 text-emerald-300/5" />

                  <div className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 opacity-80">
                    {step.step}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10">
                    {step.title}
                  </h4>
                  
                  <p className="text-emerald-50/80 leading-relaxed mb-6 text-sm relative z-10">
                    {step.text}
                  </p>

                  <ul className="relative space-y-3 z-10">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-3 w-3 flex-shrink-0 text-emerald-400" />
                        <span className="text-xs text-emerald-100/70 leading-tight">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-emerald-500/10 -translate-y-24 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}