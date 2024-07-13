'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStepDetails } from '@/contexts/step-details-context';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { z } from 'zod';

import Button from './button';
import PrevBtn from './prev-btn';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

const formSchema = z.object({
  phonenumber: z.string().min(5, {
    message: 'Phone number must be valid number',
  }),
  userDOB: z.date({
    required_error: 'A date of birth is required.',
  }),
  occupation: z.string().min(2, {
    message: 'Occupation must be two or more characters',
  }),
});

export default function SecondDetails() {
  const { activeDetailsComponent, setActiveDetailsComponent } =
    useStepDetails();
  const { formData, setFormData } = useFormData();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phonenumber: '',
      userDOB: undefined,
      occupation: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({ ...formData, ...values });

    form.reset();
    setActiveDetailsComponent(activeDetailsComponent + 1);
  }

  return (
    <div className='mx-auto mt-3 max-w-lg rounded-2xl border-[1.5px] border-solid border-tint-200 p-5'>
      <div>
        <PrevBtn
          handleClick={() =>
            setActiveDetailsComponent(activeDetailsComponent - 1)
          }
        />
      </div>
      <Form {...form}>
        <form
          className='space-y-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='phonenumber'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className='flex h-11 items-center rounded-lg border border-solid border-tint-200 pl-4'>
                    <PhoneInput
                      international
                      defaultCountry='RU'
                      {...field}
                      className='w-full !outline-none focus:!outline-none'
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Controller
            control={form.control}
            name='userDOB'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <div className='flex h-11 items-center rounded-lg border border-solid border-tint-200 pl-4'>
                    <DatePicker
                      required
                      showIcon
                      calendarClassName='bg-tint-100'
                      calendarIconClassName='size-6 !text-tint-100'
                      selected={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='occupation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Occupation</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your occupation'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='pt-3'>
            <Button
              className='flex w-full items-center justify-center gap-3'
              type='submit'
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
