import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => (
  <section className='container mt-24' id='about'>
    <p className='text-center text-[#ff2020]'>FAQs</p>
    <h1 className='pt-2 text-center font-bricolage text-3xl font-medium text-[#336699] sm:text-4xl lg:text-6xl'>
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
      'Getting a quote with Medicare is easy! Simply fill out our online form, and one of our licensed agents will reach out to you with personalized options.',
  },
  {
    title: 'How do I get a health insurance quote with Medicare?',
    label:
      'Getting a quote with Medicare is easy! Simply fill out our online form, and one of our licensed agents will reach out to you with personalized options.',
  },
  {
    title:
      'Can I use Medicare to enroll in government healthcare programs like Medicare or Medicaid?',
    label:
      'Getting a quote with Medicare is easy! Simply fill out our online form, and one of our licensed agents will reach out to you with personalized options.',
  },
  {
    title:
      'What if I have pre-existing conditions? Can I still get coverage?',
    label:
      'Getting a quote with Medicare is easy! Simply fill out our online form, and one of our licensed agents will reach out to you with personalized options.',
  },
];

export default Faq;
