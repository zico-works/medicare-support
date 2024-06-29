import * as React from 'react';
import { cn } from '@/utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-tint-100 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-tint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tint-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  dark:placeholder:text-tint-300 dark:focus-visible:ring-tint-100',
        className,
      )}
      type={type}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

export { Input };
