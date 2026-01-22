import { Shield, Lock, Award, Users } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why You Can Trust Us</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Registered & Compliant</h3>
            <p className="text-sm text-gray-600">Licensed property service provider in Kenya, fully compliant with all regulations</p>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Data Secure & Private</h3>
            <p className="text-sm text-gray-600">Your information is encrypted and confidential. We never share your details without consent.</p>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Process</h3>
            <p className="text-sm text-gray-600">No hidden fees, no surprises. Every step is clear and communicated upfront.</p>
          </div>

          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600">Valuers, legal experts, and coordinators dedicated to your success</p>
          </div>
        </div>
      </div>
    </section>
  );
}