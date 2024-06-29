'use client';

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
import { useFormData } from '@/contexts/form-data-context';
import { useStep } from '@/contexts/step-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import PrevBtn from './prev-btn';

const items = [
  {
    id: 'Aetna',
    label: 'Aetna',
  },
  {
    id: 'BCBS',
    label: 'BCBS',
  },
  {
    id: 'Cigna',
    label: 'Cigna',
  },
  {
    id: 'Oscar',
    label: 'Oscar',
  },
  {
    id: 'Ambetter',
    label: 'Ambetter',
  },
  {
    id: 'CareSource',
    label: 'CareSource',
  },
  {
    id: 'Molina',
    label: 'Molina',
  },
  {
    id: 'United Healthcare',
    label: 'United Healthcare',
  },
] as const;

const FormSchema = z.object({
  carrierSelection: z
    .array(z.string())
    .refine((value) => value.some(Boolean), {
      message: 'You have to select at least one item.',
    }),
});

export default function CarrierSelection() {
  const { activeComponent, setActiveComponent } = useStep();
  const { formData, setFormData } = useFormData();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      carrierSelection: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setFormData({ ...formData, ...data });

    form.reset();
    setActiveComponent(activeComponent + 1);
  }

  return (
    <div className='mx-auto mt-5 w-full max-w-[540px] rounded-2xl border-[1.5px] border-solid border-tint-200 p-4 sm:p-5'>
      <div>
        <PrevBtn
          handleClick={() => setActiveComponent(activeComponent - 1)}
        />
      </div>
      <Form {...form}>
        <form
          className='space-y-8'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='carrierSelection'
            render={() => (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel className='text-lg font-medium text-primary-400'>
                    Pick Your Carrier
                  </FormLabel>
                </div>
                <div className='grid grid-cols-3 gap-x-2 gap-y-4 text-tint-300 sm:gap-x-5'>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='carrierSelection'
                      render={({ field }) => (
                        <FormItem
                          key={item.id}
                          className='flex flex-row items-center space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) =>
                                checked
                                  ? field.onChange([
                                      ...field.value,
                                      item.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    )
                              }
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
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
