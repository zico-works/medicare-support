import Image from 'next/image';

const TrustedCompanies = () => (
  <section className='container mt-16'>
    <h1 className='mx-auto mb-6 text-center text-2xl font-medium text-primary-500'>
      Trusted By Top-rated insurance companies
    </h1>

    <div className='mx-auto flex max-w-[900px] flex-wrap items-center justify-around gap-7'>
      {LOGOS.map(({ alt, icon, width }) => (
        <div key={alt}>
          <Image
            alt={alt}
            className='object-contain'
            height={60}
            src={`/images/${icon}`}
            width={`${width}`}
          />
        </div>
      ))}
    </div>
  </section>
);

type LogoProp = {
  alt: string;
  icon: string;
  width: number;
};

export const LOGOS: LogoProp[] = [
  {
    alt: 'buy domains',
    icon: 'buy.svg',
    width: 120,
  },
  {
    alt: 'buy domains',
    icon: 'em.svg',
    width: 70,
  },
  {
    alt: 'unik media group',
    icon: 'mk.svg',
    width: 120,
  },
  {
    alt: 'Business lead maker',
    icon: 'bm.png',
    width: 120,
  },
  {
    alt: 'Mk insure',
    icon: 'umg.png',
    width: 120,
  },
];

export default TrustedCompanies;
