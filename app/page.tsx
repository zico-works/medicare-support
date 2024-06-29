import About from '@/sections/about';
import Hero from '@/sections/hero';
import Services from '@/sections/services';
import TrustedCompanies from '@/sections/trusted-companies';

const Homepage = () => (
  <main>
    <Hero />
    <TrustedCompanies />
    <About />
    <Services />
  </main>
);

export default Homepage;
