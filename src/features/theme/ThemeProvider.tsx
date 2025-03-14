'use client';

import { useEffect, useState, FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
