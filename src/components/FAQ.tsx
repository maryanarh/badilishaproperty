import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is property trade-In and exchange legal in Kenya?',
      answer: 'Yes. We document all transfers through lawful channels and handle registration to ensure every transition is secure and compliant with local laws.'
    },
    {
      question: 'Do I need cash to top up a trade-In?',
      answer: 'Sometimes. If the property you are moving into is valued higher than your current one, a top-up is needed. We show you all options up front so there are no surprises.'
    },
    {
      question: 'What if I can’t find a match?',
      answer: 'We’ll suggest sale or subdivision options so you don’t get stuck. Our goal is to keep you moving forward, regardless of the path.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:border-emerald-200 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900 text-left">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-white animate-fade-in">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
