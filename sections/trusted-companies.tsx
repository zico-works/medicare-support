import Image from 'next/image';

const TrustedCompanies = () => (
  <section className='container mt-16'>
    <h1 className='mx-auto mb-6 text-center text-2xl font-medium text-primary-500'>
      Trusted By Top-rated insurance companies
    </h1>

    <div className='mx-auto flex max-w-[900px] flex-wrap items-center justify-around gap-7'>
      {LOGOS.map(({ alt, icon }) => (
        <div key={alt}>
          <Image
            alt={alt}
            className='object-contain max-sm:w-[100px]'
            height={60}
            src={`/images/${icon}`}
            width={90}
          />
        </div>
      ))}
    </div>
  </section>
);

type LogoProp = {
  alt: string;
  icon: string;
};

export const LOGOS: LogoProp[] = [
  {
    alt: 'buy domains',
    icon: 'buy.svg',
  },
  {
    alt: 'buy domains',
    icon: 'em.svg',
  },
  {
    alt: 'unik media group',
    icon: 'mk.png',
  },
  {
    alt: 'Business lead maker',
    icon: 'bm.png',
  },
  {
    alt: 'Mk insure',
    icon: 'umg.png',
  },
];

export default TrustedCompanies;
