import Button from '@/components/button';
import Modal from '@/components/modal';
import Image from 'next/image';

const PopularPlans = () => (
  <section className='mt-24 bg-[#ebf0f5] py-16' id='about'>
    <div className='container'>
      <div>
        <p className='text-center text-[#ff2020]'>
          Get an Insurance Quote!
        </p>
        <h1 className='pt-2 text-center font-bricolage text-3xl font-medium text-[#336699] sm:text-4xl lg:text-6xl'>
          Popular Plans
        </h1>

        <div className='mt-7 flex justify-center gap-20'>
          {ICONS.map(({ alt, icon }) => (
            <div className='flex size-16 items-center justify-center rounded-full border-[1.5px] border-solid border-[#336699]'>
              <Image
                alt={alt}
                height={60}
                src={`/icons/${icon}`}
                width={40}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-16 flex items-center justify-between gap-y-7 max-md:flex-col'>
        <div>
          <h2 className='max-w-xs font-bricolage text-3xl font-medium text-primary-500 lg:text-4xl'>
            For families and individuals.
          </h2>
          <p className='mb-4 mt-2 max-w-[420px]'>
            Our Retail Plan is packaged to meet the health need of
            families & individuals ensuring that they have access to
            quality and affordable healthcare services while avoiding
            the catastrophic risk of medical bills.
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
      </div>
    </div>
  </section>
);

const ICONS = [
  {
    alt: 'retails plan',
    icon: 'family.svg',
  },
  {
    alt: 'school plan',
    icon: 'lecture.svg',
  },
  {
    alt: 'senior citizens plan',
    icon: 'relation.svg',
  },
];

export default PopularPlans;
