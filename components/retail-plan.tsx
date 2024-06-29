import { motion } from 'framer-motion';
import Image from 'next/image';

import Button from './button';
import Modal from './modal';

const RetailPlan = () => (
  <motion.div
    animate={{ opacity: 1 }}
    className='mt-16 flex items-center justify-between gap-y-7 max-md:flex-col'
    exit={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ type: 'tween', ease: 'easeIn', duration: 0.5 }}
  >
    <div>
      <h2 className='max-w-xs font-bricolage text-3xl font-medium capitalize text-primary-500 lg:text-4xl'>
        For families and individuals.
      </h2>
      <p className='mb-4 mt-2 max-w-[420px]'>
        Our Retail Plan is packaged to meet the health need of
        families & individuals ensuring that they have access to
        quality and affordable healthcare services while avoiding the
        catastrophic risk of medical bills.
      </p>

      <Modal>
        <Button className='group flex items-center gap-2 px-8 py-[10px]'>
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
    </div>

    <div>
      <Image
        alt='smiling woman'
        height={350}
        src='/images/plan.webp'
        width={400}
      />
    </div>
  </motion.div>
);

export default RetailPlan;
