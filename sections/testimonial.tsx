import { bricolage } from '@/app/font';
import ClientStories from '@/components/customers-stories';
import { cn } from '@/utils/cn';

const Testimonial = () => (
  <section className='mt-24'>
    <h1
      className={cn(
        bricolage.className,
        'lg:text-6xl text-3xl mx-auto text-center max-w-2xl sm:text-4xl text-[#336699] font-medium',
      )}
    >
      Hear What Our Clients and Partners Say
    </h1>

    <ClientStories />
  </section>
);

export default Testimonial;
