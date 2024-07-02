'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStep } from '@/contexts/step-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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

const formSchema = z.object({
  householdNumber: z.string().min(1, {
    message: 'Please enter a household number',
  }),
  householdAges: z.string().min(1, {
    message: 'Please enter a household age',
  }),
});

export default function HouseholdInformation() {
  const { activeComponent, setActiveComponent } = useStep();
  const { formData, setFormData } = useFormData();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      householdAges: '',
      householdNumber: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData({ ...formData, ...values });

    form.reset();
    setActiveComponent(activeComponent + 1);
  }

  return (
    <div className='mx-auto mt-5 max-w-lg rounded-2xl border-[1.5px] border-solid border-tint-200 p-5'>
      <div>
        <PrevBtn
          handleClick={() => setActiveComponent(activeComponent - 1)}
        />
      </div>

      <Form {...form}>
        <form
          className='space-y-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='householdNumber'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  How many household members do you claim on your
                  taxes?
                </FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    {...field}
                    placeholder='Enter number'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='householdAges'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many household members do you claim on your
                  taxes?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Add ages'
                    type='number'
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
