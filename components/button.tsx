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
      'focus:bg-primary py-2 px-6 active:bg-primary rounded-lg bg-primary text-white text-lg font-medium',
      className,
    )}
    {...props}
  />
);

export default Button;
