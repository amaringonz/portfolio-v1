import { cva } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    size: {
      'base': 'text-base',
      'lg': 'text-lg tracking-tight sm:text-xl',
      '4xl': 'text-4xl tracking-tight sm:text-5xl',
    },
    overflow: {
      ellipsis: 'overflow-ellipsis',
      clip: 'overflow-clip',
      truncate: 'truncate',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    variant: {
      primary: 'text-foreground',
      secondary: 'text-foreground-secondary',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'primary',
    overflow: 'ellipsis',
  },
});

export { textVariants };
