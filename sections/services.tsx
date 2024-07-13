'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';
import {
  cubicBezier,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

const Services = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const [isMobile, setIsMobile] = React.useState(false);
  const [screen, setScreen] = React.useState('-71.4%');

  const x = useTransform(scrollYProgress, [0, 1], ['1%', screen], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
    clamp: false,
  });

  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsMobile(true);
    }

    if (typeof window !== 'undefined' && window.innerWidth <= 1215) {
      setScreen('-73.2%');
    }

    if (typeof window !== 'undefined' && window.innerWidth >= 1300) {
      setScreen('-61.8%');
    }
  }, [isMobile]);

  return (
    <section id='services'>
      <div
        ref={container}
        className='relative max-sm:mt-10 lg:h-[300vh]'
      >
        <div className='sticky left-0 flex items-center overflow-hidden md:h-screen lg:top-10 2xl:h-[60vh]'>
          <motion.div
            className='flex gap-4 max-md:flex-col'
            style={isMobile ? undefined : { x }}
          >
            {SERVICES.map(({ color, desc, src, title }, idx) => (
              <div
                key={title}
                className={cn(
                  'flex flex-col justify-center rounded-3xl transition duration-200 hover:bg-[#EFF7FF]',
                  idx === 0
                    ? 'md:w-[200px] lg:p-4 lg:px-6 max-sm:pl-4'
                    : 'md:w-[500px] h-[450px] p-4 px-6',
                )}
                style={{ background: color }}
              >
                {src && (
                  <div className='mb-6'>
                    <video
                      autoPlay
                      loop
                      className='size-full rounded-3xl'
                      height={100}
                      width={100}
                    >
                      <source
                        src={`/videos/${src}`}
                        type='video/mp4'
                      />
                    </video>
                  </div>
                )}
                <h1 className='mb-2 text-2xl font-semibold text-primary-750 sm:text-3xl'>
                  {title}
                </h1>
                <p className='mt-3 text-xl'>{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const SERVICES = [
  {
    title: 'Why choose us',
    color: '#fff',
  },
  {
    title: 'Medicare',
    desc: 'We offer personalized health insurance solutions, ensuring you get the best coverage for your needs.',
    color: '#FEECED',
    src: '1.mp4',
  },
  {
    title: 'ACA - Obama Care',
    desc: 'Get access to affordable care through the ACA, ensuring coverage for all essential health benefits.',
    color: '#FEF8EC',
    src: '2.mp4',
  },
  {
    title: 'FE – Final Expense',
    desc: 'Our final expense plans ensure your loved ones are financially protected during tough times.',
    color: '#FEEBFF',
    src: '3.mp4',
  },
  {
    icon: 'doc.svg',
    title: 'SSDI',
    desc: 'We assist you in applying for Social Security Disability Insurance, securing your financial future.',
    color: '#EEF9FC',
    src: '4.mp4',
  },
  {
    icon: 'motor.svg',
    title: 'Auto Insurance',
    desc: 'Protect yourself and your vehicle with our reliable and comprehensive auto insurance policies.',
    color: '#EDF1FD',
    src: '5.mp4',
  },
  {
    icon: 'settle.svg',
    title: 'Debt Settlement',
    desc: 'Our debt settlement services help you manage and reduce your financial liabilities effectively.',
    color: '#FEF8EC',
    src: '6.mp4',
  },
  {
    icon: 'people.svg',
    title: 'U65 Health Insurance',
    desc: 'We offer specialized plans for those under 65, providing flexible and affordable coverage options.',
    color: '#DEFCF9',
    src: '7.mp4',
  },
  {
    icon: 'tax.svg',
    title: 'Tax Debt',
    desc: 'Our experts help you navigate and resolve tax debt issues efficiently, easing your financial burden.',
    color: '#D8DBDF',
    src: '8.mp4',
  },
];

export default Services;
