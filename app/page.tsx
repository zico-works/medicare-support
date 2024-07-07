import About from '@/sections/about';
import Faq from '@/sections/faq';
import Hero from '@/sections/hero';
import PopularPlans from '@/sections/popular-plans';
import Services from '@/sections/services';
import Testimonial from '@/sections/testimonial';
import TrustedCompanies from '@/sections/trusted-companies';

const Homepage = () => (
  <main>
    <Hero />
    <TrustedCompanies />
    <About />
    <Services />
    <PopularPlans />
    <Testimonial />
    <Faq />
  </main>
);

export default Homepage;
