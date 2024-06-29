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
    <section className='mt-24 bg-[#ebf0f5] py-16' id='about'>
      <div className='container'>
        <div>
          <p className='text-center text-[#ff2020]'>
            Get an Insurance Quote!
          </p>
          <h1 className='pt-2 text-center font-bricolage text-3xl font-medium text-[#336699] sm:text-4xl lg:text-6xl'>
            Popular Plans
          </h1>

          <div className='mt-7 flex justify-center gap-20'>
            {ICONS.map(({ Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className={cn(
                  'flex size-[70px] items-center justify-center rounded-full border-[1.5px] border-solid border-[#336699]',
                  activePlan === label
                    ? 'bg-[#336699]'
                    : 'bg-transparent',
                )}
                type='button'
                onClick={() => setActivePlan(label)}
              >
                <Icon
                  fill={activePlan === label ? '#fff' : '#336699'}
                />
              </button>
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
  },
  {
    alt: 'school plan',
    Icon: LectureSvg,
    label: 'school_plan',
  },
  {
    alt: 'senior citizens plan',
    Icon: RelationSvg,
    label: 'senior-citizen_plan',
  },
];

export default PopularPlans;
