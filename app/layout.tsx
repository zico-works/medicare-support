import Provider from '@/components/provider';
import Footer from '@/layout/footer';
import Header from '@/layout/header';

import { bricolage, satoshi } from './font';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='no-visible-scrollbar scroll-smooth' lang='en'>
      <body
        className={`${satoshi.className} ${bricolage.variable} text-body`}
      >
        <Provider>
          <Header />
          {children}
        </Provider>

        <Footer />
      </body>
    </html>
  );
}
