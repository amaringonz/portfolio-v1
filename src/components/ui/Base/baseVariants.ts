import { cva } from 'class-variance-authority';

const baseVariants = cva('', {
  variants: {
    display: {
      'block': 'block',
      'flex': 'flex',
      'flex-col': 'flex flex-col',
    },
    gap: {
      0: 'gap-0',
      2: 'gap-2',
      4: 'gap-4',
      8: 'gap-8',
    },
  },
  defaultVariants: {
    display: 'block',
    gap: 2,
  },
});

export { baseVariants };
