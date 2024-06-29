'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStepDetails } from '@/contexts/step-details-context';
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { z } from 'zod';

import Button from './button';
import PrevBtn from './prev-btn';
import { Calendar } from './ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

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
    <div className='mx-auto mt-5 max-w-lg rounded-2xl border-[1.5px] border-solid border-tint-200 p-5'>
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

          <FormField
            control={form.control}
            name='userDOB'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <button
                        className={cn(
                          'w-full pl-3 text-left font-normal flex items-center border-tint-200 border-solid border h-10 rounded-lg',
                          !field.value && 'text-muted-foreground',
                        )}
                        type='button'
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto mr-2 size-4 opacity-50' />
                      </button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    align='start'
                    className='w-auto p-0'
                  >
                    <Calendar
                      initialFocus
                      disabled={(date) =>
                        date > new Date() ||
                        date < new Date('1900-01-01')
                      }
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
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
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
