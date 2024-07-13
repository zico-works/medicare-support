'use client';

import { useStepDetails } from '@/contexts/step-details-context';
import { cn } from '@/utils/cn';

import FirstDetails from './first-details';
import FourthDetails from './fourth-details';
import SecondDetails from './second-details';
import ThirdDetails from './third-details';

const DETAILS = [
  {
    id: 1,
    Component: FirstDetails,
  },
  {
    id: 2,
    Component: SecondDetails,
  },
  {
    id: 3,
    Component: ThirdDetails,
  },
  {
    id: 4,
    Component: FourthDetails,
  },
];

const StepDetails = () => {
  const { activeDetailsComponent } = useStepDetails();

  const filteredSteps = DETAILS.filter(
    (steps) => steps.id === activeDetailsComponent,
  );

  return (
    <div className='mt-3'>
      <div className='flex items-center justify-center gap-1 text-sm text-primary-400'>
        {activeDetailsComponent}{' '}
        <span
          className={cn(
            activeDetailsComponent === DETAILS.length
              ? 'font-bold'
              : 'text-tint-200',
          )}
        >
          /
        </span>
        <span
          className={cn(
            activeDetailsComponent === DETAILS.length
              ? ''
              : 'text-tint-200',
          )}
        >
          {DETAILS.length}
        </span>
      </div>
      {filteredSteps.map(({ Component, id }) => (
        <Component key={id} />
      ))}
    </div>
  );
};

export default StepDetails;
