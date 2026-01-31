import { RefreshCw, Banknote, Award } from 'lucide-react'

type ServiceType = 'Trade-In and Exchange' | 'sale' | 'subdivision'

export default function Services() {
  const services = [
    {
      icon: RefreshCw,
      title: 'Property Trade-In and Exchange',
      benefit:
        'Enables direct exchange between property owners who want a different asset rather than a cash exit',
      bullets: [
        'Direct trade with a matched property owner',
        'Clear top-up or payout where values differ',
        'Full paperwork and process handled by us',
      ],
      type: 'Trade-In and Exchange',
      images: ['/Apartment.webp', '/Bungalow.webp'],
      alt: 'Property Trade-In and Exchange illustration with two distinct homes',
      accent: 'bg-emerald-600',
      softBg: 'bg-emerald-50',
      glow: 'from-emerald-400/20 via-emerald-300/10 to-transparent',
    },
    {
      icon: Banknote,
      title: 'Property Sale',
      benefit:
        'Provides a controlled, transparent exit for owners who need liquidity without prolonged market exposure.',
      bullets: [
        'Assisted market listing and pricing',
        'Transparent and predictable fees',
        'Faster settlement options available',
      ],
      type: 'sale',
      images: ['/house.webp', '/sale.webp'],
      alt: 'Property sale process showing listing and completion',
      accent: 'bg-blue-600',
      softBg: 'bg-blue-50',
      glow: 'from-blue-400/20 via-blue-300/10 to-transparent',
    },
    {
      icon: Award,
      title: 'Subdivision & Registration',
      benefit: 'Split land, register titles, unlock value.',
      bullets: [
        'Legal subdivision and approvals',
        'Proper planning and land division',
        'Title registration and transfer support',
      ],
      type: 'subdivision',
      images: ['/before_division.webp', '/Division.webp'],
      alt: 'Land subdivision and registration documents',
      accent: 'bg-amber-600',
      softBg: 'bg-amber-50',
      glow: 'from-amber-400/20 via-amber-300/10 to-transparent',
    },
  ]

  return (
    <section id="services" className="pt-12 pb-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple, transparent paths to your next property milestone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`
                    relative flex flex-col h-full rounded-3xl
                    ${service.softBg}
                    border border-slate-200
                    shadow-lg transition-all duration-300
                    group-hover:shadow-2xl
                  `}
                >
                  {/* RIGHT-SIDE HOVER GLOW (ported from Stories logic) */}
                  <div
                    className={`
                      absolute inset-0
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-gradient-to-l ${service.glow}
                      pointer-events-none
                    `}
                  />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-3xl">
                    <div className="grid grid-cols-2 h-full">
                      <img
                        src={service.images[0]}
                        alt={`${service.title} before`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />

                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ${service.accent} p-4 rounded-2xl shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <img
                        src={service.images[1]}
                        alt={`${service.title} after`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col flex-grow p-8 bg-white/70 backdrop-blur-sm rounded-b-3xl">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.softBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-7 h-7 text-slate-900" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-6">
                      {service.benefit}
                    </p>

                    <ul className="space-y-4">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${service.accent} flex-shrink-0 mt-0.5`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-sm leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
