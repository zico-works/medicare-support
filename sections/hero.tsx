import Button from '@/components/button';
import Modal from '@/components/modal';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const Hero = () => (
  <section className='relative pt-32 text-white'>
    <h1
      className={cn(
        'font-bold lg:text-6xl md:text-4xl max-sm:max-w-xs max-w-xl text-3xl mx-auto text-center font-bricolage',
      )}
    >
      Find Your Ideal Insurance Plan
    </h1>
    <p className='mx-auto mt-3 max-w-lg text-center font-medium max-sm:px-4 md:text-xl'>
      Find the perfect insurance plan effortlessly. Our experienced
      agents and easy-to-use tools connect you with top-rated coverage
      from trusted local providers.
    </p>

    <div className='mt-5 flex items-center justify-center'>
      <Modal>
        <Button className='group flex items-center gap-2 px-8 py-[10px]'>
          <span>Get a Quote</span>
          <span className='transition duration-200 group-hover:translate-x-1'>
            <Image
              alt='arrow'
              className=''
              height={15}
              src='/icons/arrow-right.svg'
              width={15}
            />
          </span>
        </Button>
      </Modal>
    </div>

    <div className='mx-auto mt-7 flex items-center justify-center gap-3'>
      <Image
        alt='satisfied customers'
        height={60}
        src='/images/customers.png'
        width={150}
      />

      <p className='font-medium'>
        <span className='text-xl'>500+</span>
        <br />
        <span>Satisfied Customers</span>
      </p>
    </div>
    <img
      alt=''
      className='!absolute top-0 -z-10 w-full object-center max-md:h-[90vh] lg:h-[120vh]'
      src='/images/hero.webp'
    />
  </section>
);

export default Hero;
