import { cn } from '@/utils/cn';
import React from 'react';

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
  const [activeComponent, setActiveComponent] = React.useState(1);

  console.log(setActiveComponent);

  const filteredSteps = DETAILS.filter(
    (steps) => steps.id === activeComponent,
  );

  return (
    <div className='mt-6'>
      <div className='flex items-center justify-center text-2xl text-primary-400'>
        {activeComponent}{' '}
        <span
          className={cn(
            activeComponent === DETAILS.length ? '' : 'text-tint-200',
          )}
        >
          /
        </span>
        <span
          className={cn(
            activeComponent === DETAILS.length ? '' : 'text-tint-200',
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
