import ClientStories from '@/components/customers-stories';

const Testimonial = () => (
  <section className='mt-24'>
    <h1 className='mx-auto max-w-2xl text-center font-bricolage text-3xl font-medium text-[#336699] sm:text-4xl lg:text-6xl'>
      Hear What Our Clients and Partners Say
    </h1>

    <ClientStories />
  </section>
);

export default Testimonial;
