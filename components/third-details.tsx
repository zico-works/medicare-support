'use client';

import { useFormData } from '@/contexts/form-data-context';
import { useStepDetails } from '@/contexts/step-details-context';
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DayPickerProvider } from 'react-day-picker';
import { useForm } from 'react-hook-form';
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
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

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
                    required={form.getValues().married === 'yes'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='spouseDOB'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Spouse Date of Birth</FormLabel>
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
                    <DayPickerProvider initialProps={{}}>
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
                    </DayPickerProvider>
                  </PopoverContent>
                </Popover>
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
