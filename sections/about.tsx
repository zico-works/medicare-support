import { cn } from '@/utils/cn';
import Image from 'next/image';

const About = () => (
  <section
    className='container mt-20 flex items-center justify-between gap-y-7 max-md:flex-col'
    id='about'
  >
    <div>
      <span className='text-[#ff2020]'>Discover Medicare</span>
      <h1
        className={cn(
          'lg:text-6xl text-3xl font-bricolage sm:text-4xl text-primary-600 font-medium',
        )}
      >
        About us
      </h1>
      <p className='max-w-[420px]'>
        Various businesses encounter challenges in acquiring new
        customers due to poor-quality leads. MSM sets itself apart by
        delivering quality traffic call that connects you directly
        with highly dedicated and precisely targeted prospects.
      </p>

      <div className='mt-5 flex flex-col gap-3'>
        {DATA.map(({ desc, title }) => (
          <div
            key={title}
            className='grid grid-cols-[auto_1fr] gap-3'
          >
            <Image
              alt='checked'
              height={24}
              src='/icons/check.svg'
              width={24}
            />

            <div>
              <h2 className='text-lg font-medium text-[#303864] lg:text-xl'>
                {title}
              </h2>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <Image
        alt='smiling woman'
        height={550}
        src='/images/about.webp'
        width={450}
      />
    </div>
  </section>
);

export const DATA = [
  {
    title: 'Specialized Services',
    desc: 'We offer guidance on healthy lifestyle behaviors',
  },
  {
    title: 'Unbiased Advice',
    desc: 'We prioritize your best interests.',
  },
  {
    title: '24/7 Support',
    desc: 'Always here to help you.',
  },
];

export default About;
