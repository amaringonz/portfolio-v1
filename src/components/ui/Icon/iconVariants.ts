import { cva } from 'class-variance-authority';

const iconVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-foreground',
      secondary: 'text-foreground-secondary',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export { iconVariants };
