import { Search, Scale, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'How It Works',
      description:
        'You register your property and specify your interests, and our algorithm immediately begins searching for the perfect match. If no match is available, your listing automatically stays in the queue and is matched the moment a suitable property is uploaded.',
      details: [
        'Register your property once and set preferences',
        'Algorithmic matching begins immediately',
        'Listings stay active until a compatible match is found',
      ],
    },
    {
      icon: Scale,
      number: '02',
      title: 'Value Difference Settlement',
      description:
        'Flexible financial balancing to make every swap possible — fair, transparent, and without pressure.',
      details: [
        'If your property is worth more, you receive the difference',
        'If it’s worth less, you top up the difference',
        'Zero pressure to find a “perfect” match',
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-18 md:py-26 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"
    >
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-3xl mx-auto">
            Simple, transparent steps that let you trade-in or swap properties with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 group">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative transition-all duration-300 md:group-hover:opacity-60 md:hover:!opacity-100"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800/70 via-emerald-800/50 to-emerald-700/40 p-6 md:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-2xl">

                {/* Left accent rail */}
                <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-400/60 via-emerald-300/30 to-transparent rounded-l-3xl" />

                {/* Oversized icon watermark (fills right-side space) */}
                <step.icon className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 text-emerald-300/5" />

                {/* Big step number */}
                <span className="absolute right-6 top-4 text-6xl font-bold text-emerald-300/10">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative mb-5 w-fit rounded-xl bg-gradient-to-br from-emerald-400/25 to-emerald-300/10 p-3">
                  <step.icon className="h-7 w-7 text-emerald-300" />
                </div>

                {/* Content */}
                <h3 className="relative mb-2 text-lg font-semibold text-white md:text-2xl">
                  {step.title}
                </h3>

                <p className="relative mb-5 text-sm text-emerald-100/80 md:text-base">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="relative space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                      <span className="text-sm text-emerald-100/70">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="h-8 w-8 text-emerald-400/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
