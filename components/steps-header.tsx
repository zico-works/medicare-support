import { bricolage } from '@/app/font';
import { cn } from '@/utils/cn';

const StepsHeader = () => (
  <div className='mb-6 flex flex-col items-center justify-center gap-y-2'>
    <h1 className={cn('text-lg text-[#141414]', bricolage.className)}>
      Get a Quote
    </h1>

    <p className='text-[#717171]'>
      Please fill out the form below to get your personalized health
      insurance quote
    </p>
  </div>
);

export default StepsHeader;
