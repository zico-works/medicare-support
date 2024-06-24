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
      <div className='relative mx-auto max-w-5xl'>
        <Slider {...settings} ref={sliderRef} aria-live='polite'>
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className='cursor-pointer p-4'>
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
                  <blockquote className='text-center text-xl text-primary-500 sm:pb-5 sm:text-[30px]'>
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
          ))}
        </Slider>
        <div className='flex items-center gap-x-4 pl-5 sm:justify-center'>
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
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. ',
    name: 'Luca Rossi',
    address: 'Chief Technology Officer, CyberSecure Global',
    alt: 'first',
  },
  {
    id: 1,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards.',
    name: 'Amara Okafor,',
    address: 'Head of Digital Strategy, E-Comm Universe',
    alt: 'second',
  },
  {
    id: 2,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards.',
    name: 'Mia Wong',
    address: 'Marketing Director, EcoHealth Worldwide',
    alt: 'third',
  },
  {
    id: 3,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards.',
    name: 'Aarav Patel',
    address: 'Co-Founder, FinSolutions International',
    alt: 'fourth',
  },
  {
    id: 4,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards.',
    name: 'Liam Murphy',
    address: 'Product Manager, SmartHome International',
    alt: 'fifth',
  },
];

export default ClientStories;
