import { ShieldCheck, Scale, Lock, MapPin } from 'lucide-react';

export default function Guarantees() {
  const items = [
    {
      icon: ShieldCheck,
      text: 'Registered & compliant in Kenya'
    },
    {
      icon: Scale,
      text: 'Clear fees, no hidden charges'
    },
    {
      icon: Lock,
      text: 'Secure & private — we don’t sell your data'
    },
    {
      icon: MapPin,
      text: 'Local experts handling paperwork'
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Your Guarantees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="bg-emerald-50 p-3 rounded-full group-hover:bg-emerald-100 transition-colors">
                <item.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="font-medium text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
