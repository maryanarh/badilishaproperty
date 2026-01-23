import { RefreshCw, Banknote, Award } from 'lucide-react';

type ServiceType = 'swap' | 'sale' | 'subdivision';

export default function Services() {
  const services: {
    icon: typeof RefreshCw;
    title: string;
    benefit: string;
    bullets: string[];
    type: ServiceType;
    images: string[];
    alt: string;
    iconColor: string;
    bgColor: string;
  }[] = [
    {
      icon: RefreshCw,
      title: 'Property Trade-In (Swap)',
      benefit: 'Enables direct exchange between property owners who want a different asset rather than a cash exit',
      bullets: [
        'i). Trade directly with a matched owner',
        'ii). Clear top-up or payout',
        'iii). We manage the paperwork'
      ],
      type: 'swap',
      images: [
        '/Apartment.webp',
        '/Bungalow.webp'
    ],
      alt: 'Property swapping illustration with two distinct homes',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: Banknote,
      title: 'Property Sale',
      benefit: 'Provides a controlled, transparent exit for owners who need liquidity without prolonged market exposure.',
      bullets: [
        'i). Market listing help',
        'ii). Transparent fees',
        'iii). Fast settlement options'
      ],
      type: 'sale',
      images: [
          '/house.webp',
          '/sale.jpg'
      ],
      alt: 'Property sale process showing listing and completion',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Award,
      title: 'Subdivision & Registration',
      benefit: 'Split land, register titles, unlock value.',
      bullets: [
        'i). Legal registration',
        'ii). Subdivision planning',
        'iii). Title transfer support'
      ],
      type: 'subdivision',
      images: [
        '/before_division.webp',
        '/Division.webp'
      ],
      alt: 'Land subdivision and registration documents',
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  const getServiceIcon = (type: ServiceType) => {
    switch(type) {
      case 'swap':
        return RefreshCw;
      case 'sale':
        return Banknote;
      case 'subdivision':
        return Award;
      default:
        return RefreshCw;
    }
  };

  const getIconClass = (type: ServiceType) => {
    switch(type) {
      case 'swap':
        return 'w-4 h-4 text-white';
      case 'sale':
        return 'w-4 h-4 text-white';
      case 'subdivision':
        return 'w-4 h-4 text-white';
      default:
        return 'w-4 h-4 text-white';
    }
  };

  const getIconBgColor = (type: ServiceType) => {
    switch(type) {
      case 'swap':
        return 'bg-emerald-600';
      case 'sale':
        return 'bg-blue-600';
      case 'subdivision':
        return 'bg-amber-600';
      default:
        return 'bg-emerald-600';
    }
  };

  return (
    <section id="services" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple, transparent paths to your next property milestone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = getServiceIcon(service.type);
            const iconClass = getIconClass(service.type);
            const iconBgColor = getIconBgColor(service.type);
            
            return (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  {service.images && service.images.length > 1 ? (
                    <div className="grid grid-cols-2 h-full gap-0.5 bg-white">
                      <img 
                        src={service.images[0]} 
                        alt={`${service.title} - Step 1`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${iconBgColor} p-2 rounded-full shadow-lg border-2 border-white`}>
                        <IconComponent className={`${iconClass} animate-spin-slow`} />
                      </div>
                      <img 
                        src={service.images[1]} 
                        alt={`${service.title} - Step 2`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <img 
                      src={service.images[0]} 
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-8 flex-grow">
                  <div className={`${service.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-700 font-medium mb-6">{service.benefit}</p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor}`}></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
