import Image from 'next/image';

const Finished = () => (
  <div className='flex flex-col items-center justify-center pb-8'>
    <Image
      alt='finish'
      height={200}
      src='/icons/finish.svg'
      width={200}
    />

    <h1 className='my-1 text-3xl font-bold text-[#101828]'>
      Thank You!
    </h1>
    <p className='mx-auto max-w-lg text-center '>
      Your quote request has been submitted successfully. Please check
      your email for confirmation and a copy of your submission.
    </p>
  </div>
);

export default Finished;
