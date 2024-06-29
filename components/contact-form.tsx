'use client';

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
import { Textarea } from './ui/textarea';

const formSchema = z
  .object({
    fullname: z.string().regex(/^[\s'A-Za-z-]{4,50}$/, {
      message: 'Specify your full name',
    }),
    email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'Please Enter a valid email address',
      })
      .min(5),
    agreement: z.boolean().optional(),
    number: z
      .string()
      .min(6, 'Please enter your mobile number')
      .refine(
        (value) => {
          // Regular expression to match common phone number formats
          const phoneNumberRegex =
            /^\+?(\d{1,3})?[ .-]?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/;

          return phoneNumberRegex.test(value);
        },
        {
          message: 'Please enter a valid phone number',
          path: ['number'],
        },
      ),
    how: z.string().optional(),
    howType: z.enum(['linkedin', 'facebook', 'instagram', 'others']),
    message: z.string(),
  })
  .refine(
    (data) => {
      if (data.howType && data.how) {
        return data.howType === data.how.toLowerCase();
      }

      return true;
    },
    {
      message: 'Please, select an option',
      path: ['howType'],
    },
  );

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      number: '',
      howType: undefined,
      agreement: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('sign in');
    const { agreement, email, fullname, howType, number } = values;

    const data = {
      full_name: fullname,
      email,
      number,
      how: howType,
      agreement,
      message: '',
    };

    console.log(values);

    if (agreement) {
      const data = { email };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      fetch('/api/newsletter', options)
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('/api/course', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error(error);
      });

    form.reset();
  }

  return (
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
                  placeholder='olivia damilola'
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
                  placeholder='olivia@untitledui.com'
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
          name='number'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  placeholder='Phone Number*'
                  type='number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='mb-4'>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  placeholder='Please write a message...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className='flex items-center justify-center gap-3'
          type='submit'
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
