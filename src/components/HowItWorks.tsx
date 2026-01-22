import { Search, Scale, Key, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Scale,
      number: '01',
      title: "Know Your Home's True Value",
      description:
        "Get a fair, transparent professional valuation that reflects your property's real market worth.",
      details: [
        'Independent certified assessment',
        'Comprehensive market analysis',
        'Clear, detailed report',
      ],
    },
    {
      icon: Search,
      number: '02',
      title: 'Get Smart Property Matches',
      description:
        'Discover properties that genuinely fit your lifestyle, needs, and budget—not just any available option.',
      details: [
        'Personalized property matching',
        'Location and lifestyle fit',
        'Fair financial settlement clarity',
      ],
    },
    {
      icon: Key,
      number: '03',
      title: 'Move With Confidence',
      description:
        'We guide you through every step—legal work, paperwork, financial coordination—so you move stress-free.',
      details: [
        'Complete legal support & documentation',
        'Seamless transfer coordination',
        'End-to-end move guidance',
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"
    >
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Property Swapping Works
          </h2>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto">
            A simple, transparent three-step process that takes the stress out of
            property transitions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 group">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative transition-all duration-300 group-hover:opacity-60 hover:!opacity-100"
            >
              <div className="relative h-full rounded-3xl p-8 bg-gradient-to-br from-emerald-800/60 to-emerald-700/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Big number */}
                <span className="absolute right-6 top-4 text-6xl font-bold text-emerald-300/10">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-6 w-fit rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-300/10 p-4">
                  <step.icon className="w-8 h-8 text-emerald-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-emerald-100/80 mb-6">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <ArrowRight className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-emerald-100/70">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-emerald-400/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
