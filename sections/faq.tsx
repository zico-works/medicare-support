import SlideInAnimation from '@/components/slide-in-animation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => (
  <section className='container mt-20' id='about'>
    <SlideInAnimation
      as='h1'
      className='pt-2 text-center font-bricolage text-3xl font-medium text-primary-600 sm:text-4xl lg:text-5xl'
    >
      Frequently asked questions
    </SlideInAnimation>

    <SlideInAnimation
      className='mx-auto mt-10 w-full max-w-3xl'
      id='faq'
    >
      <Accordion type='single'>
        <AccordionItem className='' value='item-1'>
          <AccordionTrigger>
            <span className='text-left'>
              How do I get a health insurance quote with Medicare?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Getting a quote with Medicare is easy! Simply fill out our
            online form, and one of our licensed agents will reach out
            to you with personalized options.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className='' value='item-2'>
          <AccordionTrigger>
            <span className='text-left'>
              What types of health insurance plans do you offer?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Medicare offers a variety of insurance plans, including
            health insurance, auto insurance, final expense insurance,
            and debt settlement solutions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className='' value='item-3'>
          <AccordionTrigger>
            <span className='text-left'>
              Can I get coverage for my family through Medicare?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer family coverage options for health insurance
            and other types of insurance. Our licensed agents can help
            you find the best plans to cover your entire family.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className='' value='item-4'>
          <AccordionTrigger>
            <span className='text-left'>
              How do I know if I qualify for Medicare?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Medicare offers a variety of insurance plans, including
            health insurance, auto insurance, final expense insurance,
            and debt settlement solutions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className='' value='item-5'>
          <AccordionTrigger>
            <span className='text-left'>
              How do I enroll in a Medicare plan?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            You can enroll in a Medicare plan by contacting one of our
            licensed agents, who will guide you through the enrollment
            process and help you choose the right plan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className='' value='item-6'>
          <AccordionTrigger>
            <span className='text-left'>
              What if I need help understanding my insurance coverage?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Our customer support team is available 24/7 to answer any
            questions you have about your insurance coverage. We are
            here to ensure you fully understand your plan and
            benefits.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SlideInAnimation>
  </section>
);

export default Faq;
