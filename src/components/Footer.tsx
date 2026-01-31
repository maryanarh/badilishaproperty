import { Home, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

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

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@badilisha.co.ke';
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section - Full width on mobile, 1 column on desktop */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Badilisha Properties Ltd</h3>
                <p className="text-xs text-gray-400">Property Transitions Reimagined</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Simplifying property transitions through innovative home and property Trade-in and Exchange. Move forward without the wait.
            </p>
          </div>

          {/* Two columns side by side on mobile: Quick Links + Our Services */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-sm hover:text-emerald-400 transition-colors text-left w-full flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('who-its-for')}
                    className="text-sm hover:text-emerald-400 transition-colors text-left w-full flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    Who It's For
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-sm hover:text-emerald-400 transition-colors text-left w-full flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-sm hover:text-emerald-400 transition-colors text-left w-full flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    About Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Property Trade-In
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Property Exchange
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Professional Valuation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Legal Support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Financial Settlement
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Transfer Coordination
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information - Full width on mobile, stacked as rows */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            
            {/* Email */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Send us an email</p>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-left hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-sm break-all">info@badilisha.co.ke</span>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-800 my-3"></div>

            {/* Phone numbers - stacked as rows */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Call us now</p>
              <button
                onClick={() => handlePhoneClick('+254731878019')}
                className="flex items-center gap-2 text-left hover:text-emerald-400 transition-colors w-full"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">+254 731 878 019</span>
              </button>
              <button
                onClick={() => handlePhoneClick('+254794293449')}
                className="flex items-center gap-2 text-left hover:text-emerald-400 transition-colors w-full ml-6"
              >
                <span className="text-sm">+254 794 293 449</span>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-800 my-3"></div>

            {/* Location */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Our Location</p>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
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