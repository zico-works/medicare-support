import Image from 'next/image';

const PrevBtn = ({ handleClick }: { handleClick: () => void }) => (
  <button
    className='absolute left-10 top-8 inline-flex size-12 appearance-none items-center justify-center rounded-full border-none  transition-all hover:border-2 hover:border-solid hover:border-blue-700/20 focus:shadow-blue-700/20 focus:outline-none'
    type='button'
    onClick={handleClick}
  >
    <Image
      alt='arrow'
      height={25}
      src='/icons/arrow-left.svg'
      width={25}
    />
  </button>
);

export default PrevBtn;
