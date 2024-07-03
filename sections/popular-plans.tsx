'use client';

import * as React from 'react';
import RetailPlan from '@/components/retail-plan';
import SchoolPlan from '@/components/school-plan';
import SeniorCitizenPlan from '@/components/senior-citizen-plan';
import { FamilySvg, LectureSvg, RelationSvg } from '@/components/svg';
import { cn } from '@/utils/cn';
import { AnimatePresence } from 'framer-motion';

const PopularPlans = () => {
  const [activePlan, setActivePlan] = React.useState('retail_plan');

  return (
    <section className='mt-20 bg-tint-50 py-16' id='about'>
      <div className='container'>
        <div>
          <p className='text-center text-[#ff2020]'>
            Get an Insurance Quote!
          </p>
          <h1 className='pt-2 text-center font-bricolage text-3xl font-medium text-primary-600 sm:text-4xl lg:text-6xl'>
            Popular Plans
          </h1>

          <div className='mt-7 flex justify-between md:justify-center md:gap-20'>
            {ICONS.map(({ Icon, label, title }) => (
              <div className='flex flex-col items-center justify-center gap-2'>
                <button
                  key={label}
                  aria-label={label}
                  className={cn(
                    'flex size-[70px] items-center justify-center rounded-full border-[1.5px] border-solid border-primary',
                    activePlan === label
                      ? 'bg-primary'
                      : 'bg-transparent',
                  )}
                  type='button'
                  onClick={() => setActivePlan(label)}
                >
                  <Icon
                    fill={activePlan === label ? '#fff' : '#1F3D5C'}
                  />
                </button>

                <p className='whitespace-nowrap font-medium text-primary'>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activePlan === 'retail_plan' && <RetailPlan />}
          {activePlan === 'school_plan' && <SchoolPlan />}
          {activePlan === 'senior-citizen_plan' && (
            <SeniorCitizenPlan />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ICONS = [
  {
    alt: 'retails plan',
    Icon: FamilySvg,
    label: 'retail_plan',
    title: 'Retail Plan',
  },
  {
    alt: 'school plan',
    Icon: LectureSvg,
    label: 'school_plan',
    title: 'School Plan',
  },
  {
    alt: 'senior citizens plan',
    Icon: RelationSvg,
    label: 'senior-citizen_plan',
    title: 'Senior Citizen Plan',
  },
];

export default PopularPlans;
