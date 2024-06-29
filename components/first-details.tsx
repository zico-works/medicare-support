'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStepDetails } from '@/contexts/step-details-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from './button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

const formSchema = z.object({
  fullname: z.string().regex(/^[\s'A-Za-z-]{4,50}$/, {
    message: 'Specify your full name',
  }),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Please Enter a valid email address',
    })
    .min(5),
  address: z.string().min(8, {
    message: 'Please Enter a valid address',
  }),
});

export default function FirstDetails() {
  const { activeDetailsComponent, setActiveDetailsComponent } =
    useStepDetails();
  const { formData, setFormData } = useFormData();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      address: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({ ...formData, ...values });

    form.reset();
    setActiveDetailsComponent(activeDetailsComponent + 1);
  }

  return (
    <div className='mx-auto mt-5 max-w-lg rounded-2xl border-[1.5px] border-solid border-tint-200 p-5'>
      <Form {...form}>
        <form
          className='space-y-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    {...field}
                    placeholder='Enter your full name'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your email'
                    type='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your address'
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
