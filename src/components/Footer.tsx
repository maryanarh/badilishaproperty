import { Home, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Badilisha Properties</h3>
                <p className="text-xs text-gray-400">Property Transitions Reimagined</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Simplifying property transitions through innovative home and property Trade-in and Exchange. Move forward without the wait.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('who-its-for')}
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  Who It's For
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Property Trade-In and Exchange</li>
              <li>Professional Valuation</li>
              <li>Legal Support</li>
              <li>Financial Settlement</li>
              <li>Transfer Coordination</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@badilisha.co.ke</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+254 700 000 000</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {currentYear} Badilisha Properties Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-emerald-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}