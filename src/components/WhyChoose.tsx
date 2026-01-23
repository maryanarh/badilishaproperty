import {
  Shield,
  Clock,
  DollarSign,
  Sparkles,
  CheckCircle,
  SlidersHorizontal,
} from "lucide-react";

export default function WhyChoose() {
  const benefits = [
    {
      icon: Clock,
      title: "No Need to Sell First",
      description:
        "Move forward without selling, waiting, then buying again. Trade in and settle only the difference, with timing handled upfront.",
      stat: "2-4 weeks faster",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description:
        "Avoid multiple agent fees, dual mortgages, and bridging loans. Capital is preserved instead of drained by process inefficiencies",
      stat: "Save thousands",
    },
    {
      icon: Shield,
      title: "Fair Valuations",
      description:
        "Certified valuations anchor every decision. No emotional pricing, no speculative gaps, just aligned expectations.",
      stat: "100% transparent",
    },
    {
      icon: SlidersHorizontal,
      title: "Economic Flexibility",
      description:
        "Cash balances are designed with purpose, not pressure. Subdivision is used strategically without forcing full exits.",
      stat: "Built for real life",
    },
    {
      icon: Sparkles,
      title: "Property Matching Algorithms",
      description:
        "Our intelligent algorithm makes it effortless to match your property with your desired property Trade-In or Exchange saving you time, stress, and endless searching.",
      stat: "Personalized matches",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description:
        "From valuation to moving day, we handle the legal, financial, and administrative complexities with you.",
      stat: "Full guidance",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/Background.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Badilisha
          </h2>
          <p className="text-xl text-black-600 max-w-3xl mx-auto">
            We're not just another real estate company. We're building a smarter,
            fairer way to move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-emerald-50/70 rounded-2xl p-8 h-full hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {benefit.stat}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-lg text-black-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            The Pain vs. Relief Framework
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200">
                <p className="text-lg font-semibold text-gray-900">
                  Months of waiting
                </p>
                <p className="text-gray-600 mt-1">
                  Uncertain timelines, prolonged uncertainty
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <p className="text-lg font-semibold text-gray-900">
                  Double mortgages
                </p>
                <p className="text-gray-600 mt-1">
                  Carry two loans simultaneously, heavy burden
                </p>
              </div>

              <div className="pb-6 border-b border-gray-200">
                <p className="text-lg font-semibold text-gray-900">
                  Hidden fees
                </p>
                <p className="text-gray-600 mt-1">
                  Agent commissions, inspections, surprise costs
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Stressful paperwork
                </p>
                <p className="text-gray-600 mt-1">
                  Complex legal documents, confusing process
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-emerald-200 flex gap-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                  Trade-I in weeks
                  </p>
                  <p className="text-gray-600 mt-1">
                    Predictable timeline, move forward quickly
                  </p>
                </div>
              </div>

              <div className="pb-6 border-b border-emerald-200 flex gap-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    One clean transition
                  </p>
                  <p className="text-gray-600 mt-1">
                    Move simultaneously with your match, no overlap
                  </p>
                </div>
              </div>

              <div className="pb-6 border-b border-emerald-200 flex gap-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Clear, upfront valuation
                  </p>
                  <p className="text-gray-600 mt-1">
                    Know exactly what you'll pay or receive
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Guided end-to-end support
                  </p>
                  <p className="text-gray-600 mt-1">
                    We handle complexity, you focus on your move
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Transparency You Can Trust
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We believe in honest valuations, clear communication, and fair
              treatment. No hidden fees, no surprises, no pressure.
            </p>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
