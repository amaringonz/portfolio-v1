import type { ChildrenProps } from '@/types';

const Main = ({ children }: ChildrenProps) => {
  return (
    <main>
      {children}
    </main>
  );
};

export { Main };
