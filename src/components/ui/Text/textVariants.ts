import { cva } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
    size: {
      'xs': 'text-xs tracking-wide',
      'sm': 'text-sm tracking-widest',
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
      semibold: 'font-semibold',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
    },
    variant: {
      primary: 'text-foreground',
      secondary: 'text-foreground-secondary',
    },
    letterSpacing: {
      normal: 'tracking-normal',
      tight: 'tracking-tight',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'primary',
    overflow: 'ellipsis',
  },
});

export { textVariants };
