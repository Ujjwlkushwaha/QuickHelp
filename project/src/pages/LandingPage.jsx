import Navbar from '../components/common/Navbar';
import Hero from '../components/landing/Hero';
import ServiceCards from '../components/landing/ServiceCards';
import HowItWorks from '../components/landing/HowItWorks';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen  w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServiceCards />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;