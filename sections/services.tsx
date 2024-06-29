import { bricolage } from '@/app/font';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const Services = () => (
  <section className='container mt-24'>
    <h1
      className={cn(
        bricolage.className,
        'lg:text-6xl text-3xl text-center sm:text-4xl text-[#336699] font-medium',
      )}
    >
      Why choose us
    </h1>
    <p className='mt-4 text-center text-lg'>
      Experience the Best in Health and Financial Services
    </p>

    <div className='mt-10 grid grid-cols-3 gap-7'>
      {SERVICES.map(({ desc, icon, title }) => (
        <div className='rounded-xl border-[1.5px] border-primary p-4 transition duration-200 hover:bg-[#EFF7FF]'>
          <Image
            alt=''
            height={30}
            src={`/icons/${icon}`}
            width={30}
          />
          <h2 className='mt-5 text-3xl font-medium text-primary-500'>
            {title}
          </h2>
          <p className='mt-3'>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export const SERVICES = [
  {
    icon: 'medi-check.svg',
    title: 'Medicare',
    desc: 'We offer personalized health insurance solutions, ensuring you get the best coverage for your needs.',
  },
  {
    icon: 'bird.svg',
    title: 'FE – Final Expense',
    desc: 'Our final expense plans ensure your loved ones are financially protected during tough times.',
  },
  {
    icon: 'help.svg',
    title: 'SSDI',
    desc: 'We assist you in applying for Social Security Disability Insurance, securing your financial future.',
  },
  {
    icon: 'doc.svg',
    title: 'ACA - Obama Care',
    desc: 'Get access to affordable care through the ACA, ensuring coverage for all essential health benefits.',
  },
  {
    icon: 'motor.svg',
    title: 'Auto Insurance',
    desc: 'Protect yourself and your vehicle with our reliable and comprehensive auto insurance policies.',
  },
  {
    icon: 'settle.svg',
    title: 'Debt Settlement',
    desc: 'Our debt settlement services help you manage and reduce your financial liabilities effectively.',
  },
  {
    icon: 'people.svg',
    title: 'U65 Health Insurance',
    desc: 'We offer specialized plans for those under 65, providing flexible and affordable coverage options.',
  },
  {
    icon: 'tax.svg',
    title: 'Tax Debt',
    desc: 'Our experts help you navigate and resolve tax debt issues efficiently, easing your financial burden.',
  },
];

export default Services;
