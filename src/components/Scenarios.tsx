import { cn } from "../lib/cn";
import {
  ArrowRight,
  Users,
  Home,
  TrendingUp,
  RefreshCcw,
  Handshake,
  Building2,
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
      text: "Your current home is too big. Swap for a manageable space and unlock some cash.",
      service: "Trade-In",
    },
    {
      icon: TrendingUp,
      title: "Ready for cash? Want to sell",
      text: "You want to move on or invest elsewhere. We help you find a buyer fast and fair.",
      service: "Property Sale",
    },
    {
      icon: RefreshCcw,
      title: "Stuck between buying and selling?",
      text: "Avoid timing stress. Secure your next home while we handle the transition smoothly.",
      service: "Trade-In",
    },
    {
      icon: Handshake,
      title: "Found a buyer but need a next home?",
      text: "We align your sale and move so you don’t end up in limbo or rushed decisions.",
      service: "Guided Swap",
    },
    {
      icon: Building2,
      title: "Investor or landlord exiting?",
      text: "Exit efficiently, unlock capital, and redeploy without months on the open market.",
      service: "Property Sale",
    },
  ];

  const stories = [
    {
      title: "Jane’s situation",
      text: "3-bed house in Karen; kids moved out; house too big to maintain.",
      step: "Situation",
    },
    {
      title: "The match",
      text: "A young family wants more space; they’ll swap their 2-bed apartment + top-up.",
      step: "Match",
    },
    {
      title: "The result",
      text: "Both families move at the same time. Jane gets a smaller home + cash. No months on market.",
      step: "Resolution",
    },
  ];

  return (
    <section id="scenarios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Which service is right for me?
          </h2>
          <p className="text-lg text-slate-600">
            Common paths our clients take to move forward.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="relative z-10 mb-24 bg-white rounded-3xl overflow-hidden">
          {/* separator between rows */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-emerald-100 z-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((s, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col py-10 relative group border-slate-100",
                  "border-b md:border-b-0",
                  "lg:border-r",
                  index % 3 === 0 && "lg:border-l",
                  index < 3 && "md:border-b"
                )}
              >
                {/* Hover gradient (slightly deeper) */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 bg-gradient-to-t from-emerald-100 to-transparent pointer-events-none" />

                {/* Icon */}
                <div className="mb-6 relative z-10 px-10">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>

                {/* Title with accent bar */}
                <div className="text-lg font-bold mb-3 relative z-10 px-10 text-slate-900">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-200 group-hover:bg-emerald-600 transition-all duration-200" />
                  <span className="group-hover:translate-x-2 transition duration-200 inline-block">
                    {s.title}
                  </span>
                </div>

                {/* Text */}
                <p className="text-slate-600 mb-6 max-w-xs relative z-10 px-10">
                  {s.text}
                </p>

                {/* CTA */}
                <div className="relative z-10 px-10">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center gap-2 text-emerald-700 font-semibold hover:gap-3 transition-all"
                  >
                    See {s.service} options <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            A Real Badilisha Scenario
          </h3>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {stories.map((s, i) => (
              <div key={i} className="relative z-10">
                <div className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">
                  {s.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {s.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-50 -translate-y-12 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
