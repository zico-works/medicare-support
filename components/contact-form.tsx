'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
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
  number: z.string().min(5, {
    message: 'Phone number must be valid number',
  }),
  message: z
    .string()
    .min(10, {
      message: 'message must be at least 10 characters.',
    })
    .max(560, {
      message: 'Bio must not be longer than 560 characters.',
    }),
});

export function ContactForm() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      number: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>, e: any) {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    const { email, fullname, message, number } = values;

    const template = {
      name: fullname,
      email,
      number,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        template,
        process.env.NEXT_PUBLIC_KEY!,
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.reset();
          setTimeout(() => {
            setSuccess(false);
            setError(false);
          }, 4000);
        },
        () => {
          setTimeout(() => {
            setError(false);
          }, 4000);
          setError(true);
          setSuccess(false);
        },
      );

    const sheet = {
      Name: fullname,
      Email: email,
      Phone: number,
      Message: message,
    };

    axios
      .post(
        'https://sheet.best/api/sheets/9247c900-fd2f-45b0-bf33-12bdc2c1a3cd',
        sheet,
      )
      .then(() => {
        setSuccess(true);
        setError(false);
        form.reset();
        setTimeout(() => {
          setSuccess(false);
          setError(false);
        }, 4000);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
        setTimeout(() => {
          setError(false);
        }, 4000);
        setError(true);
        setSuccess(false);
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
                  placeholder='olivia@untitled.com'
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
            <FormItem className='w-full'>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <div className='flex h-11 items-center rounded-lg border border-solid border-tint-200 pl-4 !text-[#101010]'>
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

        <div>
          {success && (
            <p className='text-green-600'>
              Your message has been sent Successfully.
            </p>
          )}
          {error && (
            <p className='text-red-500'>
              Some error occurred. Please send me a direct message
              using the email
            </p>
          )}
        </div>
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
