import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Next.js App' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>{children}</div>
  </>
);

export default Layout;