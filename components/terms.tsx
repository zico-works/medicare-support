'use client';

import { bricolage } from '@/app/font';
import Button from '@/components/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useStep } from '@/contexts/step-context';
import { useStepDetails } from '@/contexts/step-details-context';
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import PrevBtn from './prev-btn';

const FormSchema = z.object({
  agreement: z.boolean().refine((value) => value === true, {
    message:
      'Please read the terms and condition and check the option',
  }),
});

export default function CarrierSelection() {
  const {
    activeComponent,
    setActiveComponent,
    setShowModal,
    showModal,
  } = useStep();
  const { setActiveDetailsComponent } = useStepDetails();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      agreement: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.agreement) {
      setActiveComponent(activeComponent + 1);
    }

    form.reset();
  }

  function onReset() {
    setShowModal(!showModal);
    form.reset();
    setActiveComponent(1);
    setActiveDetailsComponent(1);
  }

  return (
    <div className='mt-5'>
      <h1
        className={cn(
          bricolage.className,
          'font-medium text-center text-lg text-[#141414]',
        )}
      >
        Terms and Conditions
      </h1>
      <div className='mx-auto mt-5 max-w-[600px] rounded-2xl border-[1.5px] border-solid border-tint-200 p-5'>
        <div>
          <PrevBtn
            handleClick={() =>
              setActiveComponent(activeComponent - 1)
            }
          />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <h2 className='text-lg font-bold'>
                You&apos;re Finished!
              </h2>
              <p>
                By submitting this form, you confirm that you
                authorize Medicare to submit your application for
                health insurance. Be on the lookout for email
                confirmations of your plan. If you have any questions,
                please reach us at +440757 044-9180.
                <br />
                Thank you for your time, and welcome to the Medicare
                family!
              </p>

              <h2 className='mt-3 text-lg font-bold'>
                Electronic Signature
              </h2>
              <p className='mt-2'>
                By submitting this form, you confirm that you
                authorize Medicare to submit your
              </p>
            </div>

            <p className='my-2 text-lg font-bold'>
              Consent and Agreement
            </p>

            <FormField
              control={form.control}
              name='agreement'
              render={({ field }) => (
                <FormItem>
                  <div className='flex flex-row items-start space-x-3 space-y-0'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <FormLabel>
                        I agree to the terms and conditions.
                      </FormLabel>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='space-y-5 pt-4'>
              <Button
                className='flex w-full items-center justify-center gap-3'
                type='submit'
              >
                Submit Your Quote
              </Button>

              <Button
                className='flex w-full items-center justify-center gap-3 bg-[#c0d0df] !text-primary-600'
                type='reset'
                onClick={onReset}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
