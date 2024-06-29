import * as React from 'react';
import Button from '@/components/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

import Logo from './logo';
import Modal from './modal';

export function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <Sheet modal>
      <SheetTrigger asChild>
        <button>{children}</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Logo href='/' src='/icons/logo.svg' />
        </SheetHeader>
        <div className='mt-8 grid gap-4 py-4'>
          <ul className='flex flex-col items-center gap-x-10 gap-y-5'>
            {NAVS.map(({ href, label }) => (
              <SheetClose asChild>
                <Link
                  className='text-2xl transition duration-200 hover:text-primary focus:text-primary active:font-semibold'
                  href={href}
                >
                  <li className=''>{label}</li>
                </Link>
              </SheetClose>
            ))}
          </ul>

          <div className='mt-7 flex flex-col items-center gap-x-6 gap-y-5'>
            <p className='flex items-center gap-3'>
              <Image
                alt='phone'
                height={20}
                src='/icons/phone.svg'
                width={20}
              />
              <span>
                <a
                  className='font-semibold text-[#07040E] underline'
                  href='tel:555-555-5555'
                >
                  (316) 333-7001
                </a>
              </span>
            </p>

            <Modal>
              <Button type='button'>Get a Quote</Button>
            </Modal>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

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
