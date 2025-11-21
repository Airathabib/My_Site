'use client';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import styles from './ThemeSwther.module.scss';

const ThemeSwither: FC<PropsWithChildren> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleThemeChange = () => {
      document.documentElement.classList.add('theme-transition');
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);
    };

    handleThemeChange();
  }, [theme]);

  return (
    <div className={styles.Wrapper}>
      <button
        className={styles.WrapperSwitchBtn}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <BsSun className={styles.WrapperSwitchIcon} />
        ) : (
          <FiMoon className={styles.WrapperSwitchIcon} />
        )}
      </button>
      {children}
    </div>
  );
};

export default ThemeSwither;
