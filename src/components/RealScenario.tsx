import { Home, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function RealScenario() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Real Badilisha Scenario
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how property swapping works in real life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Home className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Jane's Situation</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Location:</span> Nairobi, Karen
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Current Home:</span> 3-bedroom house
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Goal:</span> Downsize to a 2-bedroom apartment
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Reason:</span> Kids have moved out, simplifying her life
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Match</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">They Meet:</span> A growing family
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Their Home:</span> 2-bedroom apartment in the same area
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Their Goal:</span> Upgrade to Jane's 3-bedroom
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Perfect Fit:</span> Both need exactly what the other has
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Resolution</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Valuations:</span> Jane's home: KES 15M | Family's apt: KES 12M
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Settlement:</span> Family pays Jane KES 3M difference
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Timeline:</span> 3 weeks from match to keys in hand
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">Result:</span> Both move simultaneously, stress-free
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-emerald-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why This Works</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No Double Mortgages</h4>
                  <p className="text-gray-600">Both parties move at the same time. No bridging loans. No waiting to sell.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fair Valuations</h4>
                  <p className="text-gray-600">Independent professionals value both properties transparently. Everyone knows exactly where they stand.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Clear Financial Settlement</h4>
                  <p className="text-gray-600">The value difference is settled transparently upfront. No hidden costs. No surprises.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">We Handle Everything</h4>
                  <p className="text-gray-600">Legal documents, transfers, paperwork coordination. You focus on your move, we handle the complexity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}