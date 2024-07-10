'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';
import {
  cubicBezier,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

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

    if (typeof window !== 'undefined' && window.innerWidth >= 1300) {
      setScreen('-61.8%');
    }
  }, [isMobile]);

  return (
    <section id='services'>
      <div ref={container} className='relative md:h-[300vh]'>
        <div className='sticky left-0 top-10 flex items-center overflow-hidden md:h-screen 2xl:h-[60vh]'>
          <motion.div
            className='flex gap-4 max-md:flex-col'
            style={isMobile ? undefined : { x }}
          >
            {SERVICES.map(({ color, desc, src, title }, idx) => (
              <div
                key={title}
                className={cn(
                  'flex flex-col justify-center rounded-xl p-4 transition duration-200 h-[450px] hover:bg-[#EFF7FF]',
                  idx === 0 ? 'md:w-[200px]' : 'md:w-[500px]',
                )}
                style={{ background: color }}
              >
                {src && (
                  <div className='mb-4'>
                    <Image
                      alt=''
                      className='h-[200px] w-full rounded-3xl'
                      height={200}
                      src={`/images/${src}`}
                      width={450}
                    />
                  </div>
                )}
                <h1 className='mb-2 text-2xl font-semibold text-primary-750 sm:text-3xl lg:text-4xl'>
                  {title}
                </h1>
                <p className='mt-3 text-2xl'>{desc}</p>
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
    src: 'family.webp',
  },
  {
    title: 'ACA - Obama Care',
    desc: 'Get access to affordable care through the ACA, ensuring coverage for all essential health benefits.',
    color: '#FEF8EC',
    src: 'school.webp',
  },
  {
    title: 'FE – Final Expense',
    desc: 'Our final expense plans ensure your loved ones are financially protected during tough times.',
    color: '#FEEBFF',
    src: 'aged.webp',
  },
  {
    icon: 'doc.svg',
    title: 'SSDI',
    desc: 'We assist you in applying for Social Security Disability Insurance, securing your financial future.',
    color: '#EEF9FC',
    src: 'family.webp',
  },
  {
    icon: 'motor.svg',
    title: 'Auto Insurance',
    desc: 'Protect yourself and your vehicle with our reliable and comprehensive auto insurance policies.',
    color: '#EDF1FD',
    src: 'school.webp',
  },
  {
    icon: 'settle.svg',
    title: 'Debt Settlement',
    desc: 'Our debt settlement services help you manage and reduce your financial liabilities effectively.',
    color: '#FEF8EC',
    src: 'aged.webp',
  },
  {
    icon: 'people.svg',
    title: 'U65 Health Insurance',
    desc: 'We offer specialized plans for those under 65, providing flexible and affordable coverage options.',
    color: '#DEFCF9',
    src: 'family.webp',
  },
  {
    icon: 'tax.svg',
    title: 'Tax Debt',
    desc: 'Our experts help you navigate and resolve tax debt issues efficiently, easing your financial burden.',
    color: '#FAF0F8',
    src: 'school.webp',
  },
];

export default Services;
