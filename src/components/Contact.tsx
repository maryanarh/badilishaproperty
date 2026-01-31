import { useState } from 'react';
import {
  CheckCircle,
  MessageCircle,
  Shield,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Clock
} from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    location: '',
    property_type: '',
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.full_name && formData.phone && formData.location) {
      setStep(2);
    } else {
      setError('Please fill in all required fields.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (supabase) {
        const { error: submitError } = await supabase
          .from('contact_inquiries')
          .insert([{
            full_name: formData.full_name,
            phone: formData.phone,
            location: formData.location,
            property_type: formData.property_type,
            email: 'no-email@badilisha.app',
            message: formData.goal
          }])
          .select();

        if (submitError) {
          setError(submitError.message);
          return;
        }
      }

      setIsSuccess(true);
    } catch {
      setError('Something went wrong. Please try again or chat with us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-emerald-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
            <p className="text-slate-600 mb-6">
              We've received your details. Our team will review them and get back to you shortly.
            </p>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8">
              <p className="text-sm text-slate-700 mb-4 font-medium">
                Want faster answers?
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hello, I'm ${formData.full_name}. I'm interested in ${formData.goal} for my ${formData.property_type} in ${formData.location}.`
                )}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <button
              onClick={() => setIsSuccess(false)}
              className="text-emerald-600 font-semibold hover:underline"
            >
              Submit another Inquiry.
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Talk About Your Property
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No pressure. Just clear options and honest guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 max-w-xl mx-auto">
            <div className="flex gap-2 mb-8">
              <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
              <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
            </div>

            <form onSubmit={step === 1 ? handleNext : handleSubmit}>
              {step === 1 ? (
                <div className="space-y-6 lg:space-y-4">
                  <input name="full_name" placeholder="Full Name *" value={formData.full_name} onChange={handleChange} className="w-full p-4 rounded-xl border bg-slate-50" />
                  <input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} className="w-full p-4 rounded-xl border bg-slate-50" />
                  <input name="location" placeholder="Location *" value={formData.location} onChange={handleChange} className="w-full p-4 rounded-xl border bg-slate-50" />
                  <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700">
                    Next Step
                  </button>
                </div>
              ) : (
                <div className="space-y-6 lg:space-y-4">
                  <select name="property_type" value={formData.property_type} onChange={handleChange} className="w-full p-4 rounded-xl border bg-slate-50">
                    <option value="">Select property type</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Land">Land</option>
                  </select>
                  <textarea name="goal" rows={4} value={formData.goal} onChange={handleChange} className="w-full p-4 rounded-xl border bg-slate-50" />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button disabled={isSubmitting} className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700">
                    {isSubmitting ? 'Submitting...' : 'Find Your Match'}
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Prefer a direct chat?</h4>
              <p className="text-slate-600 mb-4 text-sm">Get quick answers on WhatsApp.</p>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Added Office Hours Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900">Office Hours</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">Monday - Friday</span>
                  <span className="font-medium text-slate-900 whitespace-nowrap">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">Saturday</span>
                  <span className="font-medium text-slate-900 whitespace-nowrap">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 text-sm">Sunday</span>
                  <span className="font-medium text-slate-900">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  WhatsApp available 24/7 for urgent inquiries
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" target="_blank" className="p-3 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" className="p-3 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" className="p-3 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" className="p-3 rounded-full bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-500 text-sm">
              <Shield className="w-5 h-5 text-emerald-500" />
              <p>Secure & private. Your information is never shared.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}