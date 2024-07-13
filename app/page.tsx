import config from '@/config';
import About from '@/sections/about';
import Faq from '@/sections/faq';
import Hero from '@/sections/hero';
import PopularPlans from '@/sections/popular-plans';
import Services from '@/sections/services';
import Testimonial from '@/sections/testimonial';
import TrustedCompanies from '@/sections/trusted-companies';
import { getSEOTags } from '@/utils/seo';

export const metadata = getSEOTags({
  title: `Delivering exclusive calls from ready consumers today | ${config.appName}`,
  canonicalUrlRelative: '/',
  description:
    'Connect with ready-to-buy consumer instantly through our network of buyers!',
  keywords: 'Get Quote, Insurance, Medicare support marketing',
});

const Homepage = () => (
  <main className='2xl:pr-6'>
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
