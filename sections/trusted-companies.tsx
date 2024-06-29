import Image from 'next/image';

export const LOGOS = [
  {
    alt: 'buy domains',
    icon: 'emnetwork.svg',
  },
  {
    alt: 'buy domains',
    icon: 'emnetwork.svg',
  },
  {
    alt: 'unik media group',
    icon: 'unik.svg',
  },
  {
    alt: 'Business lead maker',
    icon: 'blm.svg',
  },
  {
    alt: 'Mk insure',
    icon: 'mkinsure.svg',
  },
];

const TrustedCompanies = () => (
  <section className='container mt-44'>
    <h1 className='mx-auto mb-3 text-center text-2xl font-medium'>
      Trusted By Top-rated insurance companies
    </h1>

    <div className='mx-auto flex max-w-[900px] flex-wrap items-center justify-around gap-7'>
      {LOGOS.map(({ alt, icon }) => (
        <div key={alt}>
          <Image
            alt={alt}
            className='object-contain max-sm:w-[100px]'
            height={70}
            src={`/icons/${icon}`}
            width={120}
          />
        </div>
      ))}
    </div>
  </section>
);

export default TrustedCompanies;
