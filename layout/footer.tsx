import Logo from '@/components/logo';
import Link from 'next/link';
import { BiLogoSkype } from 'react-icons/bi';
import { CgFacebook } from 'react-icons/cg';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => (
  <footer className='mt-24 bg-tint-50 py-14'>
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
                  className='flex size-9 items-center justify-center rounded-full bg-body text-white'
                  href={href}
                  target='_blank'
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='flex gap-x-32 gap-y-6 max-sm:flex-col'>
          {NAVS.map(({ children, title }) => (
            <div>
              <h1 className='font-bricolage text-xl font-bold text-primary-500'>
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
    title: 'Company',
    children: [
      {
        label: 'Home',
        href: '#home',
      },
      {
        label: 'Services',
        href: '#services',
      },
      {
        label: 'About',
        href: '#about',
      },
    ],
  },
  {
    title: 'Contact',
    children: [
      {
        label: '+440757 044-9180',
        href: '/',
      },
      {
        label: 'medicaresuportppc@gmail.com',
        href: '',
      },
    ],
  },
];

const SOCIALS = [
  {
    icon: <CgFacebook />,
    href: 'https://www.facebook.com/profile.php?id=61559206995584&sk=about_contact_and_basic_info',
  },
  {
    icon: <FaLinkedinIn />,
    href: '',
  },
  {
    icon: <BiLogoSkype />,
    href: 'https://join.skype.com/invite/BE4M5Sm3WaqK',
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/medicaresupportmarketing?utm_source=qr&igsh=cmowaXA2bGxreTlh',
  },
];

export default Footer;
