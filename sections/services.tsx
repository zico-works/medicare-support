'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';
import { motion, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, [isMobile]);

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section className='container mt-20' id='services'>
      <div ref={container} className='relative md:h-[300vh]'>
        <div className='sticky left-0 top-32 flex items-center overflow-hidden md:h-[40vh]'>
          <motion.div
            className='flex gap-4 max-md:flex-col'
            style={isMobile ? undefined : { x }}
          >
            {SERVICES.map(({ color, desc, title }, idx) => (
              <div
                key={title}
                className={cn(
                  'flex flex-col justify-center rounded-xl p-4 transition duration-200 hover:bg-[#EFF7FF]',
                  idx === 0 ? 'md:w-48' : 'md:w-[500px]',
                )}
                style={{ background: color }}
              >
                <h1 className='text-2xl font-semibold text-primary-750 sm:text-3xl lg:text-4xl'>
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
  },
  {
    title: 'ACA - Obama Care',
    desc: 'Get access to affordable care through the ACA, ensuring coverage for all essential health benefits.',
    color: '#FEF8EC',
  },
  {
    title: 'FE – Final Expense',
    desc: 'Our final expense plans ensure your loved ones are financially protected during tough times.',
    color: '#FEEBFF',
  },
  {
    icon: 'doc.svg',
    title: 'SSDI',
    desc: 'We assist you in applying for Social Security Disability Insurance, securing your financial future.',
    color: '#EEF9FC',
  },
  {
    icon: 'motor.svg',
    title: 'Auto Insurance',
    desc: 'Protect yourself and your vehicle with our reliable and comprehensive auto insurance policies.',
    color: '#EDF1FD',
  },
  {
    icon: 'settle.svg',
    title: 'Debt Settlement',
    desc: 'Our debt settlement services help you manage and reduce your financial liabilities effectively.',
    color: '#FEF8EC',
  },
  {
    icon: 'people.svg',
    title: 'U65 Health Insurance',
    desc: 'We offer specialized plans for those under 65, providing flexible and affordable coverage options.',
    color: '#DEFCF9',
  },
  {
    icon: 'tax.svg',
    title: 'Tax Debt',
    desc: 'Our experts help you navigate and resolve tax debt issues efficiently, easing your financial burden.',
    color: '#FAF0F8',
  },
];

export default Services;
