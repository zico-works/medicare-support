'use client';

import Button from '@/components/button';
import Modal from '@/components/modal';
import { useStep } from '@/contexts/step-context';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const { setShowModal } = useStep();

  return (
    <section className='px-6 max-sm:px-3'>
      <div className='hero-background relative mt-20 rounded-3xl py-32 text-white'>
        <div className='relative z-50'>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'font-bold lg:text-6xl md:text-4xl max-sm:max-w-xs max-w-xl text-3xl mx-auto text-center font-bricolage',
            )}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Find Your Ideal Insurance Plan
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className='mx-auto mt-4 max-w-lg text-center font-medium max-sm:px-4 md:text-xl'
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            Find the perfect insurance plan effortlessly. Our
            experienced agents and easy-to-use tools connect you with
            top-rated coverage from trusted local providers.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className='mt-6 flex items-center justify-center'
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            <Modal>
              <Button
                className='group flex items-center gap-2 px-8 py-[10px]'
                onClick={() => setShowModal(true)}
              >
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
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className='mx-auto mt-7 flex items-center justify-center gap-3'
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
