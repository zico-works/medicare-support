import { ContactForm } from '@/components/contact-form';
import Image from 'next/image';

const Contact = () => (
  <section className='bg-[#336699] pb-20 pt-10' id='contact'>
    <div className='container'>
      <div className='mt-14 flex items-center justify-between gap-y-7 text-white max-md:flex-col'>
        <div>
          <h1 className='font-bricolage text-3xl font-medium sm:text-4xl lg:text-6xl'>
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
          <h2 className='mb-4 font-bricolage text-3xl text-primary-500'>
            We’d love to hear from you! Let&apos;s get in touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
