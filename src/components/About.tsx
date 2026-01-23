import { div } from 'framer-motion/client';
import { Target, Eye, Heart, Lightbulb, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Humanity & Understanding',
      description: 'Every homeowner has a unique story. We listen, understand, and provide personalized support without judgment.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We challenge traditional real estate models with smart, modern solutions that work for today\'s world.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We give you the knowledge, tools, and confidence to make informed property decisions on your terms.',
    },
    {
      icon: Target,
      title: 'Simplicity',
      description: 'Complex processes made clear. No jargon, no confusion, just straightforward guidance.',
    },
  ];

  return (
    <section id="about" className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Redefining Property Transitions
            </h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>
                Badilisha Properties Limited exists to help people move forward in life without sacrificing the wealth they’ve already built.
                We were founded on a simple insight: during major life transitions, selling property often leads to rushed decisions and
                unnecessary loss of value. We do things differently.
              </p>

              <p>
                Instead of treating property as something to offload, we see it as a store of value, one that can be transformed,
                rebalanced, or restructured to meet changing needs. This philosophy shapes every step of our process, from valuation
                to handover, ensuring outcomes that are financially sound, deliberate, and human.
              </p>
            </div>

          </div>

            <div className="space-y-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-emerald-50 text-lg">
            Our mission is to make property transitions simple, clear, and secure.
            We help homeowners move to their next position through fair valuation,
            smart matching, and end-to-end legal support—without forcing premature sales
            or risking long-term wealth.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>
          <p className="text-gray-300 text-lg">
            We envision a future where property transitions are predictable,
            human-centered, and fair—where complexity is hidden behind clear processes
            and ownership becomes a tool for opportunity, not a burden.
          </p>
        </div>
      </div>
      </div>


          {/* <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from how we match properties to how we support our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-emerald-50/50 rounded-xl p-6 text-center group hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
<div className="mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  </div>
</div>


          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Us in Reimagining Real Estate
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you're ready to make a move or simply exploring your options, we're here to help you understand what's possible. No pressure, just honest conversation.
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
              Let's Talk About Your Property
          </button>
        </div> */}
      </div>
    </section>
  );
}