import { bricolage } from '@/app/font';
import Logo from '@/components/logo';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { BiLogoSkype } from 'react-icons/bi';
import { CgFacebook } from 'react-icons/cg';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => (
  <footer className='mt-24 bg-[#ebf0f5] py-14'>
    <div className='container'>
      <div className='mb-16 flex justify-between gap-y-6 max-md:flex-col'>
        <div>
          <Logo href='/' src='/icons/logo.svg' />
          <div className='mt-4'>
            <span className='text-xl font-medium text-primary-500'>
              Follow us
            </span>

            <div className='mt-3 flex items-center gap-3'>
              {SOCIALS.map(({ href, icon }) => (
                <Link
                  className='flex size-8 items-center justify-center rounded-full bg-body text-white'
                  href={href}
                  target='_blank'
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='flex gap-x-32'>
          {NAVS.map(({ children, title }) => (
            <div>
              <h1
                className={cn(
                  'text-xl font-bold text-primary-500',
                  bricolage.className,
                )}
              >
                {title}
              </h1>

              <div className='mt-3 flex flex-col gap-2'>
                {children.map(({ href, label }) => (
                  <Link href={href}>{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-t border-t-body/20' />

      <p className='mt-4 text-center'>
        Copyright {new Date().getFullYear()} all rights reserved.
        Medicare support marketing
      </p>
    </div>
  </footer>
);

const NAVS = [
  {
    title: 'About',
    children: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Services',
        href: '/',
      },
      {
        label: 'About',
        href: '/',
      },
    ],
  },
  {
    title: 'Contact',
    children: [
      {
        label: '(00) 123 456 7890',
        href: '/',
      },
      {
        label: 'user@domainname.com',
        href: '/',
      },
    ],
  },
];

const SOCIALS = [
  {
    icon: <CgFacebook />,
    href: '',
  },
  {
    icon: <FaLinkedinIn />,
    href: '',
  },
  {
    icon: <BiLogoSkype />,
    href: '',
  },
  {
    icon: <FaInstagram />,
    href: '',
  },
];

export default Footer;
