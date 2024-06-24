import About from '@/sections/about';
import Contact from '@/sections/contact';
import Hero from '@/sections/hero';
import PopularPlans from '@/sections/popular-plans';
import Services from '@/sections/services';
import TrustedCompanies from '@/sections/trusted-companies';

const Homepage = () => (
  <main>
    <Hero />
    <TrustedCompanies />
    <About />
    <Services />
    <PopularPlans />
    <Contact />
  </main>
);

export default Homepage;
