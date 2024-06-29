'use client';

import { useStep } from '@/contexts/step-context';
import { cn } from '@/utils/cn';
import Image from 'next/image';

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
  const { activeComponent } = useStep();

  const filteredSteps = STEPS.filter(
    (steps) => steps.id === activeComponent,
  );
  const filteredStepped = STEPS.filter(
    (step) => step.id !== 6 && step.id !== 7,
  );

  return (
    <div className='mt-14'>
      <div>
        {activeComponent === STEPS.length - 1 ||
        activeComponent === STEPS.length ? null : (
          <StepsHeader />
        )}
      </div>
      <div className='overflow-x-auto'>
        <div className='slides max-sm:-ml-10'>
          {activeComponent === STEPS.length - 1 ||
          activeComponent === STEPS.length
            ? null
            : filteredStepped.map(({ id, title }, idx) => (
              <div
                key={id}
                className='flex w-44 flex-col items-center justify-center gap-y-3'
              >
                <div className='relative'>
                  <div
                    className={cn(
                        activeComponent === id ||
                          activeComponent > idx
                          ? 'border-[#e0f3f0] border-[5px] border-solid rounded-full'
                          : '',
                        'relative z-[50]',
                      )}
                  >
                    <div
                      className={cn(
                          activeComponent === id ||
                            activeComponent > idx
                            ? 'border-[#31b099] border-[3px] border-solid rounded-full'
                            : '',
                        )}
                    >
                      <div
                        className={cn(
                            'flex size-10 items-center justify-center rounded-full ',
                            activeComponent === id ||
                              activeComponent > idx
                              ? 'bg-tint-200'
                              : 'border-2 border-tint-200',
                          )}
                      >
                        {activeComponent > idx + 1 ? (
                          <div>
                            <Image
                              alt='checked'
                              height={25}
                              src='icons/green-check.svg'
                              width={25}
                            />
                          </div>
                          ) : (
                            <div
                              className={cn(
                                'size-3 rounded-full',
                                activeComponent === id ||
                                  activeComponent > idx
                                  ? 'bg-[#31b099]'
                                  : 'bg-tint-100',
                              )}
                            />
                          )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn(
                        'absolute top-1/2 w-[135px] h-[4px] -translate-y-1/2',
                        activeComponent > idx + 1
                          ? 'bg-[#31b099]'
                          : 'bg-tint-100',
                        activeComponent === id ||
                          activeComponent > idx
                          ? 'left-12'
                          : 'left-10',
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
      </div>

      {filteredSteps.map(({ Component, label }) => (
        <Component key={label} />
      ))}
    </div>
  );
};

export default Steps;
