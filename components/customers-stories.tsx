'use client';

import useCarouselSlide from '@/hooks/use-carousel-slide';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const ClientStories = () => {
  const { activeSlide, goToSlide, settings, sliderRef } =
    useCarouselSlide();

  return (
    <div className='mt-8 w-full overflow-x-hidden'>
      <div className='relative'>
        <Slider {...settings} ref={sliderRef} aria-live='polite'>
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className='flex items-center justify-center'
            >
              <div className='mx-auto max-w-5xl cursor-pointer p-4'>
                <div className='p-4'>
                  <div>
                    <Image
                      alt='Image of the testimonial quote icon'
                      height={40}
                      src='/icons/block-1.svg'
                      width={40}
                    />
                  </div>

                  <article className='mt-4'>
                    <blockquote className='text-center text-xl text-primary-500 sm:pb-5 sm:text-3xl'>
                      {testimonial.text}
                    </blockquote>

                    <div className='flex justify-end'>
                      <Image
                        alt='Image of the testimonial quote icon'
                        height={40}
                        src='/icons/block-2.svg'
                        width={40}
                      />
                    </div>
                  </article>
                </div>
                <div className='flex flex-col items-center'>
                  <h2 className='text-[20px] font-medium leading-[30px] text-primary lg:leading-9'>
                    {testimonial.name}
                  </h2>
                  <p className='leading-6 text-primary-500 opacity-[70%]'>
                    {testimonial.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='flex items-center justify-center gap-x-4 pl-5'>
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              aria-controls='carousel'
              aria-label='next slide'
              className={`${
                activeSlide === index
                  ? 'h-6 bg-primary'
                  : 'size-4 bg-primary px-1 opacity-[50%] hover:bg-primary hover:opacity-[100%]'
              } rounded-full p-1 transition-all`}
              type='button'
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const TESTIMONIALS = [
  {
    id: 0,
    text: 'Medicare made finding the right health insurance plan easy and stress-free. I couldn’t be happier with my choice.',
    name: 'Sarah J.',
    address: 'Family Coverage Client',
    alt: 'first',
  },
  {
    id: 1,
    text: 'Overwhelmed by options, Medicare simplified everything. Knowledgeable agents helped me find affordable coverage',
    name: 'Mark L.',
    address: 'Auto Insurance Client',
    alt: 'second',
  },
  {
    id: 2,
    text: 'Switching to Medicare was my best decision. Outstanding customer service and a perfect plan fit.',
    name: 'Michael T.',
    address: 'Debt Settlement Client',
    alt: 'third',
  },
];

export default ClientStories;
