import { cva } from 'class-variance-authority';

const baseVariants = cva('', {
  variants: {
    display: {
      'block': 'block',
      'flex': 'flex',
      'flex-col': 'flex flex-col',
    },
    wrap: {
      true: 'flex-wrap',
    },
    gap: {
      0: 'gap-0',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      12: 'gap-12',
      16: 'gap-16',
    },
    center: {
      true: 'items-center justify-center',
    },
    items: {
      center: 'items-center',
    },
    justify: {
      center: 'justify-center',
    },
  },
  defaultVariants: {
    display: 'block',
    gap: 2,
  },
});

export { baseVariants };
