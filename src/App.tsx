import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Scenarios from './components/Scenarios';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import { PremiumTestimonials } from './components/Testimonialss';
import ScrollProgressIndicator from "./components/ScrollProgressIndicator"


function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      <ScrollProgressIndicator />
      <Hero />
      <About/>
      <Services />
      <HowItWorks/>
      <Scenarios />
      <WhyChoose />
      <PremiumTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
