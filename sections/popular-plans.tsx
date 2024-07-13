'use client';

import PlanBtn from '@/components/plan-btn';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const PopularPlans = () => (
  <section className='px-3 lg:px-6' id='about'>
    <div className='rounded-3xl bg-tint-50 py-14'>
      <div className='container'>
        <SlideInAnimation
          as='p'
          className='text-center text-[#ff2020]'
          delay={0.4}
        >
          Get an Insurance Quote!
        </SlideInAnimation>
        <SlideInAnimation
          as='h1'
          className='pt-2 text-center font-bricolage text-3xl font-medium text-primary-600 sm:text-4xl lg:text-6xl'
          delay={0.5}
        >
          Popular Plans
        </SlideInAnimation>

        <div className='mt-10 space-y-16'>
          {PLANS.map(({ desc, icon, image, layout, plan, title }) => (
            <div
              key={plan}
              className={cn(
                'grid grid-cols-1 gap-x-12 2xl:gap-x-20 sm:grid-cols-2 items-center gap-y-7',
              )}
            >
              <SlideInAnimation
                className={cn(
                  layout === 'row-reverse'
                    ? 'order-last'
                    : 'md:order-first order-last',
                )}
              >
                <Image
                  alt='smiling woman'
                  className='w-full'
                  height={300}
                  src={`/images/${image}`}
                  width={450}
                />
              </SlideInAnimation>

              <div>
                <SlideInAnimation className='mb-3 flex w-fit items-center gap-2 rounded-lg border-[1.5px] border-solid border-primary-700 px-3 py-1'>
                  <div className='flex size-9 items-center justify-center rounded-full bg-primary-600'>
                    <Image
                      alt={plan}
                      height={18}
                      src={`/icons/${icon}`}
                      width={18}
                    />
                  </div>

                  <p className='font-medium text-primary-600'>
                    {plan}
                  </p>
                </SlideInAnimation>
                <SlideInAnimation className='max-w-sm font-bricolage text-3xl font-medium capitalize text-primary-500 lg:text-4xl'>
                  {title}
                </SlideInAnimation>
                <SlideInAnimation className='mb-4 mt-2 max-w-[500px]'>
                  {desc}
                </SlideInAnimation>

                <PlanBtn />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PLANS = [
  {
    icon: 'school-plan.svg',
    image: 'retail-plan.webp',
    plan: 'Retail Plan',
    title: 'For families and individuals.',
    desc: 'Our Retail Plan is packaged to meet the health need of families & individuals ensuring that they have access to quality and affordable healthcare services while avoiding the catastrophic risk of medical bills.',
    layout: 'row',
  },
  {
    icon: 'retail-plan.svg',
    image: 'school-plan.webp',
    plan: 'School Plan',
    title: 'pre-tertiary and tertiary institutions ',
    desc: 'Our School Health Plan is specially designed to meet the health need of students in both pre-tertiary and tertiary institutions of learning. Students are covered for any medical conditions that may arise while in school thereby ensuring they can continue to pursue their dream. It also gives parents and school authorities the needed peace of mind.',
    layout: 'row-reverse',
  },
  {
    icon: 'senior-plan.svg',
    image: 'senior-citizen-plan.webp',
    plan: 'Senior Citizens Plan',
    title: 'elderly above the age of 60 years',
    desc: 'Our Senior Citizen Plan is targeted at the elderly above the age of 60years. It enables them to live a healthy life even in retirement through access to good and affordable healthcare.',
    layout: 'row',
  },
];

export default PopularPlans;
