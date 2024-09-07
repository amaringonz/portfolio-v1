import type { ChildrenProps } from '@/types';

const Main = ({ children }: ChildrenProps) => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      {children}
    </main>
  );
};

export { Main };
