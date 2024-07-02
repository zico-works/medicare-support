import * as React from 'react';
import { cn } from '@/utils/cn';

export const buttonVariants = {};

type Props = {
  className?: string;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Props {
  asChild?: boolean;
}

const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={cn(
      'focus:bg-primary/80 py-2 px-6 transition-all duration-300 active:bg-primary/80 hover:!text-white hover:bg-primary/80 rounded-lg bg-primary !text-white text-xl font-medium',
      className,
    )}
    {...props}
  />
);

export default Button;
