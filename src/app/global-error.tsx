'use client';

import NextError from 'next/error';
import { useEffect } from 'react';

const GlobalError = ({ error, params }: { error: Error & { digest?: string }; params: { locale: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang={params.locale}>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
};

export default GlobalError;
