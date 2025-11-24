'use client';

import { useEffect, useState, FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    document.documentElement.classList.add('theme-transition');
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
