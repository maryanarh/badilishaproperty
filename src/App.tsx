import Navigation from './components/Navigation';
import Hero1 from './components/Hero1';
import About from './components/About';
import Scenarios from './components/Scenarios';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyChoose from './components/WhyChoose';
import Services1 from './components/Services1';
import { PremiumTestimonials } from './components/Testimonialss';
import ScrollProgressIndicator from "./components/ScrollProgressIndicator"
import { ServiceDropdowns } from './components/ServiceDropdowns';
import HowItWorks from  './components/HowItWorks';


function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navigation />
      <ScrollProgressIndicator />
      <Hero1 />
      <About/>
      <Services1 />
      <ServiceDropdowns />
      <HowItWorks />
      <Scenarios />
      <WhyChoose />
      <PremiumTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
