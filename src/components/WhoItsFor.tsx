import { Users, Home, TrendingUp, MapPin, Heart, Briefcase } from 'lucide-react';

export default function WhoItsFor() {
  const scenarios = [
    {
      icon: Users,
      title: 'Growing Families',
      description: 'Need more space but don\'t want the stress of selling first? Trade-In or Exchange into a larger home that fits your expanding family.',
      benefit: 'Move before your family outgrows your current space',
    },
    {
      icon: Home,
      title: 'Downsizers',
      description: 'Ready for something smaller and more manageable? Transition to a home that matches your current lifestyle without the wait.',
      benefit: 'Simplify life without the hassle of traditional sales',
    },
    {
      icon: MapPin,
      title: 'Relocating Professionals',
      description: 'Moving for work or lifestyle? Trade-In or Exchange your urban property for a rural retreat, or vice versa, with confidence and support.',
      benefit: 'Relocate on your timeline, not the market\'s',
    },
    {
      icon: TrendingUp,
      title: 'Property Investors',
      description: 'Looking to convert residential property into income-generating assets? We help you make strategic property Trade-In that align with your investment goals.',
      benefit: 'Optimize your portfolio without multiple transactions',
    },
    {
      icon: Heart,
      title: 'Lifestyle Changers',
      description: 'Life circumstances change. Whether it\'s health, retirement, or a fresh start, Trade-In or Exchange your property as we support your new chapter.',
      benefit: 'Adapt your living situation to your evolving needs',
    },
    {
      icon: Briefcase,
      title: 'Estate & Inheritance',
      description: 'Managing inherited property or estate transitions? We help families navigate property Trade-In or Exchange with sensitivity and expertise.',
      benefit: 'Handle complex family property matters with care',
    },
  ];

  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every homeowner has a story. Whether you're upgrading, downsizing, relocating, or reimagining your future, we're here to help you move forward with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <scenario.icon className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{scenario.description}</p>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-emerald-600">{scenario.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Whatever Your Reason, We Understand
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Property decisions are deeply personal. We listen to your story, understand your needs, and help you find a path forward that works for you. No judgment, no pressure, just genuine support.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Share Your Story With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}