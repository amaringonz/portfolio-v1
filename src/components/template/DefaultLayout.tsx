import { BackgroundInteractive, Footer, Header, Main } from '@/components/template';
import { Base } from '@/components/ui';
import type { ChildrenProps } from '@/types';

const DefaultLayout = ({ children }: ChildrenProps) => {
  return (
    <Base className="relative">
      <BackgroundInteractive />
      <Base className="mx-auto flex max-w-screen-xl flex-col px-6 py-12 lg:flex-row lg:py-0" gap={4}>
        <Header />
        <Main>
          {children}
          <Footer />
        </Main>
      </Base>
    </Base>
  );
};

export { DefaultLayout };
