import { DefaultLayout } from '@/components/template';
import type { LayoutProps } from '@/types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
};

export default Layout;
