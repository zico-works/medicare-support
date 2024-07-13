'use client';

import { useStep } from '@/contexts/step-context';
import Image from 'next/image';

import Button from './button';
import Modal from './modal';
import SlideInAnimation from './slide-in-animation';

const PlanBtn = () => {
  const { setShowModal } = useStep();

  return (
    <SlideInAnimation>
      <Modal>
        <Button
          className='group flex items-center gap-2 px-8 py-[10px]'
          onClick={() => setShowModal(true)}
        >
          <span>Get a Quote</span>
          <span className='transition duration-200 group-hover:translate-x-1'>
            <Image
              alt='arrow'
              className=''
              height={15}
              src='/icons/arrow-right.svg'
              width={15}
            />
          </span>
        </Button>
      </Modal>
    </SlideInAnimation>
  );
};

export default PlanBtn;
