import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => (
  <section className='container mt-24' id='about'>
    <p className='text-center text-[#ff2020]'>FAQs</p>
    <h1 className='pt-2 text-center font-bricolage text-3xl font-medium text-primary-600 sm:text-4xl lg:text-5xl'>
      Frequently asked questions
    </h1>

    <div className='mx-auto mt-10 max-w-2xl'>
      {FAQs.map(({ label, title }, idx) => (
        <Accordion type='multiple'>
          <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger>
              <span className='text-left'>{title}</span>
            </AccordionTrigger>
            <AccordionContent>{label}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  </section>
);

const FAQs = [
  {
    title: 'How do I get a health insurance quote with Medicare?',
    label:
      'Getting a quote with Medicare is easy! Simply fill out our online form, and one of our licensed agents will reach out to you with personalized options.',
  },
  {
    title: 'What types of health insurance plans do you offer?',
    label:
      'Medicare offers a variety of insurance plans, including health insurance, auto insurance, final expense insurance, and debt settlement solutions.',
  },
  {
    title: 'Can I get coverage for my family through Medicare?',
    label:
      'Yes, we offer family coverage options for health insurance and other types of insurance. Our licensed agents can help you find the best plans to cover your entire family.',
  },
  {
    title: 'How do I know if I qualify for Medicare?',
    label:
      'Getting a quote with Medicare is easy! Simply fill out our online form, and one of our licensed agents will reach out to you with personalized options.',
  },
  {
    title: 'How do I enroll in a Medicare plan?',
    label:
      'You can enroll in a Medicare plan by contacting one of our licensed agents, who will guide you through the enrollment process and help you choose the right plan.',
  },
  {
    title: 'What if I need help understanding my insurance coverage?',
    label:
      'Our customer support team is available 24/7 to answer any questions you have about your insurance coverage. We are here to ensure you fully understand your plan and benefits.',
  },
];

export default Faq;
