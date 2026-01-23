import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Scenarios from './components/Scenarios';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import { PremiumTestimonials } from './components/Testimonialss';
import ScrollProgressIndicator from "./components/ScrollProgressIndicator"
import { ServiceDropdowns } from './components/ServiceDropdowns';


function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      <ScrollProgressIndicator />
      <Hero />
      <About/>
      <Services />
      <ServiceDropdowns />
      <Scenarios />
      <WhyChoose />
      <PremiumTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
