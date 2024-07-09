'use client';

import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const About = () => (
  <section className='px-3 lg:px-6' id='about'>
    <div className='about-bg background rounded-3xl'>
      <div className='container mt-20 grid grid-cols-2 items-center gap-x-10 gap-y-7 py-20 2xl:gap-x-20'>
        <SlideInAnimation>
          <Image
            alt='A customer care'
            className='w-full'
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

          <SlideInAnimation
            className='mt-5 flex flex-col gap-3'
            delay={0.4}
          >
            {DATA.map(({ desc, title }) => (
              <div
                key={title}
                className='grid grid-cols-[auto_1fr] gap-3'
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
              </div>
            ))}
          </SlideInAnimation>
        </div>
      </div>
    </div>
  </section>
);

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
