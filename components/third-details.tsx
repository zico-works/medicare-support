'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStepDetails } from '@/contexts/step-details-context';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
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
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

import 'react-datepicker/dist/react-datepicker.css';

const formSchema = z.object({
  married: z.enum(['yes', 'no'], {
    required_error: 'You need to select one of the options',
  }),
  spouseDOB: z.date().optional(),
  spousename: z.string().optional(),
});

export default function ThirdDetails() {
  const { formData, setFormData } = useFormData();
  const { activeDetailsComponent, setActiveDetailsComponent } =
    useStepDetails();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spouseDOB: undefined,
      spousename: '',
    },
  });

  const married = form.watch('married');

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
          className='space-y-5'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='married'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Are you married?</FormLabel>
                <FormControl>
                  <RadioGroup
                    className='flex items-center gap-9'
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='yes' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Yes
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='no' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        No
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p>If yes:</p>

          <FormField
            control={form.control}
            name='spousename'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spouse name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter spouse full name'
                    type='text'
                    {...field}
                    disabled={married === 'no'}
                    required={married === 'yes'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Controller
            control={form.control}
            name='spouseDOB'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Spouse of Birth</FormLabel>
                <FormControl>
                  <div className='flex h-11 items-center rounded-lg border border-solid border-tint-200 pl-4'>
                    <DatePicker
                      showIcon
                      calendarClassName='bg-tint-100'
                      calendarIconClassName='size-6 !text-tint-100'
                      disabled={married === 'no'}
                      required={married === 'yes'}
                      selected={field.value}
                      onChange={field.onChange}
                    />
                  </div>
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
