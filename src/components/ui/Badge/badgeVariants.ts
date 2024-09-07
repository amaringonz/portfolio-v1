import { cva } from 'class-variance-authority';

const badgeVariants = cva('flex items-center text-nowrap rounded-full px-3 py-1 text-xs font-medium leading-5', {
  variants: {
    variant: {
      primary: 'bg-primary/20 text-primary-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export { badgeVariants };
