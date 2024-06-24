import { bricolage } from '@/app/font';
import { ContactForm } from '@/components/contact-form';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const Contact = () => (
  <section className='bg-[#336699] py-10' id='about'>
    <div className='container'>
      <div className='mt-16 flex items-center justify-between gap-y-7 text-white max-md:flex-col'>
        <div>
          <h1
            className={cn(
              bricolage.className,
              'text-3xl sm:text-4xl lg:text-6xl font-medium',
            )}
          >
            Contact Us
          </h1>
          <p className='mb-4 mt-2 max-w-[400px]'>
            We’re here to help you with all your insurance needs.
            Reach out to us through any of the methods below.
          </p>

          <div className='space-y-2'>
            <div className='flex items-center gap-3'>
              <Image
                alt='call'
                height={20}
                src='/icons/call.svg'
                width={20}
              />
              <span className='underline'>(316) 333-7001</span>
            </div>
            <div className='flex items-center gap-3'>
              <Image
                alt='mail'
                height={20}
                src='/icons/mail.svg'
                width={20}
              />
              <span>rasheed@yahoo.com</span>
            </div>
          </div>
        </div>

        <div className='w-full max-w-md rounded-3xl bg-white p-6 font-medium'>
          <h2
            className={cn(
              bricolage.className,
              'text-3xl mb-4 text-primary-500',
            )}
          >
            We’d love to hear from you! Let&apos;s get in touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
