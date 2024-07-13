'use client';

import Button from '@/components/button';
import { Drawer } from '@/components/drawer';
import Logo from '@/components/logo';
import Modal from '@/components/modal';
import { useStep } from '@/contexts/step-context';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { setShowModal } = useStep();

  return (
    <header
      className='fixed inset-x-0 top-0 z-[999] bg-white py-3'
      id='home'
    >
      <div className='container flex items-center justify-between'>
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
              <a
                className='border-b border-solid border-[#07040E] font-semibold text-[#07040E]'
                href='tel:+13342474890'
              >
                +13342474890
              </a>
            </span>
          </p>

          <Modal>
            <Button type='button' onClick={() => setShowModal(true)}>
              Get a Quote
            </Button>
          </Modal>
        </div>

        <div className='flex items-center gap-4 sm:hidden'>
          <Modal>
            <Button
              className='px-5 !text-base'
              type='button'
              onClick={() => setShowModal(true)}
            >
              Get a Quote
            </Button>
          </Modal>

          <Drawer>
            <Image
              alt='menu'
              height={25}
              src='/icons/hamburger.svg'
              width={25}
            />
          </Drawer>
        </div>
      </div>
    </header>
  );
};

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
    <ul className='flex items-center gap-10 max-md:hidden'>
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
