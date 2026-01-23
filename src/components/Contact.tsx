import { useState } from 'react';
import { CheckCircle, MessageCircle, Shield } from 'lucide-react';
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
    console.log('📤 Submitting formData:', formData);

    try {
      if (supabase) {
        const { data: sessionData } = await supabase.auth.getSession();
        console.log('Supabase session:', sessionData);

        const { data, error: submitError } = await supabase
          .from('contact_inquiries')
              .insert([{
                full_name: formData.full_name,
                phone: formData.phone,
                location: formData.location,
                property_type: formData.property_type,
                email: 'no-email@badilisha.app', // placeholder
                message: formData.goal
              }])
          .select();

        if (submitError) {
          console.error('❌ Supabase insert error:', submitError);
          setError(submitError.message);
          return;
        }

        console.log('✅ Supabase insert success:', data);

      }
      
      setIsSuccess(true);
    }  catch (err) {
        console.error(err);
        setError('Something went wrong. Please try again or chat with us on WhatsApp.');
      }finally {
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
            <button onClick={() => setIsSuccess(false)} className="text-emerald-600 font-semibold hover:underline">Submit another Inquiry.</button>
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
          Let’s Talk About Your Property
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          No pressure. Just clear options and honest guidance.
        </p>
      </div>

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex gap-2 mb-8">
              <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
              <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-emerald-500' : 'bg-slate-100'}`}></div>
            </div>

            <form onSubmit={step === 1 ? handleNext : handleSubmit}>
              {step === 1 ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input type="text" name="full_name" required value={formData.full_name} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="+254..." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Area / Location *</label>
                    <input type="text" name="location" required value={formData.location} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="e.g. Karen, Nairobi" />
                  </div>
                  <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all">Next Step</button>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Property Type</label>
                    <select name="property_type" value={formData.property_type} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none">
                      <option value="">Select type</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Land">Land</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">What's your goal?</label>
                    <textarea name="goal" rows={4} value={formData.goal} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none resize-none" placeholder="e.g. I want to swap my house for a smaller apartment plus cash." />
                  </div>
                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200">Back</button>
                    <button type="submit" disabled={isSubmitting} className="flex-[2] bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50">
                      {isSubmitting ? 'Submitting...' : 'Find Your Match'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

                    <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Your Property Swap Journey</h2>
            <p className="text-lg text-slate-600 mb-8">
              Share a bit about your property. We reply within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Prefer a direct chat?</h4>
                <p className="text-slate-600 mb-4 text-sm">Get quick answers on WhatsApp from our local experts.</p>
                <a
                  href="https://wa.me/254700000000?text=Hello%20I%20am%20interested%20in%20a%20property%20swap"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-500 text-sm">
                <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <p>Secure & private. Your information is never shared with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
