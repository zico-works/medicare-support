'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';

import CarrierSelection from './carrier-selection';
import CoverageDetails from './coverage-details';
import Enrollment from './enrollment';
import Finished from './finished';
import HouseholdInformation from './household-information';
import StepDetails from './step-details';
import StepsHeader from './steps-header';
import Terms from './terms';

const STEPS = [
  {
    id: 1,
    title: 'Your details',
    label: 'details',
    Component: StepDetails,
  },
  {
    id: 2,
    title: 'Coverage Details',
    label: 'coverage',
    Component: CoverageDetails,
  },
  {
    id: 3,
    title: 'Household Information',
    label: 'household',
    Component: HouseholdInformation,
  },
  {
    id: 4,
    title: 'Carrier Selection',
    label: 'carrier',
    Component: CarrierSelection,
  },
  {
    id: 5,
    title: 'Enrollment ',
    label: 'enrollment ',
    Component: Enrollment,
  },
  {
    id: 6,
    title: 'Terms and Conditions',
    label: 'terms',
    Component: Terms,
  },
  {
    id: 7,
    title: 'Done',
    label: 'finished',
    Component: Finished,
  },
];

const Steps = () => {
  const [activeComponent, setActiveComponent] = React.useState(1);

  console.log(setActiveComponent);

  const filteredSteps = STEPS.filter(
    (steps) => steps.id === activeComponent,
  );
  const filteredStepped = STEPS.filter(
    (step) => step.id !== 6 && step.id !== 7,
  );

  return (
    <div className='mt-20'>
      <div>
        {activeComponent === STEPS.length - 1 ||
        activeComponent === STEPS.length ? null : (
          <StepsHeader />
        )}
      </div>
      <div className='flex'>
        {filteredStepped.map(({ id, title }, idx) => (
          <div
            key={id}
            className='flex w-44 flex-col items-center justify-center gap-y-3'
          >
            <div className='relative'>
              <div className='flex size-10 items-center justify-center rounded-full border-2 border-tint-200'>
                <div className='size-3 rounded-full bg-tint-100' />
              </div>
              <div
                className={cn(
                  'absolute left-10 top-1/2 h-[2px] w-[135px] -translate-y-1/2 bg-tint-100',
                  filteredStepped.length === id && 'hidden',
                )}
              />
            </div>

            <p
              className={cn(
                'font-semibold',
                activeComponent === id || activeComponent > idx
                  ? 'text-primary-500'
                  : 'text-tint-200',
              )}
            >
              {title}
            </p>
          </div>
        ))}
      </div>
      {filteredSteps.map(({ Component, label }) => (
        <Component key={label} />
      ))}
    </div>
  );
};

export default Steps;
