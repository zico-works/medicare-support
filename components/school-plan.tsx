import { motion } from 'framer-motion';
import Image from 'next/image';

import PlanBtn from './plan-btn';

const SchoolPlan = () => (
  <motion.div
    animate={{ opacity: 1 }}
    className='mt-16 flex items-center justify-between gap-y-7 max-md:flex-col'
    exit={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{ type: 'tween', ease: 'easeIn', duration: 0.5 }}
  >
    <div>
      <h2 className='max-w-sm font-bricolage text-3xl font-medium capitalize text-primary-500 lg:text-4xl'>
        pre-tertiary and tertiary institutions
      </h2>
      <p className='mb-4 mt-2 max-w-[420px]'>
        Our School Health Plan is specially designed to meet the
        health need of students in both pre-tertiary and tertiary
        institutions of learning. Students are covered for any medical
        conditions that may arise while in school thereby ensuring
        they can continue to pursue their dream. It also gives parents
        and school authorities the needed peace of mind.
      </p>

      <PlanBtn />
    </div>

    <div>
      <Image
        alt='smiling woman'
        height={300}
        src='/images/school.webp'
        width={450}
      />
    </div>
  </motion.div>
);

export default SchoolPlan;
