import ClientStories from '@/components/customers-stories';

const Testimonial = () => (
  <section className='px-3 lg:px-6'>
    <div className='mt-20 rounded-3xl bg-tint-50 py-16 '>
      <h1 className='mx-auto max-w-2xl text-center font-bricolage text-3xl font-medium text-primary-600 sm:text-4xl lg:text-5xl'>
        Hear What Our Clients and Partners Say
      </h1>

      <ClientStories />
    </div>
  </section>
);

export default Testimonial;
