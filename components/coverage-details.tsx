'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStep } from '@/contexts/step-context';
import { useStepDetails } from '@/contexts/step-details-context';
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
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const formSchema = z.object({
  coverage: z.enum(['individual', 'family'], {
    required_error: 'You need to select one of the options',
  }),
  estimate: z.string().optional(),
});

export default function CoverageDetails() {
  const { formData, setFormData } = useFormData();
  const { activeDetailsComponent, setActiveDetailsComponent } =
    useStepDetails();
  const { activeComponent, setActiveComponent } = useStep();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      estimate: '',
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
            name='coverage'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>
                  Are you looking for Individual or Family Coverage?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className='flex items-center gap-9'
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='individual' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Individual
                      </FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='family' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Family
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='estimate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Estimated Household Income for 2023
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter estimated income'
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
