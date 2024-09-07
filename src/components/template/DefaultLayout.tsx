import { Footer, Header, Main } from '@/components/template';
import type { ChildrenProps } from '@/types';

const DefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
};

export { DefaultLayout };
