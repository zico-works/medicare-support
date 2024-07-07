'use client';

import * as React from 'react';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/utils/cn';
import { childVariants, containerVariants } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <section className='about-bg background' id='about'>
      <div className='container mt-20 flex items-center justify-between gap-y-7 py-20 max-md:flex-col-reverse'>
        <SlideInAnimation>
          <Image
            alt='A customer care'
            height={550}
            src='/images/about-image.webp'
            width={450}
          />
        </SlideInAnimation>

        <div>
          <SlideInAnimation
            as='h1'
            className={cn(
              'lg:text-6xl text-3xl font-bricolage sm:text-4xl text-primary-600 font-medium',
            )}
            delay={0.4}
          >
            About us
          </SlideInAnimation>
          <SlideInAnimation
            as='p'
            className='max-w-[420px]'
            delay={0.4}
          >
            Various businesses encounter challenges in acquiring new
            customers due to poor-quality leads. MSM sets itself apart
            by delivering quality traffic call that connects you
            directly with highly dedicated and precisely targeted
            prospects.
          </SlideInAnimation>

          <div ref={container}>
            <SlideInAnimation
              className='mt-5 flex flex-col gap-3'
              delay={0.4}
            >
              {isInView && (
                <motion.div
                  animate='visible'
                  exit='exit'
                  initial='hidden'
                  variants={containerVariants}
                >
                  {DATA.map(({ desc, title }) => (
                    <motion.div
                      key={title}
                      className='grid grid-cols-[auto_1fr] gap-3'
                      variants={childVariants}
                    >
                      <Image
                        alt='checked'
                        height={24}
                        src='/icons/check.svg'
                        width={24}
                      />

                      <div>
                        <h2 className='text-lg font-medium text-[#303864] lg:text-xl'>
                          {title}
                        </h2>
                        <p>{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </SlideInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DATA = [
  {
    title: 'Specialized Services',
    desc: 'We offer guidance on healthy lifestyle behaviors',
  },
  {
    title: 'Unbiased Advice',
    desc: 'We prioritize your best interests.',
  },
  {
    title: '24/7 Support',
    desc: 'Always here to help you.',
  },
];

export default About;
