import Button from '@/components/button';
import Logo from '@/components/logo';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className='container flex items-center justify-between py-3'>
    <Logo href='/' src='/icons/logo.svg' />

    <Navbar />

    <div className='flex items-center gap-x-6 max-md:hidden'>
      <p className='flex items-center gap-3'>
        <Image
          alt='phone'
          height={20}
          src='/icons/phone.svg'
          width={20}
        />
        <span>
          <a className='text-[#07040E]' href='tel:555-555-5555'>
            (316) 333-7001
          </a>
        </span>
      </p>
      <Button type='button'>Get a Quote</Button>
    </div>

    <button className='md:hidden' type='button'>
      <Image
        alt='menu'
        height={25}
        src='/icons/hamburger.svg'
        width={25}
      />
    </button>
  </header>
);

const NAVS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => (
  <nav>
    <ul className='flex items-center gap-8 max-md:hidden'>
      {NAVS.map(({ href, label }) => (
        <Link
          className='transition duration-200 hover:text-primary focus:text-primary active:font-semibold'
          href={href}
        >
          <li className=''>{label}</li>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Header;
