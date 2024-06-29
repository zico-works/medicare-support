import { Bricolage_Grotesque } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400'],
});

export const satoshi = localFont({
  src: [
    {
      path: '../public/font/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});
